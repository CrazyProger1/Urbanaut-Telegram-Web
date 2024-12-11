"use client";
import React, { useState } from "react";
import ObjectSearchBarButton from "./ObjectSearchBarButton";
import Form from "next/form";

const ObjectSearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row bg-foreground rounded-2xl shadow-volume-frame">
      <div className="flex flex-col flex-1">
        <div
          className={"bg-foreground flex flex-wrap justify-around rounded-2xl"}
        >
          <ObjectSearchBarButton
            target="rating"
            text="rating"
            className={isOpen ? "rounded-tl-2xl" : "rounded-l-2xl"}
          />
          <ObjectSearchBarButton target="difficulty" text="difficulty" />
          <ObjectSearchBarButton target="nearest" text="nearest" />
        </div>
        {isOpen ? (
          <div className="bg-foreground flex flex-wrap justify-around rounded-2xl">
            <ObjectSearchBarButton target="category" text="category" />
            <ObjectSearchBarButton target="name" text="name" />
            <ObjectSearchBarButton target="more" text="..." />
          </div>
        ) : null}
        {isOpen ? (
          <div className="bg-foreground flex flex-wrap justify-around rounded-2xl">
            <Form className="w-full" action="/search">
              <input
                placeholder="type to search..."
                className="w-full rounded-bl-2xl bg-foreground text-text font-primary p-2 placeholder-text focus:border-selection-border focus:border focus:outline-none text-center"
                name="query"
              />
            </Form>
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
