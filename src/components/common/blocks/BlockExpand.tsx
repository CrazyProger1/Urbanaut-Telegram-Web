"use client";

import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { usePathname } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import clsx from "clsx";
import Image from "next/image";
import { ALTS } from "@/config/media";
import { OptionalLink } from "@/components/common/utils";

interface Props {
  className?: string;
  variant?: "normal" | "danger" | "disabled";
  icon?: string;
  content?: string | React.ReactNode;
  disable?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  query?: string;
  children?: React.ReactNode;
  first?: boolean;
  last?: boolean;
}

const BlockExpand = ({
  className,
  variant = "normal",
  content,
  icon,
  onClick,
  disable,
  children,
  query,
  first,
  last,
}: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [href, setHref] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    if (query) setIsOpen(searchParams.get(query) === "true");
    setHref(
      query
        ? `${pathname}?${createQueryString(query, isOpen ? null : "true")}`
        : pathname,
    );
  }, [createQueryString, isOpen, pathname, query, searchParams]);

  if (disable) {
    variant = "disabled";
  }
  const extendedClassName = clsx(
    "flex flex-row gap-2 items-center cursor-pointer p-2",
    isOpen && "bg-selection",
    className,

    variant === "danger" && "bg-variant-danger",
    variant === "normal" && "bg-foreground active:bg-selection",
    variant === "disabled" && "bg-variant-disabled",
    first && "rounded-t-2xl",
    last && !isOpen && "rounded-b-2xl",
  );
  return (
    <div className="flex flex-col ">
      <OptionalLink
        href={disable ? undefined : href}
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
          <div>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</div>
        </div>
      </OptionalLink>
      {isOpen ? <>{children}</> : null}
    </div>
  );
};
export default BlockExpand;
