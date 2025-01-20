"use client";

import React from "react";
import { STUBS } from "@/constants/media";
import { useAccountStore } from "@/stores";

const AvatarSection = () => {
  const { initData } = useAccountStore();
  return (
    <div className="flex flex-col items-center w-full">
      <img
        src={initData?.user?.photoUrl || STUBS.user}
        alt=""
        className="size-52 shadow-rank-frame-legend rounded-2xl"
      />
      <div className="mt-4" />
      <div className="font-primary font-bold text-text text-xl text-center">
        @username
      </div>
    </div>
  );
};

export default AvatarSection;
