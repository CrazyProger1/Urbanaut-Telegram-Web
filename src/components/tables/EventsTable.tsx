import { AbandonedObject } from "../../types/objects.ts";
import { FC } from "react";
import ObjectItem from "../items/ObjectItem.tsx";

interface EventsTableProps {
    objects: AbandonedObject[];
}

const EventsTable: FC<EventsTableProps> = ({ objects }) => {
    return (
        <div>
        </div>
    );
};

export default EventsTable;
