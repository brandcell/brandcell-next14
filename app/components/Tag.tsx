import Link from "next/link";
import React from "react";

function Tag({ tag, color }) {
  switch (tag) {
    case "e-commmerce":
      color = "bg-bc-red";
      break;

    case "UI/UX":
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
}

export default Tag;
