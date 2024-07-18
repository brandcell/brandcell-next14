import Image from "next/image";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-bc-darkblue px-6 py-14 text-white">
      <div className="m-auto flex max-w-screen-xl flex-col gap-y-6">
        <div className="flex flex-wrap justify-between">
          <Image
            src={"/brandcell-white.svg"}
            width={155}
            height={40}
            alt="brandcell-white"
          />

          <div id="socials-bar" className="flex gap-5">
            <Image
              alt="linkedin-logo"
              src={"/soc1.svg"}
              width={38}
              height={38}
            ></Image>
            <Image
              alt="x-logo"
              src={"/soc2.svg"}
              width={38}
              height={38}
            ></Image>

            <Image
              alt="fb-logo"
              src={"/soc3.svg"}
              width={38}
              height={38}
            ></Image>
            <Image
              alt="ig-logo"
              src={"/soc4.svg"}
              width={38}
              height={38}
            ></Image>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h3>hello@brandcell.studio</h3>
          <h3>+60124396912</h3>
          <p>PG: 63, Lorong Macalister, Georgetown, 10400 Pulau Pinang</p>
          <p>
            KL: A-10-9, Northpoint Residences, Lingkaran Syed Putra Utara, 59200
            Kuala Lumpur
          </p>
        </div>

        <div className="text-white">
          Copyright © {currentYear} BrandCell Studio. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
