"use client";
import React from "react";
import { StepRangeInput } from "@/components/inputs";

interface Props {
  level: number;
  levels: string[];
  onChange?: (level: number) => void;
}

const DifficultyModal = ({ levels, level, onChange }: Props) => {
  return (
    <div
      className="flex flex-col w-52 bg-background shadow-volume-frame py-2 px-4 rounded-2xl  select-none"
      onClick={(ev) => ev.stopPropagation()}
    >
      <div className="text-text text-lg font-primary text-center font-bold">
        Difficulty
      </div>
      <StepRangeInput
        levels={levels}
        level={level}
        onChange={onChange}
        step={1}
      />
      <div className="mt-2" />
      <div className="text-text text-center">
        <p className="font-medium font-primary">{levels[level - 1]}</p>
      </div>
    </div>
  );
};

export default DifficultyModal;
