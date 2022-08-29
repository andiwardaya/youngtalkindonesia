import React from "react";
import TeamCard from "./TeamCard";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function Team() {
  return (
    <div>
      <h1 className="text-center font-extrabold text-2xl text-blue-500">
        Meet The Team
      </h1>
      <div>
        <TeamCard
          name={"Kemal Pasha"}
          img={"./Kemal.png"}
          jabatan={"Anggota"}
          linkIG={"www.google.com"}
          linkGoogle={"www.google.com"}
          linkedIn={"www.google.com"}
          motto={"hidup adalah kunci"}
        />
      </div>
    </div>
  );
}

export default Team;
