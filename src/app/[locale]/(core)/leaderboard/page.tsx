import React from "react";
import { UserFilters } from "@/types/users";
import { LeaderboardNavigationBar } from "@/components/modules/users/bars";
import { PaginationParams } from "@/types/api";
import { PaginatedUsersTable } from "@/components/modules/users/tables";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<UserFilters & PaginationParams>;
}
const Page = async ({ searchParams }: Props) => {
  const filters = await searchParams;
  return (
    <div className="flex flex-col gap-4">
      <div className="px-4">
        <LeaderboardNavigationBar filters={filters} />
      </div>

      <PaginatedUsersTable filters={filters} />
    </div>
  );
};

export default Page;
