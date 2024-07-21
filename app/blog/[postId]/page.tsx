import getFormattedDate from "@/app/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import Image from "next/image";
import Tag from "@/app/components/Tag";

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
    };
  }

  return { title: post.meta.title };
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
    <div className="relative">
      <div className="absolute left-0 top-0 h-[70vh] w-full bg-purple-100"></div>

      <div className="prose relative mx-auto flex flex-col items-center pt-20">
        <h1 className="mb-6 mt-4 text-center text-5xl font-bold">
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
          className="w-full rounded-xl"
          width={500}
          height={300}
          quality={100}
          priority
          alt={`blog-${meta.id}-cover`}
          src={meta.cover}
        />

        <article>{content}</article>
      </div>
    </div>
  );
}
