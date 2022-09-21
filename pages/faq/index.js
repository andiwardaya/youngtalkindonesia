import React from "react";
import Navbar2 from "../../components/Navbar2";

import Image from "next/image";
import Footer from "../../components/Footer";
import Faqtab from "../../components/Faqtab";
import Head from "next/head";

const faqPage = () => {
  return (
    <>
      <Head>
        <title>Youngtalk Indonesia FAQ</title>
        <meta name="description" content="Youngtalk Indonesia Blog & Event" />
        <link rel="icon" href="/yti-warna.png" />
      </Head>
      <Navbar2 />
      <main className="pt-[7rem] pb-[5rem]">
        <h1 className="text-center text-blue-500 font-extrabold text-4xl md:text-5xl mb-8">
          Pertanyaan Seputar YTI
        </h1>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <div className="md:flex-[50%]">
            <Image
              className=""
              src="/faq.svg"
              width="920"
              height="300"
              alt="faq"
            />
          </div>
          <div className="md:flex-[50%] w-full px-4">
            {/* DISCLOSUREE */}
            <div className="mx-auto w-full max-w-md py-3 px-3 rounded-2xl bg-blue-400 p-2">
              <Faqtab
                tanya="Apakah Young Talk Indonesia itu?"
                jawab="Young Talk Indonesia merupakan organisasi kepemudaan pertama di Lumajang yang bergerak dibidang media dan kepemudaan"
              />
              <Faqtab
                tanya="Kenapa dinamakan Young Talk Indonesia?"
                jawab=" Karena millenial harus bernai tampil dan merubah sejarah bangsa karena muda adalah kekuatan den muda adalh pergerakan maka dari itu kami harapkan pemuda Indonesia mampu menjadi lokomotif perubahan dan YTI menjadi kawah candradimuka oase informasi dan pendidikan."
              />
              <Faqtab
                tanya="Siapakah pendiri Young Talk Indonesia?"
                jawab="Young Talk Indonesia didirikan oleh empat orang founder yaitu Kemal Pasha, Anggun Gusti Rada, Primus Akbar, Putra Alam"
              />
              <Faqtab
                tanya="Siapakah anggota Young Talk Indonesia?"
                jawab="Beranggotakan 27 orang yang terdiri dari pemuda seluruh Indonesia yang dibagi dalam empat divisi."
              />
              <Faqtab
                tanya="Apa saja kegiatan Young Talk Indonesia?"
                jawab="Meliputi diskusi online, YTI academi, cuap-cuap manis, ngetalk, village inspira, young inspira, podcast, baksos, mengawal dan mengadvokasi kasus anak putus sekolah, menjadi bergaining possition untuk pemerintah."
              />
              <Faqtab
                tanya="Bagaimana cara mendaftar menjadi anggota Young Talk Indonesia?"
                jawab="Cara mendaftar YTI cukup mudah dengan klik link pendaftaran di Instagram, syarat dan ketentuan berlaku yaitu WNI, berumur 16-21 tahun, memiliki integritas tinggi dan bertanggung jawab, serta berkomitmen."
              />
              <Faqtab
                tanya="Dari manakah asal pendanaan kegiatan Young Talk Indonesia?"
                jawab="Pendanaan Young Talk Indonesia bersifat mandiri kas dari iuran anggota dan berbagai kerja sama dengan stage holder terkait."
              />
              <Faqtab
                tanya="Dimana alamat Young Talk Indonesia?"
                jawab="Jalan Seruji Barat No. 63 Lumajang (Lantai 2 toko timur menara)"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default faqPage;
