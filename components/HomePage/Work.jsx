import React, { useLayoutEffect, useRef } from "react";

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const data = [
    {
      title: "Project Plan",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: ""
    },
    {
      title: "Interior Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: ""
    },
    {
      title: "Realization",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: ""
    }
  ];

  const workRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches ? "50% bottom" : "-10% center";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: workRef.current,
            // containerAnimation: scrollTween,
            start: startValue,
            end: "top center",
            // markers: true,
            toggleActions: "play none none reverse "
          },
          defaults: { duration: 1 }
        })
        .from(".content", {
          opacity: 0,
          scale: 0.1,
          ease: "eslatic",
          stagger: 0.5
        })
    }, workRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  return (
    <div ref={workRef} className="block lg:grid grid-cols-3 gap-8 my-32 mx-4">
      {data.map((item) => (
        <div className="content text-center px-8 border-b-2 lg:border-none py-4 lg:py-0" key={item.title}>
          <h3 className="font-medium pb-3">{item.title}</h3>
          <p>{item.text}</p>
          <button className="flex justify-center items-center gap-3 mx-auto my-4 text-lg font-medium"><span className="readmore">Read more</span> <FaArrowRight className="text-primaryColor1"/></button>
        </div>
      ))}
    </div>
  );
};

export default Work;
