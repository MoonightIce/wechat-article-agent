# Publishing Records and Retrospectives

Updated: 2026-06-17

Publishing records close the loop between topic selection, article production, publishing, metrics, and future improvement.

## Record Location

Store records as:

```text
data/publishing/<article-id>.json
```

## Record Schema

```json
{
  "id": "sample-topic-2026-06-17",
  "topicId": "sample-topic",
  "status": "draft",
  "titleVersions": [
    "为什么公众号 Agent 应该先本地化开发"
  ],
  "finalTitle": null,
  "draftPath": "data/drafts/sample-topic.md",
  "handoffPath": "data/handoff/sample-topic.wechat.md",
  "publishedUrl": null,
  "publishedAt": null,
  "publishMethod": "manual",
  "metrics": {
    "reads": null,
    "likes": null,
    "favorites": null,
    "shares": null,
    "comments": null
  },
  "retrospective": {
    "whatWorked": [],
    "whatDidNotWork": [],
    "nextImprovements": []
  },
  "updatedAt": "2026-06-17T00:00:00.000Z"
}
```

## Metrics

Track at minimum:

- Reads.
- Likes.
- Favorites.
- Shares.
- Comments/messages.
- Publish time.
- Title version used.

Optional later:

- Open rate if available.
- Follower change.
- Click-through to external links.
- Read completion indicators if available.

## Retrospective Questions

After publishing, answer:

- Did the topic score predict actual performance?
- Which title version was used, and did it fit the article?
- Which source or example made the article stronger?
- What was slow or fragile in the workflow?
- What should change in topic scoring, prompt templates, formatting, or review?
- What follow-up topics should enter the topic pool?

## Weekly/Monthly Review

Weekly:

- Review newly published articles.
- Add improvement notes to each record.
- Promote follow-up topics to `data/topics`.

Monthly:

- Compare topics by article type and score.
- Review title patterns.
- Update prompts and account knowledge base.
- Record recurring blockers.

## Acceptance Criteria

- Every published or ready-to-publish article has a publishing record.
- Records link topic, draft, handoff, final title, URL, metrics, and retrospective notes.
- The agent can list records with status and metrics readiness.
- Retrospective notes feed future topic and prompt updates.
