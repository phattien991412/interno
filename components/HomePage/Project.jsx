import React from "react";
import Image from "next/image";

import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";

const Project = () => {
  const data = [
    {
      image: "/images/project1.png",
      type: "Modern Kitchen",
      category: "Decor / Artchitecture"
    },
    {
      image: "/images/project2.png",
      type: "Modern Kitchen",
      category: "Decor / Artchitecture"
    },
    {
      image: "/images/project3.png",
      type: "Modern Kitchen",
      category: "Decor / Artchitecture"
    },
    {
      image: "/images/project4.png",
      type: "Modern Kitchen",
      category: "Decor / Artchitecture"
    }
  ];

  return (
    <div className="my-32">
      <div className="text-center mx-8 lg:mx-0">
        <h1>Follow Our Projects</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="block lg:grid grid-cols-2 gap-16 mt-[93px] mx-8 lg:mx-0 ">
        {data.map((item, index) => (
          <div className="mb-8 lg:mb-0" key={index}>
            <div>
              <Image
                className={`${index === 0 ? "rounded-tr-[40px]" : ""} ${
                  index === 1 ? "rounded-tl-[40px]" : ""
                } ${index === 2 ? "rounded-br-[40px]" : ""} ${
                  index === 3 ? "rounded-bl-[40px]" : ""
                } `}
                width={300}
                height={300}
                src={item.image}
                alt="project"
              />
            </div>
            <div className="flex justify-between items-center mt-6">
              <div>
                <p className="font-semibold">{item.type}</p>
                <p className="text-base">{item.category}</p>
              </div>
              <Link href={"/project"}>
                <p className="grid place-items-center w-[70px] h-[70px] rounded-full bg-primaryColor3 hover:bg-primaryColor1 hover:text-white cursor-pointer transition-all duration-500">
                  <AiOutlineRight />
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
