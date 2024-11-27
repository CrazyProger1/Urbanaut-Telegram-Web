"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { PAGES } from "@/constants/navigation";

interface SwapWrapperProps {
  children: React.ReactNode;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const SwapWrapper = ({ children }: SwapWrapperProps) => {
  const pathname = usePathname();

  const router = useRouter();

  const [[page, direction], setPage] = useState([
    PAGES.includes(pathname) ? PAGES.indexOf(pathname) : 0,
    0,
  ]);

  const paginate = (newDirection: number) => {
    let newPage = page + newDirection;

    if (newPage === -1) newPage = PAGES.length - 1;
    else if (newPage === PAGES.length) newPage = 0;

    router.push(PAGES[newPage]);
    setPage([newPage, newDirection]);
  };
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.1 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SwapWrapper;
