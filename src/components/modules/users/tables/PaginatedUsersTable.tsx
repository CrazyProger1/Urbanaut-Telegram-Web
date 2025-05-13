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
import ObjectItem from "@/components/modules/objects/tables/ObjectItem";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  filters?: UserFilters & PaginationParams;
}

const PaginatedUsersTable = ({ filters }: Props) => {
  const t = useTranslations("PaginatedUsersTable");
  const { items, fetchData, isLoading, hasMore, refresh } = usePaginate(
    getUsers,
    filters,
  );
  return (
    <InfiniteScroll
      className="flex flex-col gap-4 px-4 overflow-hidden"
      dataLength={items.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<div className="text-center">Loading...</div>}
      endMessage={
        !isLoading && <p className="text-center">{t("far_scroll")}</p>
      }
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={<h3 className="text-center">&#8595;</h3>}
      releaseToRefreshContent={<h3 className="text-center">&#8593;</h3>}
    >
      {items.map((item, index) => (
        <div key={item.id} className={index === 0 ? "-mt-4" : ""}>
          <UserItem user={item} />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default PaginatedUsersTable;
