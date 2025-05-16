import React from "react";
import { AbandonedObject } from "@/types/abandoned";
import { RatingBar } from "@/components/common/bars";
import { HorizontalDivider } from "@/components/common/dividers";
import { getTranslations } from "next-intl/server";

interface Props {
  object: AbandonedObject;
}

const ObjectStatisticsExpand = async ({ object }: Props) => {
  const t = await getTranslations("ObjectStatisticsExpand");
  return (
    <div className="flex flex-col">
      <HorizontalDivider />
      <div className="p-2 font-primary text-text flex flex-row justify-between">
        <div>{t("views")}</div>
        <div>0</div>
      </div>
      <HorizontalDivider />
      <div className="p-2 flex flex-row justify-center">
        <RatingBar size="md" value={object.rating?.value} />
      </div>
    </div>
  );
};

export default ObjectStatisticsExpand;
