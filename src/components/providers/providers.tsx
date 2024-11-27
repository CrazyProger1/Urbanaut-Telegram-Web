"use client";

import React from "react";
import { defaultUI, UIContext } from "@/contexts/ui";

interface CommonProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: CommonProviderProps) => {
  return (
    <>
      <UIContext.Provider value={defaultUI}>
        {children}
      </UIContext.Provider>
    </>
  );
};

export default Providers;
