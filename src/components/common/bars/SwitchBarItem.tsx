import React from "react";
import clsx from "clsx";

interface Props {
  variant?: "normal" | "disabled" | "selected";
  selected?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
}
const SwitchBarItem = ({
  variant = "normal",
  selected,
  disabled,
  children,
  className,
  onClick,
}: Props) => {
  if (selected) variant = "selected";
  if (disabled) variant = "disabled";

  const combinedClassName = clsx(
    className,
    "border p-2 font-primary w-full flex justify-center items-center",
    variant === "normal" && "border-transparent bg-foreground",
    variant === "selected" && "border-selection-border bg-selection",
    variant === "disabled" && "bg-disabled",
  );
  return (
    <div onClick={onClick} className={combinedClassName}>
      {children}
    </div>
  );
};

export default SwitchBarItem;
