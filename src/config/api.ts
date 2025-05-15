export const API_VERSION = "v1";
export const API_URL =
  process.env.API_URL || `https://api.urbanaut.club/api/${API_VERSION}/`;

export const API_ENDPOINTS = {
  USER: `users/:id/`,
  USERS: "/users",
  SETTINGS: `settings/`,
  NOTIFICATIONS: `notifications/`,
  REFERRALS: `referrals/`,
  REFERRAL_LINKS: `referral_links/`,
  APPLY_REFERRAL_LINK: `referral_links/:code/apply`,
  OBJECTS: `objects/`,
  OBJECT: "objects/:id/",
  POSTS: "posts/",
  POST: "posts/:id/",
  CURRENT_TERMS: "terms/current/",
  EVENTS: "events/",
  EVENT: "events/:id",
  FRIENDS: "friends/",
};
