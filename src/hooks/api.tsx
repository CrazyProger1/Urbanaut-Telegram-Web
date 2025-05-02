"use client";

import { useEffect, useState, useCallback } from "react";
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
  const [items, setItems] = useState<Obj[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const limit = Number(params?.limit || 50);
  const [offset, setOffset] = useState<number>(Number(params?.offset || 0));
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const fetchData = useCallback(
    async (refresh: boolean = false) => {
      setIsLoading(true);

      let actualOffset = offset;
      if (refresh) {
        actualOffset = Number(params?.offset) || 0;
      }

      try {
        const actualParams = {
          ...params,
          limit: String(limit),
          offset: String(actualOffset),
        } as Params<Filters>;
        const response = await loadMoreAction(actualParams);
        if (response.success) {
          if (refresh) {
            setItems(response.results);
          } else {
            setItems((prev) => [...prev, ...response.results]);
          }

          setHasMore(response.next !== null);
          setOffset((prev) => prev + limit);
          setIsFailed(false);
        } else {
          setIsFailed(true);
        }
      } catch (err) {
        setIsFailed(true);
      } finally {
        setIsLoading(false);
      }
    },
    [limit, loadMoreAction, offset, params],
  );

  const refresh = useCallback(async () => {
    await fetchData(true);
  }, [fetchData]);

  useEffect(() => {
    refresh();
  }, [params]);

  return { items, fetchData, refresh, isLoading, isFailed, hasMore } as const;
};
