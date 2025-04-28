import React from "react";
import { getTranslations } from "next-intl/server";
import { ICONS } from "@/config/media";
import { PAGES } from "@/config/pages";
import { URLS } from "@/config/urls";
import { Block } from "@/components/common/blocks";
import { HorizontalDivider } from "@/components/common/dividers";
import { AbandonedObject } from "@/types/abandoned";

interface Props {
  object: AbandonedObject;
}

const ObjectAboutBlock = async ({ object }: Props) => {
  const t = await getTranslations("ObjectAboutBlock");
  const OBJECT_METRICS = [
    {
      text: t("location"),
      icon: ICONS.PIN,
      href: PAGES.SETTINGS + "?donate=true",
      count: 14,
      query: "location",
    },
    {
      text: t("state"),
      icon: ICONS.CLIPBOARD,
      href: URLS.SUPPORT + "?text=%23support%0A",
      count: 24,
      query: "state",
    },
    {
      text: t("statistics"),
      icon: ICONS.STATISTICS,
      href: URLS.REPORT + "?text=%23report%0A",
      count: 321,
      query: "statistics",
    },
    {
      text: t("expeditions"),
      icon: ICONS.BACKPACK,
      href: URLS.COMMUNITY,
      count: 4,
      query: "expeditions",
    },
  ];
  return (
    <Block blockClassName="w-full" title={`${object.name || "name"}`}>
      {OBJECT_METRICS.map(({ text, icon, query }, index) => (
        <div className="flex flex-col" key={text}>
          <HorizontalDivider />
          <Block.Expand
            query={query}
            content={text}
            icon={icon}
            last={OBJECT_METRICS.length - 1 === index}
          >
            Test
          </Block.Expand>
        </div>
      ))}
    </Block>
  );
};

export default ObjectAboutBlock;
