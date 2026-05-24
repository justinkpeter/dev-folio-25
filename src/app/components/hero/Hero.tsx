"use client";

import styles from "./Hero.module.scss";
import clsx from "clsx";
import useParallax from "@/app/hooks/useParallax";
import Model from "../Model";

export default function Hero() {
  const { ref: heroRef } = useParallax(100);

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.stack}>
        <h1 className={clsx(styles.heading, styles.headingTop)}>
          Dev Folio &apos;{new Date().getFullYear().toString().slice(-2)}
        </h1>

        <div className={styles.folio}>
          <Model />
        </div>

        <h1 className={clsx(styles.heading, styles.headingBottom)}>
          Justin Peter
        </h1>
      </div>

      <div className={clsx(styles.subTitle, styles.scrollHint)}>
        <div>Creative Developer</div>
        <div>[ scroll for goodies ↓ ]</div>
      </div>
    </div>
  );
}
