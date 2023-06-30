import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { gsap } from "gsap/dist/gsap";

import Header from "./Header";
import Footer from "./Footer";
import { AiOutlineArrowUp } from "react-icons/ai";

const Layout = ({ children }) => {
  const route = useRouter();

  const [scrollPosition, setScrollPosition] = useState(0);

  const layoutRef = useRef();
  const toTopRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      toTopRef.current = gsap.to(".totop", {
        opacity: 1,
        duration: 1.5,
        ease: "eslatic"
      });
    }, layoutRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 700) {
      toTopRef.current?.play();
    } else if (scrollPosition < 700) {
      toTopRef.current?.reverse();
    }
  }, [scrollPosition]);

  const handleToTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth"
    }); // for safari
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div
      ref={layoutRef}
      className="w-screen max-w-screen-[100vw] overflow-x-hidden"
    >
      <Header />
      <main>{children}</main>
      <div
        onClick={handleToTop}
        className="totop opacity-0 grid place-items-center w-14 h-14 rounded-full bg-primaryColor1 text-white text-3xl fixed right-10 bottom-20 cursor-pointer hover:bg-[#efbd88]"
      >
        <AiOutlineArrowUp />
      </div>
      {route.pathname !== "/404" && <Footer />}
    </div>
  );
};

export default Layout;
