"use client";

import React, { Suspense } from "react";
import { ModalPortal } from "@/components/common/modals";
import { useTranslations } from "next-intl";
import { Block } from "@/components/common/blocks";
import { LanguageSelectTable } from "@/components/modules/settings/tables";

const LanguageModal = () => {
  const t = useTranslations("LanguageModal");
  return (
    <Suspense fallback={null}>
      <ModalPortal query="language">
        <Block
          onClick={(e) => {
            e.stopPropagation();
          }}
          title={t("language")}
          blockClassName="lg:w-1/4 sm:w-2/4"
          className="p-2"
        >
          <LanguageSelectTable />
        </Block>
      </ModalPortal>
    </Suspense>
  );
};

export default LanguageModal;
