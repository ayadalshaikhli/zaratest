import ProductList from "../components/ProductList";
import {
  getProductsEarringsCollection,
  getProductsInCollection,
  getProductsNecklacesCollection,
  getProductsRingCollection,
  getAllCollections,
} from "../lib/shopify";
import { useContext, useEffect } from "react";
import Hero from "../components/Hero";
import Head from "next/head";
import FrontPage from "../components/FrontPage";
import { motion } from "framer-motion";
import FirstCollectionList from "../components/firstcollection/FirstCollectionList";
import SecoundCollectionList from "../components/secoundcollection/SecoundCollectionList";
import ThirdCollectionList from "../components/thirdcollection/ThirdCollectionList";
import { gsap, Expo } from "gsap/dist/gsap";
import CollectionList from "../components/collections/CollectionList";
import { FB_PIXEL_ID } from "../lib/google-analytics/";
import * as fbq from "../lib/google-analytics/";
import Glsl from "../components/Glsl";

const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
export default function Home({ products, collections }) {
  useEffect(() => {
    tl.from(".late-text", 4, {
      x: 100,
      opacity: 0,
      stagger: 0.15,
      scale: ".8",
      ease: Expo.easeInOut,
    });
    gsap.from(".navbar", 3, {
      opacity: 0,
      y: -100,
      ease: Expo.easeInOut,
    });
    gsap.from(".omo", {
      y: 3,
      duration: 1,
      stagger: 0.1,
      repeat: -1,
      ease: Expo.easeInOut,
    });
  });
  const handleClick = () => {
    fbq.event("Purchase", { currency: "USD", value: 10 });
  };

  return (
    <div className="relative body">
      <Head>
        <title>Oracle</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="STORY WHO WEARS WOW 3W is a newly established direct-to-consumer
          fashion accessories brand, which means undefined fashion. We hope to
          create the unique one for everyone. We love every passion and interest
          on Earth because it is a reference to the UNIQUENESS of everything."
        />
        <meta property="og:title" content="Oracle" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.buildnextshop.com" />
        <meta
          property="og:image"
          content="https://www.buildnextshop.com/share.png"
        />
        <meta
          property="og:description"
          content="STORY WHO WEARS WOW 3W is a newly established direct-to-consumer
          fashion accessories brand, which means undefined fashion. We hope to
          create the unique one for everyone. We love every passion and interest
          on Earth because it is a reference to the UNIQUENESS of everything."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Oracle" />
        <meta
          name="facebook-domain-verification"
          content="wc5r4xfbkjzdg2zx2ajl7s08v7w8ec"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="wrap"
      >
        {/* <Glsl products={products} collections={collections} /> */}

        <FrontPage />
        {/* <CollectionList collections={collections} /> */}
        {/* <ProductList products={products} /> */}
        {/* <FirstCollectionList rings={rings} />
        <SecoundCollectionList earrings={earrings} />
        <ThirdCollectionList necklaces={necklaces} /> */}
      </motion.div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  // const rings = await getProductsRingCollection();
  // const earrings = await getProductsEarringsCollection();
  // const necklaces = await getProductsNecklacesCollection();
  const collections = await getAllCollections();

  return {
    props: { products, collections },
    // will be passed to the page component as props
  };
}
