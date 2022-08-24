import { motion } from "framer-motion";
import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Link from "next/link";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

interface IHeader {}

export default function Header() {
  const [init, setInit] = React.useState(true);
  const [state, setState] = React.useState(true);
  const [active, setActive] = React.useState(false);
  const myRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setState(entry.isIntersecting);
    });
    if (myRef.current) {
      observer.observe(myRef.current);
    }
  }, []);
  React.useEffect(() => {
    const height = 80;
    window.addEventListener("scroll", () => {
      if (window.scrollY > height) {
        setInit(false); /* remove .header_init */
      }
    });
  }, []);

  const clickHandler = () => {
    console.log("ClickHandler");
    setState(false);
  };

  return (
    <>
      <motion.div
        animate={active ? "open" : "closed"}
        variants={variants}
        initial={false}
        className='header__mobile_menu z-0 fixed top-12 left-0 right-0 w-5/6 mx-auto md:hidden border bg-white p-4 pb-0 '
      >
        <Navbar
          liStyle='pb-4'
          aStyleActive='font-semibold'
          clickHandler={clickHandler}
        />
      </motion.div>
      <header
        className={`flex justify-center items-center bg-white ${
          init
            ? "header__init border-b-2 md:border-none border-sky-400"
            : state
            ? "header__fat border-b-2 md:border-none border-sky-400"
            : "header__slim border-b-2 border-sky-400"
        }`}
      >
        <div className='flex justify-between items-center w-full md:w-full  lg:w-5/6  px-2 md:px-8   md:mx-auto'>
          <div
            className={`${
              init
                ? "header__logo_box_init"
                : state
                ? "header__logo_box_fat"
                : "header__logo_box_slim"
            }`}
          >
            <Logo />
          </div>

          <div
            className={`${
              init
                ? "header__navbar_box_init"
                : state
                ? "header__navbar_box_fat"
                : "header__navbar_box_slim"
            }`}
          >
            <div className='hidden md:flex justify-center items-center gap-6'>
              <Navbar
                ulStyle='flex justify-center items-center gap-3'
                liStyle='hover:opacity-50 transition-all'
                aStyleActive='font-semibold'
              />
              <div>
                <Link href={"/maketa"}>
                  <a className='bg-inherit hover:bg-sky-500 border  text-sky-500 hover:text-white border-sky-500 hover:border-white rounded-lg  py-3 px-4 font-semibold transition-colors'>
                    Free Maketa
                  </a>
                </Link>
              </div>
            </div>
            <div className='md:hidden'>
              <div
                className={active ? "burger-btn active" : "burger-btn"}
                onClick={() => {
                  setActive(!active);
                }}
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='h-px' ref={myRef}></div>
    </>
  );
}
