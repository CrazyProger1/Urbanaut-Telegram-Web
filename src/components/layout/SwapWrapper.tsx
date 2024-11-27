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
      x: direction > 0 ? 1000 : -1000,
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
      x: direction < 0 ? 1000 : -1000,
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

  const [[page, direction], setPage] = useState([PAGES.indexOf(pathname), 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    router.push(PAGES[page]);
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
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
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
