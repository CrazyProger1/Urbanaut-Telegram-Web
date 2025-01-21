import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export type Locale = "en" | "uk";
export const routing = defineRouting({
  locales: ["en", "uk"],
  defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
