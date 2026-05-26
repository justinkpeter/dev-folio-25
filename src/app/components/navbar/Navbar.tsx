"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HoverSlideText from "../typography/HoverSlideText";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // scrolling down & past 80px → hide navbar
        setHidden(true);
      } else {
        // scrolling up → show navbar
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav className={`${styles.navbar} ${hidden ? styles.hidden : ""}`}>
      <div className={styles.navbar__left}>
        <Link className={styles.navbar__logo} href={"/"}>
          JUSTIN PETER
        </Link>
      </div>
      <div className={styles.navbar__right}>
        <Link className={styles.navbar__link} href={"/projects"}>
          <HoverSlideText text={"projects"} className={styles.navbar__link} />
        </Link>
        <Link className={styles.navbar__link} href={"/resume"}>
          <HoverSlideText text={"Resume"} className={styles.navbar__link} />
        </Link>
        <Link className={styles.navbar__link} href={"#about"}>
          <HoverSlideText text={"About"} className={styles.navbar__link} />
        </Link>
        <Link className={styles.navbar__link} href={"#contact"}>
          <HoverSlideText text={"Contact"} className={styles.navbar__link} />
        </Link>
      </div>
    </nav>
  );
}
