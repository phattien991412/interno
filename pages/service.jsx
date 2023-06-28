import dynamic from "next/dynamic";

import Layout from "@/Components/Layout";
const ServicePage = dynamic(() => import("@/components/ServicePage"));

export default function Service() {
  return (
    <>
      <ServicePage />
    </>
  );
}

Service.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
