import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { ALTS } from "@/config/media";
import clsx from "clsx";

interface Props {
  className?: string;
  variant?: "normal" | "danger";
  icon?: string;
  text?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const BlockButton = ({
  className,
  variant = "normal",
  text,
  icon,
  onClick,
}: Props) => {
  const extendedClassName = clsx(
    "flex flex-row p-2 gap-4 items-center cursor-pointer",
    className,
    variant === "danger" && "bg-variant-danger",
    variant === "normal" && "bg-foreground hover:bg-selection",
  );
  return (
    <div onClick={onClick} className={extendedClassName}>
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
