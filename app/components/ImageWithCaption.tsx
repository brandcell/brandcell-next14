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
    <figure className="flex flex-col items-center">
      <Image
        objectFit="contain"
        width={400}
        height={400}
        quality={100}
        className="w-full"
        src={src}
        alt={alt}
      />

      <figcaption className="mt-2 text-sm italic text-gray-600">
        {caption}
      </figcaption>
    </figure>
  );
};

export default ImageWithCaption;
