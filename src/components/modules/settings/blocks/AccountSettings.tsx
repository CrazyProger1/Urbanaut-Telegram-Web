import React from "react";
import Block from "@/components/common/blocks/Block";
import { BlockButton } from "@/components/common/contorls";
import { ICONS } from "@/config/media";
import { VerticalDivider } from "@/components/common/dividers";

const AccountSettings = () => {
  return (
    <Block title="Account">
      <VerticalDivider />
      <BlockButton text="Restore" icon={ICONS.CHECKED} />
      <VerticalDivider />
      <BlockButton
        text="Delete"
        variant="danger"
        icon={ICONS.CANCEL}
        className="rounded-b-2xl"
      />
    </Block>
  );
};

export default AccountSettings;
