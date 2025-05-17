import React from "react";
import { Block } from "@/components/common/blocks";
import { getTranslations } from "next-intl/server";
import { ICONS } from "@/config/media";
import { HorizontalDivider } from "@/components/common/dividers";

const SecuritySettings = async () => {
  const t = await getTranslations("SecuritySettings");
  return (
    <Block title={t("security")}>
      <HorizontalDivider />
      <Block.Button
        content={t("keeper")}
        variant="disabled"
        icon={ICONS.ANGEL}
      ></Block.Button>
      <HorizontalDivider />
      <Block.Button
        content="SOS"
        variant="disabled"
        icon={ICONS.SOS}
        className="rounded-b-2xl"
      ></Block.Button>
    </Block>
  );
};

export default SecuritySettings;
