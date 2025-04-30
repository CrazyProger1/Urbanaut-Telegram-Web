"use client";

import { AbandonedObject, AbandonedObjectFilters } from "@/types/abandoned";
import ObjectItem from "@/components/modules/objects/tables/ObjectItem";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { PaginationParams } from "@/types/api";
import { getAbandonedObjects } from "@/services/api/objects";
import { Loader } from "@/components/common/loaders";
import { useTranslations } from "next-intl";

interface Props {
  filters?: AbandonedObjectFilters & PaginationParams;
}

const PaginatedObjectsTable = ({ filters }: Props) => {
  const t = useTranslations("PaginatedObjectsTable");
  const [objects, setObjects] = useState<AbandonedObject[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = Number(filters?.limit) || 5;
  const [offset, setOffset] = useState(Number(filters?.offset || 0));
  const triggerRef = useRef<HTMLDivElement>(null);

  const loadMoreObjects = useCallback(async () => {
    if (isLoading || !hasMore) return;
    console.log("Loaded more", offset);

    setIsLoading(true);
    try {
      const params = {
        ...filters,
        limit: String(limit),
        offset: String(offset),
      };
      const response = await getAbandonedObjects(params);

      if (response.success) {
        const results = Array.isArray(response.results)
          ? response.results
          : [response.results];
        setObjects((prev) => [...prev, ...results]);
        setHasMore(response.next !== null);
        setOffset((prev) => prev + limit);
      }
    } catch (error) {
      console.error("Error fetching objects:", error);
    } finally {
      setIsLoading(false);
    }
  }, [filters, limit, offset, isLoading, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          console.log("Intersecting", entries[0]);
          loadMoreObjects();
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
  }, [isLoading, hasMore, loadMoreObjects]);

  return (
    <div className="flex flex-col gap-4">
      {objects.map((obj) => (
        <ObjectItem key={obj.id} object={obj} />
      ))}
      <div ref={triggerRef} className="flex justify-center">
        {isLoading && <Loader />}
        {!hasMore && objects.length > 0 && (
          <p className="text-center">{t("far_scroll")}</p>
        )}
      </div>
    </div>
  );
};

export default PaginatedObjectsTable;
