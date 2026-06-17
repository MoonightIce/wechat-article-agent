# Topic Pool and Scoring Model

Updated: 2026-06-17

The topic pool is the input queue for the article agent. It turns scattered ideas into comparable, reviewable, and writeable article candidates.

## Topic Sources

Approved first-version sources:

- Personal notes and reading notes.
- Linear issues and project updates.
- Chat records explicitly selected by the user.
- RSS feeds and newsletters.
- Social posts or discussions selected for research.
- Project logs, commits, and retrospectives.
- Historical WeChat articles and performance notes.

Do not ingest private chats, credentials, private documents, or third-party copyrighted material unless the user explicitly selects them for a specific article.

## Topic File Structure

Each topic is stored as `data/topics/<topic-id>.json`.

Required fields:

```json
{
  "id": "local-first-agent",
  "title": "为什么公众号 Agent 应该先本地化开发",
  "source": "Linear project note",
  "audience": "Builders experimenting with AI agents",
  "coreClaim": "先把内容流程跑顺，再把稳定环节云端化。",
  "status": "ready_to_write",
  "scores": {
    "audienceFit": 5,
    "informationGain": 4,
    "motivation": 5,
    "sourceDepth": 3,
    "timeliness": 3,
    "conversionValue": 4,
    "risk": 1
  },
  "sources": ["source-id"],
  "updatedAt": "2026-06-17T00:00:00.000Z"
}
```

Optional fields:

- `owner`: person responsible for reviewing or writing.
- `articleType`: opinion, tutorial, project-retrospective, product-note, technical, checklist.
- `notes`: short working notes.
- `deadline`: target publishing date.
- `relatedIssues`: Linear issue IDs.

## Status Flow

| Status | Meaning |
| --- | --- |
| `idea` | Raw idea, not evaluated |
| `evaluating` | Needs scoring or positioning |
| `needs_sources` | Promising but evidence is not enough |
| `ready_to_write` | Good candidate for next draft |
| `writing` | Draft is being produced |
| `reviewing` | Draft is waiting for human/content review |
| `ready_to_publish` | Approved and formatted, waiting for final publish action |
| `published` | Published and ready for metrics/retrospective |
| `paused` | Intentionally deferred |
| `rejected` | Not suitable after review |

## Scoring Dimensions

Use a 1-5 score for each dimension.

| Dimension | 1 | 3 | 5 |
| --- | --- | --- | --- |
| `audienceFit` | Unclear reader | Some fit | Directly useful to target reader |
| `informationGain` | Generic | Some original framing | Strong insight or concrete workflow |
| `motivation` | Low desire to write | Useful but dry | Strong personal or project pull |
| `sourceDepth` | No evidence | Some notes | Enough examples/sources to draft |
| `timeliness` | Evergreen but not urgent | Moderately timely | Relevant now |
| `conversionValue` | No follow-up value | Some reader retention | Builds long-term authority or product direction |
| `risk` | Low risk | Needs review | High sensitivity/compliance/copyright risk |

`risk` is subtracted from the final score. High-risk topics can still be valuable, but they must be reviewed before writing or publishing.

## Recommendation Rules

- `write_next`: normalized score >= 75 and risk < 4.
- `collect_more_sources`: normalized score >= 55 but source depth or score is not enough.
- `review_risk_first`: risk >= 4.
- `backlog`: everything else.

## Maintenance Rhythm

Weekly:

- Add new ideas from selected sources.
- Score or rescore active candidates.
- Pick 1-3 topics for drafting.
- Mark stale low-fit ideas as paused or rejected.

Monthly:

- Review published performance.
- Update scoring calibration.
- Promote patterns that repeatedly perform well.
- Archive topics that no longer match the account direction.

## Acceptance Criteria

- Every topic has a status, source, audience, core claim, and score object.
- `npm run score` returns ranked recommendations across the topic pool.
- High-risk topics are not recommended for writing until risk is reviewed.
- The next writing candidate can be selected without starting from a blank page.
