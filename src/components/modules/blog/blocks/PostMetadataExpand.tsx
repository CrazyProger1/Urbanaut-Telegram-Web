import React from "react";
import { BlogPost } from "@/types/blog";
import { HorizontalDivider } from "@/components/common/dividers";
import { Locale } from "@/i18n/routing";
import { formatDate } from "@/helpers/date";
import { getLocale, getTranslations } from "next-intl/server";
import { BlockMetric } from "@/components/common/blocks";

interface Props {
  post: BlogPost;
}

const PostMetadataExpand = async ({ post }: Props) => {
  const t = await getTranslations("PostMetadataExpand");
  const locale = (await getLocale()) as Locale;
  const STATE_METRICS = [
    {
      text: t("created_at"),
      metric: post.created_at
        ? formatDate(post.created_at, locale)
        : t("unknown"),
    },
    {
      text: t("updated_at"),
      metric: post.updated_at
        ? formatDate(post.updated_at, locale)
        : t("unknown"),
    },
  ];

  return (
    <div className="flex flex-col">
      {STATE_METRICS.map(({ metric, text }, index) => (
        <div key={text}>
          <HorizontalDivider />
          <BlockMetric metric={metric} text={text} tooltip={metric} />
        </div>
      ))}
    </div>
  );
};

export default PostMetadataExpand;
