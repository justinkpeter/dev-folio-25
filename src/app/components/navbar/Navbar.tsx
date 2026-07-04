"use client";

import { useEffect, useState } from "react";
import { BemBuilder } from "@/app/lib/BemBuilder";
import Link from "next/link";
import HoverSlideText from "../typography/HoverSlideText";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const bem = new BemBuilder("navbar", styles);

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
    <nav className={`${bem.block()} ${hidden ? styles.hidden : ""}`}>
      <div className={bem.element("content")}>
        <div className={bem.element("left")}>
          <Link className={bem.element("logo")} href={"/"}>
            JUSTIN PETER
          </Link>
        </div>
        <div className={bem.element("right")}>
          <Link className={bem.element("link")} href={"/resume"}>
            <HoverSlideText text={"Resume"} className={bem.element("link")} />
          </Link>
          <Link className={bem.element("link")} href={"/#about"}>
            <HoverSlideText text={"About"} className={bem.element("link")} />
          </Link>
          <Link className={bem.element("link")} href={"/#contact"}>
            <HoverSlideText text={"Contact"} className={bem.element("link")} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
