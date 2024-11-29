import React from "react";
import ObjectSearchBarButton from "@/components/bars/ObjectSearchBarButton";

const ObjectSearchBar = () => {
  return (
    <div className="bg-secondary rounded-2xl flex flex-row justify-around">
      <ObjectSearchBarButton active={true} text="rating" />
      <ObjectSearchBarButton active={false} text="difficulty" />
      <ObjectSearchBarButton active={false} text="nearest" />
      <button
        className="p-2 bg-selection  rounded-r-2xl border border-selection-border"
        aria-label="More options"
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
