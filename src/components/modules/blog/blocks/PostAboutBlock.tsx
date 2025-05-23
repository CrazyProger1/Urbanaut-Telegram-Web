import React from "react";
import { ICONS } from "@/config/media";
import { HorizontalDivider } from "@/components/common/dividers";
import { Block, BlockExpand } from "@/components/common/blocks";
import { getTranslations } from "next-intl/server";
import { BlogPost } from "@/types/blog";
import PostMetadataExpand from "./PostMetadataExpand";
import PostStatisticsExpand from "./PostStatisticsExpand";
import PostAuthorExpand from "./PostAuthorExpand";

interface Props {
  post: BlogPost;
}

const PostAboutBlock = async ({ post }: Props) => {
  const t = await getTranslations("PostAboutBlock");
  const POST_METRICS = [
    {
      text: t("metadata"),
      icon: ICONS.CLIPBOARD,
      query: "metadata",
      element: <PostMetadataExpand post={post} />,
      disabled: false,
    },
    {
      text: t("statistics"),
      icon: ICONS.STATISTICS,
      query: "statistics",
      element: <PostStatisticsExpand post={post} />,
      disabled: false,
    },
    {
      text: t("author"),
      icon: ICONS.PROFILE,
      query: "author",
      element: <PostAuthorExpand post={post} />,
      disabled: false,
    },
  ];
  return (
    <Block blockClassName="w-full" title={`${post.title || "title"}`}>
      {POST_METRICS.map(({ text, icon, query, element, disabled }, index) => (
        <div key={index}>
          <HorizontalDivider />
          <BlockExpand
            query={query}
            content={text}
            icon={icon}
            disable={disabled}
            last={POST_METRICS.length - 1 === index}
          >
            {element}
          </BlockExpand>
        </div>
      ))}
    </Block>
  );
};

export default PostAboutBlock;
