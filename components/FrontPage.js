import { gsap, Expo } from "gsap/dist/gsap";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../public/dress.jpg";
import image1 from "../public/yellow.jpg";
import image2 from "../public/makeup.jpg";
import man1 from "../public/man1.jpg";
import SwiperCore, {
  Mousewheel,
  Pagination,
  Keyboard,
  Navigation,
} from "swiper";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
SwiperCore.use([Mousewheel, Pagination, Keyboard, Navigation]);
export default function FrontPage() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("04/18/2022 23:59:59");

    // ScrollTrigger.create({
    //   snap: 1 / 4, // snap whole page to the closest section!
    // });

    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  var woman = ["NEW", "DRESSES", "BEAUTY"];
  var man = ["NEW", "BLAZERS", "SUITS"];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' "text-black" >' +
        woman[index] +
        "</span>"
      );
    },
  };
  const pagination1 = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + ' "text-black" >' + man[index] + "</span>"
      );
    },
  };

  return (
    <div className="container relative flex items-end justify-center text-center text-white">
      {/* <h1 className="text-center text-xl">5 YEAR ANNIVERSARY SALE</h1>
      <div className="flex relative justify-center text-center ">
        <div className="flex pt-10   uppercase text-gray-900 sm:opacity-50 text-7xl sm:text-9xl">
          <div className="timer-segment flex-col flex text-center ">
            <span className="time  ">{days}</span>
            <span className="label text-xl sm:text-5xl">Days</span>
          </div>
          <span className="divider ">:</span>
          <div className="timer-segment flex-col flex text-center">
            <span className="time  ">{hours}</span>
            <span className="label text-xl sm:text-5xl">Hours</span>
          </div>
          <span className="divider ">:</span>
          <div className="timer-segment flex-col flex text-center">
            <span className="time ">{minutes}</span>
            <span className="label text-xl sm:text-5xl">Minutes</span>
          </div>
          <span className="divider ">:</span>
          <div className="timer-segment flex-col flex text-center">
            <span className="time  text-red-600">{seconds}</span>
            <span className="label text-xl sm:text-5xl">Seconds</span>
          </div>
        </div>
      </div>
      <div className="justify-center text-center z-10 my-10 line">
        <div className=" sm:pt-26 text-4xl font-mono ">
          <span>Ignite Your Dreams</span>
        </div>
        <div className=" font-mono py-5 text-xl">
          <span>
            Be your boldest self and embrace a new world of wonder in crystal
            and color.
          </span>
        </div>
      </div> */}

      {/* <div
        style={{
          fontSize: "8.3rem",
        }}
        className="text-opening text-lg"
      >
        <h1 className="firstWord">
          Shine <span className="simp">Bright</span>
          <span className="simp"> In</span>
          <span className="simp">G</span>
          <span className="simp">O</span>
          <span className="simp">L</span>
          <span className="simp">D</span>
        </h1>
      </div> */}
      <div className="w-full fixed top-0 left-0   border text-black bg-white  ">
        <div className="relative product-lol">
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
              height: "100vh",
              width: "100vw",
            }}
            direction={"horizontal"}
            navigation={{ clickable: true }}
            keyboard={{ keyboard: true }}
            className="mySwiper"
          >
            {/* First Page */}
            <SwiperSlide className="">
              <h1 className="absolute right-0 top-1/2 mr-5 text-sm">MAN</h1>
              <Swiper
                style={{
                  height: "100vh",
                }}
                direction={"vertical"}
                mousewheel={{ mousewheel: true }}
                pagination={pagination}
                speed={900}
                spaceBetween={100}
              >
                <SwiperSlide className="  cursor-pointer p-20">
                  <Link href="collections/frontpage">
                    <Image
                      src={image}
                      alt="mark"
                      height={800}
                      width={500}
                      objectFit="cover"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="  cursor-pointer p-20">
                  <Link href="collections/frontpage">
                    <Image
                      src={image1}
                      alt="mark"
                      height={800}
                      width={500}
                      objectFit="cover"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="  cursor-pointer p-20">
                  <Link href="collections/frontpage">
                    <Image
                      src={image2}
                      alt="mark"
                      height={800}
                      width={500}
                      objectFit="cover"
                    />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>

            {/* Secound Page */}
            <SwiperSlide>
              <h1 className="absolute left-0 top-1/2 ml-10 text-sm">WOMAN</h1>
              <h1 className="absolute right-0 top-1/2 mr-10 text-sm">Kids</h1>
              <Swiper
                style={{
                  height: "100vh",
                }}
                direction={"vertical"}
                mousewheel={{ mousewheel: true }}
                pagination={pagination1}
                speed={900}
                spaceBetween={100}
              >
                <SwiperSlide className="  cursor-pointer p-20">
                  <Link href="collections/frontpage">
                    <Image
                      src={man1}
                      alt="mark"
                      height={800}
                      width={500}
                      objectFit="cover"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="  cursor-pointer p-20">
                  <Link href="collections/frontpage">
                    <Image
                      src={image1}
                      alt="mark"
                      height={800}
                      width={500}
                      objectFit="cover"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="  cursor-pointer p-20">
                  <Link href="collections/frontpage">
                    <Image
                      src={image2}
                      alt="mark"
                      height={800}
                      width={500}
                      objectFit="cover"
                    />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>
            <SwiperSlide>
              <h1 className="absolute left-0 top-1/2 ml-10 text-sm">MAN</h1>
              <h1 className="absolute right-0 top-1/2 mr-10 text-sm">HOME</h1>
              <Swiper
                style={{
                  height: "100vh",
                }}
                direction={"vertical"}
                mousewheel={{ mousewheel: true }}
                pagination={{
                  clickable: true,
                }}
                speed={900}
                spaceBetween={100}
              >
                <SwiperSlide className="  cursor-pointer p-20">
                  <Link href="collections/frontpage">
                    <Image
                      src={image}
                      alt="mark"
                      height={800}
                      width={500}
                      objectFit="cover"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="  cursor-pointer p-20">
                  <Link href="collections/frontpage">
                    <Image
                      src={image1}
                      alt="mark"
                      height={800}
                      width={500}
                      objectFit="cover"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="  cursor-pointer p-20">
                  <Link href="collections/frontpage">
                    <Image
                      src={image2}
                      alt="mark"
                      height={800}
                      width={500}
                      objectFit="cover"
                    />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>

            {/* Third Page */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
