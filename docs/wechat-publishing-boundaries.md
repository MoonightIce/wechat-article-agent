# WeChat Publishing Automation Boundaries

Updated: 2026-06-17

This note maps what the WeChat article agent can automate in the first version and where human confirmation is still required.

## Official Capabilities Checked

Sources:

- WeChat Service Account draft management: https://developers.weixin.qq.com/doc/service/guide/product/draft.html
- WeChat Service Account material management: https://developers.weixin.qq.com/doc/service/guide/product/asset.html
- WeChat Service Account publishing capability: https://developers.weixin.qq.com/doc/service/guide/product/publish.html

Official docs show server-side APIs for:

- Draft management: add, update, get, batch get, count, delete, and draft/publish switch.
- Material management: upload article images, upload permanent materials, get/list/delete permanent materials, upload/get temporary materials.
- Publishing: submit draft for publishing, query publishing status, get published article info, list published messages, and delete published articles.

Important platform constraint: the official publishing capability page states that from July 2025, personal-subject accounts, uncertified enterprise-subject accounts, and accounts that do not support certification will lose access to the publishing APIs. Treat API-based publishing as available only after the target account qualification is verified.

## Recommended First-Version Path

Use a local-first, human-approved workflow:

1. Agent generates topic, outline, draft, title options, abstract, cover direction, and WeChat-ready formatting.
2. Agent prepares material and draft payloads only when account API credentials and account qualification are confirmed.
3. Human reviews the final preview and explicitly approves publishing.
4. Publishing is manual by default. API publishing is a later optional path after account qualification, app credentials, IP allowlist, and rollback behavior are verified.

## Automation Classification

### Can Automate

- Topic and source collection.
- Draft structure and copy generation.
- Title, abstract, cover direction, and image checklist generation.
- Markdown to WeChat-oriented HTML/style conversion.
- Local version history for topics, drafts, review status, and publishing records.
- Material payload preparation.
- Official API calls for drafts/materials/publishing only after credentials and account permissions are confirmed.

### Should Be Semi-Automated

- Creating or updating WeChat drafts through official APIs.
- Uploading images and replacing local placeholders with WeChat media URLs.
- Publishing status polling after an API publish job.
- Browser-assisted copying into the WeChat editor.
- Scheduling decisions.

### Must Require Human Confirmation

- Final topic approval for sensitive or personal-position articles.
- Final title, abstract, cover image, and article body.
- Copyright-sensitive images, screenshots, long quotes, and third-party excerpts.
- Any action that submits, schedules, mass-sends, or deletes a published article.
- Any first-time use of official account credentials or browser login state.

### Do Not Do In MVP

- Fully automatic mass publishing.
- Automated deletion of published articles.
- Login-session scraping or brittle browser automation around account security prompts.
- Publishing API use before confirming account certification and API access.
- Any action that bypasses WeChat platform review, security, or content rules.

## Risk Register

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Publishing API unavailable for account type | API publishing cannot be used | Verify account subject/certification before implementation |
| Mis-publish or wrong scheduled time | Public content incident | Default to draft-only; require final human confirmation |
| Image or quote copyright issue | Complaint or forced takedown | Track sources, licenses, and review status per material |
| Login state expiration | Automation failure | Keep browser automation optional; prefer official API where allowed |
| Layout drift in WeChat editor | Poor reading experience | Keep a preview/checklist step before publishing |
| Sensitive or inaccurate claims | Trust and compliance risk | Require fact, tone, and risk review before approval |

## Acceptance Criteria

- The agent can label every publishing step as automated, semi-automated, human-confirmed, or out-of-scope.
- MVP defaults to local draft generation and manual publishing.
- API publishing remains gated by account qualification and explicit approval.
- The workflow has no path from generated draft to mass publish without a human approval state.
