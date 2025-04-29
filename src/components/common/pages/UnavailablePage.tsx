"use client";

import React from "react";

import { motion, useAnimation } from "framer-motion";

import { ALTS, ICONS } from "@/config/media";

const LOCK_WOBBLE_ANIMATION = {
  rotate: [0, -10, 10, -10, 10, 0],
  transition: { duration: 0.3, ease: "easeInOut" },
};

interface Props {
  icon?: string;
}

const UnavailablePage = ({ icon }: Props) => {
  const controls = useAnimation();

  return (
    <div
      className="relative h-full w-full flex-1 flex items-center justify-center rounded-2xl"
      onClick={() => controls.start(LOCK_WOBBLE_ANIMATION)}
    >
      <div className="absolute inset-0 bg-foreground blur-sm rounded-2xl h-full mx-4" />
      <motion.img
        src={icon || ICONS.LOCK}
        className="relative z-10 size-14 drop-shadow-volume"
        alt={ALTS.UNAVAILABLE_ICON}
        animate={controls}
        style={{ transformOrigin: "top center" }}
      />
    </div>
  );
};

export default UnavailablePage;
