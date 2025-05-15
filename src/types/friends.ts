import { User } from "@/types/users";

export type Friend = {
  id: number;
  friend: User;
  is_approved: boolean;
  approved_at?: Date;
};
