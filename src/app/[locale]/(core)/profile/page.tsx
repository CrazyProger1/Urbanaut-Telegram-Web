import React from "react";
import {
  AboutSection,
  AvatarSection,
  HeadSection,
} from "@/components/modules/profile/sections";
import { User } from "@/types/users";
import { getInitDataCookie } from "@/telegram/utils/server";

const Profile = () => {
  const { initData } = getInitDataCookie();
  const user: User = {
    id: initData?.user?.id,
    username: initData?.user?.username,
    rank: "LEGEND",
    avatar: initData?.user?.photoUrl,
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
