"use client";
import React, { useState } from "react";
import { ModalPortal } from "@/components/common/modals";
import { GradientStepInput } from "@/components/common/inputs";
import { DIFFICULTY_COLORS, DIFFICULTY_LEVELS } from "@/config/common";
import { Block } from "@/components/common/blocks";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { MODAL_KEYS } from "@/config/params";

const DifficultyModal = () => {
  const t = useTranslations("DifficultyModal");
  const pathname = usePathname();
  const router = useRouter();
  const handleClose = (difficulty: string) => {
    const searchParams = new URLSearchParams();
    searchParams.set("difficulty_level", difficulty);
    router.push(`${pathname}?${searchParams.toString()}`);
  };
  const [level, setLevel] = useState(0);
  return (
    <ModalPortal
      query={MODAL_KEYS.DIFFICULTY}
      onClose={() => handleClose(DIFFICULTY_LEVELS[level])}
    >
      <Block
        title={t("title")}
        blockClassName="lg:w-1/4 sm:w-2/4"
        className="p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <GradientStepInput
          colors={DIFFICULTY_COLORS}
          level={level}
          onChange={(ev) => setLevel(Number(ev.target.value))}
        />

        <div className="text-text text-center">
          <p className="font-medium font-primary">{DIFFICULTY_LEVELS[level]}</p>
        </div>
      </Block>
    </ModalPortal>
  );
};

export default DifficultyModal;
