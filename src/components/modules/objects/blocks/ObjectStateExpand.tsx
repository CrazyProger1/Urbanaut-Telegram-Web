import React from "react";
import { AbandonedObject } from "@/types/abandoned";
import { HorizontalDivider } from "@/components/common/dividers";
import { getLocale, getTranslations } from "next-intl/server";
import { formatDate } from "@/helpers/date";
import { Locale } from "@/i18n/routing";
import { Difficulty, Preservation, Security } from "@/types/common";
import { BlockMetric } from "@/components/common/blocks";

interface Props {
  object: AbandonedObject;
}
const ObjectStateExpand = async ({ object }: Props) => {
  const t = await getTranslations("ObjectStateExpand");
  const locale = (await getLocale()) as Locale;

  const dt = await getTranslations("DifficultyLevels");
  const pt = await getTranslations("PreservationLevels");
  const st = await getTranslations("SecurityLevels");

  const DIFFICULTY_MAP = {
    NEWBIE: "⚪️",
    EASY: "🟢",
    MEDIUM: "🟡",
    HARD: "🔴",
    LEGEND: "🟣",
  };
  const PRESERVATION_MAP = {
    DANGEROUS: "🟣",
    LOW: "🔴",
    MEDIUM: "🟡",
    HIGH: "🟢",
  };
  const SECURITY_MAP = {
    NO: "⚪️",
    YES: "🟡",
    YES_WITH_DOGS: "🔴",
    YES_WITH_WEAPONS: "🟣",
    YES_MILITARY: "⚫️",
  };

  const difficulty = object.difficulty_level as Difficulty;
  const preservation = object.preservation_level as Preservation;
  const security = object.security_level as Security;

  const STATE_METRICS = [
    {
      text: t("security"),
      metric: SECURITY_MAP[security],
      tooltip: st(security),
    },
    {
      text: t("difficulty"),
      metric: DIFFICULTY_MAP[difficulty],
      tooltip: dt(difficulty),
    },
    {
      text: t("preservation"),
      metric: PRESERVATION_MAP[preservation],
      tooltip: pt(preservation),
    },
    {
      text: t("abandoned_at"),
      metric: object.abandoned_at
        ? formatDate(object.abandoned_at, locale)
        : t("unknown"),
    },
    {
      text: t("built_at"),
      metric: object.built_at
        ? formatDate(object.built_at, locale)
        : t("unknown"),
    },
    {
      text: t("created_at"),
      metric: object.created_at
        ? formatDate(object.created_at, locale)
        : t("unknown"),
    },
    {
      text: t("updated_at"),
      metric: object.updated_at
        ? formatDate(object.updated_at, locale)
        : t("unknown"),
    },
  ];
  return (
    <div className="flex flex-col">
      {STATE_METRICS.map(({ metric, text, tooltip }, index) => (
        <div key={text}>
          <HorizontalDivider />
          <BlockMetric metric={metric} text={text} tooltip={tooltip} />
        </div>
      ))}
    </div>
  );
};

export default ObjectStateExpand;
