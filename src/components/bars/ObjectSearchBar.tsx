"use client";

import React, { useState } from "react";
import ObjectSearchBarButton from "@/components/bars/ObjectSearchBarButton";

const ObjectSearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row bg-secondary rounded-2xl">
      <div className="flex flex-col flex-1">
        <div
          className={"bg-secondary flex flex-wrap justify-around rounded-2xl"}
        >
          <ObjectSearchBarButton active={true} text="rating" />
          <ObjectSearchBarButton active={false} text="difficulty" />
          <ObjectSearchBarButton active={false} text="nearest" />
        </div>
        {isOpen ? (
          <div
            className={"bg-secondary flex flex-wrap justify-around rounded-2xl"}
          >
            <ObjectSearchBarButton active={false} text="category" />
            <ObjectSearchBarButton active={false} text="name" />
            <ObjectSearchBarButton active={false} text="..." />
          </div>
        ) : null}
      </div>
      <button
        className={
          "p-2 rounded-r-2xl " +
          (isOpen ? "bg-selection border border-selection-border" : "")
        }
        aria-label="More options"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-text fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
    </div>
  );
};

export default ObjectSearchBar;
