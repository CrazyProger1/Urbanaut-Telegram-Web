import { ICONS } from "@/config/media";

export const PAGES = {
  HOME: "/",
  SETTINGS: "/settings",
  PROFILE: "/profile",
  OTHERS_PROFILE: "/profile/:id",
  LEADERBOARD: "/leaderboard",
  NOTIFICATIONS: "/notifications",
  SOCIAL: "/social",
  FRIENDS: "/social/friends",
  TEAMS: "/social/teams",
  REFERRALS: "/social/referrals",
  EVENTS: "/events",
  BLOG: "/blog",
  POST: "/blog/:id",
  OBJECTS: "/objects",
  OBJECT: "/objects/:id",
  UNAVAILABLE: "/unavailable",
  TERMS: "/terms",
  EVENT: "/events/:id",
};

export const FOOTER_PAGES = [
  {
    PAGE: PAGES.BLOG,
    ICON: ICONS.BOOK,
  },
  {
    PAGE: PAGES.PROFILE,
    ICON: ICONS.GAS_MASK,
  },
  {
    PAGE: PAGES.OBJECTS,
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
