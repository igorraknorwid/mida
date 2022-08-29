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
        <title>Kontakt</title>
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
        <div className='flex justify-between items-center w-full md:w-4/6 md:mx-auto'>
          <h1 className='text-3xl font-bold underline'>Kontakt</h1>
        </div>
        <div className='w-full lg:w-4/6 mx-auto mt-16'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.9161553021872!2d15.484284015785777!3d51.93548287970773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4706115816f3744f%3A0x66608bd4ddc4c!2zUnlkemEtxZptaWfFgmVnbywgNjUtNjEwIFppZWxvbmEgR8OzcmE!5e0!3m2!1sru!2spl!4v1661750646689!5m2!1sru!2spl'
            width='100%'
            height='450'
            style={{ border: "0" }}
            allowFullScreen
            loading='lazy'
          ></iframe>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
