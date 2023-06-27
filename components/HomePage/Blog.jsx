import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Blog = () => {
  const data = [
    {
      image: "/images/article1.png",
      title: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022 ",
      design: "Kitchen Design"
    },
    {
      image: "/images/article2.png",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022 ",
      design: "Living Design"
    },
    {
      image: "/images/article3.png",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022 ",
      design: "Interior Design"
    }
  ];
  return (
    <div className="my-32">
      <div className="text-center mx-8 lg:mx-0">
        <h1 >Articles & News</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>

      <div className="mt-[52px] block lg:grid grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={item.title}
            className="border-2 rounded-[40px] odd:bg-white even:bg-primaryColor3 mb-8 lg:mb-0 mx-8 lg:mx-0"
          >
            <div className="m-5">
              <div className="relative">
                <Image
                  className="rounded-tr-[40px] rounded-tl-[40px]"
                  width={200}
                  height={200}
                  src={item.image}
                  alt="design"
                />
                <p className="absolute left-4 bottom-4 bg-white rounded-md rounded-bl-none text-base px-2 py-1">
                  {item.design}
                </p>
              </div>

              <div className="">
                <h3 className="pt-[21px] pb-[30px]">
                  Let’s Get Solution For Building Construction Work
                </h3>
                <div className="flex justify-between items-center text-base pb-2">
                  <p>26 December,2022 </p>
                  <p
                    className={`${
                      index % 2 !== 0 ? "bg-white" : "bg-primaryColor3"
                    } grid place-items-center w-[52px] h-[52px] rounded-full`}
                  >
                    <AiOutlineRight />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
