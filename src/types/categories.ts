export type AbandonedObjectCategory = {
  id: number;
  name: string;
  children?: AbandonedObjectCategory[];
};
