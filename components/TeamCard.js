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
    <div className="flex md:flex-row flex-col  justify-start items-start md:gap-5 gap-2 py-5 md:px-10 px-5  border shadow-md border-blue-200 rounded-lg hover:shadow-xl hover:shadow-blue-100">
      <div className="flex-[50%]">
        <img
          src={img}
          className="md:w-[25rem] md:h-[13rem] w-[22rem] h-[10rem]  bg-blue-400 rounded-md object-cover"
        />
      </div>
      <div className="flex-[50%]">
        <div className="mb-3">
          <h1 className="font-bold text-blue-500 md:text-xl text-base ">
            {name}
          </h1>
          <p className="text-sm text-gray-600">{jabatan}</p>
        </div>
        <div className="flex gap-3">
          <a href={linkIG} target="_blank">
            <Image className="" src="/logoIg.png" width="20" height="20" />
          </a>
          <a href={linkGoogle} target="_blank">
            <Image className=" " src="/logoGoogle.png" width="20" height="20" />
          </a>
          <a href={linkedIn} target="_blank">
            <Image
              className=" "
              src="/logoLinkedin.png"
              width="20"
              height="20"
            />
          </a>
        </div>
        <p className="text-[12px] md:text-sm text-gray-600 "> "{motto}"</p>
      </div>
    </div>
  );
};

export default TeamCard;
