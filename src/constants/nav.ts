import { ICONS } from "@/constants/media";

export const LINKS = {
  main: "/",
  profile: "/profile",
  friends: "/friends",
  events: "/events",
  blog: "/blog",
};
export const FOOTER_PAGES = [
  LINKS.blog,
  LINKS.profile,
  LINKS.main,
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
    href: LINKS.main,
    image: ICONS.objects,
  },
  {
    href: LINKS.friends,
    image: ICONS.friends,
  },
  {
    href: LINKS.events,
    image: ICONS.events,
  },
];
