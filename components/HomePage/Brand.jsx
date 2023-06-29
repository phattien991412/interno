import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import BlurredImage from "../LazyLoadingImage";

gsap.registerPlugin(ScrollTrigger);

const Brand = () => {
  const data = [
    "/images/brand1.webp",
    "/images/brand2.webp",
    "/images/brand3.webp",
    "/images/brand4.png",
    "/images/brand5.png"
  ];

  const brandRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches ? "20% 80%" : "-10% center";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: brandRef.current,
            // containerAnimation: scrollTween,
            start: startValue,
            end: "20% 20%",
            // markers: true,
            toggleActions: "play none none none "
          }
        })
        .from(".content", { yPercent: -50 , opacity: 0, stagger: 0.4 });
        
      // .from("button", { opacity: 0, scale: 1, stagger: 0.1 });
    }, brandRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);

  return (
    <div ref={brandRef} className="flex justify-between items-center gap-4 md:gap-8 mx-8 md:mx-16 ">
      {data.map((item) => (
        <div className="content" key={item}>
          <BlurredImage width={100} height={100} src={item} alt="logo brand" />
        </div>
      ))}
    </div>
  );
};

export default Brand;
