"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AbandonedObjectPhoto } from "@/types/objects";
import { EffectCards } from "swiper/modules";

interface Props {
  photos?: AbandonedObjectPhoto[];
}

const ObjectPhotos = ({ photos }: Props) => {
  return (
    <div className="flex items-center rounded-2xl  shadow-volume-frame">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        loop={true}
      >
        {photos?.map((photo) => (
          <SwiperSlide key={photo.src}>
            <img
              className="object-cover max-h-80 rounded-2xl"
              src={photo.src}
              alt="object-photo"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ObjectPhotos;
