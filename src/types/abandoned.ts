import {
  Rating,
  Location,
  Difficulty,
  Preservation,
  Security,
} from "@/types/common";

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
  location?: Location;
  photo?: string;
  photos?: AbandonedObjectPhoto[];
  security_level: Security;
  preservation_level: Preservation;
  difficulty_level: Difficulty;
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
