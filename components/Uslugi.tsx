/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Uslugi() {
  const [state, setState] = useState([
    {
      id: 1,
      src: "/services_icons/account.png",
      text: "Custom Web Design",
      isHover: false,
    },
    {
      id: 2,
      src: "/services_icons/backend.png",
      text: "Strapi Backend",
      isHover: false,
    },
    {
      id: 3,
      src: "/services_icons/seo.png",
      text: "Seo Optimization",
      isHover: false,
    },
    { id: 4, src: "/services_icons/account.png", text: "Rodo", isHover: false },
    {
      id: 5,
      src: "/services_icons/logotype.png",
      text: "Google Ads",
      isHover: false,
    },
    {
      id: 6,
      src: "/services_icons/instructor.png",
      text: "Interface Traning",
      isHover: false,
    },
  ]);
  return (
    <section className='p-2 lg:p-10 flex justify-center items-center m-0 sm:mx-10'>
      <div className='flex flex-col justify-center items-center mt-4'>
        <h3 className=' font-medium text-xl  md:text-4xl mb-5 leading-tight text-justify'>
          Usługi do projektowania stron internetowych dla małych firm
        </h3>
        <p className=' text-gray-500 text-base md:text-xl text-justify'>
          MidaDigital to firma zajmująca się projektowaniem stron internetowych
          w Zielonej Górze.
        </p>
        <p className=' text-gray-500 text-base md:text-xl text-justify'>
          Obsługujemy klientów na terenie całej Polski.
        </p>
        <div className='gridbox mt-4'>
          {state.map((item) => (
            <Link key={item.id} href={`/oferta#${item.id}`}>
              <div
                className='card flex flex-col justify-center items-center p-3 py-10 m-3 hover:bg-white rounded-xl hover:rounded-xl  cursor-pointer '
                onMouseOver={() => {
                  setState((s) =>
                    s.map((i) => {
                      if (item.id === i.id) {
                        return { ...i, isHover: true };
                      }
                      return { ...i, isHover: false };
                    })
                  );
                }}
                onMouseOut={() => {
                  setState((s) =>
                    s.map((i) => {
                      return { ...i, isHover: false };
                    })
                  );
                }}
              >
                <img
                  className={item.isHover ? "trans" : ""}
                  src={item.src}
                  alt={item.text}
                  height='64px'
                  width='64px'
                />
                <h2 className='darkColor text-2xl mt-2 text-center poppins'>
                  {item.text}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <Link href='/oferta'>
          <p
            style={{ letterSpacing: "5px" }}
            className='text-center text-sm uppercase poppins tracking-widest cursor-pointer landing_nav_link leading-normal '
          >
            Nasze Usługi
          </p>
        </Link>
      </div>
    </section>
  );
}
