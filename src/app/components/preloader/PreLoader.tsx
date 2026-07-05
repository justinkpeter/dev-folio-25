"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./PreLoader.module.scss";
import {
  getStageHoldMs,
  overlayVariants,
  POINTER_BLOCK_MS,
  STAGE_DURATION,
  wrapperVariants,
} from "./PreLoader.animations";
import ScrambleText from "../typography/ScrambleText";

export interface PreLoaderProps {
  /** Called once the exit animation (stage 3) has fully finished. */
  onComplete?: () => void;
  /** Force canvas/editor mode — skips all runtime timers/effects and renders nothing. Auto-detected if omitted. */
  isCanvas?: boolean;
  /** z-index of the fixed overlay. Defaults very high so it always sits on top. */
  zIndex?: number;
}

type Stage = 1 | 2 | 3;

export default function PreLoader({
  onComplete,
  isCanvas,
  zIndex = 9999,
}: PreLoaderProps) {
  const [stage, setStage] = useState<Stage>(1);
  const [pointerBlocked, setPointerBlocked] = useState(true);

  const timers = useRef<number[]>([]);
  const rafId = useRef<number | null>(null);

  const clearAllTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  const runSequence = useCallback(() => {
    clearAllTimers();
    setStage(1);
    setPointerBlocked(true);

    timers.current.push(
      window.setTimeout(() => setPointerBlocked(false), POINTER_BLOCK_MS),
      window.setTimeout(() => setStage(2), getStageHoldMs()),
    );
  }, [clearAllTimers]);

  // Kick off once on mount only.
  useEffect(() => {
    runSequence();
    return clearAllTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Stage 2 has no intentional hold — flow straight into stage 3 on the next
  // frame so the browser still gets a paint tick between the two variants.
  useEffect(() => {
    if (stage !== 2) return;
    rafId.current = requestAnimationFrame(() => setStage(3));
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [stage]);

  // Fire onComplete once the exit transition has had time to finish.
  useEffect(() => {
    if (stage !== 3) return;
    const id = window.setTimeout(() => onComplete?.(), STAGE_DURATION * 1000);
    timers.current.push(id);
  }, [stage, onComplete]);

  return (
    <div
      className={styles.preloader}
      style={{ zIndex, pointerEvents: pointerBlocked ? "auto" : "none" }}
      aria-hidden="true"
    >
      <motion.div
        className={styles.preloader__overlay}
        variants={overlayVariants}
        initial="full"
        animate={stage === 3 ? "thin" : "full"}
      >
        <motion.div
          className={styles.preloader__wrapper}
          variants={wrapperVariants}
          initial="hidden"
          animate={stage === 3 ? "exit" : "visible"}
        >
          <ScrambleText
            text={`Dev Folio '${new Date().getFullYear().toString().slice(-2)}`}
            duration={1200}
            className={styles.preloader__name}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
