"use client";
import Link from "next/link";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import { start } from "repl";

const floatingAnimation1 = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    delay: 0.5,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

const floatingAnimation2 = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    delay: 1,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

function HeroSection() {
  return (
    <div
      id="hero"
      className="flex flex-col-reverse justify-between gap-x-5 py-10 md:flex-row md:py-20"
    >
      <div id="hero-left" className="flex flex-col md:max-w-[50%]">
        <div className="flex flex-col items-center gap-y-6 md:items-start">
          <h1 className="text-center text-4xl font-bold md:text-left md:text-4xl lg:text-5xl lg:leading-tight">
            We help build profitable
            <br />
            <span className="text-bc-red">E-Commerce </span>
            engines
          </h1>

          <h2 className="max-w-[75%] text-center text-base font-medium md:text-left xl:text-xl">
            Managed performance marketing, <br />
            conversion-rate optimisation and Shopify development for small
            businesses.
          </h2>
          <button className="transition hover:scale-105">
            <Link href={"/contact"}>Check Your E-Commerce Site Health</Link>
          </button>
        </div>

        <div className="mt-auto self-center justify-self-end py-5 md:self-start">
          <h4 className="mb-4 hidden font-medium md:block md:text-xl">
            A Member of:
          </h4>
          <Image
            alt="shopify"
            src="/shopify_plus.svg"
            width={200}
            height={80}
          />
        </div>
      </div>

      <div id="hero-right" className="flex justify-center">
        <div className="relative hidden md:block">
          <Image
            className="max-h-[500px] w-full"
            alt="hero-ecommerce"
            src={
              "https://res.cloudinary.com/dl3rdpbpw/image/upload/v1721301969/hero-img.png"
            }
            width={500}
            height={500}
          />

          <motion.div
            className="absolute left-[-150px] top-[40%]"
            animate={floatingAnimation1}
          >
            <Image
              src={"/floater1.webp"}
              width={300}
              height={100}
              alt="floater-1"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-[-120px]"
            animate={floatingAnimation2}
          >
            <Image
              src={"/floater2.webp"}
              width={300}
              height={100}
              alt="floater-1"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
