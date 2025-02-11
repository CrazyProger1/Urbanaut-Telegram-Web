import React from "react";
import {
  AboutSection,
  AvatarSection,
  HeadSection,
} from "@/components/modules/profile/sections";
import { User } from "@/types/users";
import { getInitDataCookie } from "@/telegram/utils/server";

const Profile = async () => {
  const { initData } = await getInitDataCookie();

  const user: User = {
    id: initData?.user?.id || 0,
    username: initData?.user?.username || "username",
    rank: "LEGEND",
    avatar: initData?.user?.photoUrl || "",
  };
  return (
    <>
      <HeadSection />
      <div className="mt-16" />
      <AvatarSection user={user} />
      <div className="mt-4" />
      <AboutSection user={user} />
      {/*<div className="mt-4" />*/}
    </>
  );
};
export default Profile;
