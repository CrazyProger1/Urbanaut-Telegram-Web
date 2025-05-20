"use client";
import React, { ChangeEventHandler } from "react";
import { Color } from "@/types/common";

interface Props {
  colors: Color[];
  level?: number;
  step?: number;
  max?: number;
  min?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const GradientStepInput = ({
  colors,
  level = 0,
  step = 1,
  max,
  min,
  onChange,
}: Props) => {
  const gradient = colors
    .map((color, index) => `${color} ${(index / (colors.length - 1)) * 100}%`)
    .join(", ");

  return (
    <input
      type="range"
      value={level}
      className="h-2 rounded-lg appearance-none cursor-pointer w-full"
      onChange={onChange}
      style={{
        background: `linear-gradient(to right, ${gradient})`,
      }}
      min={min || 0}
      step={step}
      max={max || colors.length - 1}
    />
  );
};

export default GradientStepInput;
