"use client";
import { createContext } from "react";
import { UI } from "@/types/ui";

export const defaultUI: UI = {
  theme: "dark",
  page: "",
};
export const UIContext = createContext<UI>(defaultUI);
