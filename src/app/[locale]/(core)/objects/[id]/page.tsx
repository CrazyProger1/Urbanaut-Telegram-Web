import React from "react";
import { getAbandonedObject } from "@/services/api/objects";
import { notFound } from "next/navigation";
import {
  ObjectAboutBlock,
  ObjectDescriptionBlock,
} from "@/components/modules/objects/blocks";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: number }>;
}

const ObjectPage = async ({ params }: Props) => {
  const response = await getAbandonedObject((await params).id);
  if (!response.success) return notFound();
  return (
    <div className="px-4 flex flex-col gap-4">
      <ObjectAboutBlock object={response} />
      <ObjectDescriptionBlock object={response} />
    </div>
  );
};

export default ObjectPage;
