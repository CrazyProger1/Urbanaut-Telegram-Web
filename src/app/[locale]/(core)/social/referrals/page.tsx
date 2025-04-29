import React from "react";
import { SocialNavigationBar } from "@/components/modules/social/bars";
import { getReferralLinks, getReferrals } from "@/services/api/referrals";
import { User } from "@/types/users";
import { UsersTable } from "@/components/modules/users/tables";
import { ReferralBar } from "@/components/modules/referrals/bars";
import { ReferralLink } from "@/types/referrals";

// TODO: find better solution for next-intl. Next.js thought it's SSG bc of generateStaticParams at layout
export const dynamic = "force-dynamic";

const ReferralsPage = async () => {
  const referralsResponse = await getReferrals();
  let referrals: User[] = [];
  if (referralsResponse.success) referrals = referralsResponse.results;

  const linksResponse = await getReferralLinks();
  let links: ReferralLink[] = [];
  if (linksResponse.success) links = linksResponse.results;

  return (
    <div className="px-4 flex flex-col gap-4">
      <SocialNavigationBar />
      <ReferralBar links={links} />
      <UsersTable users={referrals} />
    </div>
  );
};

export default ReferralsPage;
