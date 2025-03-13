import React from "react";
import { Post } from "@/types/blog";
import { Link } from "@/i18n/routing";
import { LINKS } from "@/constants/nav";
import { ItemTitle } from "@/components/common/typography/titles";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <Link
      href={LINKS.post.replace("[id]", String(post.id))}
      className="bg-foreground flex flex-row rounded-2xl p-4 shadow-volume-frame relative"
    >
      <ItemTitle>{post.title}</ItemTitle>
    </Link>
  );
};

export default PostItem;
