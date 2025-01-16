import React from "react";
import { AbandonedObjectPhoto } from "@/types/objects";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

interface Props {
  photo: AbandonedObjectPhoto;
}

const ObjectPhotoItem = ({ photo }: Props) => (
  <SwiperSlide key={photo.src}>
    <Image
      className="object-cover max-h-80 rounded-2xl"
      src={photo.src}
      alt="object-photo"
      placeholder="blur"
      fill
    />
  </SwiperSlide>
);

export default ObjectPhotoItem;
