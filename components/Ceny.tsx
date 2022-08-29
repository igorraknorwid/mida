import Link from "next/link";

export default function Ceny() {
  return (
    <section className='flex justify-center items-center bg-sky-400 text-white py-5'>
      <div className='flex flex-col lg:flex-row justify-center text-center w-5/6 py-5 gap-10'>
        <Link href='/ceny'>
          <p className='text-2xl cursor-pointer flex justify-center items-center'>
            Czy profesjonalna strona internetowa dla małej firmy powinna być
            droga?
          </p>
        </Link>
        <div>
          <Link href='/ceny'>
            <button className='text-xl cursor-pointer border poppins px-8 py-4 rounded-md hover:bg-white hover:text-sky-400'>
              Sprawdż &#8594;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
