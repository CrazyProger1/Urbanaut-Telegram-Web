import React from "react";
import { NotificationTable } from "@/components/modules/notifications/tables";
import { Notification } from "@/types/notifications";

interface Props {
  notifications: Notification[];
}

const TableSection = ({ notifications }: Props) => {
  return (
    <>
      <NotificationTable notifications={notifications} />
    </>
  );
};

export default TableSection;
