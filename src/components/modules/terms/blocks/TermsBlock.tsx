import React from "react";
import { getTranslations } from "next-intl/server";
import { MDXBlockRender } from "@/components/common/utils";
import { Terms } from "@/types/terms";

interface Props {
  terms: Terms;
}

const TermsBlock = async ({ terms }: Props) => {
  const t = await getTranslations("TermsBlock");
  return (
    <MDXBlockRender
      source={terms.content}
      title={t("terms")}
      introExpandTitle={t("intro")}
    />
  );
};

export default TermsBlock;
