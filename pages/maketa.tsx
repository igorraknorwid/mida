/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Maketa</title>
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
        <div className='flex justify-between items-center w-full  md:w-4/6 md:mx-auto'>
          <h1 className='text-3xl font-bold underline'>Maketa</h1>
          <div
            style={{
              backgroundColor: "red",
              minHeight: "2000px",
              width: "100%",
            }}
          ></div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
