"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  target: string;
  active: boolean;
  text: string;
  extendClassName?: string;
  onToggle?: (target: string, active: boolean) => void;
  onHold?: (target: string, active: boolean) => void;
}

const SearchToggle = ({
  target,
  active,
  text,
  extendClassName,
  onToggle,
  onHold,
}: Props) => {
  const [holdTimeout, setHoldTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isHeld, setIsHeld] = useState(false);

  const handleToggle = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (onToggle) {
      onToggle(target, !active);
    }
  };

  const handleMouseHoldStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (onHold) {
      const timeoutId = setTimeout(() => {
        onHold(target, active);
        setIsHeld(true);
      }, 200);
      setHoldTimeout(timeoutId);
    }
  };

  const handleTouchHoldStart = (event: React.TouchEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (onHold) {
      const timeoutId = setTimeout(() => {
        onHold(target, active);
        setIsHeld(true);
      }, 200);
      setHoldTimeout(timeoutId);
    }
  };

  const handleMouseHoldEnd = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    clearHoldTimeout();
  };

  const handleTouchHoldEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    event.stopPropagation();
    clearHoldTimeout();
  };

  const clearHoldTimeout = () => {
    if (holdTimeout) {
      clearTimeout(holdTimeout);
      setHoldTimeout(null);
    }
    setIsHeld(false);
  };

  return (
    <motion.div
      className={`${extendClassName} flex-1 p-2 text-text font-primary flex justify-center cursor-pointer relative 
        ${active ? "bg-selection" : ""}`}
      animate={{ scale: isHeld ? 0.95 : 1 }}
      onClick={handleToggle}
      onMouseDown={handleMouseHoldStart}
      onMouseUp={handleMouseHoldEnd}
      onMouseLeave={handleMouseHoldEnd}
      onTouchStart={handleTouchHoldStart}
      onTouchEnd={handleTouchHoldEnd}
      onTouchMove={handleTouchHoldEnd}
    >
      {active && (
        <motion.div
          className={`${extendClassName} absolute inset-0 border border-selection-border pointer-events-none`}
          layout
        />
      )}
      {text}
    </motion.div>
  );
};

export default SearchToggle;
