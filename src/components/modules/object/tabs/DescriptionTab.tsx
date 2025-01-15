import React from "react";
import { AbandonedObject } from "@/types/objects";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  object: AbandonedObject;
}

const DescriptionTab = ({ object }: Props) => {
  return (
    <div className="text-text font-primary w-full prose prose-strong:font-primary prose-h1:text-text prose-h3:text-text prose-h3:font-primary prose-hr:border-text max-w-full prose-strong:text-text">
      <MDXRemote source={object.description as string} />
    </div>
  );
};

export default DescriptionTab;
