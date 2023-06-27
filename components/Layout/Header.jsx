import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi"

const Header = () => {
  return (
    <nav className="flex justify-between items-center my-10 xl:w-[70%] w-[90%] mx-auto">
      <div className="flex gap-2 ">
        <div className="">
          <Image className="object-scale-down" width={30} height={30} src="/images/logo.png" alt="logo" />
        </div>
        <h2 className="text-[40px] font-semibold">Interno</h2>
      </div>
      <ul className="xl:flex gap-10 text-center items-center text-xl hidden">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page">Pages</Link>
        </li>
        <li>
          <Link href="/service">Services</Link>
        </li>
        <li>
          <Link href="/project">Project</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li><FiSearch/></li>
      </ul>
      <p className="xl:hidden block"><FaBars/></p>
    </nav>
  );
};

export default Header;
