import Image from "next/image";
import Link from "next/link";
import Posts from "./components/Posts";
import Services from "./components/Services";

export const revalidate = 10;

export default function Home() {
  return (
    <div className="home-page">
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
            <button>
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

            <div className="absolute top-0">
              <Image
                src={"/floater1.webp"}
                width={300}
                height={100}
                alt="floater-1"
              />
            </div>

            <div className="absolute top-14">
              <Image
                src={"/floater2.webp"}
                width={300}
                height={100}
                alt="floater-1"
              />
            </div>
          </div>
        </div>
      </div>

      <Services />

      <section
        id="frustration-section"
        className="flex flex-col justify-between gap-10 py-20 md:flex-row"
      >
        <h2 className="text-center text-3xl font-semibold leading-snug md:hidden md:text-right md:text-5xl">
          <span className="text-bc-darkblue">Feeling Uncertain</span> About
          Marketing?
        </h2>

        <div id="frustration-left" className="xl:max-w-[50%]">
          <div className="frustration-grid grid place-items-center gap-4 xl:grid-cols-2">
            {questions.map((question) => (
              <div
                key={question.title}
                className={`question-cards ${question.bgColor} max-w-[300px] rounded-2xl p-10 ${question.textColor} text-center font-semibold`}
              >
                <h2 className="text-4xl">{question.title}</h2>
                <h3 className="text-2xl">{question.question}</h3>
              </div>
            ))}
          </div>
        </div>

        <div
          id="frustration-right"
          className="flex flex-col items-center gap-y-8 md:max-w-[40%] md:items-start"
        >
          <h2 className="hidden text-center text-3xl font-semibold leading-snug md:block md:text-4xl">
            <span className="text-bc-darkblue">Why does</span> marketing feel
            so..random?
          </h2>

          <h3 className="text-center md:text-left">
            There are so many things to invest in, but you are never quite sure
            if it is worth it. For a small company, resources are limited. You
            can't afford to waste money, period.
          </h3>

          <h3 className="text-center md:text-left">
            If this sounds like you, hear us out: It doesn't have to be this
            way.
          </h3>

          {/* <button>Reach Out</button> */}
        </div>
      </section>

      <section
        id="step-by-step"
        className="mb-[60px] rounded-3xl bg-bc-beige px-14 py-12 md:py-20"
      >
        <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">
          The BluePrint To Success
        </h2>

        <div className="mx-auto grid max-w-[300px] place-items-start gap-8 sm:max-w-full sm:grid-cols-3">
          {processSteps.map((step) => (
            <div
              className="flex flex-col items-center justify-center gap-y-4 md:gap-y-9"
              key={step.title}
            >
              <Image alt={step.url} src={step.url} width={90} height={90} />
              <h3 className="max-w-[280px] text-center text-xl font-semibold md:h-[20px]">
                {step.title}
              </h3>
              <h4 className="text-center">{step.para}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mb-6 flex flex-row items-center justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">Our Insights</h2>

          <Link href={"/blog"}>
            <button>All Articles</button>
          </Link>
        </div>
        <Posts numberToShow={3} />
      </section>

      {/* 
      <section id="how-we-can-help">

        <div></div>

        <div>

        </div>

      </section> */}
    </div>
  );
}

//data for page

const questions = [
  {
    title: "?",
    question: "I Should Launch on Tiktok..",
    bgColor: "bg-bc-darkblue",
    textColor: "text-white",
  },
  {
    title: "??",
    question: "Why Is My Web Traffic Slowing?",
    bgColor: "bg-bc-lightblue",
    textColor: "text-bc-red",
  },
  {
    title: "???",
    question: "Should I Buy Ads on FB or Google?",
    bgColor: "bg-bc-yellow",
    textColor: "text-bc-darkblue",
  },
];

const processSteps = [
  {
    url: "/number_1.svg",
    title: "Discover",
    para: "Understand business needs and set measurable goals.",
  },
  {
    url: "/number2_.svg",
    title: "Plan",
    para: "Prioritise the most important marketing objectives.",
  },
  {
    url: "/number_3.svg",
    title: "Monitor",
    para: "Analyse progress towards the objectives",
  },
];
