import React from "react";

import {
  SearchSection,
  TableSection,
} from "@/components/modules/posts/sections";

import { Post } from "@/types/blog";
import { getPosts } from "@/services/blog";

const Page = async () => {
  let posts: Post[] = [];

  const postsResponse = await getPosts();
  if (postsResponse.success) posts = postsResponse.results;

  return (
    <>
      {/*<SearchSection />*/}
      {/*<div className="mt-4" />*/}
      <TableSection posts={posts} />
    </>
  );
};

export default Page;
