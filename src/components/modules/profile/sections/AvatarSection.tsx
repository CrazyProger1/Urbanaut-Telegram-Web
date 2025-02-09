import React from "react";
import { STUBS } from "@/constants/media";
import { getInitDataCookie } from "@/telegram/utils/server";

const AvatarSection = async () => {
  const { initData } = await getInitDataCookie();
  return (
    <div className="flex flex-col items-center w-full">
      <img
        src={initData?.user?.photoUrl || STUBS.user}
        alt=""
        className="size-52 shadow-rank-frame-legend rounded-2xl"
      />
      <div className="mt-4" />
      <div className="font-primary font-bold text-text text-xl text-center">
        @{initData?.user?.username || "username"}
      </div>
    </div>
  );
};

export default AvatarSection;
