import dynamic from "next/dynamic";
import React from "react";

const Form = dynamic(() => import("./Form"));
const Map = dynamic(() => import("./Map"));

const Banner = dynamic(() => import("../ReusedComponent/Banner"));

const ContactPage = () => {
  return (
    <div>
      <Banner image={"/images/contact-banner.webp"} page={"Contact Us"} />
      <div className="xl:w-[70%] w-[90%] mx-auto">
        <Form />
        <Map />
      </div>
    </div>
  );
};

export default ContactPage;
