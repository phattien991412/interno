import Head from "next/head";
import React from "react";

const SEO = () => {
  return (
    <Head>
      <title>Interno</title>
      <meta name="title" content="Interior Desgin" />
      <meta
        name="description"
        content="Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. "
      />
      <link rel="icon" href={"/images/logo.webp"} />
      <link rel="apple-touch-icon" href={"/images/logo.webp"} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Interior Desgin" />
      <meta
        property="og:description"
        content="Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space."
      />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Interior Desgin" />
      <meta
        property="twitter:description"
        content="Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space."
      />
      <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      ></meta>
    </Head>
  );
};

export default SEO;
