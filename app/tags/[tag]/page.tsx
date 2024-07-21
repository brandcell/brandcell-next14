import { getPostsMeta } from "@/app/lib/posts";

import Link from "next/link";
import BlogItem from "@/app/components/BlogItem";
import Tag from "@/app/components/Tag";

export const revalidate = 10;

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  //get tags from existing blog post , an array of arrays
  //set removes duplicates

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta(); //deduped!

  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;

  const tagPosts = posts.filter((post) => post?.tags?.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <div className="mb-5 mt-10 flex w-fit items-center gap-4">
        <h2 className="text-2xl font-semibold">Filtered By:</h2>
        <Tag tag={tag} color="bg-bc-lightblue"></Tag>
      </div>

      <section className="mx-auto mb-4">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tagPosts.map((post) => (
            <BlogItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
