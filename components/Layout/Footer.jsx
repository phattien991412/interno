import React from "react";

import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import BlurredImage from "../LazyLoadingImage";

const Footer = () => {
  return (
    <div className="mt-32 w-[90%] xl:w-[70%] mx-auto">
      <div className="grid grid-cols-5 gap-8 px-12">
        <div className="col-span-5 md:col-span-2">
          <div className="flex items-center gap-2 ">
            <div>
              <BlurredImage
                className="object-scale-down"
                width={30}
                height={30}
                src="/images/logo.webp"
                alt="logo"
              />
            </div>
            <h2 className="text-[40px] font-semibold">Interno</h2>
          </div>
          <p>
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <ul className="flex items-center gap-12 mt-4 text-2xl">
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

        <div className="md:col-span-1 col-span-3">
          <h3>Pages</h3>
          <ul>
            <li className="my-6 cursor-pointer hover:underline">
              <p>About Us</p>
            </li>
            <li className="my-6 cursor-pointer hover:underline">
              <p>Our Projects</p>
            </li>
            <li className="my-6 cursor-pointer hover:underline">
              <p>Our Team</p>
            </li>
            <li className="my-6 cursor-pointer hover:underline">
              <p>Contact Us</p>
            </li>
            <li className="my-6 cursor-pointer hover:underline">
              <p>Services</p>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1 col-span-2">
          <h3>Services</h3>
          <ul>
            <li className="my-6 cursor-pointer hover:underline">
              <p>Kitchen</p>
            </li>
            <li className="my-6 cursor-pointer hover:underline">
              <p>Living Area</p>
            </li>
            <li className="my-6 cursor-pointer hover:underline">
              <p>Bathroom</p>
            </li>
            <li className="my-6 cursor-pointer hover:underline">
              <p>Dinning Hall</p>
            </li>
            <li className="my-6 cursor-pointer hover:underline">
              <p>Bedroom</p>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1 col-span-2">
          <h3>Contact</h3>
          <p className="my-6">55 East Birchwood Ave. Brooklyn, New York 11201</p>
          <a className="my-6" href="mailto:contact@interno.com">
            <p>contact@interno.com</p>
          </a>
          <a className="my-6" href="tel:+1234567890">
            <p>(123) 456 - 7890</p>
          </a>
        </div>
      </div>

      <p className="text-center py-8">Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</p>
    </div>
  );
};

export default Footer;
