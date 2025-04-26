import React from "react";
import Block from "@/components/common/blocks/Block";
import { ICONS } from "@/config/media";
import { HorizontalDivider } from "@/components/common/dividers";
import { Link } from "@/i18n/routing";
import { URLS } from "@/config/urls";
import { getTranslations } from "next-intl/server";

const AccountSettings = async () => {
  const t = await getTranslations("AccountSettings");
  return (
    <Block title={t("account")}>
      <HorizontalDivider />
      <Link href={URLS.RESTORE_ACCOUNT + "?text=%23restore%0A"}>
        <Block.Button text={t("restore")} icon={ICONS.CHECKED} />
      </Link>
      <HorizontalDivider />
      <Link href={URLS.DELETE_ACCOUNT + "?text=%23delete%0A"}>
        <Block.Button
          text={t("delete")}
          variant="danger"
          icon={ICONS.CANCEL}
          className="rounded-b-2xl"
        />
      </Link>
    </Block>
  );
};

export default AccountSettings;
