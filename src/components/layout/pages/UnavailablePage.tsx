"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

interface UnavailablePageProps {
  icon: string;
  href?: string;
}

const UnavailablePage = ({ icon, href }: UnavailablePageProps) => {
  const controls = useAnimation();

  const shakeAnimation = {
    rotate: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  const handleTap = () => controls.start(shakeAnimation);

  return (
    <div
      className="relative h-full w-full flex-1 flex items-center justify-center rounded-2xl"
      onClick={handleTap}
    >
      <div className="absolute inset-0 bg-secondary blur-sm rounded-2xl h-full"></div>
      <motion.img
        src={icon}
        className="relative z-10 size-14"
        alt="reason-image"
        animate={controls}
        style={{ transformOrigin: "top center" }}
      />
    </div>
  );
};

export default UnavailablePage;
