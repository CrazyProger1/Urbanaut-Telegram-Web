"use client";

import React, { useState } from "react";
import { SearchToggle } from "@/components/toggles";
import { ExpandButton } from "@/components/buttons";
import { SearchForm } from "@/components/forms";

const ObjectSearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    rating: false,
    difficulty: false,
    nearest: false,
    category: false,
    name: false,
    more: false,
  });

  const handleToggle = (target: string, active: boolean) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [target]: active,
    }));
  };

  return (
    <div className="flex flex-row bg-foreground rounded-2xl shadow-volume-frame">
      <div className="flex flex-col flex-1">
        <div className="bg-foreground flex flex-wrap justify-around rounded-2xl">
          <SearchToggle
            target="rating"
            text="rating"
            active={activeFilters.rating}
            onToggle={handleToggle}
            extendClassName={isExpanded ? "rounded-tl-2xl" : "rounded-l-2xl"}
          />
          <SearchToggle
            target="difficulty"
            text="difficulty"
            active={activeFilters.difficulty}
            onToggle={handleToggle}
          />
          <SearchToggle
            target="nearest"
            text="nearest"
            active={activeFilters.nearest}
            onToggle={handleToggle}
          />
        </div>
        {isExpanded ? (
          <div className="bg-foreground flex flex-wrap justify-around rounded-2xl">
            <SearchToggle
              target="category"
              text="category"
              active={activeFilters.category}
              onToggle={handleToggle}
            />
            <SearchToggle
              target="name"
              text="name"
              active={activeFilters.name}
              onToggle={handleToggle}
            />
            <SearchToggle
              target="more"
              text="more"
              active={activeFilters.more}
              onToggle={handleToggle}
            />
          </div>
        ) : null}
        {isExpanded ? (
          <div className="bg-foreground flex flex-wrap justify-around rounded-2xl">
            <SearchForm className="w-full rounded-bl-2xl bg-foreground text-text font-primary p-2 placeholder-text focus:border-selection-border focus:border focus:outline-none text-center" />
          </div>
        ) : null}
      </div>
      <ExpandButton
        onClick={() => setIsExpanded(!isExpanded)}
        className={
          "p-2 rounded-r-2xl bg-foreground flex items-center " +
          (isExpanded ? "bg-selection border border-selection-border" : "")
        }
      />
    </div>
  );
};

export default ObjectSearchBar;
