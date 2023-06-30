import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";

import { gsap } from "gsap/dist/gsap";

import Button from "../ReusedComponent/Button";
import BlurredImage from "../LazyLoadingImage";
import { SplitText } from "@/modules/SplitText";

const Home = () => {
  const bannerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { duration: 1, stagger: 0.5 }
        })
        .from(".banner", { opacity: 0, scale: 0, duration: 1.5 })
        .from(".character", { opacity: 0, scale: 1, stagger: 0.1 })
        .from(".text", { opacity: 0, scale: 1.4, duration: 1, ease: "back" });
      // .from("button", { opacity: 0, scale: 1, ease: "back" });
    }, bannerRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  return (
    <div ref={bannerRef} className="relative ">
      <div className="banner">
        <BlurredImage
          className={" bg-cover bg-center bg-no-repeat h-[80vh] rounded-[56px]"}
          width={800}
          height={800}
          src={"/images/banner.webp"}
          alt={"banner"}
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-10 lg:w-2/5 w-full lg:pr-0 pr-16">
        <h1 className="lg:text-[65px] text-5xl">
          {" "}
          <SplitText text={"Let Your Home Be Unique"} />{" "}
        </h1>
        <p className="text text-[#4D5053] text-[22px] leading-[150%] tracking-[0.22px] mt-[18px] mb-[21px]">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <Link href={"/service"} passHref>
          <Button color={"#292F36"} icon={"#CDA274"} text={"Get Started"} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
