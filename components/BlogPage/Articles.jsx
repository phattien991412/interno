import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { AiOutlineRight } from "react-icons/ai";

import ListNews from "../ReusedComponent/ListNews";
import { SplitText } from "@/modules/SplitText";

gsap.registerPlugin(ScrollTrigger);

const Articles = () => {
  const articleRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches
        ? "-10% center"
        : "-10% center";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: articleRef.current,
            // containerAnimation: scrollTween,
            start: startValue,
            end: "20% 20%",
            markers: true,
            toggleActions: "play none none none "
          },
          defaults: { duration: 1, stagger: 0.5, ease: "eslatic" }
        })
        .from(".character", { opacity: 0, scale: 1, stagger: 0.05 })
        .from(".list", {opacity: 0, scale: 1.4, ease: "back" })
    }, articleRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  const data = [
    {
      image: "/images/article1.webp",
      title: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022 ",
      design: "Kitchen Design"
    },
    {
      image: "/images/article2.webp",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022 ",
      design: "Living Design"
    },
    {
      image: "/images/article3.webp",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022 ",
      design: "Interior Design"
    },
    {
      image: "/images/article4.webp",
      title: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022 ",
      design: "Kitchen Design"
    },
    {
      image: "/images/article5.webp",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022 ",
      design: "Living Design"
    },
    {
      image: "/images/article6.webp",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022 ",
      design: "Interior Design"
    }
  ];

  const listNum = ["01", "02", "03", <AiOutlineRight />];

  return (
    <div ref={articleRef} className="mt-36">
      <h1 className="pb-8"><SplitText text={"Articles & News"} /></h1>
      <div className="list">
      <ListNews data={data} />
      </div>

      <ul className="flex justify-center items-center gap-4 my-8">
        {listNum.map((item) => (
          <li
            key={item}
            className="grid place-items-center w-14 h-14 border border-primaryColor1 rounded-full first:bg-primaryColor3 font-medium cursor-pointer hover:bg-primaryColor3 transition-all duration-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
