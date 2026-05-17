"use client";

import Image from "next/image";
import styles from "./Hero.module.scss";
import clsx from "clsx";
import useParallax from "@/app/hooks/useParallax";

export default function Hero() {
  const { ref: heroRef, offset } = useParallax(100);

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.stack}>
        {/* Top header - fades in first */}
        <h1 className={clsx(styles.heading, styles.headingTop)}>
          Justin Peter
        </h1>

        {/* Image grows after headers fade in */}
        <div className={styles.folio}>
          <div className={styles.parallaxWrapper}>
            <Image
              src="/img/hero.jpg"
              alt="Hero"
              fill
              draggable={false}
              style={{ transform: `translateY(${offset}px) scale(1.3)` }}
            />
          </div>
        </div>

        {/* Bottom header - fades in with top header */}
        <h1 className={clsx(styles.heading, styles.headingBottom)}>
          Dev Folio &apos;{new Date().getFullYear().toString().slice(-2)}
        </h1>
      </div>

      <div className={clsx(styles.subTitle, styles.scrollHint)}>
        <div>Creative Developer</div>
        <div>[ scroll for goodies ↓ ]</div>
      </div>
    </div>
  );
}
