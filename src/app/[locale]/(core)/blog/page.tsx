import React from "react";
import { PaginatedPostsTable } from "@/components/modules/blog/tables";
import { PaginationParams } from "@/types/api";
import { PostSearchBar } from "@/components/modules/blog/bards";

interface Props {
  searchParams: Promise<PaginationParams>;
}
const BlogPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  return (
    <div className="flex flex-col gap-4">
      <div className="px-4">
        <PostSearchBar />
      </div>
      <PaginatedPostsTable params={params} />
    </div>
  );
};

export default BlogPage;
