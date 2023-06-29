import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import ListNews from "../ReusedComponent/ListNews";

const Blog = () => {
  const data = [
    {
      image: "/images/article1.webp",
      title: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022 ",
      design: "Kitchen Design"
    },
    {
      image: "/images/article2.webp",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022 ",
      design: "Living Design"
    },
    {
      image: "/images/article3.webp",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022 ",
      design: "Interior Design"
    }
  ];
  return (
    <div className="my-32">
      <div className="text-center mx-8 lg:mx-0 mb-[52px]">
        <h1 >Articles & News</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>

     <ListNews data={data} />
    </div>
  );
};

export default Blog;
