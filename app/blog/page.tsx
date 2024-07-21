import Link from "next/link";

import Posts from "../components/Posts";
import { getPostsMeta } from "../lib/posts";
import Tag from "../components/Tag";

export const revalidate = 10;

async function Blog() {
  const posts = await getPostsMeta(); //deduped!

  console.log(posts);

  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;

  const tags = new Set(posts.map((post) => post.tags).flat());

  // console.log(tags);

  const tagList = Array.from(tags).map((tag) => tag);

  console.log(tagList);

  // throw new Error('not today!')
  return (
    <div className="py-6 md:py-10">
      <header className="py-6 md:py-10">
        <h1 className="mb-2 text-center text-3xl font-semibold md:mb-8 md:text-5xl">
          Our Blog
        </h1>
        <h2 className="text-center text-sm md:text-xl">
          No Fluff. Useful insights to help you run your e-commerce store
        </h2>
      </header>
      <div className="mx-auto mb-6 flex w-fit items-center gap-5">
        <span>Filter: </span>
        <div className="flex flex-wrap gap-4">
          {tagList.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`} className="">
              <Tag color="bg-bc-lightblue" tag={tag}></Tag>
            </Link>
          ))}
        </div>
      </div>

      <Posts />
    </div>
  );
}

export default Blog;
