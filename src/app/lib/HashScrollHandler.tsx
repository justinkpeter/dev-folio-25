"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

// Navbar height in px — keep in sync with Navbar.module.scss
const NAVBAR_OFFSET = 96;

export default function HashScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const hash = window.location.hash;
    if (!hash) return;

    const el = document.querySelector(hash);
    if (!el) return;

    // Delay slightly so layout (fonts, images, preloader exit) has settled
    // before Lenis measures scroll position — avoids landing short/long.
    const timeout = setTimeout(() => {
      lenis.scrollTo(el as HTMLElement, { offset: -NAVBAR_OFFSET });
    }, 100);

    return () => clearTimeout(timeout);
  }, [lenis]);

  return null;
}
