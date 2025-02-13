import React from "react";
import { TableSection } from "@/components/modules/notifications/sections";
import { BackButtonWrapper } from "@/telegram/components";
import { Notification } from "@/types/notifications";
import { getNotifications } from "@/services/notifications";

const NotificationsPage = async () => {
  let notifications: Notification[] = [];
  const response = await getNotifications();
  if (response.success) notifications = response.results;
  return (
    <BackButtonWrapper>
      <TableSection notifications={notifications} />
    </BackButtonWrapper>
  );
};

export default NotificationsPage;
