# Agent Workflow: Topic to WeChat Publishing

Updated: 2026-06-17

This is the end-to-end workflow for the local-first WeChat article agent.

## Workflow Overview

| Step | Input | Output | Confirmation |
| --- | --- | --- | --- |
| 1. Capture topic | Raw idea, source note, Linear issue, user prompt | Topic JSON in `data/topics` | Required for sensitive topics |
| 2. Score topic | Topic JSON and scores | Ranked recommendation from `npm run score` | Optional |
| 3. Attach sources | Source JSON files in `data/sources` | Traceable source IDs linked to topic | Required for factual claims |
| 4. Generate outline | Topic, audience, article type, sources | Draft scaffold | Optional |
| 5. Generate draft | Outline and source notes | Markdown draft in `data/drafts` | Required before review |
| 6. Generate title/abstract/cover direction | Draft body and article type | Candidate titles, abstract, cover direction | Required |
| 7. Convert formatting | Draft markdown | WeChat-ready copy or HTML preview | Required before publish |
| 8. Review | Draft, sources, checklist, preview | `approved` or `needs_changes` | Required |
| 9. Prepare publishing | Approved content and asset list | `ready_to_publish` package | Human only |
| 10. Publish or handoff | Ready package | Manual publish, scheduled publish, or API publish result | Human only for final action |
| 11. Record and retrospect | Publish result and metrics | Publishing record and improvement notes | Required after publish |

## State Model

Topic states:

- `idea`
- `evaluating`
- `needs_sources`
- `ready_to_write`
- `writing`
- `reviewing`
- `ready_to_publish`
- `published`
- `paused`
- `rejected`

Publishing states:

- `draft`
- `reviewing`
- `needs_changes`
- `approved`
- `ready_to_publish`
- `published`
- `failed`
- `rolled_back`

## Step Details

### 1. Capture Topic

Input:

- Topic title or question.
- Source/origin.
- Target reader.
- Core claim.

Output:

- `data/topics/<topic-id>.json`

Failure handling:

- If target reader or claim is unclear, keep status as `idea` or `evaluating`.

### 2. Score Topic

Input:

- Topic score object.

Output:

- Recommendation from `npm run score`.

Failure handling:

- Missing scores keep the topic out of `write_next`.
- Risk >= 4 returns `review_risk_first`.

### 3. Attach Sources

Input:

- Source records in `data/sources`.

Output:

- Topic `sources` array and draft Source Notes.

Failure handling:

- Factual claims without checked sources move the topic to `needs_sources`.

### 4-6. Drafting Package

Input:

- Topic, sources, article type, account style.

Output:

- Draft body.
- Outline.
- Title options.
- Abstract.
- Cover direction.
- Source notes.
- Review checklist.

Failure handling:

- If the output has placeholders, it cannot move beyond `draft`.

### 7. Formatting

Input:

- Reviewed Markdown draft.

Output:

- WeChat-oriented formatted copy or preview.

Failure handling:

- Layout drift returns the draft to `needs_changes`.

### 8-9. Review and Ready Package

Input:

- Draft, source notes, image list, preview.

Output:

- `approved` or `ready_to_publish`.

Human confirmation:

- `ready_to_publish` can only be assigned by a human.

### 10. Publish or Handoff

Input:

- Ready package and chosen publish method.

Output:

- Manual publish confirmation, scheduled time, or API publish task ID.

Failure handling:

- Any failed publish attempt records error and moves to `failed`.
- The agent must not retry publish automatically without human approval.

### 11. Record and Retrospect

Input:

- Published URL, time, title, metrics, review notes.

Output:

- Publishing record under `data/publishing`.
- Retro notes feeding future topic scoring.

## Version History

Version history should be kept by file changes in Git:

- Topic changes: `data/topics/*.json`
- Source changes: `data/sources/*.json`
- Draft changes: `data/drafts/*.md`
- Prompt/template changes: future `prompts/` directory
- Publishing records: `data/publishing/*.json`

## Scheduling Policy

MVP supports scheduling as a planning field only. Actual scheduling in WeChat is manual unless official API access and account qualification are confirmed.

## Acceptance Criteria

- Every workflow step has explicit input and output.
- Human confirmation points are visible in the draft and publishing state model.
- Failure paths return to a safe state and never auto-publish.
- Git provides version history for topics, sources, drafts, and publishing records.
