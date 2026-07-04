"use client";
import { useRef, useEffect, MouseEvent, CSSProperties } from "react";
import styles from "./BezierCurveLine.module.scss";

interface BezierCurveLineProps {
  /** Max height (px) the interactive hit-area/curve can reach on hover */
  hoverHeight?: number;
  /** Multiplier applied to mouse movement — higher = more bend per pixel moved */
  strength?: number;
  /** Hard cap on how far the curve can bend, in either direction */
  maxProgress?: number;
}

interface BezierLineCSSProperties extends CSSProperties {
  "--hover-height"?: string;
  "--hover-offset"?: string;
}

export default function BezierCurveLine({
  hoverHeight = 500,
  strength = 1,
  maxProgress = 250,
}: BezierCurveLineProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const path = useRef<SVGPathElement | null>(null);
  const progress = useRef(0);
  const x = useRef(0.5);
  const time = useRef(Math.PI / 2);
  const reqId = useRef<number | null>(null);

  useEffect(() => {
    setPath(progress.current);

    // ResizeObserver catches any layout-driven width change (container
    // resize, sidebar toggle, font load reflow), not just window resizes.
    const observer = new ResizeObserver(() => setPath(progress.current));
    if (container.current) observer.observe(container.current);

    return () => {
      observer.disconnect();
      if (reqId.current) cancelAnimationFrame(reqId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setPath = (p: number) => {
    if (!path.current || !container.current) return;
    // Measure the container's real rendered width instead of guessing
    // it from window.innerWidth * ratio. That guess drifts from the
    // actual layout (scrollbars, padding, parent max-width), which is
    // what was throwing off the curve's right endpoint.
    const width = container.current.getBoundingClientRect().width;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x.current} ${250 + p}, ${width} 250`,
    );
  };

  const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

  const handleMouseEnter = () => {
    if (reqId.current) {
      cancelAnimationFrame(reqId.current);
      resetAnimation();
    }
  };

  const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), max);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!path.current) return;
    const { movementY, clientX } = e;
    const bounds = path.current.getBoundingClientRect();
    x.current = (clientX - bounds.left) / bounds.width;
    progress.current = clamp(
      progress.current + movementY * strength,
      -maxProgress,
      maxProgress,
    );
    setPath(progress.current);
  };

  const handleMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress.current * Math.sin(time.current);
    progress.current = lerp(progress.current, 0, 0.025);
    time.current += 0.2;
    setPath(newProgress);

    if (Math.abs(progress.current) > 0.75) {
      reqId.current = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time.current = Math.PI / 2;
    progress.current = 0;
  };

  const cssVars: BezierLineCSSProperties = {
    "--hover-height": `${hoverHeight}px`,
    "--hover-offset": `-${hoverHeight / 2}px`,
  };

  return (
    <div ref={container} className={styles.line} style={cssVars}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={styles["line__box"]}
      />
      <svg className={styles["line__svg"]}>
        <path ref={path} className={styles["line__path"]}></path>
      </svg>
    </div>
  );
}
