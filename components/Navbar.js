import Link from "next/link";
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
    { name: "Home", alamat: "/home" },
    { name: "Profile", alamat: "/profile" },
    { name: "News & Event", alamat: "/news-event" },
    { name: "Blog", alamat: "/blog" },
    { name: "Hubungi Kami", alamat: "/contact" },
  ];

  return (
    <div
      className={`w-full fixed ${
        scrollTop === 0 ? "bg-red-200" : "bg-blue-500"
      } h-30  z-10  mx-auto left-[50%] right-[50%] translate-y-[-10%] translate-x-[-50%] transition-all ease-out duration-300`}
    >
      <div className="md:flex  justify-between md:items-center py-4 md:px-10 px-3 border border-green-500">
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="font-bold">Youngtalk</h1>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="w-7 absolute top-4 right-5 cursor-pointer md:hidden"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </div>

        <ul
          className={`md:flex md:items-center md:space-x-10 md:static absolute md:z-auto z-[-10] ${
            open ? "top-[57px] " : "top-[-700px]"
          } w-full h-screen md:h-auto left-0 md:w-auto transition-all duration-500 ease-in-out md:pt-0  md:bg-transparent py-10 md:py-0 border border-red-300 bg-blue-400`}
        >
          {NavLink.map((link) => (
            <li key={link.name} className="my-10 ml-8 md:my-0 ">
              <Link href={link.alamat}>
                <a className="text-gray-600 hover:text-gray-400 text-2xl font-bold  md:text-base ">
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
