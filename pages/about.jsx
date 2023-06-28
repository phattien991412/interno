import Layout from "@/Components/Layout";
import dynamic from "next/dynamic";
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
