import { useRouter } from "next/router";
import React from "react";

const Banner = ({image, page}) => {
  const route = useRouter()
  console.log(route.pathname);
  const getPathname = route.pathname.split("/")
  console.log({getPathname});
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative bg-cover bg-center bg-no-repeat h-[50vh]"
    >
      <div className="bg-white rounded-tr-[37px] rounded-tl-[37px] grid place-items-center w-[500px] absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="text-center py-10">
          <h1>{page}</h1>
          <p className="capitalize">Home / {getPathname[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
