# Technical Plan and MVP Shape

Updated: 2026-06-17

## Recommendation

Build the first version as a local-first Node.js CLI with file-backed data and human-approved publishing.

Why:

- Content workflow and prompt quality are still evolving.
- WeChat publishing has account qualification and credential constraints.
- Human review is required for quality, copyright, and publishing safety.
- File-backed data keeps the system transparent, Git-versioned, and easy to refactor.

## MVP Architecture

```text
data/
  topics/        Topic pool JSON
  sources/       Source and citation JSON
  drafts/        Markdown drafts
  publishing/    Review checklist and publish records
  knowledge/     Account style and reusable content memory
docs/            Product, workflow, and operating specs
src/
  index.js       CLI commands
  topic-score.js Topic scoring and recommendation
  templates.js   Draft and review templates
```

## Technology Stack

MVP:

- Runtime: Node.js 20+
- Interface: CLI scripts through npm
- Data: JSON and Markdown files
- Versioning: Git
- Task tracking: Linear
- Publishing: manual handoff by default

Later:

- Model provider: OpenAI API or compatible LLM provider
- Database: SQLite first, then Postgres only if collaboration/query needs grow
- UI: local web admin only after CLI workflow stabilizes
- Cloud jobs: scheduled topic discovery and retrospectives
- WeChat API: only after account qualification and credentials are confirmed

## Data Structures

Topic:

- `data/topics/<id>.json`
- Status, source, audience, core claim, scores, linked source IDs.

Source:

- `data/sources/<id>.json`
- Type, title, URL/origin, excerpt, verification status, copyright risk.

Draft:

- `data/drafts/<topic-id>.md`
- Metadata, outline, body, title options, abstract, cover direction, source notes, review checklist, publishing gate.

Publishing:

- `data/publishing/<article-id>.json`
- Publish status, final title, URL, time, metrics, review notes, retro notes.

Knowledge:

- `data/knowledge/*.json`
- Account style, article types, title patterns, cases, published index.

## Database Decision

Do not add a database in MVP.

Use files until at least one of these becomes true:

- More than one active human collaborator edits content daily.
- Queries over historical articles become painful.
- Metrics imports become recurring and structured.
- Cloud workflow needs shared state.

Recommended migration path:

1. JSON/Markdown files.
2. SQLite with the same schemas.
3. Postgres if multi-user/cloud requirements become real.

## Model Integration

MVP can work without model calls by generating scaffolds and checklists.

When adding a model:

- Keep prompts versioned in `prompts/`.
- Pass topic, source summaries, account style, and article type explicitly.
- Require source notes and review checklist in every model output.
- Never let model output change publish status to `ready_to_publish` or `published`.

## Browser Automation Decision

Do not use browser automation for MVP publishing.

Allowed later:

- Opening WeChat editor.
- Copy/paste assistance.
- Preview screenshot capture.

Not allowed:

- Bypassing login/security prompts.
- Clicking final publish/schedule/delete without human approval.

## Milestones

### M1: Local Operating Backbone

- Topic scoring works.
- Source registry works.
- Draft scaffold works.
- Content standards and approval gates exist.

### M2: Writing and Formatting

- Prompt templates exist.
- WeChat formatting rules exist.
- Drafts include title, abstract, cover direction, source notes, and publishing gate.

### M3: Publishing Records and Retrospectives

- Publish records exist.
- Metrics and retro notes are stored.
- Weekly/monthly retrospective can be generated manually or by CLI.

### M4: Optional Automation

- OpenAI integration for draft generation.
- Cloud recurring topic suggestions.
- API/browser publishing assistance after account qualification is verified.

## MVP Acceptance Criteria

- From one topic JSON, the CLI can score and generate a draft scaffold.
- Every draft includes source notes, review checklist, and publishing gate.
- Publishing remains manual unless account/API prerequisites are confirmed.
- All content artifacts are traceable in Git.
- Linear issue completion references the produced file or command.
