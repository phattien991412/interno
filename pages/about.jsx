import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const AboutPage = dynamic(() => import("@/components/AboutPage"));

export default function About() {
  return (
    <>
      <AboutPage />
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
