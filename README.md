# WeChat Article Agent

Local-first agent workspace for planning, drafting, reviewing, and preparing WeChat public account articles.

## Goals

- Maintain a topic pool with scoring and status.
- Track sources, references, drafts, and review checkpoints.
- Generate structured article drafts that can be adapted for WeChat formatting.
- Keep publishing records and retrospectives traceable.

## Quick Start

```bash
npm run init
npm run score
npm run draft -- --topic sample-topic
```

## Project Structure

```text
data/
  drafts/             Generated article drafts
  publishing/         Publishing records and retrospectives
  sources/            Source and reference notes
  topics/             Topic pool entries
src/
  index.js            CLI entrypoint
  topic-score.js      Topic scoring model
  templates.js        Article templates and review checklist
```

## First MVP Workflow

1. Add a topic to `data/topics`.
2. Attach source notes in `data/sources`.
3. Score the topic.
4. Generate a draft scaffold.
5. Review manually before preparing it for WeChat.
6. Record publishing outcome and retrospective notes.

The first version should remain local-first and human-approved. Cloud workflows can be added later for recurring topic discovery, weekly retrospectives, and cross-device access.
