"use client";

import { createContext } from "react";

export type Theme = "dark" | "light";
export type UI = {
  theme: Theme;
};

export const defaultUI: UI = {
  theme: "dark",
};
export const UIContext = createContext<UI>(defaultUI);
