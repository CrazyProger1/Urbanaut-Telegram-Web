"use client";
import React, { useState } from "react";
import { StepRangeInput } from "@/components/inputs";
import { ModalPortal } from "@/components/modals";

interface Props {
  show: boolean;
  levels: string[];
  onClose?: (difficulty: string) => void;
}

const DifficultyModal = ({ show, levels, onClose }: Props) => {
  const [level, setLevel] = useState(1);
  return (
    <ModalPortal
      show={show}
      onClose={() => (onClose ? onClose(levels[level - 1]) : null)}
    >
      <div
        className="flex flex-col w-52 bg-background shadow-volume-frame py-2 px-4 rounded-2xl  select-none"
        onClick={(ev) => ev.stopPropagation()}
      >
        <div className="text-text text-lg font-primary text-center font-bold">
          Difficulty
        </div>
        <StepRangeInput
          max={levels.length}
          min={1}
          step={1}
          level={level}
          onChange={setLevel}
        />
        <div className="mt-2" />
        <div className="text-text text-center">
          <p className="font-medium font-primary">{levels[level - 1]}</p>
        </div>
      </div>
    </ModalPortal>
  );
};

export default DifficultyModal;
