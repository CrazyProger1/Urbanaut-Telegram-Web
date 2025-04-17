"use client";
import React, { useEffect } from "react";
import { retrieveRawInitData } from "@telegram-apps/sdk-react";
import { BASE_URL } from "@/config/base";
import useAccountStore from "@/stores/accounts";
import { SessionUser } from "@/types/users";

const TMAAuth = () => {
  const { setUser } = useAccountStore();
  useEffect(() => {
    try {
      const initData = retrieveRawInitData();
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
    } catch (e) {
      console.error("Failed to retrieve init data. Check your environment");
    }
  }, [setUser]);
  return <></>;
};

export default TMAAuth;
