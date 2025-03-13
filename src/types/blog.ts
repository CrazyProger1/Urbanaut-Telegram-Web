import { User } from "@/types/users";

export type Topic = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  is_closed: boolean;
};
export type Post = {
  id: number;
  title: string;
  topic: Topic;
  created_by?: User;
  created_at: string;
  updated_at: string;
  published_at: string;
  content?: string;
  has_delete_permission: boolean;
  has_change_permission: boolean;
};
