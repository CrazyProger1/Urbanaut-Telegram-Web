import React from "react";
import { AbandonedObject } from "@/types/abandoned";
import { Block } from "@/components/common/blocks";
import Image from "next/image";
import { ALTS, STUBS } from "@/config/media";

interface Props {
  object: AbandonedObject;
}

const ObjectItem = ({ object }: Props) => {
  return (
    <Block className="flex flex-row">
      <Image
        className="aspect-square size-32"
        width={64}
        height={64}
        src={object.photo || STUBS.OBJECT}
        alt={ALTS.OBJECT_PHOTO}
      />
      <div className="ml-4 flex flex-col">
        <div>{object.name}</div>
        <div>{object.short_description}</div>
        <div></div>
        <div></div>
      </div>
    </Block>
  );
};

export default ObjectItem;
