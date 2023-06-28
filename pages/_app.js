import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import "@/styles/globals.css";
import Loading from "@/components/ReusedComponent/Loading";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);
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
      {isLoading && <Loading />}
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
