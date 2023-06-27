import React from "react";

import Button from "../ReusedComponent/Button";

const MailBox = () => {
  return (
    <div className="my-32">
      <h1 className="text-center w-[90%] lg:w-1/2 mx-auto">Creative project? Let's have a productive talk.</h1>

      <form className="mt-12 w-3/5 mx-auto" action="">
        <div className="flex justify-center gap-12 ">
            <input className="border-b-2 border-gray-400 outline-none w-1/2 text-lg" type="text" placeholder="Name" />
            <input className="border-b-2 border-gray-400 outline-none w-1/2 text-lg" type="email" placeholder="Email" />
        </div>
        <div className="my-16">
            <textarea className="border-b-2 border-gray-400 outline-none w-full text-lg resize-none" placeholder="Hello, I'm interested in ..." cols="15" rows="5"></textarea>
        </div>

        <div className="grid place-items-center">
            <Button color={"#292F36"} icon={"#CDA274"} text={"Send Now"} />
        </div>
      </form>
    </div>
  );
};

export default MailBox;
