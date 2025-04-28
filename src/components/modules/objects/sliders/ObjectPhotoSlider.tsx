import React from "react";
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

  if (!photos || photos?.length < 3) {
    return null;
  }

  return (
    <div
      className="relative w-full flex justify-center items-center"
      style={{ minHeight: `${centerH}px` }}
    >
      {/* Left photo */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden rounded-2xl"
        style={{ width: `${w}px`, height: `${h}px` }}
      >
        <Image
          src={photos[0].src}
          alt={ALTS.OBJECT_PHOTO}
          fill
          className="object-cover drop-shadow-volume"
        />
      </div>

      {/* Center photo */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 overflow-hidden rounded-2xl"
        style={{ width: `${centerW}px`, height: `${centerH}px` }}
      >
        <Image
          src={photos[1].src}
          alt={ALTS.OBJECT_PHOTO}
          fill
          className="object-cover drop-shadow-volume"
        />
      </div>

      {/* Right photo */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden rounded-2xl"
        style={{ width: `${w}px`, height: `${h}px` }}
      >
        <Image
          src={photos[2].src}
          alt={ALTS.OBJECT_PHOTO}
          fill
          className="object-cover drop-shadow-volume"
        />
      </div>
    </div>
  );
};

export default ObjectPhotoSlider;
