import React from "react";
import { Block } from "@/components/common/blocks";
import { slugify } from "@/helpers/url";
import { MDXRender } from "@/components/common/utils/index";
import { parseMarkdown } from "@/helpers/markdown";

interface Props {
  title?: string;
  introExpandTitle?: string;
  source: string;
}

const MDXBlockRender = ({
  title,
  source,
  introExpandTitle = "Main",
}: Props) => {
  const sections = parseMarkdown(source, introExpandTitle);
  return (
    <Block title={title}>
      {sections.map((section, index) => (
        <Block.Expand
          first={title === undefined && index === 0}
          key={index}
          content={section.title}
          query={slugify(section.title)}
          last={sections.length - 1 === index}
        >
          <MDXRender source={section.content} />
        </Block.Expand>
      ))}
    </Block>
  );
};

export default MDXBlockRender;
