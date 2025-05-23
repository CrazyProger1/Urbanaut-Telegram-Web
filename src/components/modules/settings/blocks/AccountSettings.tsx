import React from "react";
import { Block, BlockButton } from "@/components/common/blocks";
import { COUNTRY_ICONS, ICONS } from "@/config/media";
import { HorizontalDivider } from "@/components/common/dividers";
import { Link } from "@/i18n/routing";
import { URLS } from "@/config/urls";
import { getTranslations } from "next-intl/server";

const AccountSettings = async () => {
  const t = await getTranslations("AccountSettings");
  return (
    <Block title={t("account")}>
      <HorizontalDivider />
      <BlockButton
        variant="disabled"
        content={t("region")}
        icon={ICONS.REGION}
      />
      <HorizontalDivider />
      <BlockButton
        content={t("restore")}
        icon={ICONS.CHECKED}
        link={URLS.RESTORE_ACCOUNT + "?text=%23restore%0A"}
      />
      <HorizontalDivider />
      <BlockButton
        link={URLS.DELETE_ACCOUNT + "?text=%23delete%0A"}
        content={t("delete")}
        variant="danger"
        icon={ICONS.CANCEL}
        className="rounded-b-2xl"
      />
    </Block>
  );
};

export default AccountSettings;
