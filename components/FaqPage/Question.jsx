import React from "react";

import { Collapse } from "antd";

import BlurredImage from "../LazyLoadingImage";

const Question = () => {


  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <h1 className="text-center mt-36">Every Question Answered</h1>

      <div className="grid grid-cols-2 items-center mt-16">
        <div>
          <Collapse className="w-[90%] bg-transparent border-none" items={data} onChange={onChange} />
        </div>
        <div>
          <BlurredImage
            className={"rounded-mainRadius"}
            width={400}
            height={400}
            src={"/images/faq-img1.png"}
            alt={"faq"}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
