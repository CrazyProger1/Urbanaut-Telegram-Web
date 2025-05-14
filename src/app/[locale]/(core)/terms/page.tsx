import React from "react";
import { TermsBlock } from "@/components/modules/terms/blocks";
import { getCurrentTerms } from "@/services/api/terms";

export const dynamic = "force-dynamic";

const Page = async () => {
  const response = await getCurrentTerms();

  if (!response.success) return null;

  return (
    <div className="flex flex-col gap-4 px-4">
      <TermsBlock terms={response} />
    </div>
  );
};

export default Page;
