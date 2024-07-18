import getFormattedDate from "@/app/lib/getFormattedDate"
import { getPostsMeta, getPostByName } from "@/app/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import 'highlight.js/styles/github-dark.css'

//like setting cache to no cache 

export const revalidate = 10

type Props = {
    params: {
        postId: string
    }
}


export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped

    if (!posts) return []

    return posts.map(post => ({
        postId: post.id
    }))
}



export async function generateMetadata({ params: { postId } }: Props) {

    const post = await getPostByName(`${postId}.mdx`) //deduped!

    //Metadata: see if the post matched the param, if no then just return the error 404 not found

    if (!post) {
        return {
            title: 'Post Not Found!'
        }
    }

    return { title: post.meta.title }

}

//there is a params object it is an object {params:postId}, we destructure the post id out of the params object

export default async function Post({ params: { postId } }: Props) {

    const post = await getPostByName(`${postId}.mdx`) //deduped!

    //see if the post matched the param, if no then just return the error 404 not found

    if (!post) notFound()

    const { meta, content } = post

    const pubDate = getFormattedDate(meta.date)

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))


    return (
        <>
            <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
            <p className="mt-0 text-sm">
                {pubDate}
            </p>
            <article>
                {content}
            </article>
            <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">
                    {tags}
                </div>
            </section>

        </>
    )
}