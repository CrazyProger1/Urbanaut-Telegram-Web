import React from "react";

import { notFound } from "next/navigation";
import { getBlogPost } from "@/services/api/blog";
import {
  PostContentBlock,
  PostAboutBlock,
} from "@/components/modules/blog/blocks";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: number }>;
}

const Page = async ({ params }: Props) => {
  const response = await getBlogPost((await params).id);
  if (!response.success) return notFound();

  return (
    <div className="flex flex-col gap-4 px-4">
      <PostAboutBlock post={response} />
      <PostContentBlock post={response} />
    </div>
  );
};

export default Page;
