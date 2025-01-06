"use client";

import React, { useState, useEffect } from "react";
import { SearchToggle } from "@/components/common/contols/toggles";
import { ExpandButton } from "@/components/common/contols/buttons";
import { SearchForm } from "../forms";
import {
  CategoryModal,
  DifficultyModal,
} from "@/components/modules/objects/modals";
import { usePathname, useRouter } from "next/navigation";
import { AbandonedObjectCategory } from "@/types/categories";
import { DIFFICULTY_COLORS, DIFFICULTY_LEVELS } from "@/constants/levels";

interface Props {
  categories: AbandonedObjectCategory[];
}

const ObjectSearchBar = ({ categories }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    rating: false,
    difficulty_level: false,
    nearest: false,
    category: false,
    name: false,
    more: false,
  });

  const [modalStates, setModalStates] = useState({
    difficulty_level: false,
    category: false,
  });
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const query = new URLSearchParams(filters).toString();
    router.push(`${pathname}?${query}`);
  }, [filters, router, pathname]);

  const closeModal = (target: string) => {
    setModalStates({ ...modalStates, [target]: false });
  };

  const openModal = (target: string) => {
    setModalStates({ ...modalStates, [target]: true });
  };

  const handleToggle = (target: string, active: boolean) => {
    if (active && target in modalStates) {
      openModal(target);
    }

    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [target]: active,
    }));

    if (!active) {
      const { [target]: _, ...rest } = filters;
      setFilters(rest);
    }
  };

  const handleHold = (target: string) => {
    openModal(target);

    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [target]: true,
    }));
  };

  return (
    <>
      <DifficultyModal
        show={modalStates.difficulty_level}
        levels={DIFFICULTY_LEVELS}
        colors={DIFFICULTY_COLORS}
        onClose={(difficulty) => {
          closeModal("difficulty_level");
          setFilters({ ...filters, difficulty_level: difficulty });
        }}
      />
      <CategoryModal
        show={modalStates.category}
        categories={categories}
        onClose={(categories) => {
          closeModal("category");
          setFilters({ ...filters, categories: categories });
        }}
      />
      <div className="flex flex-row bg-foreground rounded-2xl shadow-volume-frame">
        <div className="flex flex-col flex-1">
          <div className="bg-foreground flex flex-wrap justify-around rounded-2xl">
            <SearchToggle
              target="rating"
              text="rating"
              active={activeFilters.rating}
              onToggle={handleToggle}
              onHold={handleHold}
              extendClassName={isExpanded ? "rounded-tl-2xl" : "rounded-l-2xl"}
            />
            <SearchToggle
              target="difficulty_level"
              text="difficulty"
              active={activeFilters.difficulty_level}
              onToggle={handleToggle}
              onHold={handleHold}
            />
            <SearchToggle
              target="nearest"
              text="nearest"
              active={activeFilters.nearest}
              onToggle={handleToggle}
              onHold={handleHold}
            />
          </div>
          {isExpanded ? (
            <div className="bg-foreground flex flex-wrap justify-around rounded-2xl">
              <SearchToggle
                target="category"
                text="category"
                active={activeFilters.category}
                onToggle={handleToggle}
                onHold={handleHold}
              />
              <SearchToggle
                target="name"
                text="name"
                active={activeFilters.name}
                onToggle={handleToggle}
                onHold={handleHold}
              />
              <SearchToggle
                target="more"
                text="more"
                active={activeFilters.more}
                onToggle={handleToggle}
                onHold={handleHold}
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
            "p-2 rounded-r-2xl bg-foreground flex items-center  text-text fill-current " +
            (isExpanded ? "bg-selection border border-selection-border" : "")
          }
        />
      </div>
    </>
  );
};

export default ObjectSearchBar;
