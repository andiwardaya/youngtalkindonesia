import React from "react";
import Image from "next/image";

import FooterLink from "./FooterLink";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-900 pt-10 px-5 space-y-5 ">
      <hr className="border-1 border-gray-500 mb-2"></hr>
      <div className="md:flex md:justify-center md:pb-5 space-y-5 md:space-y-0 ">
        <div className="flex-[50%]">
          <Image className="" src="/YTI_White.png" width="150" height="40" />
          <p className="text-sm text-gray-300">
            Young Talk Indonesia merupakan organisasi non-profit kepemudaan yang
            bergerak di bidang media yang berpusat di kabupaten Lumajang
            Provinsi Jawa Timur.
          </p>
        </div>
        <div className=" gap-3 grid grid-cols-2 md:flex-[50%]  md:flex md:justify-end md:gap-20 md:pr-10">
          <div className="space-y-2">
            <h1 className="text-blue-400 font-bold">Discovery</h1>
            <ul className="text-sm text-white space-y-1">
              <li className="hover:text-blue-300">
                <Link href="/blog-and-event">
                  <a>Event and Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="text-blue-400 font-bold">About</h1>
            <ul className="text-sm text-white space-y-1">
              <li className="hover:text-blue-300">
                <Link href="/our-mission">
                  <a>Our Mission</a>
                </Link>
              </li>
            </ul>
          </div>
          <FooterLink
            title="Info"
            link1="Instagram"
            link1Adress="https://www.instagram.com/youngtalkindonesia/"
            link2="Youtube"
            link2Adress="https://www.youtube.com/channel/UCVi5-6thv2AQlDO7aMihSnA"
            link3="Facebook"
            link3Adress="https://www.facebook.com/YoungTalk.id/"
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
