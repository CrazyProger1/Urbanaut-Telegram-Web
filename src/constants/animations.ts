export const SWIPE_CONFIDENCE_THRESHOLD = 10000;

export const SWIPE_TRANSITION = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.01 },
  duration: 0.1,
  ease: "easeIn",
};
export const SWIPE_DRAG_CONSTRAINTS = { left: 0, right: 0 };
export const SWIPE_DRAG_ELASTIC = 0.1;

export const SWIPE_VARIANTS = {
  enter: {
    opacity: 0,
    filter: "blur(10px)",
  },
  center: {
    zIndex: 1,
    opacity: 1,
    filter: "blur(0)",
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    zIndex: 0,
  },
};
