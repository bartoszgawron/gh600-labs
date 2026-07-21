# Lab 00 – Getting Started

## Prerequisites

- A GitHub account (personal or organization)
- Ability to create repositories (recommended: create a dedicated practice repo)
- Basic familiarity with GitHub (branches, PRs, Issues, Settings)
- (Optional but recommended) Copilot access enabled on the repository

## Recommended Test Repository Setup

1. Create a new repository called `gh600-practice` (public or private).
2. Initialize it with a README.
3. Create the following folder structure:

```
.github/
  agents/            # Custom agent profiles go here
```

4. Enable GitHub Copilot on the repository if not already enabled.

## How to Use the Labs

Each lab follows this pattern:

1. **Read the objective** — Understand which exam domain it targets.
2. **Follow the steps** — Create files in your `gh600-practice` repo.
3. **Test** — Trigger the agent (usually by assigning an issue to Copilot).
4. **Observe & Reflect** — Look at branches, PRs, logs, and artifacts.
5. **Review the "Exam Angle"** at the end of the lab.

## How to Trigger Cloud Agents

Common methods:
- Create an Issue and assign it to Copilot
- Mention Copilot in a PR or issue comment with `@copilot`
- Use the Copilot coding agent interface in the GitHub UI (when available)

## Inspecting MCP and Agent Behavior

After an agent runs:
1. Go to the Pull Request created by the agent
2. Look for timeline events like "Copilot started work"
3. Click **View session** to open detailed logs
4. Expand the **Start MCP Servers** step — this shows which MCP servers started and what tools they exposed

This log view is critical for both real work and the exam.

## Official Knowledge Base

This lab prepares you for the entire learning path:

**Developing in Agentic AI Systems Part 1 of 2**  
https://learn.microsoft.com/en-us/training/paths/gh-developing-agentic-systems-1

**All three modules** in the path rely on the foundational setup described here:
- Creating a practice repository with proper agent profiles in `.github/agents/`
- Understanding how to trigger the Copilot cloud agent from Issues and PR comments
- Inspecting detailed execution logs (especially "Start MCP Servers")

**GH-600 Exam Domain**: All domains benefit from a solid understanding of the agent execution environment and GitHub as the control plane.

---

## Next Step

Start with **Lab 01 – Foundations: Agent vs Assistant**.
