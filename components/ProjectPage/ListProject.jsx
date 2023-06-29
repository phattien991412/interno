import React, { useState } from "react";
import BlurredImage from "../LazyLoadingImage";
import Masonry from "react-masonry-css";
import { AiOutlineRight } from "react-icons/ai";
import { useRouter } from "next/router";

const ListProject = () => {
  const [select, setSelect] = useState(1);
  const route = useRouter();

  const listTitle = ["Bathroom", "Bed Room", "Kitchen", "Living Area"];

  const data = [
    {
      type: "Bathroom",
      data: [
        {
          image: "/images/project1.1.png",
          title: "Minimal Bathroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project1.1.png",
          title: "Minimal Bathroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project2.1.webp",
          title: "Minimal Bathroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project3.1.webp",
          title: "Minimal Bathroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project4.1.webp",
          title: "Minimal Bathroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project5.webp",
          title: "Minimal Bathroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project6.webp",
          title: "Minimal Bathroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project7.webp",
          title: "Minimal Bathroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project8.webp",
          title: "Minimal Bathroom",
          tag: "Decor / Artchitecture"
        }
      ]
    },
    {
      type: "Bed Room",
      data: [
        {
          image: "/images/project1.1.png",
          title: "Minimal Bedroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project1.1.png",
          title: "Minimal Bedroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project2.1.webp",
          title: "Minimal Bedroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project3.1.webp",
          title: "Minimal Bedroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project4.1.webp",
          title: "Minimal Bedroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project5.webp",
          title: "Minimal Bedroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project6.webp",
          title: "Minimal Bedroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project7.webp",
          title: "Minimal Bedroom",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project8.webp",
          title: "Minimal Bedroom",
          tag: "Decor / Artchitecture"
        }
      ]
    },
    {
      type: "Kitchen",
      data: [
        {
          image: "/images/project1.webp",
          title: "Minimal Kitchen",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project1.webp",
          title: "Minimal Kitchen",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project2.webp",
          title: "Minimal Kitchen",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project3.webp",
          title: "Minimal Kitchen",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project4.webp",
          title: "Minimal Kitchen",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/article1.webp",
          title: "Minimal Kitchen",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/article2.webp",
          title: "Minimal Kitchen",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/article3.webp",
          title: "Minimal Kitchen",
          tag: "Decor / Artchitecture"
        }
      ]
    },
    {
      type: "Living Area",
      data: [
        {
          image: "/images/project1.1.png",
          title: "Minimal Living Area",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project1.1.png",
          title: "Minimal Living Area",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project2.1.webp",
          title: "Minimal Living Area",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project3.1.webp",
          title: "Minimal Living Area",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project4.1.webp",
          title: "Minimal Living Area",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project5.webp",
          title: "Minimal Living Area",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project6.webp",
          title: "Minimal Living Area",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project7.webp",
          title: "Minimal Living Area",
          tag: "Decor / Artchitecture"
        },
        {
          image: "/images/project8.webp",
          title: "Minimal Living Area",
          tag: "Decor / Artchitecture"
        }
      ]
    }
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1
  };
  return (
    <div>
      <ul className="flex justify-center gap-4 lg:gap-8 w-fit mx-auto mt-32 mb-16 border border-primaryColor1 rounded-[18px]">
        {listTitle.map((item, index) => (
          <li
            onClick={() => setSelect(index)}
            className={`${
              select === index && "bg-primaryColor1 text-white rounded-[18px]"
            } px-4 lg:px-8 py-4 cursor-pointer`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data[select]?.data.map((item) => (
          <div key={item.image}>
            <BlurredImage
              src={item.image}
              width={500}
              height={500}
              alt={"project"}
            />
            <div className="flex justify-between items-center gap-8 py-8 bg-white">
              <div>
                <h3>{item.title}</h3>
                <p>{item.tag}</p>
              </div>
              <p
                onClick={() => route.push("/project/detail")}
                className="grid place-items-center w-[70px] h-[70px] rounded-full bg-primaryColor3 hover:bg-primaryColor1 hover:text-white cursor-pointer transition-all duration-500"
              >
                <AiOutlineRight />
              </p>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ListProject;
