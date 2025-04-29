import React from "react";
import { getTranslations } from "next-intl/server";
import { ICONS } from "@/config/media";
import { Block } from "@/components/common/blocks";
import { HorizontalDivider } from "@/components/common/dividers";
import { AbandonedObject } from "@/types/abandoned";
import LocationExpand from "./LocationExpand";
import StateExpand from "./StateExpand";
import StatisticsExpand from "@/components/modules/objects/blocks/StatisticsExpand";
import ExpeditionsExpand from "@/components/modules/objects/blocks/ExpeditionsExpand";

interface Props {
  object: AbandonedObject;
}

const ObjectAboutBlock = async ({ object }: Props) => {
  const t = await getTranslations("ObjectAboutBlock");
  const OBJECT_METRICS = [
    {
      text: t("location"),
      icon: ICONS.PIN,
      query: "location",
      element: <LocationExpand object={object} />,
    },
    {
      text: t("state"),
      icon: ICONS.CLIPBOARD,
      query: "state",
      element: <StateExpand object={object} />,
    },
    {
      text: t("statistics"),
      icon: ICONS.STATISTICS,
      query: "statistics",
      element: <StatisticsExpand object={object} />,
    },
    {
      text: t("expeditions"),
      icon: ICONS.BACKPACK,
      query: "expeditions",
      element: <ExpeditionsExpand object={object} />,
      disabled: true,
    },
  ];
  return (
    <Block blockClassName="w-full" title={`${object.name || "name"}`}>
      {OBJECT_METRICS.map(({ text, icon, query, element, disabled }, index) => (
        <div className="flex flex-col" key={text}>
          <HorizontalDivider />
          <Block.Expand
            query={query}
            content={text}
            icon={icon}
            last={OBJECT_METRICS.length - 1 === index}
            disable={disabled}
          >
            {element}
          </Block.Expand>
        </div>
      ))}
    </Block>
  );
};

export default ObjectAboutBlock;
