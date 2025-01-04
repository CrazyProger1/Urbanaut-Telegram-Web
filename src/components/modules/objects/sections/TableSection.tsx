import React from "react";
import { getObjects } from "@/services/objects";
import { AbandonedObject } from "@/types/objects";
import { ObjectTable } from "@/components/modules/object/tables";

const TableSection = async () => {
  let objects: AbandonedObject[] = [];

  try {
    const objectsResponse = await getObjects();
    if (objectsResponse.success) objects = objectsResponse.results;
  } catch (err) {}

  return <ObjectTable objects={objects} />;
};

export default TableSection;
