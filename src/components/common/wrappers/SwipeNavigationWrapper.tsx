"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  SWIPE_CONFIDENCE_THRESHOLD,
  SWIPE_DRAG_CONSTRAINTS,
  SWIPE_DRAG_ELASTIC,
  SWIPE_TRANSITION,
  SWIPE_VARIANTS,
} from "@/constants/animations";
import { swipePower } from "@/utils/swipe";
import { useAccountStore } from "@/stores";

interface Props {
  children: React.ReactNode;
  pages: string[];
  className?: string;
}

const SwipeNavigationWrapper = ({ children, pages, className }: Props) => {
  const { animationsEnabled } = useAccountStore();
  const router = useRouter();
  const pathname = usePathname();
  const initialPage = pages.includes(pathname) ? pages.indexOf(pathname) : -1;
  const [page, setPage] = useState(initialPage);

  const paginate = (direction: number) => {
    let newPage = initialPage + direction;
    if (newPage <= -1) newPage = pages.length - 1;
    else if (newPage >= pages.length) newPage = 0;
    setPage(newPage);
    router.push(pages[newPage]);
  };
  if (!animationsEnabled || initialPage === -1)
    return <div className={className}>{children}</div>;

  return (
    <div className={className}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="flex-1 h-full flex flex-col"
          key={page}
          variants={SWIPE_VARIANTS}
          initial="enter"
          animate="center"
          exit="exit"
          transition={SWIPE_TRANSITION}
          drag="x"
          dragConstraints={SWIPE_DRAG_CONSTRAINTS}
          dragElastic={SWIPE_DRAG_ELASTIC}
          onDragEnd={(e, { offset, velocity }) => {
            const power = swipePower(offset.x, velocity.x);
            if (power < -SWIPE_CONFIDENCE_THRESHOLD) paginate(1);
            else if (power > SWIPE_CONFIDENCE_THRESHOLD) paginate(-1);
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SwipeNavigationWrapper;
