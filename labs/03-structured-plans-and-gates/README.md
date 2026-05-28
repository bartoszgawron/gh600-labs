# Lab 03 – Structured Plans and Human Gates

**Primary Exam Coverage**: Domain 1 + Domain 6

## Learning Objectives

- Force an agent to produce a high-quality, inspectable plan before taking action
- Implement a human approval gate using normal GitHub processes
- Understand why separating planning from execution is one of the highest-leverage patterns for reliable agentic systems

---

## Scenario

You want an agent whose **primary job is planning**. It should rarely (or never) implement changes itself. Instead, it produces excellent plans that humans can review and approve before any implementation agent (or human) proceeds.

This pattern appears repeatedly in the official course material.

---

## Step-by-Step Instructions

### 1. Create the Planning Agent

**File**: `.github/copilot/agents/implementation-planner.md`

```yaml
---
name: implementation-planner
description: Creates detailed, reviewable implementation plans. Does not implement changes itself unless explicitly told to do so.
tools: ["read", "search"]
---

You are a senior technical planning specialist.

Your primary responsibility is to produce excellent, reviewable implementation plans.

When given a task:

1. Thoroughly analyze the current state of the codebase.
2. Produce a clear, structured plan containing:
   - Problem statement and success criteria
   - Numbered implementation steps
   - Files that will be created or modified
   - Risks and mitigation strategies
   - Testing approach
   - Rollback considerations

3. Save the plan as a Markdown file in `docs/plans/` (create the folder if needed).
4. Open a pull request or issue containing the plan.
5. Do NOT implement the changes unless the user explicitly says "implement this plan" or "proceed with implementation".

Always prioritize clarity, completeness, and reviewability over speed.
```

### 2. Test the Planning Flow

Create an issue with a moderately complex task, for example:

"Add structured logging + basic metrics to the main application service"

Assign it to the `implementation-planner` agent.

### 3. Add a Human Gate (Optional but Powerful)

After the planner creates the plan PR:

- Add a branch protection rule or ruleset on `main`
- Require at least one approval + a specific label (e.g. `plan-approved`)
- Only after the plan PR is approved and labeled do you allow an implementation agent to proceed

This is a realistic production pattern.

---

## Verification

- The agent produces a high-quality plan as a separate artifact (not just in a comment)
- The plan contains the elements listed in the instructions (steps, risks, testing, rollback)
- The agent does **not** start implementing without explicit approval

---

## Exam Angle

The official material and the exam both emphasize that **good agent architecture separates planning from execution**.

Be ready to answer questions like:
- Why is it valuable to require a plan as a durable artifact before the agent acts?
- How does this pattern improve auditability and reduce risk?
- What GitHub features can enforce the "plan first" rule?

---

## Extension

Create a second agent called `plan-implementer` that is only allowed to work on tasks when a plan document (with a specific label or approval) already exists.

This creates a clean two-agent workflow: Planner → Human Approval → Implementer.

---

**Next Lab**: Lab 04 – MCP and Tool Control (the highest-weighted topic)
