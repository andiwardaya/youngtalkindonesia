import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const NavLink = [
    { name: "Home", alamat: "/" },
    { name: "Event & Blog", alamat: "/blog-and-event" },
    { name: "Our Mission", alamat: "/our-mission" },
    { name: "FAQ", alamat: "/faq" },
    { name: "Hubungi Kami", alamat: "/hubungi-kami" },
  ];

  return (
    <div
      className={`w-full fixed ${
        scrollTop === 0 ? "md:bg-transparent" : "bg-blue-400 shadow-md"
      } ${
        open ? "bg-blue-400" : ""
      } h-auto  z-10  mx-auto left-[50%] right-[50%] translate-y-[-10%] translate-x-[-50%] transition-all ease-out duration-300 `}
    >
      <div className="md:flex  justify-between md:items-center  py-0 md:px-10 px-3 ">
        {/* Logo */}
        <div className="cursor-pointer pt-2">
          <Link href="/">
            <Image src="/yti-warna.png" width="50" height="38" alt="logoYTI" />
          </Link>
        </div>
        {/* Hamburger Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="w-7 absolute top-4 right-5 cursor-pointer md:hidden"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </div>

        <ul
          className={`md:flex md:items-center md:space-x-10 md:static absolute md:z-auto z-[-10] ${
            open ? "top-[20px] " : "top-[-1000px]"
          } w-full h-screen md:h-auto left-0 md:w-auto transition-all  duration-500 ease-in-out md:pt-0  md:bg-transparent py-10 md:py-0   ${
            scrollTop === 0 ? "bg-blue-400" : "bg-blue-400"
          } `}
        >
          {NavLink.map((link) => (
            <li key={link.name} className="my-10 ml-8 md:my-0 ">
              <Link href={link.alamat}>
                <a className="text-gray-200 hover:text-white text-2xl font-bold  md:text-base shadow-xl ">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
