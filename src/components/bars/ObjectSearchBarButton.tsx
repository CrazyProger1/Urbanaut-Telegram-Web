import React from "react";

interface ObjectSearchBarButtonProps {
  active: boolean;
  text?: string;
}

const ObjectSearchBarButton = ({
  active,
  text,
}: ObjectSearchBarButtonProps) => {
  return (
    <div
      className={
        "flex-1 p-2 text-text font-primary flex justify-center first:rounded-l-2xl last:rounded-r-2xl cursor-pointer " +
        (active ? "bg-selection border border-selection-border" : "")
      }
    >
      {text}
    </div>
  );
};

export default ObjectSearchBarButton;
