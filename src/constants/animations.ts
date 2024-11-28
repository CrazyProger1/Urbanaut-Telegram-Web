export const SWIPE_CONFIDENCE_THRESHOLD = 10000;
export const SWIPE_OFFSET = 50;
export const SWIPE_TRANSITION = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.01 },
  duration: 0.1,
  ease: "easeIn",
};
export const SWIPE_DRAG_CONSTRAINTS = { left: 0, right: 0 };
export const SWIPE_DRAG_ELASTIC = 0.1;
