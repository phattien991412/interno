import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const route = useRouter();
  return (
    <div className="w-screen max-w-screen-[100vw] overflow-x-hidden">
      <Header />
      <main>{children}</main>
      {route.pathname !== "/404" && <Footer />}
    </div>
  );
};

export default Layout;
