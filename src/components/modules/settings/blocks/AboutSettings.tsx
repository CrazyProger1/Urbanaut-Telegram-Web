import React from "react";
import Block from "@/components/common/blocks/Block";

import { HorizontalDivider } from "@/components/common/dividers";
import { BlockButton } from "@/components/common/contorls";
import { ICONS } from "@/config/media";
import { PAGES } from "@/config/pages";
import { URLS } from "@/config/urls";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

const AboutSettings = async () => {
  const t = await getTranslations("Settings");
  const ABOUT_BUTTONS = [
    {
      text: t("Donate"),
      icon: ICONS.GIFT,
      href: PAGES.SETTINGS + "?donate=true",
    },
    {
      text: t("Support"),
      icon: ICONS.SUPPORT,
      href: URLS.SUPPORT + "?text=%23support%0A",
    },
    {
      text: t("Report"),
      icon: ICONS.REPORT,
      href: URLS.REPORT + "?text=%23report%0A",
    },
    {
      text: t("Community"),
      icon: ICONS.COMMUNITY,
      className: "last:rounded-b-2xl",
      href: URLS.COMMUNITY,
    },
  ];
  return (
    <Block title="About">
      {ABOUT_BUTTONS.map(({ text, icon, className, href }) => (
        <div className="flex flex-col" key={text}>
          <HorizontalDivider />
          <Link href={href}>
            <BlockButton text={text} icon={icon} className={className} />
          </Link>
        </div>
      ))}
    </Block>
  );
};

export default AboutSettings;
