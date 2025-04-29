import React from "react";
import { ObjectsTable } from "@/components/modules/objects/tables";
import { getAbandonedObjects } from "@/services/api/objects";
import { AbandonedObject, AbandonedObjectFilters } from "@/types/abandoned";
import { ObjectSearchBar } from "@/components/modules/objects/bars";
import { PaginationParams } from "@/types/api";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<AbandonedObjectFilters & PaginationParams>;
}

const ObjectsPage = async ({ searchParams }: Props) => {
  const filters = await searchParams;
  const response = await getAbandonedObjects(filters);
  let objects: AbandonedObject[] = [];
  if (response.success) objects = response.results;
  return (
    <div className="px-4">
      <ObjectSearchBar />
      <ObjectsTable objects={objects} />
    </div>
  );
};

export default ObjectsPage;
