"use client";

import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LINKS } from "@/constants/nav";

const Auth = () => {
  const params = useLaunchParams();
  const initDataRaw = params.initDataRaw;
  const router = useRouter();

  console.log(initDataRaw);

  const saveInitData = async () => {
    const response = await fetch("/api/v1/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ initData: initDataRaw }),
    });

    const data = await response.json();
    console.log(data.message);
  };

  useEffect(() => {
    saveInitData().then(() => {
      router.push(LINKS.objects);
    });
  }, []);

  return <div>Saving initData...</div>;
};

export default Auth;
