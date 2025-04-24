import React from "react";
import Block from "@/components/common/blocks/Block";
import { BlockButton } from "@/components/common/contorls";
import { ICONS } from "@/config/media";
import { HorizontalDivider } from "@/components/common/dividers";
import { Link } from "@/i18n/routing";
import { URLS } from "@/config/urls";

const AccountSettings = () => {
  return (
    <Block title="Account">
      <HorizontalDivider />
      <Link href={URLS.RESTORE_ACCOUNT + "?text=%23restore%0A"}>
        <BlockButton text="Restore" icon={ICONS.CHECKED} />
      </Link>
      <HorizontalDivider />
      <Link href={URLS.DELETE_ACCOUNT + "?text=%23delete%0A"}>
        <BlockButton
          text="Delete"
          variant="danger"
          icon={ICONS.CANCEL}
          className="rounded-b-2xl"
        />
      </Link>
    </Block>
  );
};

export default AccountSettings;
