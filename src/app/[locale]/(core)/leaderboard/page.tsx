import React from "react";
import { getUsers } from "@/services/api/users";
import { UsersTable } from "@/components/modules/users/tables";
import { UserFilters, User } from "@/types/users";
import { LeaderboardNavigationBar } from "@/components/modules/users/bars";
import { PaginationParams } from "@/types/api";

interface Props {
  searchParams: Promise<UserFilters & PaginationParams>;
}
const Page = async ({ searchParams }: Props) => {
  const filters = await searchParams;
  const response = await getUsers(filters);
  let users: User[] = [];
  if (response.success) users = response.results;

  return (
    <div className="px-4 flex flex-col gap-4">
      <LeaderboardNavigationBar filters={filters} />
      <UsersTable users={users} />
    </div>
  );
};

export default Page;
