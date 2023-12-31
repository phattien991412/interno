import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import BlurredImage from "../LazyLoadingImage";
import { SplitText } from "@/modules/SplitText";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const data = [
    {
      avatar: "/images/nat.png",
      name: "Nattasha Mith",
      location: "Sydney, USA",
      text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
    },
    {
      avatar: "/images/ray.webp",
      name: "Raymond Galario",
      location: "Sydney, Australia",
      text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book."
    },
    {
      avatar: "/images/ben.webp",
      name: "Benny Roll",
      location: "Sydney, New York",
      text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled."
    }
  ];

  const tesRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches
        ? "-10% center"
        : "-10% center";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: tesRef.current,
            // containerAnimation: scrollTween,
            start: startValue,
            end: "20% 20%",
            // markers: true,
            toggleActions: "play none none none "
          }
        })
        .from(".character", { opacity: 0, scale: 1, stagger: 0.03 })
        .from(".content", { yPercent: 50, opacity: 0, stagger: 0.2 });

      // .from("button", { opacity: 0, scale: 1, stagger: 0.1 });
    }, tesRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  return (
    <div ref={tesRef} className="bg-primaryColor3 rounded-[40px] my-32">
      <h1 className="text-center pt-[88px] pb-[38px] w-full lg:w-1/2 mx-auto px-8 lg:px-0">
        <SplitText text={"What the People Thinks About Us"} />
      </h1>
      <div className="block lg:grid grid-cols-3 gap-4 m-8 pb-[88px]">
        {data.map((item) => (
          <div
            className="content bg-white rounded-3xl p-8 mb-8 lg:mb-0"
            key={item.name}
          >
            <div className="flex items-center gap-8 pb-8">
              <div className="w-[15%]">
                <BlurredImage
                  className="rounded-full"
                  width={50}
                  height={50}
                  src={item.avatar}
                  alt="avatar"
                />
              </div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-base">{item.location}</p>
              </div>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
