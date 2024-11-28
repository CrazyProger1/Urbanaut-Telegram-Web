"use client";

import React from "react";
import { DEFAULT_UI_SETTINGS, UIContext } from "@/contexts/ui";

interface CommonProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: CommonProviderProps) => {
  return (
    <>
      <UIContext.Provider value={DEFAULT_UI_SETTINGS}>
        {children}
      </UIContext.Provider>
    </>
  );
};

export default Providers;
