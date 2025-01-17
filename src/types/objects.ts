import { AbandonedArea } from "@/types/areas";
import { DIFFICULTY_LEVELS } from "@/constants/levels";
import { Rating } from "@/types/common";
import { AbandonedObjectCategory } from "@/types/categories";

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
  difficulty_level: (typeof DIFFICULTY_LEVELS)[number];
};

export type AbandonedObjectFilters = {
  difficulty_level?: (typeof DIFFICULTY_LEVELS)[number];
  query?: string;
  rating?: Rating;
  nearest?: boolean;
  max_distance?: number;
  point?: string;
  ordering?: string;
};
