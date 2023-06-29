import React, { useState } from "react";
import Link from "next/link";

import { Drawer } from "antd";

import { FaBars } from "react-icons/fa";

import BlurredImage from "../LazyLoadingImage";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("Home");

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const nav = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "About Us",
      link: "/about"
    },
    {
      title: "Services",
      link: "/service"
    },
    {
      title: "Project",
      link: "/project"
    },
    {
      title: "Blog",
      link: "/blog"
    },
    {
      title: "Contact",
      link: "/contact"
    },
    {
      title: "FAQ",
      link: "/faq"
    }
  ];
  return (
    <nav className="flex justify-between items-center my-10 xl:w-[70%] w-[90%] mx-auto">
      <Link href={"/"}>
        <div className="flex items-center gap-2 ">
          <div className="cursor-pointer">
            <BlurredImage
              className="object-scale-down"
              width={30}
              height={30}
              src="/images/logo.webp"
              alt="logo"
            />
          </div>
          <h2 className="text-[40px] font-semibold">Interno</h2>
        </div>
      </Link>
      <ul className="nav xl:flex gap-10 text-center items-center text-xl hidden">
        {nav.map((item) => (
          <li
            onClick={() => setSelect(item.title)}
            className={`${
              item.title === select && "border-b-2 border-primaryColor1"
            }`}
          >
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <>
        <p onClick={showDrawer} className="xl:hidden block">
          <FaBars />
        </p>

        <Drawer
          className="w-1/2 h-screen"
          title="Interno"
          placement="left"
          onClose={onClose}
          open={open}
        >
          <ul className=" text-xl ">
            {nav.map((item) => (
              <li className="my-4">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </Drawer>
      </>
    </nav>
  );
};

export default Header;
