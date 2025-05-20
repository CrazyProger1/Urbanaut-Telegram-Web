"use client";
import React, { useState } from "react";
import { ModalPortal } from "@/components/common/modals";
import { GradientStepInput } from "@/components/common/inputs";
import { DIFFICULTY_COLORS, DIFFICULTY_LEVELS } from "@/config/common";
import { Block } from "@/components/common/blocks";
import { useTranslations } from "next-intl";

const DifficultyModal = () => {
  const t = useTranslations("DifficultyModal");

  const handleClose = (difficulty: string) => {
    console.log(difficulty);
  };
  const [level, setLevel] = useState(0);
  return (
    <ModalPortal
      query="difficulty"
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
