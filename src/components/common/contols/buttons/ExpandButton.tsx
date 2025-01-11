import React, { MouseEventHandler } from "react";
import { ThreeDotsIcon } from "@/components/common/icons";

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const ExpandButton = ({ className, onClick }: Props) => {
  return (
    <div className={className} onClick={onClick}>
      <ThreeDotsIcon className="h-5 w-5" />
    </div>
  );
};

export default ExpandButton;
