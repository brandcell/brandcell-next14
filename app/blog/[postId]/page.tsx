import getFormattedDate from "@/app/lib/getFormattedDate"
import { getPostsMeta, getPostByName } from "@/app/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import 'highlight.js/styles/github-dark.css'
import Image from "next/image"

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
        <div className="relative">
            <div className="bg-purple-100 h-[50vh] absolute top-0 left-0 w-full"></div>

            <div className="pt-20 relative prose mx-auto flex flex-col items-center">

                <h1 className="text-5xl mb-6 text-center mt-4  font-bold">{meta.title}</h1>

                <div className="flex flex-row gap-4">

                    <p className="mt-0 text-sm">
                        By <span className="font-bold">{meta.author}</span>

                    </p>


                    <p className="mt-0 text-sm">
                        {pubDate}
                    </p>

                    <p className="mt-0 text-sm">
                        {meta.minuteRead} Minute Read
                    </p>
                </div>


                <Image className="rounded-xl w-full" width={500} height={300} alt={`blog-${meta.id}-cover`} src={meta.cover} />

                <article>
                    {content}
                </article>
            </div>

            <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">
                    {tags}
                </div>
            </section>

        </div>
    )
}