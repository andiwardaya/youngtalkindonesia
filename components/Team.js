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
      <div className="flex">
        <button className="mx-auto py-2 px-5 bg-blue-500 font-bold text-white">
          <Link href="/all-team">Meet All Team</Link>
        </button>
      </div>
    </div>
  );
}

export default Team;
