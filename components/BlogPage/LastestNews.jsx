import React from "react";

import { AiOutlineRight } from "react-icons/ai";

import BlurredImage from "../LazyLoadingImage";

const LastestNews = () => {
  return (
    <div className="mt-36">
      <h1 className="pb-7">Latest Post</h1>
      <div className="block lg:grid grid-cols-2 items-center border rounded-[62px] p-8">
        <div className="mb-8 lg:mb-0">
          <BlurredImage
            className="rounded-[62px]"
            width={500}
            height={500}
            src={"/images/lastestnews.png"}
            alt="news"
          />
        </div>
        <div className="lg:px-16">
          <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
          <p className="py-8">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
          </p>
          <p>
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>
          <div className="flex justify-between items-center text-base pt-12 pb-2">
            <p>26 December,2022 </p>
            <p
              className={`bg-primaryColor3 grid place-items-center w-[52px] h-[52px] rounded-full hover:bg-primaryColor1 hover:text-white cursor-pointer transition-all duration-500`}
            >
              <AiOutlineRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestNews;
