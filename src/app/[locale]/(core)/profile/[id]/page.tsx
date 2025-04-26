import React from "react";
import { UserAvatar } from "@/components/modules/users";
import { UserAboutBlock } from "@/components/modules/users/blocks";
import { getUser } from "@/services/api/users";
import NotFound from "@/app/[locale]/not-found";

interface Props {
  params: Promise<{ id: number }>;
}
const ProfilePage = async ({ params }: Props) => {
  const response = await getUser((await params).id);

  if (!response.success) {
    NotFound();
  }
  return (
    <div className="flex flex-col gap-8 items-center px-4 mt-4">
      <UserAvatar user={response} size="6xl" />
      <UserAboutBlock user={response} />
    </div>
  );
};

export default ProfilePage;
