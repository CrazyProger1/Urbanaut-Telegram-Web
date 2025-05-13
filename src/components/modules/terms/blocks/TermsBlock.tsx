import React from "react";
import { getTranslations } from "next-intl/server";
import { MDXBlockRender } from "@/components/common/utils";

const TERMS_MARKDOWN = `
Блаблабла...
`;
const TermsBlock = async () => {
  const t = await getTranslations("TermsBlock");
  return (
    <MDXBlockRender
      source={TERMS_MARKDOWN}
      title={t("terms")}
      introExpandTitle={t("intro")}
    />
  );
};

export default TermsBlock;
