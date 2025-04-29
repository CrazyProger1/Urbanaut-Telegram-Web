export type Rating = {
  id: number;
  value: number;
};

export type Point = {
  latitude: number;
  longitude: number;
};
export type Location = {
  id: number;
  point: Point;
};
export type Security =
  | "NO"
  | "YES"
  | "YES_WITH_DOGS"
  | "YES_WITH_WEAPONS"
  | "YES_MILITARY";
export type Preservation = "DANGEROUS" | "LOW" | "MEDIUM" | "HIGH";
export type Difficulty = "NEWBIE" | "EASY" | "MEDIUM" | "HARD" | "LEGEND";
export type Rank = "NEWBIE" | "PROFESSIONAL" | "STALKER" | "LEGEND";
export type Language = "uk" | "en";
export type Theme = "DARK" | "LIGHT";
