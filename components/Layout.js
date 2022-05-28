import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import IntroAnimation from "./IntroAnimation";
import Nav from "./Nav";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-full min-w-full  ">
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.8;
          width: 100%;
          height: 100%;
          color: #333;
          font-family: sans-serif;
          background-color: white;
        }
        h1 {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
        }
        .panel {
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-pagination {
          display: flex;
          top: 900px !important;
          left: 800px;
        }
        .swiper-button-disabled {
          color: white;
        }
        .swiper-button-next {
          padding-left: 50px;
        }
        .swiper-button-prev {
          padding-right: 100px;
        }
        .swiper-pagination-bullet {
          padding: 5px 10px;
          border-radius: 0;
          width: 100px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          font-size: 16px;
          color: #000;
          opacity: 1;
          background: transparent;
        }
        .swiper-pagination-bullet-active {
          color: #000;
          font-weight: bold;
        }
      `}</style>
      {/* <IntroAnimation /> */}
      <Nav />
      {/* <Hero /> */}
      <main style={{ zIndex: "10" }}>{children}</main>

      {/* <Footer /> */}
    </div>
  );
}
