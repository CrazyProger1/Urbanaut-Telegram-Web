import React from "react";

import { AbandonedObject } from "@/types/objects";

interface Props {
  object: AbandonedObject;
}

const ConcludeSection = ({ object }: Props) => {
  const { categories } = object;
  return <div>{categories?.map((category) => category.name)}</div>;
};

export default ConcludeSection;
