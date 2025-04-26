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
    variant === "disabled" && "bg-disabled",
  );

  const content = (
    <div onClick={onClick} className={combinedClassName}>
      {children}
    </div>
  );

  if (link) {
    return (
      <Link href={link} onClick={onClick} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return content;
};

export default SwitchBarItem;
