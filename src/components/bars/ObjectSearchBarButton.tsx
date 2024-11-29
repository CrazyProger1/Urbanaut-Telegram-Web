"use client";

import React, { useState } from "react";

interface ObjectSearchBarButtonProps {
  active: boolean;
  text?: string;
}

const ObjectSearchBarButton = ({
  active,
  text,
}: ObjectSearchBarButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={
        "flex-1 p-2 text-text font-primary flex justify-center first:rounded-l-2xl cursor-pointer " +
        (isActive ? "bg-selection border border-selection-border" : "")
      }
      onClick={() => setIsActive(!isActive)}
    >
      {text}
    </div>
  );
};

export default ObjectSearchBarButton;
