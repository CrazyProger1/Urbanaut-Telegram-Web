import React from "react";
import { AbandonedObject } from "@/types/objects";
import ObjectPhotoSlider from "@/components/sliders/ObjectPhotos";

interface Props {
  object: AbandonedObject;
}

const GallerySection = ({ object }: Props) => {
  return <ObjectPhotoSlider photos={object.photos} />;
};

export default GallerySection;
