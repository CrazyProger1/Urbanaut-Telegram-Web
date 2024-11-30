import React from "react";
import { ObjectItem } from "@/components/items";
import { AbandonedObject } from "@/types/objects";

const ObjectTable = () => {
  const objects: AbandonedObject[] = [
    {
      id: 2,
      area: 1,
      name: "Test Building",
      description:
        "Lorem ipsum description. Lorem ipsum description. Lorem ipsum description. Lorem ipsum description. Lorem ipsum description.",
      created_at: new Date(),
    },
    {
      id: 3,
      area: 1,
      name: "Abandoned School",
      description:
        "Lorem ipsum description. Lorem ipsum description. Lorem ipsum description. Lorem ipsum description. Lorem ipsum description.",
      created_at: new Date(),
    },
    {
      id: 4,
      area: 1,
      name: "Abandoned Factory",
      description:
        "Lorem ipsum description. Lorem ipsum description. Lorem ipsum description. Lorem ipsum description. Lorem ipsum description.",
      created_at: new Date(),
    },
    {
      id: 5,
      area: 1,
      name: "Chernobyl Exclusion Zone",
      description:
        "Lorem ipsum description. Lorem ipsum description. Lorem ipsum description. Lorem ipsum description. Lorem ipsum description.",
      created_at: new Date(),
    },
    {
      id: 6,
      area: 1,
      name: "Cave",
      description:
        "Lorem ipsum description. Lorem ipsum description. Lorem ipsum description. Lorem ipsum description. Lorem ipsum description.",
      created_at: new Date(),
    },
  ];
  return (
    <>
      {objects.map((obj) => (
        <ObjectItem key={obj.id} object={obj} />
      ))}
    </>
  );
};

export default ObjectTable;
