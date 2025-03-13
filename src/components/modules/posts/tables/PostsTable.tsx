import React from "react";
import { Post } from "@/types/blog";
import PostItem from "./PostItem";

interface Props {
  posts: Post[];
}

const PostsTable = ({ posts }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      {posts.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsTable;
