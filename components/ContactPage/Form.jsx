import React from "react";

import { IoEarthOutline } from "react-icons/io5";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";

import Button from "../ReusedComponent/Button";

const Form = () => {
  return (
    <div className="mt-20 lg:mt-36">
      <h1 className="w-[90%] lg:w-3/5 mx-auto text-4xl lg:text-[50px] text-center">We love meeting new people and helping them.</h1>

      <div className="block lg:flex items-center gap-12 mt-12 lg:mt-0">
        <div className="bg-primaryColor3 rounded-[50px] p-16">
          <div className="flex gap-4 items-center">
            <p className="grid place-items-center w-12 h-12 rounded-full bg-white text-primaryColor1">
              <AiOutlineMail />
            </p>
            <a className="readmore" href="#">info@yourdomain.com</a>
          </div>

          <div className="flex gap-4 items-center my-8">
            <p className="grid place-items-center w-12 h-12 rounded-full bg-white text-primaryColor1">
              <BsTelephone />
            </p>
            <a className="readmore" href="#">+1 (378) 400-1234</a>
          </div>

          <div className="flex gap-4 items-center">
            <p className="grid place-items-center w-12 h-12 rounded-full bg-white text-primaryColor1">
              <IoEarthOutline />
            </p>
            <a className="readmore" href="#" >www.yourdomain.com</a>
          </div>

          <ul className="flex items-center gap-12 my-8 text-2xl">
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
        </div>
        <form className="mt-12 w-[90%] lg:w-3/5 mx-auto" action="">
          <div className="flex justify-center gap-12 ">
            <input
              className="border-b-2 border-gray-400 outline-none w-1/2 text-lg"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-b-2 border-gray-400 outline-none w-1/2 text-lg"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-center gap-12 mt-12 ">
            <input
              className="border-b-2 border-gray-400 outline-none w-1/2 text-lg"
              type="text"
              placeholder="Subject"
            />
            <input
              className="border-b-2 border-gray-400 outline-none w-1/2 text-lg"
              type="text"
              placeholder="Phone"
            />
          </div>
          <div className="my-16">
            <textarea
              className="border-b-2 border-gray-400 outline-none w-full text-lg resize-none"
              placeholder="Hello, I'm interested in ..."
              cols="15"
              rows="5"
            ></textarea>
          </div>

          <div className="grid place-items-center lg:place-items-end">
            <Button color={"#292F36"} icon={"#CDA274"} text={"Send Now"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
