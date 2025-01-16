"use client";

import React, { useState } from "react";
import { AbandonedObjectPhoto } from "@/types/objects";
import ObjectPhotoItem from "@/components/modules/object/sliders/ObjectPhotoItem";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface Props {
  photos?: AbandonedObjectPhoto[];
}

const ObjectPhotoSlider = ({ photos }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (!photos) return;

    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // Determine swipe direction and threshold
    if (offset < -100 || velocity < -500) {
      // Swiped left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    } else if (offset > 100 || velocity > 500) {
      // Swiped right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? photos.length - 1 : prevIndex - 1,
      );
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full rounded-2xl shadow-volume-frame overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        {photos && photos.length > 0 && (
          <motion.div
            key={photos[currentIndex].src}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ duration: 0.01 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="w-full h-full"
          >
            <ObjectPhotoItem photo={photos[currentIndex]} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ObjectPhotoSlider;
