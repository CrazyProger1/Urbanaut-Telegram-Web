import { NextRequest, NextResponse } from "next/server";
import { validate } from "@telegram-apps/init-data-node";
import {
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_INITDATA_LIFETIME_SECONDS,
} from "@/config/telegram";
import { setSession } from "@/helpers/auth";
import { getUser } from "@/services/users";

export async function POST(request: NextRequest) {
  try {
    const { initData } = await request.json();
    if (!initData) {
      return NextResponse.json(
        { error: "No initData provided" },
        { status: 400 },
      );
    }

    validate(initData, TELEGRAM_BOT_TOKEN!, { expiresIn: 3600 });

    const params = new URLSearchParams(initData);
    const userRaw = params.get("user");
    if (!userRaw) {
      return NextResponse.json({ error: "Invalid initData" }, { status: 400 });
    }

    const telegramUser = JSON.parse(userRaw);

    await setSession({ initData: initData, user: telegramUser });

    const { success, ...apiUser } = await getUser(telegramUser.id);
    if (!success) {
      return NextResponse.json(
        { error: "Failed to get user from API" },
        { status: 400 },
      );
    }
    const mergedUser = { ...apiUser, ...telegramUser };

    await setSession(
      { initData: initData, user: mergedUser },
      TELEGRAM_INITDATA_LIFETIME_SECONDS,
    );

    return NextResponse.json({ user: mergedUser });
  } catch (error) {
    console.error("Validation error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 },
    );
  }
}
