import Image from "next/image";

function Services() {
    return (
        <section id="services" className="">
            <h2 className="mb-8 text-center text-4xl font-semibold">
                {" "}
                Services To Help You Grow
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
                {servicesList.map((service) => {
                    return (
                        <div
                            className="flex flex-col items-center gap-y-4 rounded-2xl bg-bc-lightblue p-10"
                            key={service.title}
                        >
                            <Image
                                alt={service.imgUrl}
                                src={service.imgUrl}
                                width={185}
                                height={185}
                            />
                            <h2 className="text-center text-2xl font-semibold">
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
        para: "Build and improve online stores to attract and keep customers happy.",
    },
    {
        title: "Website Optimisation",
        imgUrl: "cro_vector.svg",
        para: "Continuously enhance your website to perform better and engage more.",
    },
];
