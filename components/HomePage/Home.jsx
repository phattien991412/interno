import React from "react";
import Button from "../Button";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: "url(/images/banner.png)" }}
      className="relative bg-cover bg-center bg-no-repeat h-[80vh] rounded-[56px]"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-10 lg:w-2/5 w-full lg:pr-0 pr-16">
        <h1 className="lg:text-[65px] text-5xl">
          Let Your Home Be Unique
        </h1>
        <p className="text-[#4D5053] text-[22px] leading-[150%] tracking-[0.22px] mt-[18px] mb-[21px]">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <Button color={"#292F36"} text={"Get Started"} />
      </div>
    </div>
  );
};

export default Home;
