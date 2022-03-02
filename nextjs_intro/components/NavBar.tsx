// import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import style from "./NavBar.module.css";
const NavBar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a className={`${style.link} ${style.actiove}`}>Home</a>
      </Link>
      <Link href="/about">
        <a
          className={[
            style.link,
            router.pathname === "/about" ? `${style.actiove}` : "",
          ].join(" ")}
        >
          About
        </a>
      </Link>
    </nav>
  );
};
export default NavBar;
