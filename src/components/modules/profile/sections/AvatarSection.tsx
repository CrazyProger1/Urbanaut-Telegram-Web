import React from "react";
import { STUBS } from "@/constants/media";
import { User } from "@/types/users";

interface Props {
  user: User;
}

const AvatarSection = async ({ user }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <img
        src={user.avatar || STUBS.user}
        alt=""
        className="size-52 shadow-rank-frame-legend rounded-2xl"
      />
      <div className="mt-4" />
      <div className="font-primary font-bold text-text text-xl text-center">
        @{user.username || "username"}
      </div>
    </div>
  );
};

export default AvatarSection;
