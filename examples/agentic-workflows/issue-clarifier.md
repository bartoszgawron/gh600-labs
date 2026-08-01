---
on:
  issues:
    types: [opened]

permissions: read-all

engine: copilot

safe-outputs:
  add-comment:
---

# Issue Clarifier

Analyze the newly opened issue.

If the problem statement, expected behavior, or reproduction steps are unclear:
- Ask 2–3 specific clarifying questions in a single comment
- Do not invent missing facts

If the issue is already clear and actionable:
- Briefly confirm what success looks like
- Suggest one label category (bug, enhancement, docs, question) without applying labels
  (this workflow only allows add-comment)

Stay concise. Prefer questions over lectures.
