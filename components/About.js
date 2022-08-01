import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="pt-20 px-5  flex flex-col md:flex md:flex-row items-center justify-center space-y-5 md:px-20 ">
      <div className="md:w-[50%]">
        <Image
          className="rounded-md "
          src="/test1.jpg"
          width="440"
          height="420"
        />
      </div>

      <div className="md:w-[50%]">
        <h1 className=" text-blue-600 font-bold mb-4  text-3xl">
          About Young Talk Indonesia
        </h1>
        <p className="text-gray-600 font-poppins">
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
