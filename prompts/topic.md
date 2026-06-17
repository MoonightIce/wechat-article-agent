# Topic Prompt

Version: 0.1.0

Purpose: Evaluate or refine one WeChat article topic.

Inputs:

- Raw topic or question.
- Target reader.
- Source/origin.
- Account positioning.

Output:

- Topic title.
- Target reader.
- Core claim.
- Article type.
- Suggested status.
- 1-5 scores for audienceFit, informationGain, motivation, sourceDepth, timeliness, conversionValue, risk.
- Rationale for recommendation.

Rules:

- Do not recommend high-risk topics for writing before review.
- Mark weak evidence as `needs_sources`.
- Keep the topic specific enough to draft.
