import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const HomePage = dynamic(() => import("@/components/HomePage"));

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
