"use client";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslations } from "next-intl";
import { usePaginate } from "@/hooks/api";
import { getBlogPosts } from "@/services/api/blog";
import { PaginationParams } from "@/types/api";
import PostItem from "./PostItem";

interface Props {
  params: PaginationParams;
}

const PaginatedPostsTable = ({ params }: Props) => {
  const t = useTranslations("PaginatedPostsTable");
  const { items, hasMore, fetchData, isLoading, refresh } = usePaginate(
    getBlogPosts,
    params,
  );

  return (
    <InfiniteScroll
      className="flex flex-col gap-4 bg-background px-4 overflow-hidden"
      dataLength={items.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<div className="text-center">Loading...</div>}
      endMessage={
        !isLoading && <p className="text-center">{t("far_scroll")}</p>
      }
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={<h3 className="text-center">&#8595;</h3>}
      releaseToRefreshContent={<h3 className="text-center">&#8593;</h3>}
    >
      {items.map((item, index) => (
        <div key={item.id} className={index === 0 ? "-mt-4" : ""}>
          <PostItem post={item} />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default PaginatedPostsTable;
