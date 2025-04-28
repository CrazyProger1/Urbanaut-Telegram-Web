import React from "react";
import { AbandonedObjectPhoto } from "@/types/abandoned";
import Image from "next/image";
import { ALTS } from "@/config/media";

interface Props {
  photo: AbandonedObjectPhoto;
}

const PhotoItem = ({ photo }: Props) => {
  return (
    <Image
      className="aspect-square overflow-hidden"
      src={photo.src}
      width={128}
      height={128}
      alt={ALTS.OBJECT_PHOTO}
    />
  );
};

export default PhotoItem;
