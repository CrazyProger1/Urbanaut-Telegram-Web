import React from "react";
import Image from "next/image";
import { ALTS } from "@/config/media";
import clsx from "clsx";
import { ClickHandlerWrapper } from "@/components/common/wrappers";

interface Props {
  className?: string;
  variant?: "normal" | "danger";
  icon?: string;
  text?: string;
  onClick?: () => void;
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
    <ClickHandlerWrapper className={extendedClassName} onClick={onClick}>
      {icon && (
        <Image
          className="size-8 select-none"
          src={icon}
          width={64}
          height={64}
          alt={ALTS.BLOCK_ICON}
        />
      )}
      <div className="font-primary">{text}</div>
    </ClickHandlerWrapper>
  );
};

export default BlockButton;
