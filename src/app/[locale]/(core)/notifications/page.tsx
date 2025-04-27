import React from "react";
import { NotificationsTable } from "@/components/modules/notifications/tables";
import { getNotifications } from "@/services/api/notifications";
import { Notification } from "@/types/notifications";

// TODO: find better solution for next-intl. Next.js thought it's SSG bc of generateStaticParams at layout
export const dynamic = "force-dynamic";

const NotificationsPage = async () => {
  const response = await getNotifications();
  let notifications: Notification[] = [];
  if (response.success) notifications = response.results;
  return (
    <div className="px-4">
      <NotificationsTable notifications={notifications} />
    </div>
  );
};

export default NotificationsPage;
