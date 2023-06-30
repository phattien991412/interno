import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { gsap } from "gsap/dist/gsap";

import "@/styles/globals.css";
import SEO from "@/components/SEO";
import LoadingStart from "@/components/ReusedComponent/LoadingStart";
import LoadingRoute from "@/components/ReusedComponent/LoadingRoute";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const loadingRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { duration: 3 } }).to(loadingRef.current, {
        delay: 2,
        yPercent: -150,
        ease: "power4.out"
      });
    }, loadingRef);

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
      ctx.revert(); // cleanup
    };
  }, []);

  return (
    <>
      <SEO />
      <div ref={loadingRef} className="preLoad">
        <LoadingStart />
      </div>
      {isLoading && <LoadingRoute />}
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
