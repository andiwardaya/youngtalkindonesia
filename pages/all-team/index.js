import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar2";
import TeamCard from "../../components/TeamCard";

const allTeamPage = () => {
  return (
    <>
      <Head>
        <title>Youngtalk Indonesia Team</title>
        <meta name="description" content="Youngtalk Indonesia Team" />
        <link rel="icon" href="/yti-warna.png" />
      </Head>
      <div className="absolute">
        <div className="bg-red-500 w-full h-10"></div>
      </div>
      <Navbar2 />

      <div className="pb-8 pt-[7rem]">
        <h1 className="text-center font-extrabold text-3xl md:text-4xl text-blue-500 md:mb-3">
          Meet The All Youngtalk Team
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 py-5">
          <TeamCard
            name={"Kemal Pasha"}
            img={"./Kemal.png"}
            jabatan={"Consultant Event"}
            linkIG={"https://www.google.com/"}
            linkGoogle={"www.google.com"}
            linkedIn={"www.google.com"}
            motto={
              "hidup adalah kunci lorem ipsum deler sia ament lakii kdaklj hs"
            }
          />
          <TeamCard
            name={"Kemal Pasha"}
            img={"./Kemal.png"}
            jabatan={"Consultant Event"}
            linkIG={"https://www.google.com/"}
            linkGoogle={"www.google.com"}
            linkedIn={"www.google.com"}
            motto={
              "hidup adalah kunci lorem ipsum deler sia ament lakii kdaklj hs"
            }
          />
          <TeamCard
            name={"Kemal Pasha"}
            img={"./Kemal.png"}
            jabatan={"Consultant Event"}
            linkIG={"https://www.google.com/"}
            linkGoogle={"www.google.com"}
            linkedIn={"www.google.com"}
            motto={
              "hidup adalah kunci lorem ipsum deler sia ament lakii kdaklj hs"
            }
          />
          <TeamCard
            name={"Kemal Pasha"}
            img={"./Kemal.png"}
            jabatan={"Consultant Event"}
            linkIG={"https://www.google.com/"}
            linkGoogle={"www.google.com"}
            linkedIn={"www.google.com"}
            motto={
              "hidup adalah kunci lorem ipsum deler sia ament lakii kdaklj hs"
            }
          />
          <TeamCard
            name={"Kemal Pasha"}
            img={"./Kemal.png"}
            jabatan={"Consultant Event"}
            linkIG={"https://www.google.com/"}
            linkGoogle={"www.google.com"}
            linkedIn={"www.google.com"}
            motto={
              "hidup adalah kunci lorem ipsum deler sia ament lakii kdaklj hs"
            }
          />
          <TeamCard
            name={"Kemal Pasha"}
            img={"./Kemal.png"}
            jabatan={"Consultant Event"}
            linkIG={"https://www.google.com/"}
            linkGoogle={"www.google.com"}
            linkedIn={"www.google.com"}
            motto={
              "hidup adalah kunci lorem ipsum deler sia ament lakii kdaklj hs"
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default allTeamPage;
