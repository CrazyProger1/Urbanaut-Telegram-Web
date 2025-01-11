"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AbandonedObjectPhoto } from "@/types/objects";
import { EffectCards } from "swiper/modules";
import ObjectPhotoItem from "@/components/modules/object/sliders/ObjectPhotoItem";

interface Props {
  photos?: AbandonedObjectPhoto[];
}

const ObjectPhotoSlider = ({ photos }: Props) => {
  return (
    <div className="flex items-center rounded-2xl shadow-volume-frame">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        loop={true}
      >
        {photos?.map((photo) => (
          <ObjectPhotoItem key={photo.src} photo={photo} />
        ))}
      </Swiper>
    </div>
  );
};

export default ObjectPhotoSlider;
