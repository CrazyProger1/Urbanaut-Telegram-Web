"use client";

import React, { useState, useEffect } from "react";
import { useAccountStore } from "@/stores";
import { parseInitData } from "@telegram-apps/sdk";
import { z } from "zod";
import { useRouter } from "@/i18n/routing";
import { LINKS } from "@/constants/nav";
import { getInitDataCookie, setInitDataCookie } from "@/telegram/utils/client";

const inputSchema = z.string().min(1, "Init data cannot be empty");

const Page = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { initDataRaw } = getInitDataCookie();
    if (initDataRaw) {
      try {
        const parsedData = parseInitData(initDataRaw);
        document.cookie = `initData=${JSON.stringify(parsedData)}; path=/; max-age=3600`;
        router.push(LINKS.objects);
      } catch {
        setError("Invalid init data in cookies.");
      }
    }
  }, [router]);

  const handleSubmit = () => {
    try {
      inputSchema.parse(value);
      const parsedData = parseInitData(value);
      setInitDataCookie(parsedData, value);

      setError(null);
      router.push(LINKS.objects);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError("Invalid init data format.");
      }
    }
  };

  return (
    <div className="flex-grow flex-col flex items-center justify-center">
      <textarea
        rows={10}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-full resize-none rounded-2xl"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        className="w-full p-4 bg-foreground text-lg text-text font-primary font-bold mt-4 rounded-2xl"
        onClick={handleSubmit}
      >
        Ok
      </button>
    </div>
  );
};

export default Page;
