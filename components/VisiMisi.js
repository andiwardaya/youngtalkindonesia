import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";

function VisiMisi() {
  return (
    <div className="py-16 px-5  space-y-8 md:flex md:items-start md:justify-center  md:space-y-0 md:space-x-3 md:px-20">
      {/* VISION */}
      <div className="md:flex-1">
        <h1 className="font-extrabold text-2xl text-blue-500">Vision</h1>
        <hr className="border-2 border-gray-300 mb-2"></hr>
        <ul className="list-disc ml-5 marker:text-blue-600 space-y-2 text-sm text-gray-600">
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
        <h1 className="font-extrabold text-2xl text-blue-500">Mission</h1>
        <hr className="border-2 border-gray-300 mb-2"></hr>
        <ul className="list-disc ml-5 marker:text-blue-600 space-y-2 text-sm text-gray-600">
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
