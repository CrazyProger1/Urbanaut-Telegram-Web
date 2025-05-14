"use client";

import React from "react";
import EventItem from "./EventItem";
import { useTranslations } from "next-intl";
import { usePaginate } from "@/hooks/api";
import { PaginationParams } from "@/types/api";
import InfiniteScroll from "react-infinite-scroll-component";
import { getEvents } from "@/services/api/events";

interface Props {
  filters?: PaginationParams;
}

const PaginatedEventsTable = ({ filters }: Props) => {
  const t = useTranslations("PaginatedEventsTable");
  const { items, fetchData, isLoading, hasMore, refresh } = usePaginate(
    getEvents,
    filters,
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
          <EventItem event={item} />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default PaginatedEventsTable;
