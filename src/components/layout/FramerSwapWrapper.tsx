"use client";

import React, { useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FOOTER_PAGES } from "@/constants/nav";
import {
  SWIPE_CONFIDENCE_THRESHOLD,
  SWIPE_DRAG_CONSTRAINTS,
  SWIPE_DRAG_ELASTIC,
  SWIPE_TRANSITION,
} from "@/constants/animations";
import { swipePower } from "@/utils/swipe";
import { UIContext } from "@/contexts/ui";

// const variants = {
//   enter: (direction: number) => {
//     return {
//       x: direction > 0 ? SWIPE_OFFSET : -SWIPE_OFFSET,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction: number) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? SWIPE_OFFSET : -SWIPE_OFFSET,
//       opacity: 0,
//     };
//   },
// };
// const variants = {
//   enter: (direction: number) => ({
//     opacity: 0,
//     zIndex: 1,
//     scale: 0.9, // Можно добавить уменьшение для эффекта масштаба
//   }),
//   center: {
//     zIndex: 1,
//     opacity: 1,
//     scale: 1,
//   },
//   exit: (direction: number) => ({
//     zIndex: 0,
//     opacity: 0,
//     scale: 0.9, // Уменьшение масштаба при выходе
//     y: 50, // Смещение вниз при уходе
//   }),
// };
// const variants = {
//   enter: (direction: number) => ({
//     rotateY: 90, // Начало слайда с поворотом по оси Y
//     opacity: 0,
//   }),
//   center: {
//     zIndex: 1,
//     rotateY: 0, // Конечное состояние — без поворота
//     opacity: 1,
//   },
//   exit: (direction: number) => ({
//     rotateY: -90, // Поворот при уходе
//     opacity: 0,
//     zIndex: 0,
//   }),
// };
const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    filter: "blur(10px)", // Размытие на входе
  }),
  center: {
    zIndex: 1,
    opacity: 1,
    filter: "blur(0)", // Четкость при отображении
  },
  exit: (direction: number) => ({
    opacity: 0,
    filter: "blur(10px)", // Размытие при выходе
    zIndex: 0,
  }),
};

// const variants = {
//   enter: (direction: number) => ({
//     x: direction > 0 ? "100%" : "-100%",
//     opacity: 0,
//   }),
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction: number) => ({
//     x: direction > 0 ? "-100%" : "100%",
//     opacity: 0,
//     zIndex: 0,
//   }),
// };

interface SwapWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const FramerSwapWrapper = ({ children, className }: SwapWrapperProps) => {
  const { animationsEnabled } = useContext(UIContext);
  const router = useRouter();
  const pathname = usePathname();

  const [[page, direction], setPage] = useState([
    FOOTER_PAGES.includes(pathname) ? FOOTER_PAGES.indexOf(pathname) : 0,
    0,
  ]);

  const swapPage = (direction: number) => {
    let newPage = page + direction;

    if (newPage === -1) newPage = FOOTER_PAGES.length - 1;
    else if (newPage === FOOTER_PAGES.length) newPage = 0;

    router.push(FOOTER_PAGES[newPage]);
    setPage([newPage, direction]);
  };
  if (!animationsEnabled)
    return (
      <div className={className} key={page}>
        {children}
      </div>
    );

  return (
    <div className={className}>
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          className="flex-1 h-full flex flex-col"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={SWIPE_TRANSITION}
          drag="x"
          dragConstraints={SWIPE_DRAG_CONSTRAINTS}
          dragElastic={SWIPE_DRAG_ELASTIC}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
              swapPage(1);
            } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
              swapPage(-1);
            }
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FramerSwapWrapper;
