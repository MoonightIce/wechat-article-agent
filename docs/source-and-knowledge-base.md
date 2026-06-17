# Source, Citation, and Knowledge Base Management

Updated: 2026-06-17

This document defines how the article agent stores source materials, handles citations, and builds reusable account knowledge.

## Source Types

Allowed source types:

- `link`: public web page or official document.
- `excerpt`: selected short text excerpt.
- `screenshot`: image evidence captured for reference.
- `book-note`: reading note or book excerpt.
- `conversation`: user-approved chat snippet.
- `project-log`: Linear issue, commit, changelog, or project note.
- `personal-experience`: first-person observation or story.
- `data-chart`: chart, spreadsheet, or metric snapshot.

Sensitive source types such as private chats, credentials, personal data, paywalled articles, and long copyrighted excerpts require explicit human approval before use.

## Source File Structure

Each source is stored as `data/sources/<source-id>.json`.

Required fields:

```json
{
  "id": "official-wechat-publish-doc",
  "type": "link",
  "title": "发布能力 | 微信服务号文档",
  "url": "https://developers.weixin.qq.com/doc/service/guide/product/publish.html",
  "author": "Tencent WeChat",
  "excerpt": "Short excerpt or summary in our own words.",
  "verificationStatus": "checked",
  "copyrightRisk": "low",
  "usage": {
    "allowed": true,
    "citationRequired": true,
    "notes": "Use as platform capability source."
  },
  "relatedTopics": ["sample-topic"],
  "updatedAt": "2026-06-17T00:00:00.000Z"
}
```

## Verification Status

| Status | Meaning |
| --- | --- |
| `new` | Captured but not reviewed |
| `needs_verification` | Needs source or fact check |
| `checked` | Verified enough for draft use |
| `weak_source` | Can inspire, but should not support factual claims |
| `do_not_use` | Rejected due to accuracy, sensitivity, or copyright risk |

## Copyright Risk

| Risk | Meaning |
| --- | --- |
| `low` | Public official source, own notes, or original material |
| `medium` | Public third-party content requiring attribution or paraphrase |
| `high` | Long excerpt, paywalled content, copyrighted image, or unclear license |

High-risk material cannot be used in a publishable draft without human approval.

## Citation Rules

- Prefer summaries over direct quotes.
- Keep excerpts short and traceable.
- Record original URL/title/author where available.
- Mark claims from changing sources with access date.
- Use primary sources for platform/API/policy claims.
- Do not fabricate citations or smooth over weak evidence.

## Article-to-Source Linkage

Topics reference sources by ID in `sources`.

Drafts should include a `Source Notes` section listing:

- Source ID.
- Source title.
- Verification status.
- How the source is used.
- Claims supported by the source.

## Account Knowledge Base

Account-level knowledge lives under `data/knowledge/`.

Recommended files:

- `account-style.json`: positioning, tone, preferred phrases, banned phrases.
- `article-types.json`: reusable article type definitions.
- `cases.json`: reusable examples and project stories.
- `title-patterns.json`: good and bad title patterns.
- `published-index.json`: historical article metadata and performance.

The knowledge base is not a dumping ground. Add only reusable material that improves future article quality.

## Source Review Checklist

- Source has title, type, URL or origin note, and update date.
- Verification status is not `new` for factual claims.
- Copyright risk is low or explicitly approved.
- Long excerpts are summarized instead of copied.
- Sensitive personal or account data is removed.
- Draft lists the sources it relies on.
- Weak or unverified material is used only as inspiration.

## Acceptance Criteria

- Every draft can list the source IDs it used.
- Every source has verification and copyright risk fields.
- The agent can distinguish checked evidence from inspiration.
- Reusable account style and examples are stored separately from one-off sources.
