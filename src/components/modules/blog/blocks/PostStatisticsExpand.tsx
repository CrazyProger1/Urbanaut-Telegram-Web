import { BlogPost } from "@/types/blog";
import React from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/routing";
import { HorizontalDivider } from "@/components/common/dividers";

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
    },
  ];

  return (
    <div className="flex flex-col">
      {STATE_METRICS.map(({ metric, text }, index) => (
        <div key={text}>
          <HorizontalDivider />
          <div className="p-2 font-primary text-text flex flex-row justify-between">
            <div>{text}</div>
            <div>{metric}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostStatisticsExpand;
