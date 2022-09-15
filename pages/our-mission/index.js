import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar2";
import VisiMisi from "../../components/VisiMisi";

const ourMissionPage = () => {
  return (
    <>
      <Head>
        <title>Youngtalk Indonesia Mission</title>
        <meta name="description" content="Youngtalk Indonesia Blog & Event" />
        <link rel="icon" href="/yti-warna.png" />
      </Head>
      <Navbar2 />
      <main className="pt-[7rem] px-5 max-w-7xl mx-auto">
        <h1 className="text-center font-extrabold text-blue-500 mb-5 md:mb-10 text-4xl">
          Story of Young Talk
        </h1>
        <div className="flex flex-col md:items-start items-center justify-center gap-3  md:flex-row">
          <div className="md:flex-[50%] md:flex md:justify-center">
            <Image
              className="rounded-md"
              src="/studentsfinal.png"
              width="400"
              height="280"
            />
          </div>
          <div className="md:flex-[50%]  ">
            <h1 className="text-center font-extrabold text-blue-500 mb-2  text-2xl">
              History
            </h1>
            <p className="text-sm text-gray-700 md:text-base indent-5">
              {" "}
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic What is Lorem Ipsum? Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a tandard dummy text ever
              since the 1500s, when an unknown printer took a
            </p>
          </div>
        </div>
        <VisiMisi />
      </main>
      <Footer />
    </>
  );
};

export default ourMissionPage;
