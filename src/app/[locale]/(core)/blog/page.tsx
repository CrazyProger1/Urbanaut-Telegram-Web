import React from "react";
import { PaginatedPostsTable } from "@/components/modules/blog/tables";
import { PaginationParams } from "@/types/api";

interface Props {
  searchParams: Promise<PaginationParams>;
}
const BlogPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  return (
    <div className="flex flex-col gap-4">
      <PaginatedPostsTable params={params} />
    </div>
  );
};

export default BlogPage;
