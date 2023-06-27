import React from "react";
import Button from "../ReusedComponent/Button";

const Contact = () => {
  return (
    <div className="bg-black lg:rounded-[70px] grid place-items-center items-center w-full mx-auto text-white">
      <div className="text-center p-10 lg:p-20">
        <h1>Wanna join the interno?</h1>
        <p>It is a long established fact will be distracted.</p>
        <div className="flex justify-center mt-8">
          <Button color={"#CDA274"} text={"Contact With Us"} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
