import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import BlurredImage from "../LazyLoadingImage";
import Button from "../ReusedComponent/Button";

gsap.registerPlugin(ScrollTrigger);

const DoResult = () => {
  const doresultRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches
        ? "-10% center"
        : "-10% center";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: doresultRef.current,
            // containerAnimation: scrollTween,
            start: startValue,
            end: "20% 20%",
            // markers: true,
            toggleActions: "play none none none "
          },
          defaults: { duration: 1, stagger: 0.5, ease: "eslatic" }
        })
        .from(".content-left", {opacity: 0, xPercent: -100, scale: 1 })
        .from(".content-right", {opacity: 0, xPercent: 100, scale: 1 })

    }, doresultRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);

  const data = [
    {
      title: "What We Do",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/aboutwedo.webp",
      link: "/service"
    },
    {
      title: "The End Result",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/aboutresult.webp",
      link: "/project"
    }
  ];
  return (
    <div ref={doresultRef} className="my-32">
      <>
        {data.map((item, index) => (
          <div
            className={`${index % 2 === 0 ? "content-left" : "content-right"} flex lg:justify-between flex-wrap lg:flex-nowrap items-center lg:even:flex-row-reverse mb-24`}
            key={item.title}
          >
            <div className="w-[90%] lg:w-[45%] px-16">
              <h1>{item.title}</h1>
              <p className="py-8">{item.text}</p>

              <Link href={item.link} passHref >
                <Button color={"#292F36"} icon={"#CDA274"} text={item.tags} />
              </Link>
            </div>
            <div className="w-[90%] lg:w-[55%]">
              <BlurredImage
                className="rounded-[40px]"
                width={400}
                height={400}
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

export default DoResult;
