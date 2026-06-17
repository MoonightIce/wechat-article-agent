# WeChat Formatting Adaptation

Updated: 2026-06-17

This document defines the MVP handoff format for copying a reviewed draft into the WeChat editor.

## MVP Formatting Strategy

Use a safe Markdown handoff first:

- Preserve semantic headings.
- Keep short paragraphs.
- Keep image placeholders explicit.
- Keep source notes and review checklist visible until final review.
- Avoid complex HTML/CSS until WeChat editor preview is manually checked.

The first version does not depend on browser automation or unofficial editor behavior.

## Article Structure Template

```text
Title
Abstract
Cover Direction
Image Plan
Body
Source Notes
Review Checklist
Publishing Gate
```

## Style Rules

- Use one `#` heading for the article title only.
- Use `##` for major sections.
- Prefer paragraphs of 1-3 sentences.
- Use bullet lists for checklists and workflows.
- Keep code blocks only when essential; verify rendering manually.
- Keep blockquotes short and attributed.
- Use placeholders like `{{image:cover}}` until upload/replacement is complete.
- Do not remove Source Notes before review is complete.

## Image Replacement Rules

Draft placeholder:

```text
{{image:workflow-diagram}}
```

Manifest entry:

```json
{
  "placeholder": "{{image:workflow-diagram}}",
  "path": "assets/sample-topic/diagram-workflow-v1.png",
  "wechatMediaUrl": null
}
```

After upload, replace placeholder with the WeChat-hosted media URL or paste the uploaded image in the editor.

## Handoff File

The CLI command:

```bash
npm run format -- --topic sample-topic
```

creates:

```text
data/handoff/sample-topic.wechat.md
```

The handoff file is intentionally conservative. It is meant for manual copy/paste or later conversion into HTML after preview rules are validated.

## Preview Checklist

- Title and abstract are present.
- Cover direction and image plan are present.
- No accidental placeholder remains in final body unless intentionally waiting for upload.
- Links are readable and valid.
- Paragraphs are short enough for mobile reading.
- Headings render correctly in WeChat editor.
- Source notes are reviewed before final publish.
- Publishing gate remains present until human approval.

## Acceptance Criteria

- A draft can be converted into a WeChat handoff file.
- Image placeholders survive conversion.
- The handoff output contains a preview checklist.
- Final publish remains blocked by human approval.
