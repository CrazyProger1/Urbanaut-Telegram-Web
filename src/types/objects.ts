import { AbandonedArea } from "@/types/areas";

export type AbandonedObject = {
  id: number;
  area: number | AbandonedArea;
  name: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  built_at?: Date;
  abandoned_at?: Date;
  creator?: number;
  location?: number;
};
