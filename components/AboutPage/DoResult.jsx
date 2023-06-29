import React from "react";

import BlurredImage from "../LazyLoadingImage";
import Button from "../ReusedComponent/Button";
import Link from "next/link";

const DoResult = () => {
  const data = [
    {
      title: "What We Do",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/aboutwedo.webp",
      link: "/service"
    },
    {
      title: "The End Result",
      text: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
      tags: "Our Concept",
      image: "/images/aboutresult.webp",
      link: "/project"
    }
  ];
  return (
    <div className="my-32">
      <>
        {data.map((item) => (
          <div
            className="flex lg:justify-between flex-wrap lg:flex-nowrap items-center lg:even:flex-row-reverse mb-24"
            key={item.title}
          >
            <div className="w-[90%] lg:w-[45%] px-16">
              <h1>{item.title}</h1>
              <p className="py-8">{item.text}</p>

              <Link href={item.link}>
                <Button color={"#292F36"} icon={"#CDA274"} text={item.tags} />
              </Link>
            </div>
            <div className="w-[90%] lg:w-[55%]">
              <BlurredImage
                className="rounded-[40px]"
                width={400}
                height={400}
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
