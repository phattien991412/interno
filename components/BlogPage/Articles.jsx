import React from "react";
import ListNews from "../ReusedComponent/ListNews";
import { AiOutlineRight } from "react-icons/ai";

const Articles = () => {
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
    },
    {
      image: "/images/article4.png",
      title: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022 ",
      design: "Kitchen Design"
    },
    {
      image: "/images/article5.png",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022 ",
      design: "Living Design"
    },
    {
      image: "/images/article6.png",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022 ",
      design: "Interior Design"
    }
  ];

  const listNum = ["01", "02", "03", <AiOutlineRight />];

  return (
    <div className="mt-36">
      <h1 className="pb-8">Articles & News</h1>
      <ListNews data={data} />

      <ul className="flex justify-center items-center gap-4 my-8">
        {listNum.map((item) => (
          <li
            key={item}
            className="grid place-items-center w-14 h-14 border border-primaryColor1 rounded-full first:bg-primaryColor3 font-medium cursor-pointer hover:bg-primaryColor3 transition-all duration-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
