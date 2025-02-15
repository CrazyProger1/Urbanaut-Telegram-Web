"use client";

import React, { useState } from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

const Dropdown = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = clsx(
    "py-1 px-2 text-start bg-foreground w-full",
    isOpen && "rounded-t-2xl",
    !isOpen && "rounded-2xl",
  );
  return (
    <div className="flex flex-col items-start w-full">
      <div onClick={() => setIsOpen(!isOpen)} className={toggleClass}>
        Date
      </div>
      {isOpen && (
        <div className="flex flex-col items-start w-full">{children}</div>
      )}
    </div>
  );
};
export default Dropdown;
