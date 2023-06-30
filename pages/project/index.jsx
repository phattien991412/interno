import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const ProjectPage = dynamic(() => import("@/components/ProjectPage"));

export default function Project() {
  return (
    <>
      <ProjectPage />
    </>
  );
}

Project.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
