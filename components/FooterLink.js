import React from "react";
import Link from "next/link";

const FooterLink = ({
  title,
  link1,
  link1Adress,
  link2,
  link2Adress,
  link3,
  link3Adress,
}) => {
  return (
    <div className="space-y-2">
      <h1 className="text-blue-400 font-bold">{title}</h1>
      <ul className="text-sm text-white space-y-1">
        <li className="hover:text-blue-300">
          <Link href={link1Adress}>
            <a target="_blank">{link1}</a>
          </Link>
        </li>
        <li className="hover:text-blue-300">
          <Link href={link2Adress}>
            <a target="_blank">{link2}</a>
          </Link>
        </li>
        <li className="hover:text-blue-300">
          <Link href={link3Adress}>
            <a target="_blank">{link3}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLink;
