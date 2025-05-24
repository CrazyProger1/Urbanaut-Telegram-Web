"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SWIPE_CONFIDENCE_THRESHOLD,
  SWIPE_DRAG_CONSTRAINTS,
  SWIPE_DRAG_ELASTIC,
  SWIPE_TRANSITION,
  SWIPE_VARIANTS,
} from "@/config/animations";
import { swipePower } from "@/helpers/swipe";
import { usePathname, useRouter } from "@/i18n/routing";
import useAccountStore from "@/stores/accounts";
import { Loader } from "@/components/common/loaders";

interface Props {
  children: React.ReactNode;
  pages: string[];
  className?: string;
}

const SwipeNavigationWrapper = ({ children, pages, className }: Props) => {
  const { user } = useAccountStore();
  const animationsEnabled = user?.settings.is_animations_enabled;
  const router = useRouter();
  const pathname = usePathname();
  const initialPage = pages.includes(pathname) ? pages.indexOf(pathname) : -1;
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  const paginate = (direction: number) => {
    let newPage = initialPage + direction;
    if (newPage <= -1) newPage = pages.length - 1;
    else if (newPage >= pages.length) newPage = 0;
    setPage(newPage);
    setLoading(true);
    router.push(pages[newPage]);
  };

  if (!animationsEnabled || initialPage === -1)
    return <div className={className}>{children}</div>;

  if (loading)
    return (
      <div className={className}>
        <Loader size="lg" />
      </div>
    );

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
