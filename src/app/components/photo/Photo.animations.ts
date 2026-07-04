import { Variants } from "framer-motion";

// Base fan rotation per card (desktop only). Mirrors the reference:
// slight alternating tilt, straightened out on hover/focus.
export const CARD_ROTATIONS = [-6, -2, 2, 6] as const;

export const galleryVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const cardVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 24,
    rotate: 0,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: CARD_ROTATIONS[i] ?? 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const cardHoverTransition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
};
