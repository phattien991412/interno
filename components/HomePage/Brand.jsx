import Image from "next/image";
import React from "react";

const Brand = () => {
  const data = [
    "/images/brand1.png",
    "/images/brand2.png",
    "/images/brand3.png",
    "/images/brand4.png",
    "/images/brand5.png"
  ];
  return (
    <div className="flex justify-between items-center gap-4 md:gap-8 mx-8 md:mx-16 ">
      {data.map((item) => (
        <div key={item}>
          <Image width={100} height={100} src={item} alt="logo brand" />
        </div>
      ))}
    </div>
  );
};

export default Brand;
