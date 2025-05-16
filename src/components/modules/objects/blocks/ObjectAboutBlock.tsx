import React from "react";
import { getTranslations } from "next-intl/server";
import { ICONS } from "@/config/media";
import { Block } from "@/components/common/blocks";
import { HorizontalDivider } from "@/components/common/dividers";
import { AbandonedObject } from "@/types/abandoned";
import ObjectLocationExpand from "./ObjectLocationExpand";
import ObjectStateExpand from "./ObjectStateExpand";
import ObjectStatisticsExpand from "./ObjectStatisticsExpand";
import ObjectExpeditionsExpand from "./ObjectExpeditionsExpand";

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
      element: <ObjectLocationExpand object={object} />,
    },
    {
      text: t("state"),
      icon: ICONS.CLIPBOARD,
      query: "state",
      element: <ObjectStateExpand object={object} />,
    },
    {
      text: t("statistics"),
      icon: ICONS.STATISTICS,
      query: "statistics",
      element: <ObjectStatisticsExpand object={object} />,
    },
    {
      text: t("expeditions"),
      icon: ICONS.BACKPACK,
      query: "expeditions",
      element: <ObjectExpeditionsExpand object={object} />,
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
