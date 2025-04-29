import React from "react";
import { AbandonedObject } from "@/types/abandoned";
import { RatingBar } from "@/components/common/bars";

interface Props {
  object: AbandonedObject;
}

const StatisticsExpand = ({ object }: Props) => {
  return (
    <div className="p-2 flex flex-row justify-center">
      <RatingBar size="md" value={object.rating?.value} />
    </div>
  );
};

export default StatisticsExpand;
