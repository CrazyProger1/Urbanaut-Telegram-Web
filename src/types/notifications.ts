export type Notification = {
  id: number;
  title: string;
  message: string;
  show_at: Date;
  icon: string;
  is_read?: boolean;
};
