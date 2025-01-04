import React, { MouseEventHandler } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
}

const ExpandButton = ({ className, onClick }: Props) => {
  return (
    <div className={className} aria-label="More options" onClick={onClick}>
      <svg className="h-5 w-5 text-text fill-current" viewBox="0 0 20 20">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    </div>
  );
};

export default ExpandButton;
