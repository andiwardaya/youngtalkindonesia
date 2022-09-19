import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar2";

const HubunngiKamiPage = () => {
  return (
    <>
      <Head>
        <title>Youngtalk Indonesia Contact</title>
        <meta name="description" content="Youngtalk Indonesia Contact" />
        <link rel="icon" href="/yti-warna.png" />
      </Head>
      <Navbar2 />
      <main className="pt-[2rem]">
        {/* Herooo */}
        <div className="w-full h-[20rem] relative mb-10">
          <Image
            className="w-full h-[10rem]"
            src="/contact-hero.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
          <h1 className="text-4xl md:text-6xl text-center text-gray-100 font-extrabold shadow-xl  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            CONTACT US
          </h1>
        </div>

        {/* Get Touch */}
        <div>
          <h2 className="text-blue-500 text-center font-bold text-3xl  ">
            Get In Touch With Us
          </h2>
          <div className="px-20 space-y-6 mt-6 mb-14 md:flex md:gap-5 md:items-baseline md:justify-between">
            {/* alamat */}
            <div className="border border-gray-200 p-10 shadow-md hover:shadow-xl hover:shadow-blue-200 rounded-md w-full h-[17rem]">
              <div className="text-center space-y-3">
                <Image src="/location.svg" width="100" height="100" />
                <p className="font-bold text-gray-600 uppercase">Alamat Kami</p>
                <p className="text-sm text-gray-500">
                  Sekretariatan di Jalan Seruji Barat No. 63 Lumajang (Lantai 2
                  Toko Timur Menara)
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="border border-gray-200 p-10 shadow-md hover:shadow-xl hover:shadow-blue-200 rounded-md w-full h-[17rem]">
              <div className="text-center space-y-3">
                <Image src="/phone.svg" width="100" height="100" />
                <p className="font-bold text-gray-600 uppercase">Nomor Kami</p>
                <p className="text-sm text-gray-500">+6285232820747</p>
              </div>
            </div>
            {/* email */}
            <div className="border border-gray-200 p-10 shadow-md hover:shadow-xl hover:shadow-blue-200 rounded-md w-full h-[17rem]">
              <div className="text-center space-y-3">
                <Image src="/email.svg" width="100" height="100" />
                <p className="font-bold text-gray-600 uppercase">Email Kami</p>
                <p className="text-sm text-gray-500">
                  youngtalkindonesia@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-7 mb-10">
          <h1 className="text-center font-bold text-blue-500 text-3xl">
            Connect With Us
          </h1>
          <div className="flex items-center justify-center gap-10">
            <a
              href="https://www.instagram.com/youngtalkindonesia/"
              target="_blank"
            >
              <Image className="" src="/ig.svg" width="80" height="80" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCVi5-6thv2AQlDO7aMihSnA"
              target="_blank"
            >
              <Image className="" src="/yt.svg" width="70" height="70" />
            </a>
            <a href="https://www.facebook.com/YoungTalk.id/" target="_blank">
              <Image className="" src="/fb.svg" width="70" height="70" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HubunngiKamiPage;
