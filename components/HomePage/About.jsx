import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { BsTelephone } from "react-icons/bs";

import Button from "../ReusedComponent/Button";
import BlurredImage from "../LazyLoadingImage";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches ? "-10% center" : "-10% center";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            // containerAnimation: scrollTween,
            start: startValue,
            end: "20% 20%",
            // markers: true,
            toggleActions: "play none none none "
          },
          defaults: { duration: 1 }
        })
        .from(".content-left", {
          opacity: 0,
          xPercent: 100,
          ease: "eslatic"
        })
        .from(".content-right", {
          opacity: 0,
          yPercent: -100,
          ease: "eslatic",
          delay: 0.3
        });
    }, aboutRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);

  return (
    <div ref={aboutRef} className="block lg:grid grid-cols-2 items-center">
      <div className="content-left px-8 lg:pr-32 mb-12 lg:mb-0">
        <h1>We Create The Art Of Stylish Living Stylishly</h1>
        <p className="py-9">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <div className="flex items-center gap-4 pb-8">
          <p className="bg-[#F4F0EC] text-primaryColor1 text-3xl w-[93px] h-[93px] rounded-full grid place-items-center">
            <BsTelephone />
          </p>
          <p>
            <span>0909123123</span>
            <br />
            <span>Call Us Anytime</span>
          </p>
        </div>
        <Link href={"/contact"} passHref>
          <Button
            color={"#292F36"}
            icon={"#CDA274"}
            text={"Get Free Estimate"}
          />
        </Link>
      </div>
      <div className="content-right ">
        <BlurredImage
          src={"/images/about.webp"}
          width={500}
          height={500}
          alt={"about us"}
          className="rounded-tr-[320px] rounded-bl-[110px]"
        />
      </div>
    </div>
  );
};

export default About;
