import { getLocale } from "next-intl/server";
import { API_URL } from "@/config/api";
import { getSession } from "@/helpers/auth";

export const fetchExtended = async (
  path: string,
  options: RequestInit = {},
): Promise<Response> => {
  const session = await getSession();
  const locale = await getLocale();

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "Accept-Language": locale || "en",
    ...(session && {
      Authorization: `tma ${encodeURIComponent(session.initData)}`,
    }),
    ...(options.headers || {}),
  };

  return await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });
};
