import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const TeamPage = dynamic(() => import("@/components/TeamPage"));

export default function Team() {
  return (
    <>
      <TeamPage />
    </>
  );
}

Team.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
