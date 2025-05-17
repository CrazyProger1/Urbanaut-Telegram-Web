import { User as TelegramUser } from "@telegram-apps/types";
import { Theme } from "@/types/common";
import { Locale } from "@/i18n/routing";

export type RankKey = "NEWBIE" | "PROFESSIONAL" | "STALKER" | "LEGEND";

export type Document = {
  code: string;
};

export type Rank = {
  id: number;
  key: RankKey;
  name: string;
};
export type Settings = {
  language?: Locale;
  is_animations_enabled?: boolean;
  is_notifications_enabled?: boolean;
  is_newsletters_enabled?: boolean;
  theme?: Theme;
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
  document?: Document;
  is_friend?: boolean;
  friends_count?: number;
};

export type SessionUser = User & TelegramUser;

export type Session = {
  initData: string;
  user: SessionUser;
};

export type UserFilters = {
  ordering?: string;
};
