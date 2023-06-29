import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { AiOutlineRight } from "react-icons/ai";

import BlurredImage from "../LazyLoadingImage";
import { SplitText } from "@/modules/SplitText";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const data = [
    {
      image: "/images/project1.webp",
      type: "Modern Kitchen",
      category: "Decor / Artchitecture"
    },
    {
      image: "/images/project2.webp",
      type: "Modern Kitchen",
      category: "Decor / Artchitecture"
    },
    {
      image: "/images/project3.webp",
      type: "Modern Kitchen",
      category: "Decor / Artchitecture"
    },
    {
      image: "/images/project4.webp",
      type: "Modern Kitchen",
      category: "Decor / Artchitecture"
    }
  ];

  const projectRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches
        ? "-20% center"
        : "-10% center";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: projectRef.current,
            // containerAnimation: scrollTween,
            start: startValue,
            end: "20% 20%",
            // markers: true,
            toggleActions: "play none none none "
          }
        })
        .from(".character", { opacity: 0, scale: 1, stagger: 0.05 })
        .from(".text", { opacity: 0, scale: 1.4, duration: 1, ease: "back" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: projectRef.current,
            // containerAnimation: scrollTween,
            start: "20% center",
            end: "20% 20%",
            // markers: true,
            toggleActions: "play none none none "
          }
        })
        .from(".content", { opacity: 0, yPercent: -50, stagger: 0.5, ease: "back" })

      // .from("button", { opacity: 0, scale: 1, stagger: 0.1 });
    }, projectRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);

  return (
    <div ref={projectRef} className="my-32">
      <div className="text-center mx-8 lg:mx-0">
        <h1>
          <SplitText text={"Follow Our Projects"} />
        </h1>
        <p className="text">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="block lg:grid grid-cols-2 gap-16 mt-[93px] mx-8 lg:mx-0 ">
        {data.map((item, index) => (
          <div className="content mb-8 lg:mb-0" key={index}>
            <div>
              <BlurredImage
                className={`${index === 0 ? "rounded-tr-[40px]" : ""} ${
                  index === 1 ? "rounded-tl-[40px]" : ""
                } ${index === 2 ? "rounded-br-[40px]" : ""} ${
                  index === 3 ? "rounded-bl-[40px]" : ""
                } `}
                width={300}
                height={300}
                src={item.image}
                alt="project"
              />
            </div>
            <div className="flex justify-between items-center mt-6">
              <div>
                <p className="font-semibold">{item.type}</p>
                <p className="text-base">{item.category}</p>
              </div>
              <Link href={"/project"} passHref>
                <p className="grid place-items-center w-[70px] h-[70px] rounded-full bg-primaryColor3 hover:bg-primaryColor1 hover:text-white cursor-pointer transition-all duration-500">
                  <AiOutlineRight />
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
