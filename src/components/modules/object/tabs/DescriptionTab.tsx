import React from "react";
import { AbandonedObject } from "@/types/objects";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  object: AbandonedObject;
}

const DescriptionTab = ({ object }: Props) => {
  return (
    <div className="text-text font-primary w-full prose prose-strong:font-primary prose-h1:text-md-h1 prose-h2:text-md-h2 prose-h3:text-md-h3 prose-h4:text-md-h4 prose-h3:font-primary prose-hr:border-text max-w-full prose-strong:text-text prose-li:text-text">
      <MDXRemote source={object.description as string} />
    </div>
  );
};

export default DescriptionTab;
