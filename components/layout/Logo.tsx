import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Link href='/'>
      <a className=''>
        <Image
          src='/logo.svg'
          alt='MIDADIGITAL'
          layout='fill'
          // width={196}
          // height={39}
        />
      </a>
    </Link>
  );
}
