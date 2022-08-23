import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { links } from "../../content/navigation";

interface INavbar {
  navStyle?: string;
  ulStyle?: string;
  liStyle?: string;
  aStyle?: string;
  aStyleActive?: string;
}

export default function Navbar({
  navStyle,
  ulStyle,
  liStyle,
  aStyle,
  aStyleActive,
}: INavbar) {
  const router = useRouter();
  const path = router.asPath;

  if (links.length === 0) {
    return null;
  }

  return (
    <nav className={navStyle && navStyle}>
      <ul className={ulStyle && ulStyle}>
        {links.map((item, index) => {
          if (path === item.slug) {
            return (
              <li key={index} className={liStyle && liStyle}>
                <Link href={item.slug}>
                  <a className={aStyleActive && aStyleActive}>{item.text}</a>
                </Link>
              </li>
            );
          }
          return (
            <li key={index} className={liStyle && liStyle}>
              <Link href={item.slug}>
                <a className={aStyle && aStyle}>{item.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
