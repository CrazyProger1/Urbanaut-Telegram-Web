import { AbandonedObject } from "../../types/objects.ts";
import { FC } from "react";
import ObjectItem from "../items/ObjectItem.tsx";

interface EventsTableProps {
    objects: AbandonedObject[];
}

const EventsTable: FC<EventsTableProps> = ({ objects }) => {
    return (
        <div>
            {objects.map((obj) => (
                <div className="mt-4 mb-4">
                    <ObjectItem key={obj.name} obj={obj} />
                </div>
            ))}
        </div>
    );
};

export default EventsTable;
