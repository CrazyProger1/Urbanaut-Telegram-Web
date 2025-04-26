export const API_VERSION = "v1";
export const API_URL =
  process.env.API_URL || `https://api.urbanaut.club/api/${API_VERSION}/`;

export const API_ENDPOINTS = {
  USER: `users/:id/`,
  SETTINGS: `settings/`,
  NOTIFICATIONS: `notifications/`,
};
