import Image from "next/image";
import Link from "next/link";
import Posts from "./components/Posts";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import VideoOnView from "./components/VideoOnView";

export const revalidate = 10;

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <Services />

      <section
        id="frustration-section"
        className="flex flex-col justify-between gap-10 py-20 md:flex-row"
      >
        <h2 className="text-center text-3xl font-semibold leading-snug md:hidden md:text-right md:text-5xl">
          <span className="text-bc-darkblue">Feeling Uncertain</span> About
          Marketing?
        </h2>

        {/* <Link href={"/"}>Bugs Test</Link> */}

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
        className="mb-[60px] rounded-3xl py-12 md:px-14 md:py-20"
      >
        <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">
          The BluePrint To Success
        </h2>

        <VideoOnView src="/process-vid.mp4" />

        {/* <div className="circle-container">
          <svg
            className="large-circle"
            width="603"
            height="602"
            viewBox="0 0 603 602"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="301.109"
              cy="301"
              r="299.5"
              stroke="#78B5FF"
              stroke-opacity="0.2"
              stroke-width="3"
              stroke-linecap="round"
              stroke-dasharray="12 12"
            />
          </svg>

          <svg
            className="small-circle"
            width="300"
            height="300"
            viewBox="0 0 514 513"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="256.609"
              cy="256.5"
              r="255"
              stroke="#78B5FF"
              stroke-opacity="0.4"
              stroke-width="3"
              stroke-dasharray="12 12"
            />
          </svg>
        </div> */}

        {/* <div className="mx-auto grid max-w-[300px] place-items-start gap-8 sm:max-w-full sm:grid-cols-3">
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
        </div> */}
      </section>

      <section className="pb-20">
        <div className="mb-6 flex flex-row items-center justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Tips and Tricks
          </h2>

          <Link href={"/blog"}>
            <button className="transition hover:scale-105">All Articles</button>
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
