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
        <li>
          <Link href={link1Adress}>
            <a>{link1}</a>
          </Link>
        </li>
        <li>
          <Link href={link2Adress}>
            <a>{link2}</a>
          </Link>
        </li>
        <li>
          <Link href={link3Adress}>
            <a>{link3}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLink;
