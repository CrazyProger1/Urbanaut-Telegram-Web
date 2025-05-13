"use client";

import { AbandonedObjectFilters } from "@/types/abandoned";
import ObjectItem from "./ObjectItem";
import React from "react";
import { PaginationParams } from "@/types/api";
import { getAbandonedObjects } from "@/services/api/objects";
import { useTranslations } from "next-intl";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePaginate } from "@/hooks/api";

interface Props {
  params?: AbandonedObjectFilters & PaginationParams;
}

const PaginatedObjectsTable = ({ params }: Props) => {
  const t = useTranslations("PaginatedObjectsTable");
  const { items, hasMore, fetchData, isLoading, refresh } = usePaginate(
    getAbandonedObjects,
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
      {items.map((object, index) => (
        <div key={object.id} className={index === 0 ? "-mt-4" : ""}>
          <ObjectItem object={object} />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default PaginatedObjectsTable;
