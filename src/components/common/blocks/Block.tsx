import React from "react";
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
  return (
    <div
      className={
        "flex flex-col shadow-volume pt-2 rounded-2xl bg-foreground " +
        blockClassName
      }
      onClick={onClick}
    >
      <div className="text-text font-primary text-lg font-bold text-center">
        {title}
      </div>
      <div className={"mt-2 " + className}>{children}</div>
    </div>
  );
};

export default Block;
