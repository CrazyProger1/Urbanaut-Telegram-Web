import React from "react";
import { getObjects } from "@/services/objects";
import { AbandonedObject, AbandonedObjectFilters } from "@/types/objects";
import { ObjectTable } from "../tables";

interface Props {
  filters: AbandonedObjectFilters;
}

const TableSection = async ({ filters }: Props) => {
  let objects: AbandonedObject[] = [];

  try {
    const objectsResponse = await getObjects(filters);
    if (objectsResponse.success) objects = objectsResponse.results;
  } catch (err) {
    console.log(err);
  }

  return <ObjectTable objects={objects} />;
};

export default TableSection;
