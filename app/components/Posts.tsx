import { getPostsMeta } from "../lib/posts";
import BlogItem from "./BlogItem";

// Define the type for the props
type PostsProps = {
  numberToShow?: number;
  // filterUrl: any; // Make the prop optional
};

export default async function Posts({ numberToShow }: PostsProps) {
  // Fetch the posts metadata
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>;
  }

  // Determine the number of posts to show
  let postsToShow = numberToShow ? posts.slice(0, numberToShow) : posts;

  return (
    <section>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {postsToShow.map((post) => (
          <BlogItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
