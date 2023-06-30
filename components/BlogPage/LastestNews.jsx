import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { AiOutlineRight } from "react-icons/ai";

import BlurredImage from "../LazyLoadingImage";
import { SplitText } from "@/modules/SplitText";

gsap.registerPlugin(ScrollTrigger);

const LastestNews = () => {
  const lastestRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches
        ? "-10% center"
        : "-10% center";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: lastestRef.current,
            // containerAnimation: scrollTween,
            start: startValue,
            end: "20% 20%",
            markers: true,
            toggleActions: "play none none none "
          },
          defaults: { duration: 1, stagger: 0.5, ease: "eslatic" }
        })
        .from(".content-left", {opacity: 0, xPercent: -100, scale: 1 })
        .from(".content-right", {opacity: 0, xPercent: 100, scale: 1 })
    }, lastestRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  return (
    <div ref={lastestRef} className="mt-36">
      <h1 className="pb-7">Latest Post</h1>
      <div className="block lg:grid grid-cols-2 items-center border rounded-[62px] p-8">
        <div className="content-left mb-8 lg:mb-0">
          <BlurredImage
            className="rounded-[62px]"
            width={500}
            height={500}
            src={"/images/lastestnews.webp"}
            alt="news"
          />
        </div>
        <div className="content-right lg:px-16">
          <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
          <p className="py-8">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
          </p>
          <p>
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>
          <div className="flex justify-between items-center text-base pt-12 pb-2">
            <p>26 December,2022 </p>
            <p
              className={`bg-primaryColor3 grid place-items-center w-[52px] h-[52px] rounded-full hover:bg-primaryColor1 hover:text-white cursor-pointer transition-all duration-500`}
            >
              <AiOutlineRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestNews;
