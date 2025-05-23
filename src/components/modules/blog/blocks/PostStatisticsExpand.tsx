import { BlogPost } from "@/types/blog";
import React from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/routing";
import { HorizontalDivider } from "@/components/common/dividers";
import { BlockMetric } from "@/components/common/blocks";

interface Props {
  post: BlogPost;
}
const PostStatisticsExpand = async ({ post }: Props) => {
  const t = await getTranslations("PostStatisticsExpand");
  const locale = (await getLocale()) as Locale;
  const STATE_METRICS = [
    {
      text: t("views"),
      metric: 0,
      tooltip: `${t("views")} - ${0}`,
    },
  ];

  return (
    <div className="flex flex-col">
      {STATE_METRICS.map(({ metric, text, tooltip }, index) => (
        <div key={text}>
          <HorizontalDivider />
          <BlockMetric
            metric={metric}
            text={text}
            tooltip={tooltip || metric}
          />
        </div>
      ))}
    </div>
  );
};

export default PostStatisticsExpand;
