import { Rank } from "@/types/common";

export type User = {
  id: number;
  username?: string;
  rank: Rank;
  avatar: string;
};
