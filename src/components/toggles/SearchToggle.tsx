"use client";
import React from "react";

interface Props {
  target: string;
  active: boolean;
  text: string;
  extendClassName?: string;
  onToggle?: (target: string, active: boolean) => void;
}

const SearchToggle = ({
  target,
  active,
  text,
  extendClassName,
  onToggle,
}: Props) => {
  return (
    <div
      className={`${extendClassName} flex-1 p-2 text-text font-primary flex justify-center cursor-pointer relative 
        ${active ? "bg-selection" : ""}`}
      onClick={() => (onToggle ? onToggle(target, !active) : null)}
    >
      {active && (
        <div
          className={`${extendClassName} absolute inset-0 border border-selection-border pointer-events-none`}
        />
      )}
      {text}
    </div>
  );
};

export default SearchToggle;
