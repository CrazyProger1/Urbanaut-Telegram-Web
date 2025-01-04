import React from 'react';
import {getObjects} from "@/services/objects";
import {AbandonedObject} from "@/types/objects";
import {ObjectTable} from "@/components/modules/object/tables";

const TableSection = async () => {
    const objectsResponse = await getObjects();

    let objects: AbandonedObject[] = [];

    if (objectsResponse.success) objects = objectsResponse.results;
    return (
        <ObjectTable objects={objects} />
    );
};

export default TableSection;