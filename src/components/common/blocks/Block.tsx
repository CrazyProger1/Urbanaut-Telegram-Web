import React from "react";
import BlockButton from "./BlockButton";
import clsx from "clsx";

interface Props {
  className?: string;
  blockClassName?: string;
  title?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const Block = ({
  className,
  title,
  children,
  blockClassName,
  onClick,
}: Props) => {
  const combinedBlockClassName = clsx(
    "flex flex-col shadow-volume rounded-2xl bg-foreground",
    blockClassName,
  );
  return (
    <div className={combinedBlockClassName} onClick={onClick}>
      {title ? (
        <div className="text-text my-2 font-primary text-lg font-bold text-center">
          {title}
        </div>
      ) : null}

      <div className={className}>{children}</div>
    </div>
  );
};

Block.Button = BlockButton;

export default Block;
