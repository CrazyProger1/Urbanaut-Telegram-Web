"use client";
import React from "react";
import { User } from "@/types/users";
import UserItem from "./UserItem";
import { useTranslations } from "next-intl";
import { usePaginate } from "@/hooks/api";
import { UserFilters } from "@/types/users";
import { PaginationParams } from "@/types/api";
import { getUsers } from "@/services/api/users";
import { Loader } from "@/components/common/loaders";

interface Props {
  filters?: UserFilters & PaginationParams;
}

const PaginatedUsersTable = ({ filters }: Props) => {
  const t = useTranslations("PaginatedUsersTable");
  const {
    objects: users,
    isLoading,
    hasMore,
    triggerRef,
  } = usePaginate<UserFilters & PaginationParams, User>(getUsers, filters);
  return (
    <div className="flex flex-col gap-4">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
      <div ref={triggerRef} className="flex justify-center">
        {isLoading && <Loader />}
        {!hasMore && users.length > 0 && (
          <p className="text-center">{t("far_scroll")}</p>
        )}
      </div>
    </div>
  );
};

export default PaginatedUsersTable;
