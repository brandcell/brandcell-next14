import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="relative top-0 z-40 mx-auto flex max-w-screen-xl items-center justify-between p-4">
      <div className="flex items-end">
        <Link href={"/"}>
          {" "}
          <Image
            alt="brandcell-logo"
            src={"/brandcell.png"}
            width={155}
            height={31}
          />
        </Link>
        <ul className="ml-12 hidden gap-5 sm:flex">
          <Link href="/about">About Page</Link>
          <Link href="/blog">Blog Page</Link>
          {/* <Link href='/users'>Users Page</Link> */}
        </ul>
      </div>

      <button className="hidden sm:block">Get Free Site Audit</button>
    </div>
  );
}

export default Navbar;
