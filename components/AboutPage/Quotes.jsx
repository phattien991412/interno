import React from "react";

import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Quotes = () => {
  return (
    <div className="quote relative grid place-items-center w-[90%] lg:w-2/3 mx-auto my-24">
      <div className="text-center p-12 isolate z-10">
        <p className="flex justify-center">
          <BiSolidQuoteAltLeft />
        </p>
        <h2 className="py-8 text-3xl lg:text-[50px] leading-[125%]">
          <i>I like an interior that defies labeling. I don't really want someone
          to walk into a room and know that I did it</i>
        </h2>
        <h3 className="pb-8">-BUNNY WILLIAMS</h3>
      </div>
    </div>
  );
};

export default Quotes;
