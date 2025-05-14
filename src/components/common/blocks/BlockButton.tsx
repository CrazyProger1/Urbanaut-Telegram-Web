import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { ALTS } from "@/config/media";
import clsx from "clsx";
import { OptionalLinkWrapper } from "@/components/common/utils";

interface Props {
  className?: string;
  variant?: "normal" | "danger" | "disabled";
  icon?: string;
  content?: string | React.ReactNode;
  metric?: string | number | React.ReactNode;
  disable?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  link?: string;
}

export const BlockButton = ({
  className,
  variant = "normal",
  content,
  metric,
  icon,
  onClick,
  disable,
  link,
}: Props) => {
  if (disable) {
    variant = "disabled";
  }
  const extendedClassName = clsx(
    "flex flex-row p-2 gap-2 items-center cursor-pointer",
    className,

    variant === "danger" && "bg-variant-danger",
    variant === "normal" && "bg-foreground active:bg-selection",
    variant === "disabled" && "bg-variant-disabled",
  );

  return (
    <OptionalLinkWrapper
      href={link}
      onClick={disable ? undefined : onClick}
      className={extendedClassName}
    >
      {icon && (
        <Image
          className="size-8 select-none drop-shadow-volume"
          src={icon}
          width={64}
          height={64}
          alt={ALTS.BLOCK_ICON}
        />
      )}
      <div className="flex flex-row justify-between font-primary w-full items-center">
        <div>{content}</div>
        <div>{metric}</div>
      </div>
    </OptionalLinkWrapper>
  );
};
