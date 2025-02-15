"use client";

import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Dropdown = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-selection text-start"
      >
        Date
      </div>
      {isOpen && <div className="flex flex-col items-start">{children}</div>}
    </div>
  );
};
export default Dropdown;
