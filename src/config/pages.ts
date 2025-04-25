import { ICONS } from "@/config/media";

export const PAGES = {
  HOME: "/",
  SETTINGS: "/settings",
  PROFILE: "/profile",
  LEADERBOARD: "/leaderboard",
  NOTIFICATIONS: "/notifications",
  SOCIAL: "/social",
  EVENTS: "/events",
  BLOG: "/blog",
};

export const FOOTER_PAGES = [
  {
    PAGE: PAGES.BLOG,
    ICON: ICONS.BOOK,
  },
  {
    PAGE: PAGES.PROFILE,
    ICON: ICONS.PROFILE,
  },
  {
    PAGE: PAGES.HOME,
    ICON: ICONS.SEARCH,
  },
  {
    PAGE: PAGES.SOCIAL,
    ICON: ICONS.FRIENDS,
  },
  {
    PAGE: PAGES.EVENTS,
    ICON: ICONS.CALENDAR,
  },
];
