import React from "react";
import { Notification } from "@/types/notifications";
import Image from "next/image";
import { formatTime } from "@/utils/date";

interface Props {
  notification: Notification;
}

const NotificationItem = ({ notification }: Props) => {
  return (
    <div className="bg-foreground flex flex-row rounded-2xl p-4 shadow-volume-frame">
      <Image
        src={notification.icon}
        alt="notification-icon"
        className="aspect-square size-12"
        width={32}
        height={32}
      />
      <div className="ml-4" />
      <div className="flex flex-col font-primary text-text">
        <div className="font-bold">{notification.title}</div>
        <div className="text-sm">{notification.message}</div>
      </div>
      <div className="ml-auto flex items-center">
        <div className="flex flex-col text-text text-sm items-center justify-center">
          {formatTime(notification.date)}
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
