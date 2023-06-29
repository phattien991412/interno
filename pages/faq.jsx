import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const FaqPage = dynamic(() => import("@/components/FaqPage"));

export default function Faq() {
  return (
    <>
      <FaqPage />
    </>
  );
}

Faq.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
