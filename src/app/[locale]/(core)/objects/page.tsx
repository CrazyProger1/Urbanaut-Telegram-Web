import React from "react";
import { ObjectsTable } from "@/components/modules/objects/tables";
import { getAbandonedObjects } from "@/services/api/objects";
import { AbandonedObject } from "@/types/abandoned";
import { ObjectSearchBar } from "@/components/modules/objects/bars";

export const dynamic = "force-dynamic";

const ObjectsPage = async () => {
  const response = await getAbandonedObjects();
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
