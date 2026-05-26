"use client";

import AsciiBackground from "../typography/AsciiBackground";
import Model from "./Model";
import styles from "./Hero.module.scss";
import useParallax from "@/app/hooks/useParallax";
import ScrambleText from "../typography/ScrambleText";

export default function Hero() {
  const { ref: heroRef } = useParallax(100);

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.stack}>
        <h1 className={styles.headingTop}>
          <ScrambleText
            text={`Dev Folio '${new Date().getFullYear().toString().slice(-2)}`}
          />
        </h1>
        <div className={styles.image}>
          <AsciiBackground />
          <Model />
        </div>
        <h1 className={styles.headingBottom}>Justin Peter</h1>
        <div className={styles.subTitle}>
          <div> Creative Developer </div>
          <div> [ scroll for goodies ↓] </div>
        </div>
      </div>
    </div>
  );
}
