# Cover and Article Image Workflow

Updated: 2026-06-17

Visual assets must be planned, sourced, named, reviewed, and mapped to draft placeholders before publishing.

## Image Sources

Allowed sources:

- Original screenshots created for the article.
- AI-generated images with stored prompt and review notes.
- Template-based covers created by the owner.
- Public images with license/attribution recorded.
- Product UI screenshots that do not expose private data.
- Diagrams generated specifically for the article.

High-risk sources:

- Random web images without license.
- Screenshots containing personal data, account data, private chats, or unreleased product details.
- Paid stock images without proof of license.
- Third-party logos or trademarks used as the main visual focus.

## Cover Direction Template

Each article should include:

- Cover concept.
- Main visual object.
- Background style.
- Text overlay plan.
- Color direction.
- Cropping notes.
- Source/license status.
- Whether manual design is needed.

## Recommended Dimensions

WeChat crops and previews can vary. Store source assets large enough for safe cropping.

MVP working sizes:

- Cover source: 1200 x 675.
- Social preview safe center: keep key subject and text in the central 80%.
- Inline images: max width 1080, optimized before upload.

Final dimensions must be checked in WeChat preview before publish.

## Image Types

| Type | Use |
| --- | --- |
| `cover` | Article cover image |
| `screenshot` | UI or workflow evidence |
| `diagram` | Process, architecture, or decision flow |
| `chart` | Metrics or comparisons |
| `illustration` | Conceptual support image |
| `avatar-logo` | Only when rights and context are clear |

## Naming Rules

Use:

```text
assets/<topic-id>/<image-type>-<short-purpose>-v<version>.<ext>
```

Examples:

```text
assets/sample-topic/cover-local-first-v1.png
assets/sample-topic/diagram-workflow-v1.png
assets/sample-topic/screenshot-cli-score-v1.png
```

## Image Manifest

Each article should have an image manifest:

```json
{
  "topicId": "sample-topic",
  "images": [
    {
      "id": "cover-local-first-v1",
      "type": "cover",
      "path": "assets/sample-topic/cover-local-first-v1.png",
      "placeholder": "{{image:cover}}",
      "source": "ai-generated",
      "licenseStatus": "owned",
      "reviewStatus": "needs_review",
      "wechatMediaUrl": null,
      "notes": "Keep text in center safe area."
    }
  ]
}
```

## Upload and Replacement Flow

1. Draft uses placeholders such as `{{image:cover}}` or `{{image:workflow-diagram}}`.
2. Image manifest maps placeholders to local paths.
3. Human reviews source, copyright, and private data exposure.
4. If API access is available, upload image and store WeChat media URL.
5. Replace placeholders in formatted draft.
6. Check WeChat preview before final approval.

## Acceptance Criteria

- Every image has a source and license/review status.
- Every draft image placeholder maps to an image manifest entry.
- Cover direction is present before review.
- Final preview is checked before `ready_to_publish`.
