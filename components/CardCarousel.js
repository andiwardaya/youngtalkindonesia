import { StarIcon } from "@heroicons/react/solid";
import React from "react";

function CardCarousel({ title, para, imgProfile }) {
  return (
    <div className="flex flex-col items-center justify-center p-10 border mx-5  border-gray-200 rounded-xl hover:shadow-xl">
      <div className="flex">
        <StarIcon className="w-5 text-blue-700" />
        <StarIcon className="w-5 text-blue-700" />
        <StarIcon className="w-5 text-blue-700" />
        <StarIcon className="w-5 text-blue-700" />
        <StarIcon className="w-5 text-blue-700" />
      </div>

      <h2 className="font-bold mb-5">{title}</h2>
      <p className="text-gray-500">{para}</p>
    </div>
  );
}

export default CardCarousel;
