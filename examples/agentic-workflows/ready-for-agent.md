---
on:
  issues:
    types: [labeled]

if: contains(github.event.issue.labels.*.name, 'ready-for-agent')

permissions: read-all

engine: copilot

safe-outputs:
  add-comment:
  assign-to-agent:
    name: "copilot"
    # Fine-grained PAT with Issues: Read and write. GITHUB_TOKEN cannot assign Copilot.
    github-token: ${{ secrets.GH_AW_AGENT_TOKEN }}
---

# Hand off to coding agent

Decide whether this issue is a good fit for the Copilot coding agent:

- Well-scoped, code-focused, low risk → assign Copilot and comment why
- Vague, infra/secrets, or needs human design → do NOT assign; comment what is missing

Never assign for production secrets, billing, or destructive infra changes.
