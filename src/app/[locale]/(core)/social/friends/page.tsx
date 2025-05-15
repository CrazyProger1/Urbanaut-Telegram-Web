import React from "react";
import { SocialNavigationBar } from "@/components/modules/social/bars";
import { PaginatedFriendsTable } from "@/components/modules/friends/tables";
import { PaginationParams } from "@/types/api";

interface Props {
  searchParams: Promise<PaginationParams>;
}
const FriendsPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  return (
    <div className="flex flex-col gap-4">
      <div className="px-4">
        <SocialNavigationBar />
      </div>
      <PaginatedFriendsTable params={params} />
    </div>
  );
};

export default FriendsPage;
