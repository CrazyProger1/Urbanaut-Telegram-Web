import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  source: string;
}
const MDXRender = ({ source }: Props) => {
  return (
    <div
      className="
      p-2 text-text font-primary w-full prose text-sm
      prose-strong:font-primary
      prose-h1:text-text prose-h1:text-2xl prose-h1:font-primary prose-h1:text-center
      prose-h2:text-text prose-h2:text-xl prose-h2:font-primary prose-h2:text-center
      prose-h3:text-text prose-h3:text-lg prose-h3:font-primary prose-h3:text-center
      prose-h4:text-text prose-h4:text-md prose-h4:font-primary prose-h4:text-center
      prose-h5:text-text prose-h5:text-sm prose-h5:font-primary prose-h5:text-center
      prose-h6:text-text prose-h6:text-xs prose-h6:font-primary prose-h6:text-center

      prose-hr:border-text
      prose-strong:text-text
      prose-ul:text-mdx-ul
      prose-ol:text-mdx-ol
      prose-a:text-mdx-a
      prose-li:text-text
      prose-blockquote:text-text


      break-words overflow-hidden max-w-full"
    >
      <MDXRemote source={source as string} />
    </div>
  );
};

export default MDXRender;
