export type Notification = {
  id: number;
  title: string;
  message: string;
  shown_at: Date;
  icon: string;
  is_read?: boolean;
};
