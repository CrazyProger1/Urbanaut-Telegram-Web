"use client";

import React, { useState } from "react";
import { AbandonedObjectPhoto } from "@/types/objects";

import ObjectPhotoItem from "@/components/modules/object/sliders/ObjectPhotoItem";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  photos?: AbandonedObjectPhoto[];
}

const ObjectPhotoSlider = ({ photos }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (photos) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }
  };

  const handlePrev = () => {
    if (photos) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? photos.length - 1 : prevIndex - 1,
      );
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full rounded-2xl shadow-volume-frame overflow-hidden">
      <AnimatePresence initial={false}>
        {photos && photos.length > 0 && (
          <motion.div
            key={photos[currentIndex].src}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full"
          >
            <ObjectPhotoItem photo={photos[currentIndex]} />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={handlePrev}
        className="absolute left-4 z-10 p-2 bg-white rounded-full shadow-lg"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 z-10 p-2 bg-white rounded-full shadow-lg"
      >
        Next
      </button>
    </div>
  );
};
export default ObjectPhotoSlider;
