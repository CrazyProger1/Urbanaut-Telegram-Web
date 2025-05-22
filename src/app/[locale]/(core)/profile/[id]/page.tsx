import React from "react";
import { UserAvatar } from "@/components/modules/users";
import { UserAboutBlock } from "@/components/modules/users/blocks";
import { getUser } from "@/services/api/users";
import { notFound } from "next/navigation";
import { getSession } from "@/helpers/auth";
import { PAGES } from "@/config/pages";
import { redirect } from "@/i18n/routing";
import { getLocale } from "next-intl/server";

interface Props {
  params: Promise<{ id: number }>;
}
const ProfilePage = async ({ params }: Props) => {
  const response = await getUser((await params).id);
  const session = await getSession();
  const locale = await getLocale();
  if (!response.success) {
    notFound();
  }

  if (session?.user.id === response.id) {
    redirect({
      href: PAGES.PROFILE,
      locale: locale,
    });
  }
  return (
    <div className="flex flex-col gap-8 items-center px-4 mt-4">
      <UserAvatar user={response} size="6xl" />
      <UserAboutBlock user={response} />
    </div>
  );
};

export default ProfilePage;
