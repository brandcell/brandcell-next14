import React from "react";
import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  src,
  alt,
  caption,
}) => {
  return (
    <figure className="relative flex flex-col items-center">
      <Image fill src={src} alt={alt} className="h-auto max-w-full" />
      <figcaption className="mt-2 text-sm text-gray-600">{caption}</figcaption>
    </figure>
  );
};

export default ImageWithCaption;
