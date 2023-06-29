import React from "react";
import BlurredImage from "../LazyLoadingImage";
import Button from "../ReusedComponent/Button";
import Image from "next/image";

const Work = () => {
  const data = [
    {
      title: "Concept & Details",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/work1.png",
      icon: "/images/icon.png"
    },
    {
      title: "Idea for Work",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/work2.png",
      icon: "/images/icon1.png"
    },
    {
      title: "Design",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/work3.png",
      icon: "/images/icon2.png"
    },
    {
      title: "Perfection",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/work4.png",
      icon: "/images/icon3.png"
    }
  ];
  return (
    <div className="my-32 bg-primaryColor3 pb-24 rounded-mainRadius">
      <div className="text-center pt-32 pb-20 w-3/5 mx-auto">
        <h1>How We Work</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <>
        {data.map((item, index) => (
          <div
            className="flex lg:justify-between flex-wrap lg:flex-nowrap items-center lg:even:flex-row-reverse mb-24"
            key={item.title}
          >
            <div className="w-[90%] lg:w-1/2 px-16">
              <div className="flex justify-between items-center">
                <div>
                  <Image width={50} height={50} src={item.icon} alt="icon" />
                </div>
                <p className="text-[120px] text-white"> 0{index + 1} </p>
              </div>
              <h1>{item.title}</h1>
              <p className="py-8">{item.text}</p>

              {/* <Button color={"#292F36"} icon={"#CDA274"} text={item.tags} /> */}
            </div>
            <div className="w-[90%] lg:w-1/2">
              <BlurredImage
                className="rounded-bl-[400px]"
                width={400}
                height={500}
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

export default Work;
