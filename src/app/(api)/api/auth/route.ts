import { NextRequest, NextResponse } from "next/server";
import { validate } from "@telegram-apps/init-data-node";
import { TELEGRAM_BOT_TOKEN } from "@/config/telegram";

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

    const response = NextResponse.json({ user });
    response.cookies.set("initData", initData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600,
    });

    return response;
  } catch (error) {
    console.error("Validation error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 },
    );
  }
}
