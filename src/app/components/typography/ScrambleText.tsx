"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUdvwXYZ0123456789@#$%&";

interface Props {
  /** The text to display with scramble animation */
  text: string;
  /** Delay in milliseconds before animation starts (default: 0) */
  delay?: number;
  /** Duration in milliseconds for the animation (default: 1000) */
  duration?: number;
  /** CSS class name to apply to the span element */
  className?: string;
  /** Callback function called when animation completes */
  onComplete?: () => void;
}

export default function ScrambleText({
  text,
  delay = 0,
  duration = 1000,
  className,
  onComplete,
}: Props) {
  const [display, setDisplay] = useState(text.replace(/[^\s]/g, CHARS[0]));
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let frame: ReturnType<typeof setInterval>;

    timeout = setTimeout(() => {
      const startTime = Date.now();
      const chars = text.split("");

      frame = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const resolvedCount = Math.floor(progress * chars.length);

        setDisplay(
          chars
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < resolvedCount) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(""),
        );

        if (progress >= 1) {
          clearInterval(frame);
          onCompleteRef.current?.();
        }
      }, 40);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(frame);
    };
  }, [text, delay, duration]);

  return <span className={className}>{display}</span>;
}
