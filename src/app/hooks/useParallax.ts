"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function useParallax(multiplier = 50) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const rafId = useRef<number>(0);
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.matchMedia("(hover: none)").matches;
  }, []);

  const computeOffset = useCallback(() => {
    if (!ref.current || isMobile.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress = 1 - rect.bottom / (rect.height + windowHeight);
    progress = Math.min(Math.max(progress, 0), 1);

    setOffset(progress * multiplier);
  }, [multiplier]);

  const handleScroll = useCallback(() => {
    if (rafId.current) return;

    rafId.current = requestAnimationFrame(() => {
      computeOffset();
      rafId.current = 0;
    });
  }, [computeOffset]);

  useEffect(() => {
    if (isMobile.current) return;

    computeOffset();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", computeOffset);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", computeOffset);
    };
  }, [computeOffset, handleScroll]);

  return { ref, offset };
}
