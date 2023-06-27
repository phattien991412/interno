import React from "react";

import BlurredImage from "../LazyLoading";
import Button from "../ReusedComponent/Button";

const DoResult = () => {
  const data = [
    {
      title: "What We Do",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/aboutwedo.png"
    },
    {
      title: "The End Result",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/aboutresult.png"
    }
  ];
  return (
    <div className="my-32">
      <>
        {data.map((item) => (
          <div
            className="flex lg:justify-between flex-wrap lg:flex-nowrap items-center gap-12  lg:even:flex-row-reverse mb-24"
            key={item.title}
          >
            <div className="w-[90%] lg:w-[45%]">
              <h1>{item.title}</h1>
              <p className="py-8">{item.text}</p>

              <Button color={"#292F36"} text={item.tags} />
            </div>
            <div className="w-[90%] lg:w-[55%]">
              <BlurredImage
                className="rounded-[40px]"
                width={300}
                height={200}
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
