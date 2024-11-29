"use client";

import React, { useState } from "react";

interface ObjectSearchBarButtonProps {
  text?: string;
  className?: string;
}

const ObjectSearchBarButton = ({
  text,
  className,
}: ObjectSearchBarButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={
        className +
        " flex-1 p-2 text-text font-primary flex justify-center cursor-pointer " +
        (isActive ? "bg-selection border border-selection-border" : "")
      }
      onClick={() => setIsActive(!isActive)}
    >
      {text}
    </div>
  );
};

export default ObjectSearchBarButton;
