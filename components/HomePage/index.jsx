import React from "react";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./Home"));
const Work = dynamic(() => import("./Work"));
const Blog = dynamic(() => import("./Blog"));
const About = dynamic(() => import("./About"));
const Brand = dynamic(() => import("./Brand"));
const Count = dynamic(() => import("./Count"));
const Project = dynamic(() => import("./Project"));
const Contact = dynamic(() => import("./Contact"));
const Testimonial = dynamic(() => import("./Testimonial"));

const HomePage = () => {
  return (
    <>
      <div className="xl:w-[70%] w-[90%] mx-auto">
        <Home />
        <Work />
        <About />
        <Testimonial />
        <Brand />
        <Project />
      </div>
      <Count />
      <div className="xl:w-[70%] w-[90%] mx-auto">
        <Blog />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
