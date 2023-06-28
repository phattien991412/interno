import React from "react";
import BlurredImage from "../LazyLoadingImage";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const TeamMembers = () => {
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
    },
    {
      name: "John Smith",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/team1.png",
      email: "owen@gmail.com"
    },
    {
      name: "Sofia Carter",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/team2.png",
      email: "owen@gmail.com"
    },
    {
      name: "Avery Jackson",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/team3.png",
      email: "owen@gmail.com"
    },
    {
      name: "Luna James",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/team4.png",
      email: "owen@gmail.com"
    },
    {
      name: "Gianna Mateo",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/team5.png",
      email: "owen@gmail.com"
    }
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-12 mx-auto mt-16">
      {data.map((item) => (
        <div key={item.name} className=" overflow-hidden mb-12 lg:mb-0 mx-auto">
          <div className="card-team rounded-[50px]">
            <BlurredImage
              className={"rounded-[50px] p-2"}
              width={300}
              height={400}
              src={item.image}
              alt="avatar"
            />
          </div>
          <div className="text-center p-4 ">
            <div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>

            <ul className="flex justify-center items-center gap-12 mt-4 text-xl">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <AiOutlineTwitter />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              {/* <li>
                <BsInstagram />
              </li> */}
            </ul>

            {/* <div>
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
