import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('../public/student1.jpg')] w-full h-screen object-cover bg-center bg-no-repeat bg-cover flex flex-col item-center justify-center relative ">
      <div className="">
        <h1 className="font-extrabold md:text-8xl text-5xl text-white flex flex-col items-end px-5 mb-5">
          SELAMAT DATANG DI <br></br> YOUNGTALK INDONESIA
        </h1>
        <p className="text-white text-sm md:py-8 px-5 md:w-[40rem] md:ml-auto ">
          Youngtalk Indonesia merupakan organisasi non-profit kepemudaan yang
          bergerak di bidang media yang berpusat di Kabupaten Lumajang Provinsi
          Jawa Timur
        </p>
      </div>
      <button
        onClick={() => {
          window.scrollTo({ top: 610, behavior: "smooth" });
        }}
        className="absolute text-white font-bold top-[85%] left-[50%]  py-3 translate-x-[-50%] px-6 bg-red-600 "
      >
        Explore More
      </button>
    </div>
  );
};

export default Hero;
