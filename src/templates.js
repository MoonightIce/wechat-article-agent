export const reviewChecklist = [
  "Core claim is useful and specific to the target reader.",
  "Audience and article type are explicit.",
  "Structure includes problem, context, workflow/evidence, limitation, and takeaway.",
  "Title and abstract match the actual article.",
  "Facts that may change over time are sourced.",
  "Sources and quotes are traceable.",
  "Copyright-sensitive materials are reviewed.",
  "Sensitive or high-risk claims are flagged for human approval.",
  "Tone is practical, honest, specific, and calm.",
  "WeChat readability is checked: short paragraphs, clear headings, and no layout-heavy dependency.",
  "Final publishing remains blocked until a human approves title, cover, body, and publish action."
];

export function articleDraftTemplate(topic) {
  return `# ${topic.title}

## Metadata

- Topic ID: ${topic.id}
- Audience: ${topic.audience}
- Source: ${topic.source}
- Article Type: TODO: opinion | tutorial | project-retrospective | product-note | technical | checklist
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

- Concept: TODO
- Main visual object: TODO
- Source/license status: TODO
- Cropping notes: keep key content in the center safe area

## Image Plan

- {{image:cover}}: TODO: cover image path, source, license status, review status.
- {{image:workflow-diagram}}: TODO: optional diagram path, source, license status, review status.

## Source Notes

${(topic.sources ?? []).map((sourceId) => `- ${sourceId}: TODO: describe supported claims and verification status.`).join("\n") || "- TODO: Attach source IDs and supported claims."}

## Review Checklist

${reviewChecklist.map((item) => `- [ ] ${item}`).join("\n")}

## Publishing Gate

- Status: draft
- Final publish action: blocked until human approval
- Required next state before publishing: ready_to_publish
`;
}
