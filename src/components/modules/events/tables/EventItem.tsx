import React from "react";
import { CommunityEvent } from "@/types/events";
import { Block } from "@/components/common/blocks";
import { PAGES } from "@/config/pages";
import Image from "next/image";
import { ALTS, STUBS } from "@/config/media";
import { Link } from "@/i18n/routing";

interface Props {
  event: CommunityEvent;
}
const EventItem = ({ event }: Props) => {
  return (
    <Link href={PAGES.EVENT.replace(":id", String(event.id))}>
      <Block className="flex flex-row p-2">
        <Image
          className="aspect-square size-32 rounded-2xl shadow-volume"
          width={128}
          height={128}
          src={STUBS.EVENT}
          alt={ALTS.EVENT_PHOTO}
        />
        <div className="ml-2 flex flex-col font-primary justify-between">
          <div>
            <div className="text-md font-bold">{event.name}</div>
            <div className="text-sm mt-1">{event.short_description}</div>
          </div>
        </div>
      </Block>
    </Link>
  );
};

export default EventItem;
