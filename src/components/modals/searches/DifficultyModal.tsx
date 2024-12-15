"use client";
import React, { useState } from "react";

const DifficultyModal = () => {
  const [value, setValue] = useState(3);

  const DIFFICULTIES = ["Newbie", "Easy", "Medium", "Hard", "Legend"];
  return (
    <div className="flex flex-col w-52 bg-background shadow-volume-frame py-2 px-4 rounded-2xl  select-none">
      <div className="text-text text-lg font-primary text-center font-bold">
        Difficulty
      </div>
      <input
        type="range"
        value={value}
        className="h-2 rounded-lg appearance-none cursor-pointer w-full mt-4"
        onChange={(ev) => setValue(Number(ev.target.value))}
        style={{
          background: `linear-gradient(to right, gray 0%, green 25%, yellow 50%, red 75%, purple 100%)`,
        }}
        min={1}
        step={1}
        max={5}
      />
      <div className="mt-2" />
      <div className="text-text text-center">
        <p className="font-medium font-primary">{DIFFICULTIES[value - 1]}</p>
      </div>
    </div>
  );
};

export default DifficultyModal;
