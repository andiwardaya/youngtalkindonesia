import Head from "next/head";

import Navbar from "../components/Navbar";
import About from "../components/About";
import VisiMisi from "../components/VisiMisi";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Youngtalk Indonesia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/yti-warna.png" />
      </Head>
      <Navbar />
      <main className="m-w-7xl mx-auto">
        <Hero />
        <About />
        <VisiMisi />
        <Team />
        <Footer />
      </main>
    </>
  );
}
