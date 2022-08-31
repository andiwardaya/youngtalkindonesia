import React from "react";
import Image from "next/image";

const TeamCard = ({
  name,
  img,
  jabatan,
  linkIG,
  linkGoogle,
  linkedIn,
  motto,
}) => {
  return (
    <div className="flex  justify-center gap-5 py-5 px-20">
      <div className="">
        <img src={img} className="w-[20rem] bg-blue-400 rounded-md" />
      </div>
      <div className="">
        <div className="mb-3">
          <h1 className="font-bold text-blue-500 text-xl">{name}</h1>
          <p className="text-sm text-gray-600">{jabatan}</p>
        </div>
        <div className="flex gap-3">
          <a href={linkIG}>
            <Image className="" src="/logoIg.png" width="20" height="20" />
          </a>
          <a href={linkGoogle}>
            <Image className=" " src="/logoGoogle.png" width="20" height="20" />
          </a>
          <a href={linkedIn}>
            <Image
              className=" "
              src="/logoLinkedin.png"
              width="20"
              height="20"
            />
          </a>
        </div>
        <p className="text-sm text-gray-600"> "{motto}"</p>
      </div>
    </div>
  );
};

export default TeamCard;
