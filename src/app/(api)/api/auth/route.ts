import { NextRequest, NextResponse } from "next/server";
import { validate } from "@telegram-apps/init-data-node";
import { TELEGRAM_BOT_TOKEN } from "@/config/telegram";
import { setSession } from "@/telegram/utils/auth";
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

    const user = JSON.parse(userRaw);

    await setSession({ initData: initData, user: user });

    const apiUser = getUser(user.id);
    if (!apiUser) {
      return NextResponse.json(
        { error: "Failed to get user from API" },
        { status: 400 },
      );
    }
    const mergedUser = { ...user, ...apiUser };

    await setSession({ initData: initData, user: mergedUser });

    return NextResponse.json({ user: mergedUser });
  } catch (error) {
    console.error("Validation error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 },
    );
  }
}
