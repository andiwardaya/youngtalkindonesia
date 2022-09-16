import React from "react";
import TeamCard from "./TeamCard";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Team() {
  return (
    <div className="py-8">
      <h1 className="text-center font-extrabold text-2xl md:text-4xl text-blue-500 md:mb-3">
        Meet The Team
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
      </div>
      <div className="flex">
        <button className="mx-auto py-2 px-5 bg-blue-500 font-bold text-white">
          <Link href="/all-team">Meet All Team</Link>
        </button>
      </div>
    </div>
  );
}

export default Team;
