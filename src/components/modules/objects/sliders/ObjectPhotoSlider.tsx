"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation, PanInfo } from "framer-motion";
import { AbandonedObject } from "@/types/abandoned";
import { ALTS } from "@/config/media";
import Image from "next/image";

interface Props {
  object: AbandonedObject;
}

const ObjectPhotoSlider = ({ object }: Props) => {
  const { photos } = object;
  const w = 260;
  const h = (w * 9) / 16;
  const centerW = 300;
  const centerH = (centerW * 9) / 16;

  const [currentIndex, setCurrentIndex] = useState(1);
  const controls = useAnimation();

  if (!photos || photos.length < 3) {
    return null;
  }

  const getPhotoIndex = (offset: number) => {
    return (currentIndex + offset + photos.length) % photos.length;
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 100;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    // Consider both distance and velocity for better UX
    if (offset < -threshold || (velocity < -500 && offset < 0)) {
      // Swiped left - go to next image
      controls
        .start({
          x: -centerW,
          opacity: 0,
          transition: { duration: 0.3 },
        })
        .then(() => {
          setCurrentIndex((prev) => (prev + 1) % photos.length);
        });
    } else if (offset > threshold || (velocity > 500 && offset > 0)) {
      // Swiped right - go to previous image
      controls
        .start({
          x: centerW,
          opacity: 0,
          transition: { duration: 0.3 },
        })
        .then(() => {
          setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
        });
    } else {
      // Return to center if swipe wasn't strong enough
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.3 } });
    }
  };

  return (
    <div
      className="relative w-full flex justify-center items-center overflow-hidden"
      style={{ minHeight: `${centerH}px` }}
    >
      {/* Left (previous) image */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden rounded-2xl"
        style={{ width: `${w}px`, height: `${h}px` }}
      >
        <Image
          src={photos[getPhotoIndex(-1)].src}
          alt={ALTS.OBJECT_PHOTO}
          fill
          className="object-cover drop-shadow-volume blur-sm"
        />
      </div>

      {/* Center (current) image with drag functionality */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          className="relative z-20 overflow-hidden rounded-2xl"
          style={{ width: `${centerW}px`, height: `${centerH}px` }}
          animate={controls}
          initial={{ x: 0, opacity: 1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={handleDragEnd}
          whileDrag={{
            cursor: "grabbing",
            scale: 0.98,
          }}
          whileHover={{ cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        >
          <Image
            src={photos[currentIndex].src}
            alt={ALTS.OBJECT_PHOTO}
            fill
            className="object-cover drop-shadow-volume"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Right (next) image */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden rounded-2xl"
        style={{ width: `${w}px`, height: `${h}px` }}
      >
        <Image
          src={photos[getPhotoIndex(1)].src}
          alt={ALTS.OBJECT_PHOTO}
          fill
          className="object-cover drop-shadow-volume blur-sm"
        />
      </div>
    </div>
  );
};

export default ObjectPhotoSlider;
