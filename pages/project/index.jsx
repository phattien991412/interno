import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
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
