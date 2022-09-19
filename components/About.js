import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="py-20 px-5  flex flex-col md:flex md:flex-row items-center justify-center space-y-5 md:px-20 bg-gray-100">
      <div className="md:w-[50%] pb-8">
        <Image
          className="rounded-md "
          src="/yti-warna-full.png"
          width="330"
          height="100"
        />
      </div>

      <div className="md:w-[50%]">
        <h1 className=" text-blue-600 font-extrabold mb-4  md:text-4xl text-3xl text-center">
          Tentang Young Talk Indonesia
        </h1>
        <p className="text-gray-600 font-poppins text-sm md:text-md  leading-7 indent-5">
          <span className="font-bold">Young talk Indonesia</span> adalah
          organisasi yang bersifat independen kepemudaan pertama yang ada di
          Lumajang yang teridiri dari empat divisi. Divisi pertama yaitu divisi
          YTI Tech merupakan otak dan urat nadi kreativitas dan inovasi di
          organisasi, yang selalu membuat ide dan gagasan konten digital
          kreatif. Divisi kedua yaitu divisi pendidikan yang melakukan
          pengembangan dan pembangunan sumber daya manusia di dalam organisasi.
          Divisi ketiga yaitu divisi sosial politik hukum dan Ham yang merupakan
          ujung tombak pergerakan dan aksi menumbuhkan nalar kritis organisasi.
          Divisi keempat yaitu divisi ekonoi kreatif yang menjadi penggerak
          entrepreneurship seluruh anggota organisasi
        </p>
      </div>
    </div>
  );
}

export default About;
