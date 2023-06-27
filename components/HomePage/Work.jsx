import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
  return (
    <div className="block lg:grid grid-cols-3 gap-8 my-32 mx-4">
      {data.map((item) => (
        <div className="text-center px-8 border-b-2 lg:border-none py-4 lg:py-0" key={item.title}>
          <h3 className="font-medium pb-3">{item.title}</h3>
          <p>{item.text}</p>
          <button className="flex justify-center items-center gap-3 mx-auto my-4 text-lg font-medium"><span className="readmore">Read more</span> <FaArrowRight className="text-primaryColor1"/></button>
        </div>
      ))}
    </div>
  );
};

export default Work;
