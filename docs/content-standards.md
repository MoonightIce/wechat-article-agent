# Content Generation and Review Standards

Updated: 2026-06-17

These standards define what the WeChat article agent should write, how it should sound, and what must be reviewed before publishing.

## Positioning

The account publishes practical notes about AI agents, product building, automation workflows, and personal operating systems for creators and developers.

Content should feel:

- Practical rather than theoretical.
- Honest rather than promotional.
- Specific rather than generic.
- Calm and clear rather than sensational.
- Useful to someone who wants to build or improve a real workflow.

## Target Readers

Primary readers:

- Builders using AI tools to improve personal or small-team workflows.
- Developers, product managers, and independent creators experimenting with agents.
- Readers who prefer concrete process notes, tradeoffs, and examples over broad trend commentary.

Reader needs:

- Understand whether an approach is worth trying.
- See the real constraints and failure modes.
- Get a repeatable workflow or checklist.
- Learn from implementation decisions and retrospectives.

## Article Types

| Type | Purpose | Typical Structure |
| --- | --- | --- |
| Opinion | Clarify a judgment or tradeoff | Problem, position, reasoning, counterpoint, practical takeaway |
| Tutorial | Teach a repeatable workflow | Scenario, prerequisites, steps, validation, common mistakes |
| Project retrospective | Extract lessons from a build | Goal, decisions, what worked, what failed, next iteration |
| Product note | Record product/design thinking | Context, user need, decision, details, open questions |
| Technical article | Explain implementation choices | Problem, constraints, design, code/data flow, verification |
| Checklist | Make a process operational | Use case, checklist, examples, pass/fail criteria |

## Title Rules

Good titles:

- Promise a concrete insight or outcome.
- Avoid exaggeration and anxiety bait.
- Name the real subject when possible.
- Fit the article's actual evidence.

Avoid:

- Absolute claims such as "必然", "彻底", "唯一", "颠覆".
- Empty trend words without a concrete angle.
- Titles that overpromise automation when a human approval step remains.
- Titles that imply official WeChat capability before account permissions are verified.

## Body Structure

Every draft should include:

1. A concrete opening problem.
2. A clear core claim.
3. The context and constraints behind the claim.
4. A practical workflow, decision table, or checklist.
5. Real examples or source-backed evidence.
6. Risks, limitations, and what is not solved yet.
7. A concise closing with the next action or takeaway.

Recommended rhythm:

- Short paragraphs.
- One idea per section.
- Use tables for comparison and checklists.
- Keep examples close to the claim they support.

## Style Guide

Use:

- First-person observations when grounded in actual work.
- Plain Chinese with precise technical nouns.
- Concrete verbs: 记录, 生成, 审核, 发布, 回滚, 复盘.
- Explicit uncertainty when something depends on account permissions, API access, or external policy.

Avoid:

- Generic motivational writing.
- Buzzword stacking.
- Unsupported claims about platform policies.
- Long unverified quotes.
- Copy that reads like an ad.

## Sensitive Boundaries

The agent must flag content for human review when it contains:

- Legal, medical, financial, or employment advice.
- Claims about platform rules, API access, account safety, or compliance.
- Personal data, private chat logs, or account credentials.
- Third-party copyrighted images, long excerpts, or paywalled content.
- Public criticism of identifiable individuals or companies.
- Strong claims that require source verification.

## Source and Citation Rules

- Every factual claim that could change over time needs a source or explicit uncertainty.
- Prefer primary sources for platform capabilities, API behavior, and policy.
- Track source title, URL, access date, excerpt, and verification status.
- Use short excerpts only when necessary; summarize in original wording.
- If evidence is weak, mark it as `needs_verification` instead of smoothing over the gap.

## Pre-Publish Review Checklist

A draft can move to `approved` only when all required checks pass:

- Core claim is useful and specific to the target reader.
- Audience and article type are explicit.
- Structure includes problem, context, workflow/evidence, limitation, and takeaway.
- Title and abstract match the actual article.
- Facts that may change over time are sourced.
- Sources and quotes are traceable.
- Copyright-sensitive materials are reviewed.
- Sensitive or high-risk claims are flagged for human approval.
- Tone matches the account style: practical, honest, specific, calm.
- The article is readable on WeChat: short paragraphs, clear headings, and no layout-heavy dependency.
- Final publishing remains blocked until a human approves title, cover, body, and publish action.

## Acceptance Criteria

- The agent can select a suitable article type before drafting.
- The generated draft includes title options, abstract, cover direction, source notes, and review checklist.
- Human review can identify whether the article is publishable, needs changes, or should be rejected.
- No generated article can skip factual, copyright, and final publishing checks.
