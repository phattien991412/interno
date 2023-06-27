import React from "react";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Testimonial from "./Testimonial";
import Brand from "./Brand";
import Project from "./Project";
import Count from "./Count";
import Blog from "./Blog";
import Contact from "./Contact";

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
        <Contact/>
      </div>
    </>
  );
};

export default HomePage;
