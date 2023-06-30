import React, { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/router";

import { gsap } from "gsap/dist/gsap";

import { SplitText } from "@/modules/SplitText";

const Banner = ({ image, page }) => {
  const route = useRouter();
  const getPathname = route.pathname.split("/");

  const bannerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { duration: 1, stagger: 0.5 }
        })
        .from(bannerRef.current, { opacity: 0, scale: 0, duration: 1.5 })
        .from(".character", { opacity: 0, scale: 1, stagger: 0.1 })
        .from(".text", { opacity: 0, scale: 1.4, duration: 1, ease: "back" });
      // .from("button", { opacity: 0, scale: 1, stagger: 0.1 });
    }, bannerRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);

  return (
    <div
      ref={bannerRef}
      style={{ backgroundImage: `url(${image})` }}
      className="relative bg-cover bg-center bg-no-repeat h-[50vh]"
    >
      <div className="bg-white rounded-tr-[37px] rounded-tl-[37px] grid place-items-center w-[500px] absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="text-center py-10">
          <h1><SplitText text={page} /></h1>
          <p className="text capitalize">Home / {getPathname[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
