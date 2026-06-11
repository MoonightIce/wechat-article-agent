export const reviewChecklist = [
  "Core claim is clear and useful to the target reader.",
  "Facts and references are traceable.",
  "Sensitive claims and copyright risks are reviewed.",
  "Title, abstract, cover idea, and body are consistent.",
  "WeChat formatting is checked before final publishing."
];

export function articleDraftTemplate(topic) {
  return `# ${topic.title}

## Metadata

- Topic ID: ${topic.id}
- Audience: ${topic.audience}
- Source: ${topic.source}
- Status: draft

## Core Claim

${topic.coreClaim}

## Outline

1. Opening: describe the concrete problem.
2. Context: explain why it matters now.
3. Main argument: present the strongest useful insight.
4. Practical workflow: give a repeatable path.
5. Closing: summarize the next action.

## Draft

TODO: Generate or write the article body here.

## Title Options

- ${topic.title}
- TODO: Add a more curiosity-driven title.
- TODO: Add a more practical title.

## Abstract

TODO: Write a short WeChat abstract.

## Cover Direction

TODO: Describe cover image idea and required assets.

## Review Checklist

${reviewChecklist.map((item) => `- [ ] ${item}`).join("\n")}
`;
}
