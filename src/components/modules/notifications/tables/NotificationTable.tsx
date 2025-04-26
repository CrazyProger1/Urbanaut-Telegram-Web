import React from "react";
import { Notification } from "@/types/notifications";
import NotificationItem from "./NotificationItem";

interface Props {
  notifications: Notification[];
}
const NotificationTable = ({ notifications }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationTable;
