export interface Section {
  title: string;
  content: string;
}

export const parseMarkdown = (markdown: string, main: string): Section[] => {
  const sections: Section[] = [];

  const parts = markdown.split(/^##\s+/m);

  const intro = parts[0].trim();
  if (parts.length && intro.length) {
    sections.push({
      title: main,
      content: intro,
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
