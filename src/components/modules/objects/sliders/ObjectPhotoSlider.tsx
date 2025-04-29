"use client";

import React, { useState, useRef } from "react";
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
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const centerRef = useRef<HTMLDivElement>(null);

  if (!photos || photos.length < 3) {
    return null;
  }

  const getPhotoIndex = (offset: number) => {
    return (currentIndex + offset + photos.length) % photos.length;
  };

  const handleDragStart = (clientX: number) => {
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (dragStart === null) return;
    const offset = clientX - dragStart;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (dragStart === null) return;
    const threshold = 100;
    if (dragOffset < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    } else if (dragOffset > threshold) {
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    }
    setDragStart(null);
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <div
      className="relative w-full flex justify-center items-center overflow-hidden"
      style={{ minHeight: `${centerH}px` }}
    >
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden rounded-2xl"
        style={{ width: `${w}px`, height: `${h}px` }}
      >
        <Image
          src={photos[getPhotoIndex(-1)].src}
          alt={ALTS.OBJECT_PHOTO}
          fill
          className="object-cover drop-shadow-volume"
        />
      </div>

      <div
        ref={centerRef}
        className="relative z-20 overflow-hidden rounded-2xl"
        style={{
          width: `${centerW}px`,
          height: `${centerH}px`,
          transform: `translateX(${dragOffset}px)`,
          transition: dragStart === null ? "transform 0.3s ease" : "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={photos[currentIndex].src}
          alt={ALTS.OBJECT_PHOTO}
          fill
          className="object-cover drop-shadow-volume"
        />
      </div>

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden rounded-2xl"
        style={{ width: `${w}px`, height: `${h}px` }}
      >
        <Image
          src={photos[getPhotoIndex(1)].src}
          alt={ALTS.OBJECT_PHOTO}
          fill
          className="object-cover drop-shadow-volume"
        />
      </div>
    </div>
  );
};

export default ObjectPhotoSlider;
