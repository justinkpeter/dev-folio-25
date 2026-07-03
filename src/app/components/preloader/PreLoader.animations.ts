import type { Variants, Easing } from "framer-motion";

// ---------------------------------------------------------------------------
// Easing — matched to the Framer "PreLoader/PreLoader" component
// ---------------------------------------------------------------------------
export const STAGE_EASE: Easing = [0.96, -0.02, 0.38, 1.01];
export const ENTRANCE_EASE: Easing = [0.56, 0.22, 0.05, 0.99];

// ---------------------------------------------------------------------------
// Timing
// ---------------------------------------------------------------------------
export const ENTRANCE_DURATION = 2.1; // s — on-mount rise of the whole name block
export const ENTRANCE_Y = 640; // px — starting offset for the on-mount rise

export const STAGE_DURATION = 0.9; // s — stage 1→2 and stage 2→3 transition duration
export const POINTER_BLOCK_MS = 2000; // ms — how long the overlay eats pointer events

export const SCRAMBLE_DURATION_MS = 1250; // ms — must match the `duration` passed to ScrambleText
export const SCRAMBLE_HOLD_BUFFER_MS = 0; // ms — extra breathing room after scramble finishes, before exit

/** Stage 1 holds for exactly as long as the scramble text takes to resolve. */
export function getStageHoldMs(): number {
  return SCRAMBLE_DURATION_MS + SCRAMBLE_HOLD_BUFFER_MS;
}

// ---------------------------------------------------------------------------
// Variants — the single source of truth for every motion state
// ---------------------------------------------------------------------------
export const overlayVariants: Variants = {
  full: {
    height: "100%",
    top: 0,
    transition: { duration: STAGE_DURATION, ease: STAGE_EASE },
  },
  thin: {
    height: 2,
    top: 0,
    transition: { duration: STAGE_DURATION, ease: STAGE_EASE },
  },
};

export const wrapperVariants: Variants = {
  hidden: { y: ENTRANCE_Y },
  visible: {
    y: 0,
    transition: { duration: ENTRANCE_DURATION, ease: ENTRANCE_EASE },
  },
  exit: {
    y: "-120vh",
    transition: { duration: STAGE_DURATION, ease: STAGE_EASE },
  },
};
