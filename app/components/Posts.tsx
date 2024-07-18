import { getPostsMeta } from "../lib/posts"
import BlogItem from "./BlogItem"


export default async function Posts() {

    //no need to await as this is on the server, not external API

    const posts = await getPostsMeta()

    if (!posts) {
        return <p className="mt-10 text-center">Sorry, no posts available</p>
    }


    return (
        <section>
            <ul className="w-full list-none">
                {posts.map((post) => (
                    <BlogItem key={post.id} post={post} />
                ))}

            </ul>


        </section>
    )
}
