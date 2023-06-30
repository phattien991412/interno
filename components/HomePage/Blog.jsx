import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import ListNews from "../ReusedComponent/ListNews";
import { SplitText } from "@/modules/SplitText";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
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
    }
  ];

  const blogRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches
        ? "-10% center"
        : "-10% center";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: blogRef.current,
            // containerAnimation: scrollTween,
            start: startValue,
            end: "20% 20%",
            // markers: true,
            toggleActions: "play none none none "
          },
          defaults: { duration: 1 }
        })
        .from(".character", { opacity: 0, scale: 1, stagger: 0.05 })
        .from(".text", { opacity: 0, scale: 1.4, duration: 1, ease: "back" })
        .from(".news", { opacity: 0, xPercent: 100, duration: 1, ease: "eslatic" });

    }, blogRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  return (
    <div ref={blogRef} className="my-32 overflow-x-hidden">
      <div className="text-center mx-8 lg:mx-0 mb-[52px]">
        <h1>
          <SplitText text={"Articles & News"} />
        </h1>
        <p className="text">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>

      <div className="news">
        <ListNews data={data} />
      </div>
    </div>
  );
};

export default Blog;
