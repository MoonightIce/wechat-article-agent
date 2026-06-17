# Prompt and Template Versioning

Updated: 2026-06-17

Prompts are product assets. They must be versioned, reviewed, and tested like code.

## Directory Structure

```text
prompts/
  CHANGELOG.md
  topic.md
  source整理.md
  outline.md
  draft.md
  title-abstract.md
  polish.md
  review.md
  wechat-format.md
  retrospective.md
```

## Version Rules

Each prompt file must include:

- Version.
- Purpose.
- Inputs.
- Output contract.
- Safety rules.
- Changelog entry when changed.

Use semantic-ish versions:

- `0.x`: exploratory local prompts.
- `1.x`: stable MVP prompts.
- Patch increments for wording refinements.

## Regression Test Method

When a prompt changes:

1. Run the same topic and source set through old and new prompt versions.
2. Compare structure, source traceability, tone, and checklist completeness.
3. Record the reason and observed effect in `prompts/CHANGELOG.md`.
4. Keep the prior version recoverable through Git.

## Style Sync

Prompts must reference:

- `docs/content-standards.md`
- `docs/source-and-knowledge-base.md`
- `docs/publishing-approval-gates.md`
- `data/knowledge/account-style.json`

No prompt may instruct the model to skip source notes, review checklist, or human publishing approval.
