import { ICONS } from "@/constants/media";

export const LINKS = {
  objects: "/objects",
  object: "/objects/[id]",
  profile: "/profile",
  user: "/profile/[id]",
  friends: "/friends",
  events: "/events",
  blog: "/blog",
  settings: "/settings",
  leaderboard: "/leaderboard",
  auth: "/auth",
  notifications: "/notifications",
};
export const FOOTER_PAGES = [
  LINKS.blog,
  LINKS.profile,
  LINKS.objects,
  LINKS.friends,
  LINKS.events,
];

export const FOOTER_LINKS = [
  {
    href: LINKS.blog,
    image: ICONS.leaders,
  },
  {
    href: LINKS.profile,
    image: ICONS.profile,
  },
  {
    href: LINKS.objects,
    image: ICONS.objects,
  },
  {
    href: LINKS.friends,
    image: ICONS.friends,
  },
  {
    href: LINKS.events,
    image: ICONS.clock,
  },
];
