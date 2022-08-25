import Link from "next/link";

const Landing = () => {
  return (
    <div className='landingContainer '>
      <video
        style={{
          width: "100%",
          height: "620px",
          objectFit: "cover",
        }}
        src='/bg2.mp4'
        autoPlay
        loop
        muted
      />
      <div className='landingInsideBox'>
        <div className='box px-1'>
          <h1 className='uppercase landingHeader mb-6 text-base lg:text-lg poppins text-center'>
            tworzenie stron internetowych Zielona Góra
          </h1>
          <h3 className='mb-8 text-base lg:text-6xl text-center'>
            Darmowa Niestandardowa Makieta
          </h3>
          <p className='mb-1 text-base lg:text-xl text-center'>
            twojej nowej strony internatowej dostarczona w 7 dni!
          </p>
          <p className='mb-8 text-base lg:text-xl text-center'>
            Bez kosztów i przyszłych zobowiązań!
          </p>
          <button className='maketButton uppercase poppinstext-center'>
            <Link href='/maketa'>
              <a>DARMOWA MAKETA</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
