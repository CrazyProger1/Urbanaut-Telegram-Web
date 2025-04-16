"use client";
import React, { useEffect } from "react";
import { retrieveRawInitData } from "@telegram-apps/sdk-react";
import { BASE_URL } from "@/config/base";

const TMAAuth = () => {
  useEffect(() => {
    try {
      const initData = retrieveRawInitData();
      fetch(`${BASE_URL}/api/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ initData: initData }),
      });
    } catch (e) {
      console.error("Failed to retrieve init data. Check your environment");
    }
  }, []);
  return <></>;
};

export default TMAAuth;
