"use client";

import React from "react";
import Tippy from "@tippyjs/react";

interface Props {
  children: React.ReactNode;
  text?: React.ReactNode | string;
}

const Tooltip = ({ children, text }: Props) => {
  if (!text) {
    return children;
  }
  return (
    <Tippy
      content={text}
      placement="top"
      touch={true}
      hideOnClick={true}
      delay={1000}
      interactive={true}
      animation="perspective-extreme"
      aria={{ content: "describedby" }}
      maxWidth={200}
      theme="tooltip"
    >
      <div
        role="button"
        aria-label={`Tooltip: ${text}`}
        className="cursor-pointer"
      >
        {children}
      </div>
    </Tippy>
  );
};

export default Tooltip;
