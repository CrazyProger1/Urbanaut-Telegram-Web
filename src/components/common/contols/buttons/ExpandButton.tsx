import React, { MouseEventHandler } from "react";
import { ThreeDotsIcon } from "@/components/common/icons";
import clsx from "clsx";

interface Props {
  expandClassName?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const ExpandButton = ({ expandClassName, onClick }: Props) => {
  const className = clsx("cursor-pointer", expandClassName);
  return (
    <div className={className} onClick={onClick}>
      <ThreeDotsIcon className="h-5 w-5" />
    </div>
  );
};

export default ExpandButton;
