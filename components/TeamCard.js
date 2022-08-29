import React from "react";

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
    <div>
      <div className="">
        <img src={img} className="w-32 bg-blue-400" />
      </div>

      <div>
        <h1>{name}</h1>
        <p>{jabatan}</p>
      </div>
    </div>
  );
};

export default TeamCard;
