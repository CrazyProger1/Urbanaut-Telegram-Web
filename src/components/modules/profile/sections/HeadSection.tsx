import React from "react";
import { ICONS } from "@/constants/media";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { LINKS } from "@/constants/nav";

const HeadSection = () => {
  return (
    <div className="flex flex-row">
      <div className="flex-1" />
      <Link href={LINKS.notifications}>
        <Image
          src={ICONS.BELL}
          alt=""
          className="size-8"
          width={32}
          height={32}
        />
      </Link>
    </div>
  );
};

export default HeadSection;
