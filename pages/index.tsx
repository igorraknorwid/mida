/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Landing from "../components/Landing";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Uslugi from "../components/Uslugi";
import Ceny from "../components/Ceny";
import Portfolio from "../components/Portfolio";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tworzenie stron internetowych Zielona Góra</title>
        <meta
          name='description'
          content='Tworzenie stron internetowych Zielona Góra'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Midadigital to profesjonalne strony internetowe tworzone indywidualnie dla Twojej firmy. Strony internetowe Zielona Góra i cała Polska - zapraszamy do kontaktu oraz na spotkanie.'
        ></meta>
        {/* <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        ></meta> */}

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='crossorigin'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins:wght@200;300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Header />

      <main className='m-0'>
        <Landing />
        <Uslugi />
        <Ceny />
        <Portfolio />
        <div className='flex flex-col justify-between items-center w-full  md:w-4/6 mx-auto md:mx-auto '></div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
