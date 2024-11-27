"use client";

import React from "react";
import { defaultTheme, ThemeContext } from "@/contexts/theme";

interface CommonProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: CommonProviderProps) => {
  return (
    <>
      <ThemeContext.Provider value={defaultTheme}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default Providers;
