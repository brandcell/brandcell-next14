import Link from "next/link"
import Image from "next/image"

import getFormattedDate from "../lib/getFormattedDate"


type Props = {
    post: Meta
}

export default function BlogItem({ post }: Props) {

    const { id, title, date, author, cover } = post

    const formattedDate = getFormattedDate(date)

    return (
        <div className="mt-4 text-2xl font-medium text-black rounded-[24px] border-[1px] p-2 ">
            <Link href={`/blog/${id}`}>

                <div className="h-[290px] relative w-full"><Image className=" h-full object-cover rounded-[17px]" layout="responsive" width={500} height={200} alt={`blog-${id}-cover`} src={cover} /></div>


                <div className="p-4 flex flex-col gap-6">
                    <h1 className="text-2xl">{title}</h1>

                    <p className="text-sm">Read Now</p>
                    <div>
                        <hr className="mb-[10px]" />
                        <div className="flex text-[12px] gap-2 text-bc-darkgray tracking-[-0.14px]">
                            <p className="font-bold">{author}</p>

                            ●

                            <p className="text-[12px]">{formattedDate}</p>
                        </div>
                    </div>






                </div>

            </Link>



        </div>
    )
}