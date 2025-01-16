import React from "react";
import { AbandonedObject } from "@/types/objects";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  object: AbandonedObject;
}

const DescriptionTab = ({ object }: Props) => {
  return (
    <div
      className="
      text-text font-primary w-full prose prose-strong:font-primary
      prose-h1:text-mdx-h1 prose-h1:text-xl
      prose-h2:text-mdx-h2 prose-h2:text-lg
      prose-h3:text-mdx-h3 prose-h3:text-md
      prose-h4:text-mdx-h4 prose-h4:text-sm
      prose-h3:font-primary prose-hr:border-text
      max-w-full prose-strong:text-text prose-ul:text-mdx-ul prose-ol:text-mdx-ol
      prose-a:text-mdx-a"
    >
      <MDXRemote source={object.description as string} />
    </div>
  );
};

export default DescriptionTab;
