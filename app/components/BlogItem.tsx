import Link from "next/link"

import getFormattedDate from "../lib/getFormattedDate"


type Props = {
    post: Meta
}

export default function BlogItem({ post }: Props) {

    const { id, title, date } = post

    const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-4 text-2xl text-black">
            <Link className="underline hover:text-bc-darkblue" href={`/blog/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}