import { BlogPost } from "@/types/blog";
import React from "react";
import UserItem from "@/components/modules/users/tables/UserItem";
import { Link } from "@/i18n/routing";
import { PAGES } from "@/config/pages";
import { UserAvatar } from "@/components/modules/users";
import { HorizontalDivider } from "@/components/common/dividers";

interface Props {
  post: BlogPost;
}

const PostAuthorExpand = ({ post }: Props) => {
  const user = post.created_by;

  if (!user) {
    return "unknown";
  }
  return (
    <div className="flex flex-col">
      <HorizontalDivider />
      <div className="p-2 flex flex-row items-center">
        <Link href={PAGES.OTHERS_PROFILE.replace(":id", String(user.id))}>
          <UserAvatar user={user} />
        </Link>
        <div className="pl-2">
          <h1 className=" font-bold font-primary">
            @{user?.nickname || user?.username || "username"}
          </h1>
          <p className="text-text font-primary text-sm">
            {user?.rank.name || "newbie"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostAuthorExpand;
