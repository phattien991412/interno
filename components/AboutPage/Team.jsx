import React from "react";

import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import BlurredImage from "../LazyLoadingImage";

const Team = () => {
  const data = [
    {
      name: "Charlotte	Levi",
      desc: "Developer, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/aboutpeople1.png",
      email: "levi@gmail.com"
    },
    {
      name: "Nattasha Julie",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/aboutpeople2.png",
      email: "julie@gmail.com"
    },
    {
      name: "Nora Owen",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/aboutpeople3.png",
      email: "owen@gmail.com"
    }
  ];
  return (
    <div className="bg-primaryColor3 w-full">
      <div className="p-8 lg:p-36">
        <h1 className="text-center">
          What the People Thinks <br />
          About Us
        </h1>

        <div className="block lg:flex justify-between items-center gap-12 w-[90%] xl:w-[70%] mx-auto mt-16">
          {data.map((item) => (
            <div key={item.name} className="card overflow-hidden mb-12 lg:mb-0 mx-auto">
              <div className="first-content">
                <BlurredImage width={300} height={400} src={item.image} alt="avatar"/>
              </div>
              <div className="second-content flex flex-col justify-around p-4 text-white ">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>

                <ul className="flex items-center gap-12 mt-4 text-xl">
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <AiOutlineTwitter />
                  </li>
                  <li>
                    <FaLinkedinIn />
                  </li>
                  <li>
                    <BsInstagram />
                  </li>
                </ul>

                <div>
                  <p>{item.phone}</p>
                  <p>{item.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
