import { User } from "@/types/users";

export type BlogPost = {
  id: number;
  title: string;
  topics: BlogTopic[];
  summary?: string;
  created_by?: User;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  content: string;
  has_delete_permission?: boolean;
  has_change_permission?: boolean;
  photo?: string;
  views?: number;
};

export type BlogTopic = {
  id: number;
  name: string;
  description: string;
  is_closed: boolean;
};
