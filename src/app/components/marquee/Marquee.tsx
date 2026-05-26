import React from "react";
import styles from "./Marquee.module.scss";

type MarqueeProps = {
  children: React.ReactNode;
  /** in seconds */
  time?: number;
  pauseOnHover?: boolean;
};

export default function Marquee({
  children,
  time: speed = 10,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={`${styles.marqueeWrapper} ${
        pauseOnHover ? styles.pauseOnHover : ""
      }`}
      style={{ "--speed": `${speed}s` } as React.CSSProperties}
    >
      <div className={styles.marqueeContent}>
        <div className={styles.track}>
          <span>{children}</span>
          <span aria-hidden="true">{children}</span>
        </div>
      </div>
    </div>
  );
}
