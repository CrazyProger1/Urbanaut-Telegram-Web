import { User as TelegramUser } from "@telegram-apps/types";

export type Rank = "NEWBIE" | "PROFESSIONAL" | "STALKER" | "LEGEND";

export type Language = "uk" | "en";

export type Theme = "DARK" | "LIGHT";

export type Settings = {
  language: Language;
  is_animations_enabled: boolean;
  is_notifications_enabled: boolean;
  is_newsletters_enabled: boolean;
  theme: Theme;
};

export type User = {
  id: number;
  username?: string;
  nickname?: string;
  rank: Rank;
  avatar?: string;
  experience: number;
  karma: number;
  settings: Settings;
};

export type SessionUser = User & TelegramUser;

export type Session = {
  initData: string;
  user: SessionUser;
};
