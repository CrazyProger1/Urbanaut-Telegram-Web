import React from "react";
import { AbandonedObjectPhoto } from "@/types/objects";
import Image from "next/image";

interface Props {
  photo: AbandonedObjectPhoto;
}

const ObjectPhotoItem = ({ photo }: Props) => (
  // <SwiperSlide key={photo.src}>
  <Image
    className="object-cover max-h-80 rounded-2xl"
    src={photo.src}
    alt="object-photo"
    width={420}
    height={320}
  />
  // </SwiperSlide>
);

export default ObjectPhotoItem;
