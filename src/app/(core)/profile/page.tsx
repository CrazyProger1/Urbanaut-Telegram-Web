import React from "react";
import {
  AboutSection,
  AvatarSection,
  HeadSection,
} from "@/components/modules/profile/sections";

const Profile = () => {
  return (
    <>
      <HeadSection />
      <div className="mt-16" />
      <AvatarSection />
      <div className="mt-4" />
      <AboutSection />
      <div className="mt-4" />
    </>
  );
};
export default Profile;
