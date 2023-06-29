import React from "react";

import BlurredImage from "../LazyLoadingImage";

const Brand = () => {
  const data = [
    "/images/brand1.webp",
    "/images/brand2.webp",
    "/images/brand3.webp",
    "/images/brand4.png",
    "/images/brand5.png"
  ];
  return (
    <div className="flex justify-between items-center gap-4 md:gap-8 mx-8 md:mx-16 ">
      {data.map((item) => (
        <div key={item}>
          <BlurredImage width={100} height={100} src={item} alt="logo brand" />
        </div>
      ))}
    </div>
  );
};

export default Brand;
