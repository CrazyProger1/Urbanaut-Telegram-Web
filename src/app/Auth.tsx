"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LINKS } from "@/constants/nav";
import { useInitData } from "@/hooks/client/telegram";

const Auth = () => {
  const initData = useInitData();
  const router = useRouter();

  const saveInitData = async () => {
    const response = await fetch("/api/v1/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(initData),
    });

    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    saveInitData().then(() => {
      router.push(LINKS.objects);
    });
  }, []);

  return <div>Saving initData...</div>;
};

export default Auth;
