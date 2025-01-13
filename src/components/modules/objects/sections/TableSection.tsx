import React from "react";
import { getObjects } from "@/services/objects";
import { AbandonedObject, AbandonedObjectFilters } from "@/types/objects";
import { ObjectTable } from "../tables";
import { GetServerSideProps } from "next";

interface Props {
  objects: AbandonedObject[];
}

const TableSection = async ({ objects }: Props) => {
  return <ObjectTable objects={objects} />;
};

export default TableSection;
