import React from "react";
import { AbandonedObject } from "@/types/abandoned";
import { Block } from "@/components/common/blocks";
import Image from "next/image";
import { ALTS, STUBS } from "@/config/media";
import { Link } from "@/i18n/routing";
import { PAGES } from "@/config/pages";

interface Props {
  object: AbandonedObject;
}

const ObjectItem = ({ object }: Props) => {
  return (
    <Link href={PAGES.OBJECT.replace(":id", String(object.id))}>
      <Block className="flex flex-row p-2">
        <Image
          className="aspect-square size-32 rounded-2xl"
          width={64}
          height={64}
          src={object.photo || STUBS.OBJECT}
          alt={ALTS.OBJECT_PHOTO}
        />
        <div className="ml-2 flex flex-col font-primary">
          <div className="text-md font-bold">{object.name}</div>
          {/*<div className="text-sm">{object.short_description}</div>*/}
          <div></div>
        </div>
      </Block>
    </Link>
  );
};

export default ObjectItem;
