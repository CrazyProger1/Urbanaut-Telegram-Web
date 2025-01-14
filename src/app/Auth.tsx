"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LINKS } from "@/constants/nav";
import { useInitData } from "@/hooks/client/telegram";

const Auth = () => {
  const { initDataRaw } = useInitData();
  const router = useRouter();

  useEffect(() => {
    document.cookie = `initDataRaw=${initDataRaw}; path=/; max-age=3600`;
    router.push(LINKS.objects);
  }, []);

  return <div>Saving initData...</div>;
};

export default Auth;
