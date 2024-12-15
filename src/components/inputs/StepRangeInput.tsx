import React from "react";

interface Props {
  level: number;
  levels: string[];
  step?: number;
  onChange?: (level: number) => void;
}

const StepRangeInput = ({ level, levels, onChange, step = 1 }: Props) => {
  return (
    <input
      type="range"
      value={level}
      className="h-2 rounded-lg appearance-none cursor-pointer w-full mt-4"
      onChange={(ev) => (onChange ? onChange(Number(ev.target.value)) : null)}
      style={{
        background: `linear-gradient(to right, gray 0%, green 25%, yellow 50%, red 75%, purple 100%)`,
      }}
      min={1}
      step={step}
      max={levels.length}
    />
  );
};

export default StepRangeInput;
