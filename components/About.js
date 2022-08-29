import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="py-20 px-5  flex flex-col md:flex md:flex-row items-center justify-center space-y-5 md:px-20 bg-gray-100">
      <div className="md:w-[50%] pb-8">
        <Image
          className="rounded-md "
          src="/yti_merah.png"
          width="320"
          height="100"
        />
      </div>

      <div className="md:w-[50%]">
        <h1 className=" text-blue-600 font-extrabold mb-4  text-4xl">
          About Young Talk Indonesia
        </h1>
        <p className="text-gray-600 font-poppins text-sm md:text-md  leading-7 indent-5">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default About;
