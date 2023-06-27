import React from "react";
import Image from "next/image";

import { FiSearch } from "react-icons/fi"
import { FaBars } from "react-icons/fa";

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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#page">Pages</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li><FiSearch/></li>
      </ul>
      <p className="xl:hidden block"><FaBars/></p>
    </nav>
  );
};

export default Header;
