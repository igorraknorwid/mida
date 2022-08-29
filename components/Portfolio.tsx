import React from "react";
import Slider from "./Slider";
import slide from "../public/images/1.png";
import Link from "next/link";

export default function Portfolio() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [pages, setPages] = React.useState(3);
  React.useEffect(() => {
    console.log("PORTFOLIO", window.innerWidth);
    if (window.innerWidth > 768) {
      setPages(3);
      setIsVisible(true);
    } else {
      setPages(1);
      setIsVisible(true);
    }
  }, []);

  return (
    <div className='w-full  lg:w-5/6 xl:w-4/6  m-auto  flex justify-center items-center flex-col'>
      <h3 className='text-center darkColor leading-normal font-medium text-5xl mb-1 mt-20 '>
        Portfolio
      </h3>
      <p className='text-center darkColor text-xl leading-normal mb-20'>
        Nasi oferty dla małego biznesu
      </p>
      <div className='w-full m-auto flex items-center justify-center buttons '>
        {isVisible && <Slider pages={pages} />}
      </div>

      <Link href='/realizacie'>
        <p
          style={{ letterSpacing: "5px" }}
          className='text-center text-sm uppercase poppins tracking-widest cursor-pointer landing_nav_link leading-normal my-20'
        >
          Porfolio
        </p>
      </Link>
    </div>
  );
}
