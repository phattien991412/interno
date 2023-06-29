import React from "react";

import { BsTelephone } from "react-icons/bs";

import BlurredImage from "../LazyLoadingImage";
import Button from "../ReusedComponent/Button";
import Link from "next/link";

const About = () => {
 
  return (
    <div className="block lg:grid grid-cols-2 items-center">
      <div className="px-8 lg:pr-32 mb-12 lg:mb-0">
        <h1>
          We Create The Art Of Stylish Living Stylishly
        </h1>
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
        <Link href={"/contact"} passHref ><Button color={"#292F36"} icon={"#CDA274"} text={"Get Free Estimate"} /></Link>
      </div>
      <BlurredImage src={"/images/about.webp"} width={500} height={500} alt={"about us"} className="rounded-tr-[320px] rounded-bl-[110px]" />
    </div>
  );
};

export default About;
