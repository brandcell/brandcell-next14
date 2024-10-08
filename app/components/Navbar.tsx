"use client";

// import { slide as Menu } from "react-burger-menu";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuOpen]);

  return (
    <div className="relative top-0 z-40 mx-auto flex max-w-screen-xl items-center justify-between rounded-3xl p-4 shadow-xl">
      <div className="flex items-end">
        <Link href={"/"}>
          <Image
            alt="brandcell-logo"
            src={"/brandcell.png"}
            width={155}
            height={31}
          />
        </Link>
        <ul className="ml-12 hidden gap-5 sm:flex">
          <Link className="transition-all hover:underline" href="/#services">
            Services
          </Link>
          <Link className="transition-all hover:underline" href="/blog">
            Blog
          </Link>
          {/* <Link href='/users'>Users Page</Link> */}
        </ul>
      </div>

      <AiOutlineMenu
        onClick={handleNav}
        cursor-pointer
        size={25}
        className="sm:hidden"
      ></AiOutlineMenu>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={
          menuOpen
            ? "fixed right-0 top-0 h-screen w-[65%] bg-slate-50 p-10 shadow-xl duration-500 ease-in-out sm:hidden"
            : "fixed right-[-100%] top-0 h-screen w-[65%] p-10 duration-500 ease-out"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div className="" onClick={handleNav}>
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="py-4">
          <ul className="flex flex-col gap-4">
            <Link href="/">
              <li onClick={() => setMenuOpen(false)}>Home</li>
            </Link>
            <Link href="/blog">
              <li onClick={() => setMenuOpen(false)}>Blog</li>
            </Link>
            {/* <Link href="/">
              <li onClick={() => setMenuOpen(false)}>Contact Us</li>
            </Link> */}
          </ul>
        </div>

        <button className="transition hover:scale-105">
          <Link href={"/contact"}>Get Free Site Audit</Link>
        </button>
      </div>

      <button className="hidden transition hover:scale-105 sm:block">
        <Link href={"/contact"}>Get Free Site Audit</Link>
      </button>
    </div>
  );
}

export default Navbar;
