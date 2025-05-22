"use client";

import React from "react";
import { Block } from "@/components/common/blocks";
import { BlogPost } from "@/types/blog";
import { PAGES } from "@/config/pages";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ALTS, STUBS } from "@/config/media";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/common/badges";

interface Props {
  post: BlogPost;
}

const PostItem = ({ post }: Props) => {
  const t = useTranslations("PostItem");
  return (
    <Link href={PAGES.POST.replace(":id", String(post.id))}>
      <Block className="flex flex-row p-2">
        <Image
          className="aspect-square size-32 rounded-2xl shadow-volume"
          width={128}
          height={128}
          src={post.photo || STUBS.POST}
          alt={ALTS.OBJECT_PHOTO}
        />
        <div className="ml-2 flex flex-col font-primary justify-between">
          <div>
            <div className="text-md font-bold">{post.title}</div>
            <div className="text-sm mt-1">{post.summary}</div>
          </div>

          <div className="flex flex-wrap gap-1">
            {post.topics
              ?.slice(0, 2)
              .map((topic) => <Badge key={topic.id} text={topic.name} />)}
          </div>

          <div className="flex flex-row justify-end">
            <div className="text-xs mt-1">
              @
              {post.created_by?.nickname ||
                post.created_by?.username ||
                t("unknown")}
            </div>
          </div>
        </div>
      </Block>
    </Link>
  );
};

export default PostItem;
