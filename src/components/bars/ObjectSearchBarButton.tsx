"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ObjectSearchBarButtonProps {
  text: string;
  className?: string;
}

const ObjectSearchBarButton = ({
  text,
  className,
}: ObjectSearchBarButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (params.has(text)) setIsActive(true);
  }, [text]);

  const handleSearch = () => {
    if (!isActive && text) {
      params.set(text, "true");
      setIsActive(true);
    } else {
      params.delete(text);
      setIsActive(false);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      className={
        className +
        " flex-1 p-2 text-text font-primary flex justify-center cursor-pointer " +
        (isActive ? "bg-selection border border-selection-border" : "")
      }
      onClick={handleSearch}
    >
      {text}
    </div>
  );
};

export default ObjectSearchBarButton;
