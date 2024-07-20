import Link from "next/link";
import Image from "next/image";

import getFormattedDate from "../lib/getFormattedDate";
import Tag from "./Tag";

type Props = {
  post: Meta;
};

export default function BlogItem({ post }: Props) {
  const { id, title, date, author, cover, tags } = post;

  const formattedDate = getFormattedDate(date);

  return (
    <div className="flex flex-grow rounded-[24px] border-[1px] p-2 text-2xl font-medium text-black transition hover:scale-[102%]">
      <Link className="" href={`/blog/${id}`}>
        <div className="relative w-full">
          <Image
            className="h-full rounded-[17px] object-cover"
            layout="responsive"
            width={500}
            height={200}
            alt={`blog-${id}-cover`}
            src={cover}
          />
        </div>

        <div className="flex flex-col gap-6 p-4">
          <h1 className="text-2xl">{title}</h1>

          <div className="flex flex-wrap gap-x-4">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} color={"bc-red"}></Tag>
            ))}
          </div>

          <p className="text-sm">Read Now</p>
          <div>
            <hr className="mb-[10px]" />
            <div className="flex gap-2 text-[12px] tracking-[-0.14px] text-bc-darkgray">
              <p className="font-bold">{author}</p>●
              <p className="text-[12px]">{formattedDate}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
