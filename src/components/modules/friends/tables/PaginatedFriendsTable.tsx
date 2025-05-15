"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { usePaginate } from "@/hooks/api";
import InfiniteScroll from "react-infinite-scroll-component";
import { getFriends } from "@/services/api/friends";
import FriendItem from "./FriendItem";
import { PaginationParams } from "@/types/api";

interface Props {
  params: PaginationParams;
}
const PaginatedFriendsTable = ({ params }: Props) => {
  const t = useTranslations("PaginatedFriendsTable");
  const { items, fetchData, isLoading, hasMore, refresh } = usePaginate(
    getFriends,
    params,
  );
  return (
    <InfiniteScroll
      className="flex flex-col gap-4 px-4 overflow-hidden"
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
          <FriendItem friend={item} />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default PaginatedFriendsTable;
