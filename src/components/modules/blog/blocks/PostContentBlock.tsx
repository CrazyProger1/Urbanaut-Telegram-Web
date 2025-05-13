import React from "react";
import { BlogPost } from "@/types/blog";
import { getTranslations } from "next-intl/server";
import { MDXBlockRender } from "@/components/common/utils";

interface Props {
  post: BlogPost;
}

const PostContentBlock = async ({ post }: Props) => {
  const t = await getTranslations("PostContentBlock");
  return <MDXBlockRender source={post.content} introExpandTitle={t("main")} />;
};

export default PostContentBlock;
