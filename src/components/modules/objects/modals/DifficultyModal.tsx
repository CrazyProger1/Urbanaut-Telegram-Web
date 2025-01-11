"use client";
import React, { useState } from "react";
import { ModalPortal } from "@/components/common/modals";
import { ModalTitle } from "@/components/common/typography/titles";
import { GradientStepInput } from "@/components/common/contols/inputs";
import { Color } from "@/types/colors";

interface Props {
  show: boolean;
  levels: string[];
  colors: Color[];
  onClose?: (difficulty: string) => void;
}

const DifficultyModal = ({ show, levels, colors, onClose }: Props) => {
  const [level, setLevel] = useState(0);
  return (
    <ModalPortal
      show={show}
      onClose={() => (onClose ? onClose(levels[level]) : null)}
    >
      <div
        className="flex flex-col w-52 bg-background shadow-volume-frame py-2 px-4 rounded-2xl select-none"
        onClick={(ev) => ev.stopPropagation()}
      >
        <ModalTitle>Difficulty</ModalTitle>

        <div className="mt-4" />

        <GradientStepInput
          colors={colors}
          level={level}
          onChange={(ev) => setLevel(Number(ev.target.value))}
        />

        <div className="mt-2" />

        <div className="text-text text-center">
          <p className="font-medium font-primary">{levels[level]}</p>
        </div>
      </div>
    </ModalPortal>
  );
};

export default DifficultyModal;
