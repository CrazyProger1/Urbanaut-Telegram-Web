import { cookies } from "next/headers";
import { Session } from "@/telegram/types/session";

export const setSession = async (session: Session) => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "initData",
    value: session.initData,
    httpOnly: true,
    maxAge: 3600,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  cookieStore.set({
    name: "userData",
    value: JSON.stringify(session.user),
    httpOnly: true,
    maxAge: 3600,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
};

export const getSession = async (): Promise<Session | null> => {
  const cookieStore = await cookies();
  const initData = cookieStore.get("initData");
  const userData = cookieStore.get("userData");
  if (!userData || !initData) return null;
  return {
    initData: initData.value,
    user: JSON.parse(userData.value),
  };
};
