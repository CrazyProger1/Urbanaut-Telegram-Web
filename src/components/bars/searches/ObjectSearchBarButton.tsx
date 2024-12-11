"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  target: string;
  text: string;
  className?: string;
}

const ObjectSearchBarButton = ({ target, text, className }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const [isActive, setIsActive] = useState(params.has(target));

  const handleSearch = () => {
    if (!isActive && target) {
      params.set(target, "true");
      setIsActive(true);
    } else {
      params.delete(target);
      setIsActive(false);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
      <div
          className={`${className} flex-1 p-2 text-text font-primary flex justify-center cursor-pointer relative 
        ${isActive ? "bg-selection" : ""}`}
          onClick={handleSearch}
      >
        {isActive && (
            <div className={`${className} absolute inset-0 border border-selection-border pointer-events-none`}/>
        )}
        {text}
      </div>
  );
};

export default ObjectSearchBarButton;
