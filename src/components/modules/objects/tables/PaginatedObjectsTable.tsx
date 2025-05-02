"use client";

import { AbandonedObject, AbandonedObjectFilters } from "@/types/abandoned";
import ObjectItem from "./ObjectItem";
import React, { useCallback, useEffect, useState } from "react";
import { PaginationParams } from "@/types/api";
import { getAbandonedObjects } from "@/services/api/objects";
import { useTranslations } from "next-intl";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "@/components/common/loaders";

interface Props {
  filters?: AbandonedObjectFilters & PaginationParams;
}

const PaginatedObjectsTable = ({ filters }: Props) => {
  const t = useTranslations("PaginatedObjectsTable");
  const [objects, setObjects] = useState<AbandonedObject[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const limit = Number(filters?.limit || 50);
  const [offset, setOffset] = useState<number>(Number(filters?.offset || 0));
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (initial: boolean = false) => {
      if (!initial && (isLoading || !hasMore)) return;

      setIsLoading(true);
      try {
        const response = await getAbandonedObjects({
          ...filters,
          limit: String(limit),
          offset: String(offset),
        });
        if (response.success) {
          setObjects((prev) => [...prev, ...response.results]);
          setHasMore(response.next !== null);
          setOffset((prev) => prev + limit);
          setError(null);
        } else {
          setError(t("fetch_error"));
        }
      } catch (err) {
        setError(t("fetch_error"));
      } finally {
        setIsLoading(false);
      }
    },
    [filters, hasMore, isLoading, limit, offset, t],
  );

  useEffect(() => {
    fetchData(true);
  }, []);

  return (
    <InfiniteScroll
      className="flex flex-col gap-4 bg-background px-4 overflow-hidden"
      dataLength={objects.length}
      next={fetchData}
      hasMore={hasMore}
      loader={
        <div className="flex flex-col justify-center items-center">
          <Loader />
        </div>
      }
      endMessage={
        !isLoading && <p className="text-center">{t("far_scroll")}</p>
      }
      refreshFunction={() => console.log("refresh")}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 className="text-center">&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 className="text-center">&#8593; Release to refresh</h3>
      }
    >
      {objects.map((object) => (
        <ObjectItem key={object.id} object={object} />
      ))}
    </InfiniteScroll>
  );
};

export default PaginatedObjectsTable;
