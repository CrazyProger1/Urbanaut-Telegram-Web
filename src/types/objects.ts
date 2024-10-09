export type TObject = {
  id: number;
  area: number;
  name: string;
  description: string;
  security_level: string;
  preservation_level: string;
  difficulty_level: string;
  created_at: Date;
  updated_at: Date;
  built_at?: Date;
  abandoned_at?: Date;
  creator: number;
  location: number;
};
