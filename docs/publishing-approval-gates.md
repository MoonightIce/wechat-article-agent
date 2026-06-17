# Publishing Approval Gates

Updated: 2026-06-17

The first version of the article agent must never publish or schedule an article without explicit human approval.

## Required Human Confirmations

Human confirmation is required for:

- Topic selection when the article is sensitive, personal, or time-critical.
- Final title.
- Final abstract.
- Cover image and any copyrighted visual material.
- Full article body.
- WeChat formatting preview.
- Final publishing or scheduling action.
- Deleting or modifying an already published article.
- First-time use of WeChat account credentials, API keys, IP allowlist changes, or browser login state.

## Publishing Status Flow

| Status | Meaning | Who Can Move It Forward |
| --- | --- | --- |
| `draft` | Working draft exists | Agent or human |
| `reviewing` | Waiting for content review | Human |
| `needs_changes` | Review found required edits | Agent or human |
| `approved` | Content is approved, not yet formatted/finalized | Human |
| `ready_to_publish` | Title, abstract, cover, body, sources, and preview are approved | Human only |
| `published` | Article is published and recorded | Human or API after explicit approval |
| `failed` | Publish attempt failed | Agent records failure, human decides retry |
| `rolled_back` | Post-publish correction or deletion path was used | Human only |

Definition of `ready_to_publish`:

- All review checklist items pass.
- Final WeChat preview is checked.
- Publishing method is selected: manual, scheduled manually, or API publish.
- The final publish action has an explicit human approval record.

## Pre-Publish Checklist

Required before `ready_to_publish`:

- Topic and reader fit are still valid.
- Core claim is clear and supported.
- Facts that may change over time are sourced.
- Sensitive, compliance, or platform-policy claims are reviewed.
- All source IDs used in the draft are listed.
- Copyright-sensitive images, screenshots, excerpts, and charts are reviewed.
- Title, abstract, cover, and body are consistent.
- Links and references are valid.
- WeChat preview is readable on mobile.
- No placeholder text remains.
- Publishing account, method, and time are confirmed.
- Human approval record exists.

## Mis-Publish Protection

Default behavior:

- Generate local drafts only.
- Prepare payloads only after account/API capability is confirmed.
- Do not auto-submit publishing jobs.
- Do not auto-delete published articles.
- Require a second confirmation for final publish, schedule, or delete operations.

The agent may say an article is `ready_to_publish`, but the publish action itself remains blocked until the human explicitly approves the exact target account, title, and timing.

## Failure Handling

| Failure | Agent Action | Human Decision Needed |
| --- | --- | --- |
| Login expired | Record failure and stop | Re-authenticate |
| API credential missing | Record missing credential | Provide credentials or choose manual path |
| Image upload failed | Keep draft local and list failed assets | Retry, replace, or remove images |
| Layout drift | Mark `needs_changes` | Approve edits after preview |
| Scheduled publish failed | Mark `failed` and record error | Retry or publish manually |
| Published article has an error | Record issue and correction options | Edit, correction note, or delete |

## Acceptance Criteria

- No workflow path moves directly from generated draft to published.
- `ready_to_publish` is human-only.
- Final publishing requires a second confirmation.
- Failures are recorded with next action and owner.
