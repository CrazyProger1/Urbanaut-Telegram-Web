import React from "react";

import { AbandonedObjectFilters } from "@/types/abandoned";
import { ObjectSearchBar } from "@/components/modules/objects/bars";
import { PaginationParams } from "@/types/api";
import { PaginatedObjectsTable } from "@/components/modules/objects/tables";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<AbandonedObjectFilters & PaginationParams>;
}

const ObjectsPage = async ({ searchParams }: Props) => {
  const filters = await searchParams;
  return (
    <div className="px-4">
      <ObjectSearchBar />
      <PaginatedObjectsTable filters={filters} />
    </div>
  );
};

export default ObjectsPage;
