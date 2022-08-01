import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";

function VisiMisi() {
  return (
    <div className="py-5 px-5 md:px-0 space-y-3 md:flex md:items-start md:justify-center md:py-8 md:space-y-0 md:space-x-3 bg-gray-200">
      {/* VISION */}
      <div className="md:flex-1">
        <h1 className="font-bold text-xl text-blue-600">Vision</h1>
        <hr className="border-2 border-gray-300 mb-2"></hr>
        <ul className="list-disc ml-5 marker:text-blue-600 space-y-2 text-sm">
          <li>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </li>
          <li>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </li>
        </ul>
      </div>

      {/* MISION */}
      <div className="md:flex-1">
        <h1 className="font-bold text-xl text-blue-600">Misson</h1>
        <hr className="border-2 border-gray-300 mb-2"></hr>
        <ul className="list-disc ml-5 marker:text-blue-600 space-y-2 text-sm">
          <li>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </li>
          <li>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </li>
          <li>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </li>
          <li>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VisiMisi;
