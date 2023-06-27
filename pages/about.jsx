import Layout from "@/Components/Layout";
import AboutPage from "@/components/AboutPage";

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
