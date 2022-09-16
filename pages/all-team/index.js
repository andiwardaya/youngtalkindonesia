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
        <div className="grid grid-cols-2 xl:grid-cols-3 py-5 gap-5 px-5 py-10">
          <TeamCard
            name={"Arif Kautsar"}
            img={"./anggota/arif-fix.png"}
            jabatan={"Head of Creative Economy"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=arifkautshar@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={
              "Mulai bersiaplah,Karena hidup akan selalu memberikan kejutan yang lebih tak terduga dari sebelumnya"
            }
          />
          <TeamCard
            name={"Ainur Rofek"}
            img={"./anggota/rofik-final.png"}
            jabatan={"Head Of Education and Culture"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=ainurrofek1616@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Belajar, Belajar, dan Belajar"}
          />
          <TeamCard
            name={"Kemal Pasha"}
            img={"./anggota/kemal-sm.png"}
            jabatan={"President Of YoungTalk Indonesia"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=kemal.18106@mhs.unesa.ac.id&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Hidup yang tak diperjuangkan tak akan dimenangkan"}
          />
          <TeamCard
            name={"Primus Akbar M"}
            img={"./anggota/Primus.png"}
            jabatan={"Financial Manager"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=primusakbar99@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Berfikirlah melebihi semesta, walau raga di dunia."}
          />
          <TeamCard
            name={"Anata Ikrommullah"}
            img={"./anggota/anata-sm.png"}
            jabatan={"Advisory Board"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=phylonata@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Biarkan Realitas nampak apa adanya."}
          />
          <TeamCard
            name={"Cicilia Laura Efifani"}
            img={"./anggota/Laura-sm.png"}
            jabatan={"Head of Creative Economy"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=cicilialaura03@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Learn from the past, live for today and plan for tomorrow."}
          />
          <TeamCard
            name={"Rizqy Zahrial Firdausy"}
            img={"./anggota/riski-sm.png"}
            jabatan={"member"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=zahrialfirdausy789@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Sebesar kesadaranmu sebesar itu pula kesuksesanmu"}
          />
          <TeamCard
            name={"Aliffian Putra Alam"}
            img={"./anggota/putra-alam-final.png"}
            jabatan={"Head Of Education and Culture"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=alambramasta7@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Membangun Banyak Pengetahuan dan Memanennya di Masa Depan"}
          />
          <TeamCard
            name={"Adam Abdillah"}
            img={"./anggota/adam.png"}
            jabatan={"Head Of Communication  and Information "}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=adamabdillah60@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={
              "Bakat adalah sesuatu yang kau tumbuhan. Akan tetapi Insting adalah sesuatu yang harus kita latih"
            }
          />
          <TeamCard
            name={"Anggun Gustirada"}
            img={"./anggota/Anggun.png"}
            jabatan={"Secretary of YoungTalk Indonesia"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=radagusti039@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Urip Iku Urup"}
          />
          <TeamCard
            name={"Muhammad Rosyid"}
            img={"./anggota/Anggun.png"}
            jabatan={"Head of Creative Economy"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=rocidcoolvideo@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Bergerak"}
          />
          <TeamCard
            name={"Khoirul Rozikin"}
            img={"./anggota/rozikin-final.png"}
            jabatan={"Head Of Communication  and Information"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=khoirulrozikin447@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Lebih banyak berkarya"}
          />
          <TeamCard
            name={"Stephanus Dhimas Hulio"}
            img={"./anggota/stephanus-dimas-final.png"}
            jabatan={"Communication and Information"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=ephanzen4@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Be yourself and Never Surrender"}
          />
          <TeamCard
            name={"Dwi andreani"}
            img={"./anggota/dwi-andraeni-final.png"}
            jabatan={"Education and Culture"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=indrianidwi489@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={
              "Teruslah berjalan selagi kaki masih bisa melangkah, berjuang selagi hati dan pikiran mampu serta jadi lah diri sendiri"
            }
          />
          <TeamCard
            name={"Naufal Abdullah Almahdi"}
            img={"./anggota/yateno-sm.png"}
            jabatan={"Communication and Information"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=naelvinaufal@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Bermanfaat bagi diri sendiri dan orang lain"}
          />
          <TeamCard
            name={"Adam Cahya Pamungkas"}
            img={"./anggota/adam-cahya.png"}
            jabatan={"Communication and Information"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=cahyaadam02@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Gas"}
          />
          <TeamCard
            name={"Mohamad Fadil Hartanto"}
            img={"./anggota/fadil-hartanto-final.png"}
            jabatan={"Education and Culture"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=fadilmalang12@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Pantang Menyerah"}
          />
          <TeamCard
            name={"Tasya Hikmah Daniyah "}
            img={"./anggota/tasya-sm.png"}
            jabatan={"Law and Human Right"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=tasya.hikmah02@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={
              "Jika anda benar jangan takut untuk menyuarakan dan jika anda salah maka diamlah dan berani menerimanya"
            }
          />
          <TeamCard
            name={"Sekar Widyaningrum"}
            img={"./anggota/sekar.png"}
            jabatan={"Education and Culture"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=sekarwidyaningrum.s@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Berbuat baik kepada siapapun dimanapun dan kapanpun"}
          />
          <TeamCard
            name={"Devin Devara Nabita Widodo"}
            img={"./anggota/devian-sm.png"}
            jabatan={"Law and Human Right"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=devianlight01@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={
              "The worst form of inequality is trying to make unequal things equal."
            }
          />
          <TeamCard
            name={"Bayu Setiawan"}
            img={"./anggota/bayu-setiawan-final.png"}
            jabatan={"Creative Economy"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=bayu64351@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Terus Cari Hal Baru"}
          />
          <TeamCard
            name={"Resti Kurnia"}
            img={"./anggota/resti-kurnia-final.png"}
            jabatan={"Law and Human Right"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=restikurniaa123@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"Khairunnas ahsanuhum khuluqon wa anfauhum linnas"}
          />
          <TeamCard
            name={"Dewi Masruroh"}
            img={"./anggota/dewi-masruroh-final.png"}
            jabatan={"Creative Economy"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=dewimasruroh15@student.ub.ac.id&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={"sepuluh yang tidak ada sebelasnya"}
          />
          <TeamCard
            name={"Andi Wardaya"}
            img={"./anggota/sekar.png"}
            jabatan={"Communication and Information"}
            linkIG={"https://www.google.com/"}
            linkGoogle={
              "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=andiwardaya44@gmail.com&hl=id"
            }
            linkedIn={"www.google.com"}
            motto={
              "when you want something, all the universe conspires in helping you to achieve it. -the Alchemist"
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default allTeamPage;
