import Link from "next/link";

import Posts from "../components/Posts";

export const revalidate = 10;

async function Blog() {
  // throw new Error('not today!')
  return (
    <div className="py-10">
      <header className="py-10">
        <h1 className="mb-8 text-center text-5xl font-semibold">Our Blog</h1>
        <h2 className="text-center text-xl">
          No Fluff. Useful insights to help you run your e-commerce store
        </h2>
      </header>

      <Posts />
    </div>
  );
}

export default Blog;
