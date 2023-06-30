import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

import BlurredImage from "../LazyLoadingImage";

const TeamMembers = () => {
  const teamRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { duration: 1, stagger: 0.5 }
        })
        .from(".team-member", { opacity: 0, scale: 1, yPercent: -50 });

      // .from("button", { opacity: 0, scale: 1, ease: "back" });
    }, teamRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  const data = [
    {
      name: "Charlotte	Levi",
      desc: "Developer, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/aboutpeople1.webp",
      email: "levi@gmail.com"
    },
    {
      name: "Nattasha Julie",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/aboutpeople2.webp",
      email: "julie@gmail.com"
    },
    {
      name: "Nora Owen",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/aboutpeople3.webp",
      email: "owen@gmail.com"
    },
    {
      name: "John Smith",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/team1.webp",
      email: "owen@gmail.com"
    },
    {
      name: "Sofia Carter",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/team2.webp",
      email: "owen@gmail.com"
    },
    {
      name: "Avery Jackson",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/team3.webp",
      email: "owen@gmail.com"
    },
    {
      name: "Luna James",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/team4.webp",
      email: "owen@gmail.com"
    },
    {
      name: "Gianna Mateo",
      desc: "Design, Australia",
      phone: "+1 (378) 400-1234",
      image: "/images/team5.webp",
      email: "owen@gmail.com"
    }
  ];
  return (
    <div
      ref={teamRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-12 mx-auto mt-16"
    >
      {data.map((item) => (
        <div
          key={item.name}
          className="team-member overflow-hidden mb-12 lg:mb-0 mx-auto"
        >
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
