import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <title>Interno</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Metaversus Madness" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
