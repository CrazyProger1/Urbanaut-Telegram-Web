import React from "react";
import { Notification } from "@/types/notifications";
import Image from "next/image";
import { formatTime } from "@/utils/date";
import { NOTIFICATION_ICONS } from "@/constants/media";

interface Props {
  notification: Notification;
}

const NotificationItem = ({ notification }: Props) => {
  return (
    <div className="bg-foreground flex flex-row rounded-2xl p-4 shadow-volume-frame relative">
      <Image
        src={
          NOTIFICATION_ICONS[
            notification.icon as keyof typeof NOTIFICATION_ICONS
          ] || NOTIFICATION_ICONS.NOTIFICATION
        }
        alt="notification-icon"
        className="aspect-square size-12"
        width={32}
        height={32}
      />
      <div className="ml-4" />
      <div className="flex flex-col font-primary text-text relative">
        <div className="flex flex-row">
          <div className="font-bold">{notification.title}</div>
          {!notification.is_read && (
            <span className="mt-1 ml-1 h-2 w-2 rounded-full bg-red-500" />
          )}
        </div>

        <div className="text-sm">{notification.message}</div>
      </div>
      <div className="ml-auto flex items-center">
        <div className="flex flex-col text-text text-sm items-center justify-center">
          {formatTime(new Date(notification.show_at))}
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
