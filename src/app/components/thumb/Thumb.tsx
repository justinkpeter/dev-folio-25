"use client";

import { useState } from "react";
import ThumbMenu from "./ThumbMenu";
import ThumbBar from "./ThumbBar";
import styles from "./Thumb.module.scss";

export default function Thumb() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.thumb}>
      <ThumbMenu isOpen={isOpen} />
      <ThumbBar isOpen={isOpen} toggleOpen={() => setIsOpen((prev) => !prev)} />
    </div>
  );
}
