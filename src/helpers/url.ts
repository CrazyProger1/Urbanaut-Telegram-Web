import { default as slugifylib } from "slugify";

export const slugify = (text: string) => {
  return slugifylib(text.toLowerCase(), {
    lower: true, // Convert to lowercase
    strict: true, // Remove special characters not allowed in slugs
    remove: /[^a-z0-9\s-]/g, // Remove non-alphanumeric characters except spaces and hyphens
    replacement: "-", // Replace spaces with hyphens
    trim: true, // Trim leading/trailing hyphens
  });
};
