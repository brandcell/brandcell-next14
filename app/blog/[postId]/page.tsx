import getFormattedDate from "@/app/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import Image from "next/image";
import Tag from "@/app/components/Tag";
import { describe } from "node:test";
import Posts from "@/app/components/Posts";

//like setting cache to no cache

export const revalidate = 10;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  //Metadata: see if the post matched the param, if no then just return the error 404 not found

  if (!post) {
    return {
      title: "Post Not Found!",
      description: "The page you are looking for does not exist!",
    };
  }

  return {
    openGraph: {
      title: post.meta.title,
      description: `This is the blog for ${post.meta.title}`,
      images: [post.meta.cover],
    },
  };
}

//there is a params object it is an object {params:postId}, we destructure the post id out of the params object

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  //see if the post matched the param, if no then just return the error 404 not found

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags;

  return (
    <>
      <div className="relative flex flex-col items-center gap-6 pt-20">
        <div className="absolute left-0 top-0 -z-10 h-[calc(100%-17vw)] w-full bg-purple-100"></div>

        <h1 className="mb-6 mt-4 max-w-[90vw] text-center text-3xl font-bold lg:max-w-[50%] lg:text-5xl">
          {meta.title}
        </h1>

        <div className="flex flex-row gap-4">
          <p className="mt-0 text-sm">
            By <span className="font-bold">{meta.author}</span>
          </p>

          <p className="mt-0 text-sm">{pubDate}</p>

          <p className="mt-0 text-sm">{meta.minuteRead} Minute Read</p>
        </div>

        <div className="mx-auto mb-6 flex w-fit items-center gap-5">
          <div className="flex flex-wrap gap-4">
            {tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`} className="">
                <Tag color="bg-bc-lightblue" tag={tag}></Tag>
              </Link>
            ))}
          </div>
        </div>

        <Image
          className="height-[50vh] mx-auto w-full rounded-xl lg:max-w-[50vw]"
          width={500}
          height={300}
          quality={100}
          priority
          alt={`blog-${meta.id}-cover`}
          src={meta.cover}
        />
      </div>

      <div className="pb-20">
        <div className="prose relative mx-auto">
          <article>{content}</article>
        </div>
      </div>
      <section className="pb-20">
        <div className="mb-6 flex flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Continue Reading
          </h2>

          <Link href={"/blog"}>
            <button className="transition hover:scale-105">All Articles</button>
          </Link>
        </div>
        <Posts numberToShow={3} />
      </section>
    </>
  );
}
