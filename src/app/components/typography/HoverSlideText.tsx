"use client";

import { useEffect, useState } from "react";
import styles from "./HoverSlideText.module.scss";
import clsx from "clsx";

type HoverSlideTextProps = {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function HoverSlideText({
  text,
  children,
  className,
  delay = 200,
}: HoverSlideTextProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={clsx(styles.container, className)}>
      <span className={clsx(styles.wrapper, { [styles.visible]: visible })}>
        <span className={styles.text}>{children ?? text}</span>
        <span className={styles.text}>{children ?? text}</span>
      </span>
    </div>
  );
}
