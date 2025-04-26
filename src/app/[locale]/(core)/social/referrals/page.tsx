import React from "react";
import { NavigationBar } from "@/components/modules/social/bars";
import { getReferrals } from "@/services/api/referrals";
import { User } from "@/types/users";
import { UserTable } from "@/components/modules/users/tables";

// TODO: find better solution for next-intl. Next.js thought it's SSG bc of generateStaticParams at layout
export const dynamic = "force-dynamic";

const ReferralsPage = async () => {
  const response = await getReferrals();
  let referrals: User[] = [];
  if (response.success) referrals = response.results;

  return (
    <div className="px-4">
      <NavigationBar />
      <UserTable users={referrals} />
    </div>
  );
};

export default ReferralsPage;
