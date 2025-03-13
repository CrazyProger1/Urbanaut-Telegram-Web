import React from "react";
import { PostsTable } from "@/components/modules/posts/tables";
import { Post } from "@/types/blog";

interface Props {
  posts: Post[];
}

const TableSection = ({ posts }: Props) => {
  return (
    <>
      <PostsTable posts={posts} />
    </>
  );
};

export default TableSection;
