"use client";

import React, { useState, useTransition } from "react";
import { AbandonedObject } from "@/types/abandoned";
import { RatingBar } from "@/components/common/bars";
import { HorizontalDivider } from "@/components/common/dividers";
import { useTranslations } from "next-intl";
import { vote } from "@/services/api/rating";

interface Props {
  object: AbandonedObject;
}

const ObjectStatisticsExpand = ({ object }: Props) => {
  const t = useTranslations("ObjectStatisticsExpand");
  const [value, setValue] = useState(object.rating?.value || 0);
  const [isPending, startTransition] = useTransition();
  const handleVote = (value: number) => {
    setValue(value);
    startTransition(async () => {
      if (object.rating && value) {
        const newRating = await vote(object.rating.id, value);
        setValue(newRating.value);
      }
    });
  };

  return (
    <div className="flex flex-col">
      <HorizontalDivider />
      <div className="p-2 font-primary text-text flex flex-row justify-between">
        <div>{t("views")}</div>
        <div>0</div>
      </div>
      <HorizontalDivider />
      <div className="p-2 flex flex-row justify-center">
        <RatingBar size="md" value={value} onVote={handleVote} active={true} />
      </div>
    </div>
  );
};

export default ObjectStatisticsExpand;
