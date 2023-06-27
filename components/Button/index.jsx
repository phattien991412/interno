import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Button = ({ text, color }) => {
  return (
    <button
      style={{ background: color }}
      className="rounded-[18px] px-[54px] py-[26px] flex justify-center items-center gap-[10px] shadow-md"
    >
      <p className="text-white font-semibold leading-[125%] tracking-[0.36px]">
        {text}
      </p>
      <FaArrowRight className={`${color === "#292F36" ? "text-primaryColor1" :  "text-primaryColor2"}`} />
    </button>
  );
};

export default Button;
