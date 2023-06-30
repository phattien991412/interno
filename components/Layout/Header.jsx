import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";

import { gsap } from 'gsap/dist/gsap';

import { Drawer } from "antd";

import { FaBars } from "react-icons/fa";

import BlurredImage from "../LazyLoadingImage";
import { useRouter } from "next/router";

const Header = () => {
  const route = useRouter()
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(route.pathname);
  const headerRef = useRef();
  const liRef = useRef([]);

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

  useLayoutEffect(() => {
    let ctx = gsap.context(
      () => {
        let lis = gsap.utils.toArray("li");
        gsap
          .timeline({ defaults: { duration: 1.5 } })
          .from(headerRef.current, { yPercent: -100, opacity: 0, ease: "back", delay: 3 })
          .from(liRef.current, { opacity: 0, scale: 1, stagger: 0.2 });
      },
      headerRef,
      liRef
    );

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <nav className="flex justify-between items-center my-10 xl:w-[70%] w-[90%] mx-auto">
      <Link href={"/"} onClick={() => setSelect("/")} passHref>
        <div ref={headerRef} className="flex items-center gap-2 ">
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
        {nav.map((item, index) => (
          <li
            ref={(element) => {
              if (element) {
                liRef.current[index] = element;
              }
            }}
            key={item.title}
            onClick={() => setSelect(item.link)}
            className={`${
              item.link === select && "border-b-2 border-primaryColor1"
            }`}
          >
            <Link href={item.link} passHref>
              {item.title}
            </Link>
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
              <li key={item.title} className="my-4">
                <Link href={item.link} passHref>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </Drawer>
      </>
    </nav>
  );
};

export default Header;
