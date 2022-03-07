// import React from "react";

import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './NavBar.module.css';
const NavBar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <img src="/vercel.svg" />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        .active {
          color: red;
        }
        .none {
          color: blue;
        }
      `}</style>
    </nav>
  );
};
export default NavBar;
