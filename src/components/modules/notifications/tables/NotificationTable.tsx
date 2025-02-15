import React from "react";
import NotificationItem from "./NotificationItem";
import { Notification } from "@/types/notifications";

interface Props {
  notifications: Notification[];
}

const NotificationTable = ({ notifications }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      {notifications.map((obj) => (
        <NotificationItem key={obj.id} notification={obj} />
      ))}
    </div>
  );
};

export default NotificationTable;
