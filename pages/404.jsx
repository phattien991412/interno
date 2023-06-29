import React from "react";
import Link from "next/link";

import Layout from "@/components/Layout";
import Button from "@/components/ReusedComponent/Button";
import BlurredImage from "@/components/LazyLoadingImage";

export default function Page404() {
  return (
    <div className="grid grid-cols-2 place-items-center items-center  w-[70%] mx-auto">
      <div className="">
        <h1 className="text-[250px] text-primaryColor1">404</h1>
        <h3 className="pb-12">
          We are sorry, but
          the page you requested was not found.
        </h3>
        <Link href={"/"}>
          <Button color={"#292F36"} icon={"#CDA274"} text={"Back To Home"} />
        </Link>
      </div>
      <div className="h-[70vh]">
        <BlurredImage
          className="rounded-bl-[300px]"
          width={500}
          height={300}
          src={"/images/404.webp"}
          alt="404"
        />
      </div>
    </div>
  );
}

Page404.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
