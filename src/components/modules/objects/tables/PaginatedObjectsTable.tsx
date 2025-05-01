"use client";

import { AbandonedObject, AbandonedObjectFilters } from "@/types/abandoned";
import ObjectItem from "@/components/modules/objects/tables/ObjectItem";
import React from "react";
import { PaginationParams } from "@/types/api";
import { getAbandonedObjects } from "@/services/api/objects";
import { Loader } from "@/components/common/loaders";
import { useTranslations } from "next-intl";
import { usePaginate } from "@/hooks/api";

interface Props {
  filters?: AbandonedObjectFilters & PaginationParams;
}

const PaginatedObjectsTable = ({ filters }: Props) => {
  const t = useTranslations("PaginatedObjectsTable");
  const { objects, isLoading, hasMore, triggerRef } = usePaginate<
    AbandonedObjectFilters & PaginationParams,
    AbandonedObject
  >(getAbandonedObjects, filters);

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
