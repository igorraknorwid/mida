import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import Link from "next/link";
import React from "react";

interface ISlider {
  pages: number;
}

export default function Slider({ pages }: ISlider) {
  const [state, setState] = React.useState([
    {
      id: 1,
      title: "Dla adwokatów",
      text: "Some Text Here",
      src: "/images/1.png",
      isHover: false,
      bg: "rgba(14, 70, 102, 0.9)",
    },
    {
      id: 2,
      title: "Dla adwokatów",
      text: "Some Text Here",
      src: "/images/1.png",
      isHover: false,
      bg: "rgba(89, 34, 241, 0.884)",
    },
    {
      id: 3,
      title: "Dla adwokatów",
      text: "Some Text Here",
      src: "/images/1.png",
      isHover: false,
      bg: "#d8b0c1e1",
    },
    {
      id: 4,
      title: "Dla adwokatów",
      text: "Some Text Here",
      src: "/images/1.png",
      isHover: false,
      bg: "rgba(162, 155, 182, 0.884)",
    },
    {
      id: 5,
      title: "Dla adwokatów",
      text: "Some Text Here",
      src: "/images/1.png",
      isHover: false,
      bg: "#e4ac8ce1",
    },
    {
      id: 6,
      title: "Dla adwokatów",
      text: "Some Text Here",
      src: "/images/1.png",
      isHover: false,
      bg: "#00a3d9",
    },
  ]);
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  const slides = state.map((el, index) => (
    <>
      <div
        className='slide'
        style={{ backgroundColor: `${el.bg}` }}
        onMouseEnter={() => {
          console.log("onMouseEnter");
          setState(
            [...state].map((item) => {
              if (el.id === item.id) {
                return { ...item, isHover: true };
              } else {
                return item;
              }
            })
          );
        }}
        onMouseLeave={() => {
          console.log("onMouseLeave");
          setState(
            [...state].map((item) => {
              return { ...item, isHover: false };
            })
          );
        }}
      >
        <div className='title text-2xl uppercase leading-normal '>
          {el.title}
        </div>

        <p className='content leading-normal'>{el.text}</p>
        <div className='pt-4'>
          <Image
            src={el.src}
            alt='image'
            className='bg_image'
            width={300}
            height={393}
          />
        </div>
        <button className={el.isHover ? "btn" : "btn2"}>
          <Link href='/kontakt'>Zobacz węcej</Link>
        </button>
      </div>
    </>
  ));

  return (
    <>
      <div className='arr_btn' ref={prevRef}>
        <a href='#'>
          <span className='left'></span>
        </a>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        slidesPerView={pages}
        spaceBetween={20}
        loop
        // navigation
        centeredSlides
        autoplay={{ delay: 3000 }}
        // pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='arr_btn' ref={nextRef}>
        <a href=''>
          <span className='right'></span>
        </a>
      </div>
    </>
  );
}
