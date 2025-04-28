import React from "react";
import { AbandonedObject } from "@/types/abandoned";
import { Block } from "@/components/common/blocks";
import { MDXRemote } from "next-mdx-remote/rsc";
import { slugify } from "@/helpers/url";
import { getTranslations } from "next-intl/server";

interface Props {
  object: AbandonedObject;
}

interface Section {
  title: string;
  content: string;
}

const parseMarkdown = (markdown: string, main: string): Section[] => {
  const sections: Section[] = [];

  const parts = markdown.split(/^##\s+/m);
  if (parts.length) {
    sections.push({
      title: main,
      content: parts[0].trim(),
    });
  }

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const [titleLine, ...contentLines] = part.split("\n");
    sections.push({
      title: titleLine.trim(),
      content: contentLines.join("\n").trim(),
    });
  }

  return sections;
};

const ObjectDescriptionBlock = async ({ object }: Props) => {
  const t = await getTranslations("ObjectDescriptionBlock");
  if (!object.description) return null;

  const sections = parseMarkdown(object.description, t("main"));

  return (
    <Block title={t("description")}>
      {sections.map((section, index) => (
        <Block.Expand
          key={index}
          content={section.title}
          query={slugify(section.title)}
          last={sections.length - 1 === index}
        >
          <div
            className="
      p-2 text-text font-primary w-full prose text-xs
      prose-strong:font-primary
      prose-h1:text-text prose-h1:text-2xl prose-h1:font-primary prose-h1:text-center
      prose-h2:text-text prose-h2:text-xl prose-h2:font-primary prose-h2:text-center
      prose-h3:text-text prose-h3:text-lg prose-h3:font-primary prose-h3:text-center
      prose-h4:text-text prose-h4:text-md prose-h4:font-primary prose-h4:text-center
      prose-h5:text-text prose-h5:text-sm prose-h5:font-primary prose-h5:text-center
      prose-h6:text-text prose-h6:text-xs prose-h6:font-primary prose-h6:text-center

      prose-hr:border-text
      max-w-full
      prose-strong:text-text
      prose-ul:text-mdx-ul
      prose-ol:text-mdx-ol
      prose-a:text-mdx-a"
          >
            <MDXRemote source={section.content as string} />
          </div>
        </Block.Expand>
      ))}
    </Block>
  );
};

export default ObjectDescriptionBlock;
