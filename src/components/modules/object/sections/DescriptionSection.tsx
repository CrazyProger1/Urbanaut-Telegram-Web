import React from "react";
import { AbandonedObject } from "@/types/objects";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  object: AbandonedObject;
}

const DescriptionSection = ({ object }: Props) => {
  return (
    <div className="text-text font-primary w-full prose prose-strong:font-primary prose-h1:text-text prose-h3:text-text prose-h3:font-primary prose-hr:border-text max-w-full prose-strong:text-text">
      <h3 className="font-primary text-text text-center">Description</h3>
      <MDXRemote source={object.description as string} />
    </div>
  );
};

export default DescriptionSection;
