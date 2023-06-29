import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const ContactPage = dynamic(() => import("@/components/ContactPage"));

export default function Contact() {
  return (
    <>
      <ContactPage />
    </>
  );
}

Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
