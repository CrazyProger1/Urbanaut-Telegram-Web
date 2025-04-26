import React from "react";
import clsx from "clsx";
import { Link } from "@/i18n/routing";

interface Props {
  variant?: "normal" | "disabled" | "selected";
  selected?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
  link?: string;
}

const SwitchBarItem = ({
  variant = "normal",
  selected,
  disabled,
  children,
  className,
  onClick,
  link,
}: Props) => {
  if (selected) variant = "selected";
  if (disabled) variant = "disabled";

  const combinedClassName = clsx(
    className,
    "border p-2 font-primary w-full flex justify-center items-center first:rounded-l-2xl last:rounded-r-2xl",
    variant === "normal" && "border-transparent bg-foreground",
    variant === "selected" && "border-selection-border bg-selection",
    variant === "disabled" && "border-transparent bg-disabled",
  );

  const content = (
    <div onClick={disabled ? undefined : onClick} className={combinedClassName}>
      {children}
    </div>
  );

  if (disabled || !link) {
    return content;
  }

  return (
    <Link
      href={link}
      onClick={disabled ? undefined : onClick}
      className={combinedClassName}
    >
      {children}
    </Link>
  );
};

export default SwitchBarItem;
