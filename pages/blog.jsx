import dynamic from "next/dynamic";

import Layout from "@/Components/Layout";
const BlogPage = dynamic(() => import("@/components/BlogPage"));

export default function Blog() {
  return (
    <>
      <BlogPage />
    </>
  );
}

Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
