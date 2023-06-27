import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa";

const Button = ({ text, color, icon }) => {
  const [hover, setHover] = useState(false)

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={!hover ? { background: color } : {} }
      className={`${color === "#292F36" ? "hover:bg-primaryColor1" : "hover:bg-primaryColor2 "} transition-all duration-500 rounded-[18px] px-[54px] py-[26px] flex justify-center items-center gap-[10px] shadow-md`}
    >
      
      <p className="text-white font-semibold leading-[125%] tracking-[0.36px]">
        {text}
      </p>
      <FaArrowRight style={!hover ? { color: icon } : {} } className={` ${color === "#292F36" ? " hover:text-primaryColor2" :  "hover:text-primaryColor1"}  transition-all duration-500`} />
    </button>
  );
};

export default Button;
