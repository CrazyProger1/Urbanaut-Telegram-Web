import React from "react";
import { NotificationTable } from "@/components/modules/notifications/tables";
import { Notification } from "@/types/notifications";
import { ICONS } from "@/constants/media";

const TableSection = () => {
  const notifications: Notification[] = [
    {
      id: 1,
      title: "Info",
      message: "Some important info",
      date: new Date(),
      icon: ICONS.info,
    },
    {
      id: 2,
      title: "Warning",
      message: "Some important warning",
      date: new Date(),
      icon: ICONS.warning,
    },
    {
      id: 3,
      title: "Cancel",
      message: "Some important cancel",
      date: new Date(),
      icon: ICONS.cancel,
    },
  ];
  return (
    <>
      <NotificationTable notifications={notifications} />
    </>
  );
};

export default TableSection;
