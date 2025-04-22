"use client";

import React from "react";
import Block from "@/components/common/blocks/Block";

import { VerticalDivider } from "@/components/common/dividers";
import { BlockButton } from "@/components/common/contorls";
import { ICONS } from "@/config/media";
import { openTelegramLink } from "@telegram-apps/sdk";
import { Link } from "@/i18n/routing";

const AboutSettings = () => {
  return (
    <Block title="About">
      <VerticalDivider />
      <BlockButton text="Donate" icon={ICONS.GIFT} />
      <VerticalDivider />

      <BlockButton
        text="Support"
        icon={ICONS.SUPPORT}
        onClick={() => openTelegramLink("https://t.me/djinni_jobs_bot")}
      />

      <VerticalDivider />
      <Link href="https://t.me/djinni_jobs_bot">
        <BlockButton text="Report" icon={ICONS.REPORT} />
      </Link>
      <VerticalDivider />
      <BlockButton
        text="Community"
        icon={ICONS.COMMUNITY}
        className="rounded-b-2xl"
      />
    </Block>
  );
};

export default AboutSettings;
