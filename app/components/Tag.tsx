import React from "react";

interface TagProps {
  tag: string;
  color: string;
}
const Tag: React.FC<TagProps> = ({ tag, color }) => {
  switch (tag) {
    case "e-commerce":
      color = "bg-bc-red";
      break;

    case "UX":
      color = "bg-bc-yellow";
      break;

    case "Shopify":
      color = "bg-bc-beige";

    default:
      // code block
      color = "bg-bc-lightblue";
  }

  return (
    <div className="transition hover:scale-105">
      <div className={`${color} m-0 rounded-full p-3 text-[12px] leading-none`}>
        {tag}
      </div>
    </div>
  );
};

export default Tag;
