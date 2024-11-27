"use client";
import { createContext } from "react";
import { Theme } from "@/types/theme";

export const defaultTheme: Theme = { variant: "dark" };
export const ThemeContext = createContext<Theme>(defaultTheme);
