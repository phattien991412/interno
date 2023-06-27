import Layout from "@/Components/Layout";
import HomePage from "@/components/HomePage";

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
