import React from "react";
import {
  AboutSection,
  AvatarSection,
} from "@/components/modules/profile/sections";
import { getUser } from "@/services/users";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: number }>;
};

const Profile = async ({ params }: Props) => {
  const response = await getUser(Number((await params).id));

  if (!response.success) notFound();
  return (
    <>
      <AvatarSection user={response} />
      <div className="mt-4" />
      <AboutSection user={response} />
    </>
  );
};
export default Profile;
