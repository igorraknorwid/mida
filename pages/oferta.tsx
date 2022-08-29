/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const arr = [
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
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oferta</title>
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

      <main className='mt-20'>
        <div className='flex flex-col justify-between items-center w-full  md:w-4/6 md:mx-auto'>
          {arr.map((item) => {
            return (
              <div key={item.id}>
                <h3 className='text-3xl pt-12 pb-8 ' id={item.id.toString()}>
                  {item.text}
                </h3>
                <p>
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos, qui ratione
                  voluptatem sequi nesciunt, neque porro quisquam est, qui
                  dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt, ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit, qui in ea
                  voluptate velit esse, quam nihil molestiae consequatur, vel
                  illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At
                  vero eos et accusamus et iusto odio dignissimos ducimus, qui
                  blanditiis praesentium voluptatum deleniti atque corrupti,
                  quos dolores et quas molestias excepturi sint, obcaecati
                  cupiditate non provident, similique sunt in culpa, qui officia
                  deserunt mollitia animi, id est laborum et dolorum fuga. Et
                  harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio, cumque
                  nihil impedit, quo minus id, quod maxime placeat, facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet, ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat.
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
