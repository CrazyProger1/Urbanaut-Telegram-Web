import React from "react";
import clsx from "clsx";
import { OptionalLink } from "@/components/common/utils";
interface Props {
  variant?: "normal" | "disabled" | "activated";
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  disable?: boolean;
  link?: string;
}
const SearchBarToggle = ({
  variant = "normal",
  className,
  children,
  active,
  disable,
  link,
}: Props) => {
  if (active) {
    variant = "activated";
  } else if (disable) {
    variant = "disabled";
  }
  const combinedClassNames = clsx(
    "bg-foreground p-2 w-full text-center border cursor-pointer",
    variant === "activated" && "bg-selection border-selection-border",
    variant === "normal" && "bg-foreground border-transparent",
    variant === "disabled" && "bg-variant-disabled border-transparent",
    className,
  );
  return (
    <OptionalLink href={link} className={combinedClassNames}>
      {children}
    </OptionalLink>
  );
};

export default SearchBarToggle;
