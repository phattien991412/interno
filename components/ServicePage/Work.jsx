import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import BlurredImage from "../LazyLoadingImage";
import { SplitText } from "@/modules/SplitText";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches
        ? "-10% center"
        : "-10% center";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: workRef.current,
            // containerAnimation: scrollTween,
            start: startValue,
            end: "20% 20%",
            // markers: true,
            toggleActions: "play none none none "
          },
          defaults: { duration: 1, stagger: 0.5, ease: "eslatic" }
        })
        .from(".character", { opacity: 0, scale: 1, stagger: 0.05 })
        .from(".text", { opacity: 0, scale: 1.4, duration: 1, ease: "back" })
        .from(".content-left", {opacity: 0, xPercent: -100, scale: 1 })
        .from(".content-right", {opacity: 0, xPercent: 100, scale: 1 })
    }, workRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  const data = [
    {
      title: "Concept & Details",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/work1.webp",
      icon: "/images/icon.webp"
    },
    {
      title: "Idea for Work",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/work2.webp",
      icon: "/images/icon1.webp"
    },
    {
      title: "Design",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/work3.webp",
      icon: "/images/icon2.webp"
    },
    {
      title: "Perfection",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/work4.webp",
      icon: "/images/icon3.webp"
    }
  ];
  return (
    <div ref={workRef} className="my-32 bg-primaryColor3 pb-24 rounded-mainRadius">
      <div className="text-center pt-32 pb-20 w-3/5 mx-auto">
        <h1><SplitText text={"How We Work"} /></h1>
        <p className="text">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <>
        {data.map((item, index) => (
          <div
            className={`${index % 2 === 0 ? "content-left" : "content-right"} flex lg:justify-between flex-wrap lg:flex-nowrap items-center lg:even:flex-row-reverse mb-24`}
            key={item.title}
          >
            <div className="w-[90%] lg:w-1/2 px-16">
              <div className="flex justify-between items-center">
                <div>
                  <BlurredImage width={50} height={50} src={item.icon} alt="icon" />
                </div>
                <p className="text-[120px] text-white"> 0{index + 1} </p>
              </div>
              <h1>{item.title}</h1>
              <p className="py-8">{item.text}</p>

              {/* <Button color={"#292F36"} icon={"#CDA274"} text={item.tags} /> */}
            </div>
            <div className="w-[90%] lg:w-1/2">
              <BlurredImage
                className="rounded-bl-[400px]"
                width={400}
                height={500}
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Work;
