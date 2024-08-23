"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import getFormattedDate from "../lib/getFormattedDate";
import Tag from "./Tag";

type Props = {
  post: Meta;
};

export default function BlogItem({ post }: Props) {
  const router = useRouter();
  const { id, title, date, author, cover, tags } = post;

  const formattedDate = getFormattedDate(date);

  return (
    <div
      onClick={() => {
        router.push(`/blog/${post.id}`);
      }}
      className="row-span-5 grid grid-rows-subgrid rounded-[24px] border-[1px] p-2 text-2xl font-medium text-black transition hover:scale-[102%] hover:cursor-pointer"
    >
      <div className="relative w-full">
        <Image
          className="rounded-[17px] object-cover"
          layout="responsive"
          width={500}
          height={200}
          alt={`blog-${id}-cover`}
          src={cover}
        />
      </div>

      <h1 className="px-4 text-2xl">{title}</h1>

      <div className="flex flex-wrap gap-x-4 px-4">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} color={"bc-red"}></Tag>
        ))}
      </div>

      <p className="px-4 text-sm">Read Now</p>
      <div>
        <hr className="p-2" />
        <div className="flex gap-2 px-4 text-[12px] tracking-[-0.14px] text-bc-darkgray">
          <p className="font-bold">{author}</p>●
          <p className="text-[12px]">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}
