import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";
import { BsBag } from "react-icons/bs";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as fbq from "../lib/google-analytics/";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});
export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isWomenOpen, setIsWomenOpen] = useState(false);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  if (cartTotal >= 35) {
    var Good = "Congratulations! We pay shipping!";
  } else {
    var shippingaway = Math.round(35 - cartTotal);
    var free = "You're only" + " $" + shippingaway + " from free shipping";
  }

  // useEffect(() => {
  //   const showAnim = gsap
  //     .from(".nav-main", {
  //       yPercent: -200,
  //       paused: true,
  //       duration: 0.1,
  //       opacity: 0,
  //     })
  //     .progress(1);

  //   ScrollTrigger.create({
  //     start: "top top",
  //     end: 99999,

  //     onUpdate: (self) => {
  //       self.direction === -1 ? showAnim.play() : showAnim.reverse();
  //     },
  //   });
  // });

  return (
    <header className="fixed w-full  bg-transparent  flex flex-col text-center z-20  text-black colornav navbar">
      <div className="shipping text-center ">
        <h1>
          {free} {Good}
        </h1>
      </div>

      <div className="nav-main  flex flex-col sm:flex-row p-2  text-center items-center">
        <div className="flex items-center justify-between  py-8 pr-10">
          <nav>
            <section className="MOBILE-MENU flex ">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 left-0  py-9 px-2"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                {/* <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/about">About</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/contact">Contact</a>
                  </li>
                </ul> */}
                <div className="flex flex-row space-x-2 p-10 absolute top-20 text-sm">
                  <div
                    onClick={() => setIsWomenOpen((prev) => !prev)}
                    className="woman"
                  >
                    WOMAN
                  </div>
                  <div
                    onClick={() => setIsWomenOpen((prev) => !prev)}
                    className="woman"
                  >
                    MAN
                  </div>
                  <div className="woman">KIDS</div>
                  <div className="woman">HOME</div>
                  <div className="woman">ZARA SRPLS</div>
                  <div className="woman">MAKEUP</div>
                </div>
                <div
                  className={
                    isWomenOpen
                      ? "showWomenMenu top-44 text-sm"
                      : "hideWomenMenu"
                  }
                >
                  <ul>
                    <li>NEW</li>
                    <li>BASICS</li>
                    <li>BLAZERS</li>
                    <li>DRESSES</li>
                    <li>T-SHIRTS</li>
                    <li>TOPS</li>
                    <li>JEANS</li>
                    <li>SUITS</li>
                    <li>BAGS</li>
                    <li>BEAUTY</li>
                  </ul>
                </div>
                <div
                  className={
                    isWomenOpen
                      ? "showWomenMenu top-44 text-sm"
                      : "hideWomenMenu"
                  }
                >
                  <ul>
                    <li>mark</li>
                    <li>BASICS</li>
                    <li>BLAZERS</li>
                    <li>DRESSES</li>
                    <li>T-SHIRTS</li>
                    <li>TOPS</li>
                    <li>JEANS</li>
                    <li>SUITS</li>
                    <li>BAGS</li>
                    <li>BEAUTY</li>
                  </ul>
                </div>
              </div>
            </section>
          </nav>
          <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 40%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
      }
      .hideWomenMenu{
        display: none;
      }
      .showWomenMenu{
        display: block;
        display: flex;
        position: absolute;
        top: 44;
        left: 0;
        padding-left: 10px;
        text-align: left;
      }
    `}</style>
        </div>
        <div className="logo">
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <h1 className="text-6xl pt-1 font-serif">
                <span className="late-text">Z</span>

                <span className="omo">ARA</span>
              </h1>
            </a>
          </Link>
        </div>
        <div className="nav-pages text-center flex flex-row  absolute right-6  ">
          <div className="mr-16">
            <Link href="/collections/body">
              <a href="#body" className="cursor-pointer">
                <span className="text-sm font-mono pt-1 pr-5 pb-1 border-b-2 border-black">
                  SEARCH
                </span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/collections/body">
              <a href="#body" className="cursor-pointer">
                <span className="text-sm text-gray-600 pt-1 px-2  sm:px-4">
                  LOG IN
                </span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/collections/sunglasses-1">
              <a href="/collections/sunglasses-1" className="cursor-pointer ">
                <span className="text-sm pt-1 px-2 text-gray-600  sm:px-4">
                  HELP
                </span>
              </a>
            </Link>
          </div>
          {/* <div>
            <Link href="/collections/earrings">
              <a href="#earrings" className="cursor-pointer ">
                <span className="text-lg pt-1 px-2  sm:px-4">Earrings</span>
              </a>
            </Link>
          </div> */}

          <div className="nav-cart ml-16">
            <a
              className="text-md font-bold cursor-pointer  absolute right-5"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <div className="relative">
                <BsBag size="1.5rem" />
                <div
                  style={{ fontSize: "10px", left: "10px" }}
                  className="absolute top-1 text-sm"
                >
                  {cartQuantity}
                </div>
              </div>
            </a>
            <MiniCart cart={cart} />
          </div>
        </div>
      </div>
    </header>
  );
}
