import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { ALTS } from "@/config/media";
import clsx from "clsx";

interface Props {
  className?: string;
  variant?: "normal" | "danger" | "disabled";
  icon?: string;
  text?: string;
  disable?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const BlockButton = ({
  className,
  variant = "normal",
  text,
  icon,
  onClick,
  disable,
}: Props) => {
  if (disable) {
    variant = "disabled";
  }
  const extendedClassName = clsx(
    "flex flex-row p-2 gap-4 items-center cursor-pointer",
    className,

    variant === "danger" && "bg-variant-danger",
    variant === "normal" && "bg-foreground hover:bg-selection",
    variant === "disabled" && "bg-variant-disabled",
  );
  return (
    <div onClick={disable ? undefined : onClick} className={extendedClassName}>
      {icon && (
        <Image
          className="size-8 select-none drop-shadow-volume"
          src={icon}
          width={64}
          height={64}
          alt={ALTS.BLOCK_ICON}
        />
      )}
      <div className="font-primary">{text}</div>
    </div>
  );
};

export default BlockButton;
