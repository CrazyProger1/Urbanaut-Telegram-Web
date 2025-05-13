import React from "react";
import { AbandonedObject } from "@/types/abandoned";
import { getTranslations } from "next-intl/server";
import { MDXBlockRender } from "@/components/common/utils";

interface Props {
  object: AbandonedObject;
}

const ObjectDescriptionBlock = async ({ object }: Props) => {
  const t = await getTranslations("ObjectDescriptionBlock");
  if (!object.description) return null;

  return (
    <MDXBlockRender source={object.description} introExpandTitle={t("main")} />
  );
};

export default ObjectDescriptionBlock;
