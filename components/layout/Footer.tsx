interface Footer {}

export default function Footer() {
  // { isIntersecting, init }: INavbar
  return (
    <footer className='bg-sky-400 py-5 w-full'>
      <div className='flex justify-between items-center w-full md:w-5/6 md:mx-auto'>
        <h1>Footer</h1>
      </div>
    </footer>
  );
}
