import React from "react";
import Block from "@/components/common/blocks/Block";
import { VerticalDivider } from "@/components/common/dividers";
import { BlockButton } from "@/components/common/contorls";
import { ICONS } from "@/config/media";

const AboutSettings = () => {
  return (
    <Block title="About">
      <VerticalDivider />
      <BlockButton text="Donate" icon={ICONS.GIFT} />
      <VerticalDivider />
      <BlockButton text="Support" icon={ICONS.SUPPORT} />
      <VerticalDivider />
      <BlockButton text="Report" icon={ICONS.REPORT} />
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
