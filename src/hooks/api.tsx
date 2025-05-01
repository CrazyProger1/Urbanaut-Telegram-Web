"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
} from "@/types/api";

type Params<Filters> = PaginationParams & Filters;

export const usePaginate = <Filters, Obj>(
  loadMoreAction: (
    params?: Params<Filters>,
  ) => Promise<PaginatedResponse<Obj> | ErrorResponse>,
  params?: Params<Filters>,
) => {
  const limit = Number(params?.limit) || 5;
  const [offset, setOffset] = useState(Number(params?.offset || 0));
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [objects, setObjects] = useState<Obj[]>([]);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const actualParams = {
        ...params,
        limit: String(limit),
        offset: String(offset),
      } as Params<Filters>;
      const response = await loadMoreAction(actualParams);

      if (response.success) {
        setObjects((prev) => [...prev, ...response.results]);
        setHasMore(response.next !== null);
        setOffset((prev) => prev + limit);
      }
    } catch (error) {
      console.error("Error fetching objects:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, offset, params, limit, loadMoreAction]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          console.log("Intersecting objects");
          loadMore();
        }
      },
      { threshold: 1.0 },
    );

    const trigger = triggerRef.current;
    if (trigger) {
      observer.observe(trigger);
    }

    return () => {
      if (trigger) {
        observer.unobserve(trigger);
      }
    };
  }, [isLoading, hasMore, loadMoreAction, params, loadMore]);

  return { objects, isLoading, hasMore, triggerRef } as const;
};
