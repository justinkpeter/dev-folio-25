"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";
import styles from "./Cursor.module.scss";

export default function Cursor() {
  const [hoverText, setHoverText] = useState("");
  const [cursorSize, setCursorSize] = useState(24);

  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  const x = useSpring(targetX, { damping: 40, stiffness: 300 });
  const y = useSpring(targetY, { damping: 40, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const offset = cursorSize / 2;
      targetX.set(e.clientX - offset);
      targetY.set(e.clientY - offset);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        "[data-cursor]",
      ) as HTMLElement | null;
      if (target?.dataset?.cursor) {
        setHoverText(target.dataset.cursor);
        setCursorSize(120);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        "[data-cursor]",
      ) as HTMLElement | null;
      if (target?.dataset?.cursor) {
        setHoverText("");
        setCursorSize(24);
      }
    };

    const handleClick = () => {
      setHoverText("");
      setCursorSize(24);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, [cursorSize, targetX, targetY]);

  return (
    <motion.div
      className={styles.cursor}
      style={{
        x,
        y,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        borderRadius: "50%",
      }}
    >
      <AnimatePresence>
        {hoverText && (
          <motion.span
            className={styles.text}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {hoverText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
