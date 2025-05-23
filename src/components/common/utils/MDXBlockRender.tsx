import React from "react";
import { Block, BlockExpand } from "@/components/common/blocks";
import { slugify } from "@/helpers/url";
import { MDXRender } from "@/components/common/utils/index";
import { parseMarkdown } from "@/helpers/markdown";
import VerticalDivider from "@/components/common/dividers/VerticalDivider";

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
        <div key={index} className="flex flex-col">
          {!title && index > 0 && <VerticalDivider />}
          <BlockExpand
            first={title === undefined && index === 0}
            content={section.title}
            query={slugify(section.title)}
            last={sections.length - 1 === index}
          >
            <MDXRender source={section.content} />
          </BlockExpand>
        </div>
      ))}
    </Block>
  );
};

export default MDXBlockRender;
