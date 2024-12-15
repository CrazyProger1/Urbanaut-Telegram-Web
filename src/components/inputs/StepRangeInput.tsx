import React from "react";

interface Props {
  level: number;
  max: number;
  min: number;
  step?: number;
  onChange?: (level: number) => void;
}

const StepRangeInput = ({ level, onChange, step = 1, min, max }: Props) => {
  return (
    <input
      type="range"
      value={level}
      className="h-2 rounded-lg appearance-none cursor-pointer w-full mt-4"
      onChange={(ev) => (onChange ? onChange(Number(ev.target.value)) : null)}
      style={{
        background: `linear-gradient(to right, gray 0%, green 25%, yellow 50%, red 75%, purple 100%)`,
      }}
      min={min}
      step={step}
      max={max}
    />
  );
};

export default StepRangeInput;
