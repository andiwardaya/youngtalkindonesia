import React from "react";
import Image from "next/image";

import FooterLink from "./FooterLink";

function Footer() {
  return (
    <div className="bg-gray-900 pt-10 px-5 space-y-5 ">
      <hr className="border-1 border-gray-500 mb-2"></hr>
      <div className="md:flex md:justify-center md:pb-5 space-y-5 md:space-y-0 ">
        <div className="flex-[50%]">
          <Image className="" src="/YTI_White.png" width="150" height="40" />
          <p className="text-sm text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className=" gap-3 grid grid-cols-2 md:flex-[50%]  md:flex md:justify-end md:gap-20 md:pr-10">
          <FooterLink
            title="Blog"
            link1="Blog"
            link1Adress="/new-season"
            link2="Event"
            link2Adress="/new-season"
            link3="Vision and mission"
            link3Adress="/new-season"
          />
          <FooterLink
            title="About"
            link1="Help"
            link1Adress="/new-season"
            link2="Shipping"
            link2Adress="/new-season"
            link3="Affiliate"
            link3Adress="/new-season"
          />
          <FooterLink
            title="Info"
            link1="Contact Us"
            link1Adress="/new-season"
            link2="FAQ"
            link2Adress="/new-season"
            link3="Informasi"
            link3Adress="/new-season"
          />
        </div>
      </div>

      <p className="text-xs text-white text-center pb-2">
        © 2022 Youngtalk Indonesia
      </p>
    </div>
  );
}

export default Footer;
