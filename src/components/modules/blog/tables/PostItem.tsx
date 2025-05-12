import React from "react";
import { Block } from "@/components/common/blocks";
import { BlogPost } from "@/types/blog";
import { PAGES } from "@/config/pages";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ALTS, STUBS } from "@/config/media";

interface Props {
  post: BlogPost;
}

const PostItem = ({ post }: Props) => {
  return (
    <Link href={PAGES.POST.replace(":id", String(post.id))}>
      <Block className="flex flex-row p-2">
        <Image
          className="aspect-square size-32 rounded-2xl"
          width={128}
          height={128}
          src={STUBS.POST}
          alt={ALTS.OBJECT_PHOTO}
        />
        <div className="ml-2 flex flex-col font-primary justify-between">
          <div>
            <div className="text-md font-bold">{post.title}</div>
            <div className="text-sm mt-1"></div>
          </div>
        </div>
      </Block>
    </Link>
  );
};

export default PostItem;
