import { AbandonedArea } from "@/types/areas";

export type AbandonedObjectPhoto = {
  src: string;
};
export type AbandonedObject = {
  id: number;
  area: number | AbandonedArea;
  name: string;
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
