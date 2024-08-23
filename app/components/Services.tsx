import Image from "next/image";

function Services() {
  return (
    <section id="services" className="">
      <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">
        {" "}
        Services To Help You Grow
      </h2>
      <div className="grid-responsive mx-auto max-w-[300px] gap-6 sm:max-w-screen-xl">
        {servicesList.map((service) => {
          return (
            <div
              id="service-card"
              className="row-span-3 grid grid-rows-subgrid justify-items-center gap-y-4 rounded-2xl bg-bc-lightblue p-10"
              key={service.title}
            >
              <Image
                alt={service.imgUrl}
                src={service.imgUrl}
                width={185}
                height={185}
              />

              <h2 className="my-auto text-center text-2xl font-semibold">
                {service.title}
              </h2>

              <h3 className="text-center text-[18px]">{service.para}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;

const servicesList = [
  {
    title: "Branding",
    imgUrl: "/branding_vector.svg",
    para: "Define your unique identity and story to stand out and connect.",
  },
  {
    title: "Social Media Advertising",
    imgUrl: "/socmed_vector.svg",
    para: "Create engaging ads to reach and grow your ideal audience effectively.",
  },
  {
    title: "Shopify Development",
    imgUrl: "/shopify_vector.svg",
    para: "Build attractive stores that customers love",
  },
  {
    title: "Conversion Optimisation",
    imgUrl: "cro_vector.svg",
    para: "Continuously improve the conversion rate of your website",
  },
];
