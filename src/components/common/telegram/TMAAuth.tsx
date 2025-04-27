"use client";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import React, { useEffect } from "react";
import {
  retrieveRawInitData,
  retrieveLaunchParams,
} from "@telegram-apps/sdk-react";
import { BASE_URL } from "@/config/base";
import useAccountStore from "@/stores/accounts";
import { SessionUser } from "@/types/users";
import { INITDATA_FALLBACK } from "@/config/telegram";

const TMAAuth = () => {
  const { setUser } = useAccountStore();

  useEffect(() => {
    let initData = undefined;
    try {
      initData = retrieveRawInitData();
      const launchParams = retrieveLaunchParams();
      console.log(launchParams);
    } catch (e) {
      console.error("Failed to retrieve init data. Check your environment");
      initData = INITDATA_FALLBACK;
    }

    fetch(`${BASE_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ initData: initData }),
    }).then((response) =>
      response.json().then((data) => {
        const user: SessionUser = data.user;
        setUser(user);
      }),
    );
  }, [setUser]);
  return <></>;
};

export default TMAAuth;
