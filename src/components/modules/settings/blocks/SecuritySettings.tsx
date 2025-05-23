import React from "react";
import { Block, BlockButton } from "@/components/common/blocks";
import { getTranslations } from "next-intl/server";
import { ICONS } from "@/config/media";
import { HorizontalDivider } from "@/components/common/dividers";

const SecuritySettings = async () => {
  const t = await getTranslations("SecuritySettings");
  return (
    <Block title={t("security")}>
      <HorizontalDivider />
      <BlockButton
        content={t("keeper")}
        variant="disabled"
        icon={ICONS.ANGEL}
      ></BlockButton>
      <HorizontalDivider />
      <BlockButton
        content="SOS"
        variant="disabled"
        icon={ICONS.SOS}
        className="rounded-b-2xl"
      ></BlockButton>
    </Block>
  );
};

export default SecuritySettings;
