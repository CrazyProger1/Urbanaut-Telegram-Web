import { Rating } from "@/types/common";

export type AbandonedObjectCategory = {
  id: number;
  name: string;
  children?: AbandonedObjectCategory[];
};

export type AbandonedObjectPhoto = {
  src: string;
};

export type AbandonedObject = {
  id: number;
  area: number | AbandonedArea;
  name: string;
  categories?: AbandonedObjectCategory[];
  rating?: Rating;
  short_description: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  built_at?: Date;
  abandoned_at?: Date;
  creator?: number;
  location?: number;
  photo?: string;
  photos?: AbandonedObjectPhoto[];
  security_level: string;
  preservation_level: string;
  difficulty_level: string;
};

export type AbandonedObjectFilters = {
  difficulty_level?: string;
  query?: string;
  rating?: Rating;
  nearest?: boolean;
  max_distance?: number;
  point?: string;
  ordering?: string;
};
export type AbandonedArea = {
  id: number;
};
