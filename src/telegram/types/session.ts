import { User as TelegramUser } from "@telegram-apps/types";
import { User as InternalUser } from "@/types/users";

export type SessionUser = InternalUser & TelegramUser;

export type Session = {
  initData: string;
  user: SessionUser;
};
