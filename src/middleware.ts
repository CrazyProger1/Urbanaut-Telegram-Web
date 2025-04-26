import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  response.headers.set("pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ["/", "/(uk|en)/:path*"],
};
