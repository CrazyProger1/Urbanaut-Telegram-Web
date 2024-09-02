import { AbandonedObject } from "../../types/objects.ts";
import { FC } from "react";

interface EventsTableProps {
  objects: AbandonedObject[];
}

const EventsTable: FC<EventsTableProps> = ({ objects }) => {
  return <div>{objects[0].name}</div>;
};

export default EventsTable;
