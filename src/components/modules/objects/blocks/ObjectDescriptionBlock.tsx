import React from "react";
import { AbandonedObject } from "@/types/abandoned";
import { Block } from "@/components/common/blocks";

interface Props {
  object: AbandonedObject;
}

interface Section {
  title: string;
  content: string;
}

const parseMarkdown = (markdown: string): Section[] => {
  const sections: Section[] = [];

  const parts = markdown.split(/^##\s+/m); // Split at each '## '
  if (parts.length) {
    // First part is the "Main" description
    sections.push({
      title: "Main",
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

const ObjectDescriptionBlock = ({ object }: Props) => {
  if (!object.description) return null;

  const sections = parseMarkdown(object.description);

  return (
    <Block title="Description">
      {sections.map((section, index) => (
        <Block.Expand
          key={index}
          text={section.title}
          query={`des${index}cription`}
        >
          <div className="p-2 whitespace-pre-line">{section.content}</div>
        </Block.Expand>
      ))}
    </Block>
  );
};

export default ObjectDescriptionBlock;
