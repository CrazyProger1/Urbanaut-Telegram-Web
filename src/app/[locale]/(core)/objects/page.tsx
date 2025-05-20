import React from "react";

import {
  AbandonedObjectFilters,
  AbandonedObjectSearchBarParams,
} from "@/types/abandoned";
import { ObjectSearchBar } from "@/components/modules/objects/bars";
import { PaginationParams } from "@/types/api";
import { PaginatedObjectsTable } from "@/components/modules/objects/tables";
import { DifficultyModal } from "@/components/modules/objects/modals";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<
    AbandonedObjectFilters & PaginationParams & AbandonedObjectSearchBarParams
  >;
}

const ObjectsPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  return (
    <div className="flex flex-col gap-4">
      <DifficultyModal />
      <div className="px-4">
        <ObjectSearchBar params={params} />
      </div>

      <PaginatedObjectsTable params={params} />
    </div>
  );
};

export default ObjectsPage;
