"use client";

import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import BlockButton from "./BlockButton";
import { Link, usePathname } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

interface Props {
  className?: string;
  variant?: "normal" | "danger" | "disabled";
  icon?: string;
  text?: string;
  disable?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  query?: string;
  children?: React.ReactNode;
}

const BlockExpand = (props: Props) => {
  const { children, query } = props;
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

  return (
    <div className="flex flex-col">
      <Link href={href}>
        <BlockButton
          className={isOpen ? "bg-selection" : ""}
          {...props}
          metric={isOpen ? <FaAngleUp /> : <FaAngleDown />}
        />
      </Link>
      {isOpen ? <>{children}</> : null}
    </div>
  );
};

export default BlockExpand;
