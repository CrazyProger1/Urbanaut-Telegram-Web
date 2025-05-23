import React from "react";
import { Block, BlockButton } from "@/components/common/blocks";

import { HorizontalDivider } from "@/components/common/dividers";
import { ICONS } from "@/config/media";
import { PAGES } from "@/config/pages";
import { URLS } from "@/config/urls";
import { getTranslations } from "next-intl/server";

const AboutSettings = async () => {
  const t = await getTranslations("AboutSettings");
  const ABOUT_BUTTONS = [
    {
      text: t("donate"),
      icon: ICONS.GIFT,
      href: PAGES.SETTINGS + "?donate=true",
    },
    {
      text: t("support"),
      icon: ICONS.SUPPORT,
      href: URLS.SUPPORT + "?text=%23support%0A",
    },
    {
      text: t("report"),
      icon: ICONS.REPORT,
      href: URLS.REPORT + "?text=%23report%0A",
    },
    {
      text: t("community"),
      icon: ICONS.COMMUNITY,
      href: URLS.COMMUNITY,
    },
    {
      text: t("terms"),
      icon: ICONS.INFO,
      className: "last:rounded-b-2xl",
      href: PAGES.TERMS,
    },
  ];
  return (
    <Block title={t("about")}>
      {ABOUT_BUTTONS.map(({ text, icon, className, href }) => (
        <div className="flex flex-col" key={text}>
          <HorizontalDivider />
          <BlockButton
            content={text}
            icon={icon}
            className={className}
            link={href}
          />
        </div>
      ))}
    </Block>
  );
};

export default AboutSettings;
