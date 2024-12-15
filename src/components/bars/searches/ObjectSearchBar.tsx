"use client";

import React, { useState } from "react";
import { SearchToggle } from "@/components/toggles";
import { ExpandButton } from "@/components/buttons";
import { SearchForm } from "@/components/forms";
import { ModalPortal } from "@/components/modals";
import { CategoryModal, DifficultyModal } from "@/components/modals/searches";

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

  const [modalStates, setModalStates] = useState({
    difficulty: false,
    category: false,
  });

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
      <ModalPortal
        show={modalStates.difficulty}
        onClose={() => closeModal("difficulty")}
      >
        <DifficultyModal />
      </ModalPortal>
      <ModalPortal
        show={modalStates.category}
        onClose={() => closeModal("category")}
      >
        <CategoryModal />
      </ModalPortal>
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
              target="difficulty"
              text="difficulty"
              active={activeFilters.difficulty}
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
            "p-2 rounded-r-2xl bg-foreground flex items-center " +
            (isExpanded ? "bg-selection border border-selection-border" : "")
          }
        />
      </div>
    </>
  );
};

export default ObjectSearchBar;
