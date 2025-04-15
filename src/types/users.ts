export type Rank = "NEWBIE" | "PROFESSIONAL" | "STALKER";

export type User = {
  id: number;
  username?: string;
  rank: Rank;
  avatar: string;
};
