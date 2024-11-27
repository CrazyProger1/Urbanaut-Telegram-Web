"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { FOOTER_PAGES } from "@/constants/nav";

interface SwapWrapperProps {
  children: React.ReactNode;
  className?: string;
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

const SwapWrapper = ({ children, className }: SwapWrapperProps) => {
  const pathname = usePathname();

  const router = useRouter();

  const [[page, direction], setPage] = useState([
    FOOTER_PAGES.includes(pathname) ? FOOTER_PAGES.indexOf(pathname) : 0,
    0,
  ]);

  const paginate = (newDirection: number) => {
    let newPage = page + newDirection;

    if (newPage === -1) newPage = FOOTER_PAGES.length - 1;
    else if (newPage === FOOTER_PAGES.length) newPage = 0;

    router.push(FOOTER_PAGES[newPage]);
    setPage([newPage, newDirection]);
  };
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!animationComplete) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [animationComplete]);

  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        className={className}
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.1 },
          duration: 0.1,
        }}
        onAnimationComplete={() => setAnimationComplete(true)}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
            setAnimationComplete(false);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
            setAnimationComplete(false);
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SwapWrapper;
