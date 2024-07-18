import Image from "next/image";
import Link from "next/link";
import Posts from "./components/Posts";
import Services from "./components/Services";


export const revalidate = 10

export default function Home() {

  return (
    <div className="home-page">

      <div id="hero" className="flex flex-col-reverse md:flex-row md:py-20 justify-between">

        <div id="hero-left" className="flex flex-col md:max-w-[50%]">
          <div className="flex flex-col gap-y-6 items-start">
            <h1 className="text-4xl lg:text-5xl lg:leading-tight font-bold">Supercharge Your <br /><span className="text-bc-red">E-Commerce </span>Store With Us</h1>

            <h2 className="text-2xl font-medium">Done-for-you e-commerce marketing services including social-media advertising, conversion-rate optimisation and Shopify store design & development.

            </h2>
            <button>Get Free Site Audit</button>
          </div>


          <div className="justify-self-end mt-auto">
            <h4 className="text-xl font-medium mb-4">A Member of:</h4>
            <Image alt="shopify" src="/shopify_plus.svg" width={200} height={80} />
          </div>


        </div>

        <div id="hero-right" className="flex justify-center" >
          <div className="relative">
            <Image alt="hero-ecommerce" src={'https://res.cloudinary.com/dl3rdpbpw/image/upload/v1721301969/hero-img.png'} width={500} height={500} />

            <div className="absolute top-0">
              <Image src={'/floater1.webp'} width={300} height={100} alt="floater-1" />
            </div>

            <div className="absolute top-14">
              <Image src={'/floater2.webp'} width={300} height={100} alt="floater-1" />
            </div>

          </div>


        </div>


      </div>

      <Services />

      <section id="frustration-section" className="md:flex justify-between py-20">

        <div id="frustration-left" className="max-w-[50%]">

          <div className="grid grid-cols-2 gap-4">

            {questions.map((question) => (
              <div key={question.title} className={`question-cards ${question.bgColor} p-10 max-w-[300px] rounded-2xl ${question.textColor} font-semibold text-center`}>
                <h2 className="text-4xl">{question.title}</h2>
                <h3 className="text-2xl">{question.question}</h3>
              </div>

            ))}
          </div>


        </div>

        <div id="frustration-right" className="md:max-w-[50%] flex flex-col items-end gap-y-8">

          <h2 className="text-5xl leading-snug text-right  font-semibold"><span className="text-bc-darkblue">Feeling Uncertain</span> About Marketing?</h2>

          <h3>Speak with us and we will help you gain more clarity on these questions</h3>

          <button>Reach Out</button>

        </div>


      </section>




      <section id="step-by-step" className="py-20 px-14 bg-bc-beige rounded-3xl mb-[60px]">

        <h2 className="text-center font-semibold text-4xl mb-8">The Journey To Success</h2>

        <div className="grid md:grid-cols-3 gap-8 place-items-start">

          {processSteps.map((step) => (<div className="flex flex-col items-center gap-y-9" key={step.title}>
            <Image alt={step.url} src={step.url} width={90} height={90} />
            <h3 className="text-xl max-w-[200px] font-semibold text-center">{step.title}</h3>
            <h4>{step.para}</h4>
          </div>))}


        </div>

      </section>

      <section className="pb-20">
        <div className="flex justify-between"><h2 className="font-semibold text-4xl mb-8">Our Insights</h2>

          <Link href={'/blog'}><button>All Articles</button></Link>


        </div>
        <Posts numberToShow={3} />

      </section>

      {/* 
      <section id="how-we-can-help">

        <div></div>

        <div>

        </div>

      </section> */}



    </div >
  );
}

//data for page

const questions = [
  {
    title: 'Q1',
    question: 'Is My Online Marketing Actually working?',
    bgColor: "bg-bc-darkblue",
    textColor: 'text-white'

  },
  {
    title: 'Q2',
    question: 'Why are my Sales Slowing Down?',
    bgColor: "bg-bc-lightblue",
    textColor: 'text-bc-red'

  },
  {
    title: 'Q3',
    question: 'Should I be spending on digital Ads?',
    bgColor: "bg-bc-yellow",
    textColor: 'text-bc-darkblue'

  }
]



const processSteps = [
  {
    url: "/number_1.svg",
    title: "Discover & Understand Your Business Goals",
    para: "To understand your goals and analyse your digital presence and brand direction to sync with your strategic goals."

  },
  {
    url: "/number2_.svg",
    title: "Plan & Execute Your Online Sale Journey",
    para: "We implement strategies to enhance the efficiency of your budget for Facebook and Instagram ads through A/B Testing."

  },
  {
    url: "/number_3.svg",
    title: "Deliver & Review Your Goals to Success",
    para: "We carefully monitor and optimise your ads to guarantee that your ads spending reach the highest returns."

  },

]
