interface Footer {}

export default function Footer() {
  // { isIntersecting, init }: INavbar
  return (
    <footer className='bg-sky-400'>
      <div className='flex justify-between items-center w-full md:w-4/6 md:mx-auto'>
        <h1>Footer</h1>
      </div>
    </footer>
  );
}
