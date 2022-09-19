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
      <main className="pt-[7rem] max-w-7xl mx-auto ">
        <h1 className="text-center font-extrabold text-blue-500 mb-5 md:mb-10 text-4xl">
          Story of Young Talk
        </h1>
        <div className="flex flex-col md:items-start items-center justify-center gap-3  md:flex-row  mb-10 md:mb-16">
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
              Sejarah Young talk Indonesia
            </h1>
            <p className="text-sm text-gray-700 md:text-base indent-5 px-5 ">
              <span className="font-bold">Young talk Indonesia</span> berdiri
              dan hadir atas dasar keprihatinan dan keresahan karena
              pemuda-pemuda Indonesia mengalami degradasi nalar kritis dan
              moral. Generasi milenial di era post truth ini terlalu terjebak
              dalam zona nyaman sehingga ini menjadi tantangan pemuda menuju
              generasi emas pemuda 2045 mendatang dimana inovasi dan penguasaan
              media serta teknologi menjadi kunci. Maka dari itu Young Talk
              Indonesia berdiri menjadi problem solving untuk lahirnya generasi
              emas 2045 mendatang. Young Talk Indonesia dibentuk pada tanggal 25
              Juni 2021 di Kabupaten Lumajang. Didirikan oleh empat orang
              founder yang berdinamikan dan berdiskusi untuk menelsaikan masalah
              di negeri ini. Dengan berkat rahmat Tuhan YME dan berasaskan
              Pancasila Young Talk Indonesia teguh berdiri.
            </p>
          </div>
        </div>
        {/* PART 2 */}
        <div className="flex flex-col md:items-start items-center justify-center gap-3  md:flex-row-reverse ">
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
              Tentang Kami
            </h1>
            <p className="text-sm text-gray-700 md:text-base indent-5 px-5 ">
              <span className="font-bold">Young talk Indonesia</span> adalah
              organisasi yang bersifat independen kepemudaan pertama yang ada di
              Lumajang yang teridiri dari empat divisi. Divisi pertama yaitu
              divisi YTI Tech merupakan otak dan urat nadi kreativitas dan
              inovasi di organisasi, yang selalu membuat ide dan gagasan konten
              digital kreatif. Divisi kedua yaitu divisi pendidikan yang
              melakukan pengembangan dan pembangunan sumber daya manusia di
              dalam organisasi. Divisi ketiga yaitu divisi sosial politik hukum
              dan Ham yang merupakan ujung tombak pergerakan dan aksi
              menumbuhkan nalar kritis organisasi. Divisi keempat yaitu divisi
              ekonoi kreatif yang menjadi penggerak entrepreneurship seluruh
              anggota organisasi
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
