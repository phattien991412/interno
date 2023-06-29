import React from "react";
import Link from "next/link";

import { AiOutlineRight } from "react-icons/ai";

import BlurredImage from "../LazyLoadingImage";

const ListNews = ({ data }) => {
  return (
    <div className="block lg:grid grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div
          key={item.title}
          className="border-2 rounded-[40px] odd:bg-white even:bg-primaryColor3 mb-8 lg:mb-0 mx-8 lg:mx-0"
        >
          <div className="m-5">
            <div className="relative">
              <BlurredImage
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
                <Link href={"/blog"} passHref >
                  <p
                    className={`${
                      index % 2 !== 0 ? "bg-white" : "bg-primaryColor3"
                    } grid place-items-center w-[52px] h-[52px] rounded-full hover:bg-primaryColor1 hover:text-white cursor-pointer transition-all duration-500`}
                  >
                    <AiOutlineRight />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListNews;
