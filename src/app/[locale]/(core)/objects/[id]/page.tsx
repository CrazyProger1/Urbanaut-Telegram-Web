import React from "react";
import { getAbandonedObject } from "@/services/api/objects";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: number }>;
}

const ObjectPage = async ({ params }: Props) => {
  const response = await getAbandonedObject((await params).id);
  if (!response.success) return notFound();
  return <div></div>;
};

export default ObjectPage;
