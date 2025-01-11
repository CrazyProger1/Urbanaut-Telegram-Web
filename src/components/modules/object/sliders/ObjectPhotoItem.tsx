import React from "react";
import { AbandonedObjectPhoto } from "@/types/objects";
import { SwiperSlide } from "swiper/react";

interface Props {
  photo: AbandonedObjectPhoto;
}

const ObjectPhotoItem = ({ photo }: Props) => (
  <SwiperSlide key={photo.src}>
    <img
      className="object-cover max-h-80 rounded-2xl"
      src={photo.src}
      alt="object-photo"
    />
  </SwiperSlide>
);

export default ObjectPhotoItem;
