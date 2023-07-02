import React from "react";

import { Collapse } from "antd";

import BlurredImage from "../LazyLoadingImage";

const FAQ = ({ data, className, image, title }) => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <h1 className="text-4xl lg:text-[50px] text-center mt-20 lg:mt-36">{title}</h1>

      <div className={`${className} block lg:flex justify-between items-center mt-16`}>
        <div className="w-[90%] mx-auto lg:w-1/2">
          <Collapse
            className="lg:px-10 bg-transparent border-none"
            items={data}
            onChange={onChange}
          />
        </div>
        <div className="w-[90%] mx-auto lg:w-1/2">
          <BlurredImage
            className={"rounded-mainRadius"}
            width={400}
            height={400}
            src={image}
            alt={"faq"}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
