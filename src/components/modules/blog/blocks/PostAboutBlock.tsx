import React from "react";
import { ICONS } from "@/config/media";
import { HorizontalDivider } from "@/components/common/dividers";
import { Block } from "@/components/common/blocks";
import { getTranslations } from "next-intl/server";
import { BlogPost } from "@/types/blog";

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
      element: <div>test</div>,
      disabled: false,
    },
    {
      text: t("statistics"),
      icon: ICONS.STATISTICS,
      query: "statistics",
      element: <div>test</div>,
      disabled: false,
    },
    {
      text: t("author"),
      icon: ICONS.PROFILE,
      query: "author",
      element: <div>test</div>,
      disabled: false,
    },
  ];
  return (
    <Block blockClassName="w-full" title={`${post.title || "title"}`}>
      {POST_METRICS.map(({ text, icon, query, element, disabled }, index) => (
        <div key={index}>
          <HorizontalDivider />
          <Block.Expand
            query={query}
            content={text}
            icon={icon}
            disable={disabled}
            last={POST_METRICS.length - 1 === index}
          >
            {element}
          </Block.Expand>
        </div>
      ))}
    </Block>
  );
};

export default PostAboutBlock;
