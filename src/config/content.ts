export const DEFAULT_IMAGES = {
  user: new URL("/photo.jpg", import.meta.url).href,
  object: new URL("/photo.jpg", import.meta.url).href,
};

export const IMAGES = {
  leaderboard: new URL("/star.png", import.meta.url).href,
  profile: new URL("/profile.png", import.meta.url).href,
  objects: new URL("/objects.png", import.meta.url).href,
  friends: new URL("/friends.png", import.meta.url).href,
  events: new URL("/calendar.png", import.meta.url).href,
  settings: new URL("/settings.png", import.meta.url).href,
  search: new URL("/search.png", import.meta.url).href,
};


export const FOOTER_NAVBAR_LINKS = [
  {
    to: "/leaderboard",
    image: IMAGES.leaderboard,
  },
  {
    to: "/profile",
    image: IMAGES.profile,
  },
  {
    to: "/",
    image: IMAGES.objects,
  },
  {
    to: "/friends",
    image: IMAGES.friends,
  },
  {
    to: "/events",
    image: IMAGES.events,
  },
];
