import Image from "next/image";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-bc-darkblue px-6 py-14 text-white shadow-xl">
      <div className="m-auto flex max-w-screen-xl flex-col gap-y-6">
        <div className="flex flex-wrap justify-between">
          <Image
            src={"/brandcell-white.svg"}
            width={155}
            height={40}
            alt="brandcell-white"
          />

          <div id="socials-bar" className="flex gap-5">
            <a
              href="https://www.instagram.com/brandcell.studio/"
              target="_blank"
            >
              <Image
                alt="ig-logo"
                src={"/soc4.svg"}
                width={38}
                height={38}
              ></Image>
            </a>

            <a
              href="https://www.linkedin.com/company/brandcell-studio/"
              target="_blank"
            >
              <Image
                alt="linkedin-logo"
                src={"/soc1.svg"}
                width={38}
                height={38}
              ></Image>
            </a>

            {/* <Image
              alt="x-logo"
              src={"/soc2.svg"}
              width={38}
              height={38}
            ></Image> */}
            <a href="https://www.facebook.com/BrandCell.Studio" target="_blank">
              <Image
                alt="fb-logo"
                src={"/soc3.svg"}
                width={38}
                height={38}
              ></Image>
            </a>
          </div>
        </div>

        <address className="flex flex-col gap-1 normal-case">
          <h3>
            <a href="mailto:hello@brandcell.studio">hello@brandcell.studio</a>
          </h3>
          <h3>
            <a href="https://web.whatsapp.com/send/?phone=60124396912&text&type=phone_number&app_absent=0+60124396912">
              +60124396912
            </a>
          </h3>
          <p>PG: 63, Lorong Macalister, Georgetown, 10400 Pulau Pinang</p>
          <p>
            KL: A-10-9, Northpoint Residences, Lingkaran Syed Putra Utara, 59200
            Kuala Lumpur
          </p>
        </address>

        <div className="text-white">
          Copyright © {currentYear} BrandCell Studio. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
