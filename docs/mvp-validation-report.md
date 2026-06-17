# MVP Validation Report

Updated: 2026-06-17

This report validates the first local-first workflow with three sample article types.

## Samples

| Topic ID | Article Type | Status | Expected Output |
| --- | --- | --- | --- |
| `sample-topic` | Opinion | draft | Topic, source, draft, handoff, publishing record |
| `topic-pool-tutorial` | Tutorial | draft | Topic, source, draft, handoff, publishing record |
| `article-agent-retrospective` | Project retrospective | draft | Topic, sources, draft, handoff, publishing record |

## Validation Checklist

For each sample:

- Topic exists in `data/topics`.
- Sources exist in `data/sources`.
- `npm run score` includes the topic.
- Draft exists in `data/drafts`.
- Draft includes Source Notes.
- Draft includes Review Checklist.
- Draft includes Publishing Gate.
- Handoff exists in `data/handoff`.
- Publishing record exists in `data/publishing`.
- Final publish remains blocked by human approval.

## Commands

```bash
npm run score
npm run draft -- --topic sample-topic
npm run draft -- --topic topic-pool-tutorial
npm run draft -- --topic article-agent-retrospective
npm run format -- --topic sample-topic
npm run format -- --topic topic-pool-tutorial
npm run format -- --topic article-agent-retrospective
npm run records
npm run check
```

## Findings

- The local file-backed workflow can represent opinion, tutorial, and retrospective articles.
- Draft scaffolds consistently include title options, abstract placeholder, cover direction, image plan, source notes, review checklist, and publishing gate.
- Handoff files preserve image placeholders and publishing safety gates.
- Publishing records link each sample back to topic, draft, handoff, and metrics fields.

## Top Improvements For Next Iteration

1. Add real model-backed drafting after prompt templates stabilize.
2. Add a validator that checks topic/source/draft/handoff/record completeness per topic.
3. Add metrics import or manual metrics update command after first real publish.

## Acceptance

MVP validation passes when all listed commands succeed and all three sample topics have draft, handoff, and publishing record artifacts.
