# Lab 05 – GitHub Agentic Workflows (gh-aw)

**Primary Exam Coverage**: Domain 2 (Tooling, MCP & Execution) + Domain 6 (Governance & Operations)

This lab introduces **GitHub Agentic Workflows**: AI agents that run **inside GitHub Actions** from markdown files you author and compile.

Official overview: [About Workflows](https://github.github.com/gh-aw/introduction/overview/)  
Quick start: [Quick Start](https://github.github.com/gh-aw/setup/quick-start/)

## Learning Objectives

- Explain how agentic workflows differ from classic Actions scripts and from Copilot coding-agent issue assignment
- Author a workflow as markdown (frontmatter + natural-language body)
- Configure `on:`, `permissions:`, `engine:`, `tools:`, and `safe-outputs:`
- Compile with `gh aw compile` and run the generated `.lock.yml` in Actions
- Apply least privilege: read-only by default; writes only through safe-outputs

---

## Background

### What are Agentic Workflows?

From the [overview](https://github.github.com/gh-aw/introduction/overview/):

> Agentic workflows are AI-powered automation that can understand context, make decisions, and take meaningful actions—all from natural language instructions you write in markdown.

You do **not** write a long bash script for triage or reporting. You describe the goal; an AI engine (Copilot, Claude, Codex, or Gemini) runs in Actions with hardened permissions.

### How it fits with Lab 04

| | Custom agent (Lab 04) | Agentic workflow (this lab) |
|--|----------------------|-----------------------------|
| Trigger | Assign issue to Copilot / `@copilot` | Actions event, schedule, slash command |
| Definition | `.github/agents/*.md` | `.github/workflows/*.md` (+ compiled `.lock.yml`) |
| Writes | Agent / MCP permissions | Explicit `safe-outputs` only |
| Runs as | Copilot coding agent session | Compiled Actions job + AI engine |

They compose: a `gh-aw` workflow can triage an issue, then `assign-to-agent` to your Copilot coding agent.

### Security model (exam-critical)

1. **`permissions: read-all`** (or stricter) by default  
2. **Writes only via `safe-outputs`** (add-comment, create-issue, add-labels, assign-to-agent, …)  
3. Compilation validates config and generates a hardened Actions workflow  
4. Default `GITHUB_TOKEN` is **not** enough to assign Copilot; use a dedicated PAT secret when using `assign-to-agent`

---

## Prerequisites

- GitHub CLI `gh` v2+ (`gh auth status`)
- Write access to a practice repo (e.g. `gh600-practice`)
- Actions enabled on the repo
- An AI engine account:
  - **Copilot** (recommended): secret `COPILOT_GITHUB_TOKEN` (fine-grained PAT with Copilot Requests: Read) — see [Quick Start](https://github.github.com/gh-aw/setup/quick-start/)
  - Or Claude / Codex / Gemini API key secrets as documented for your engine

---

## Part A: Install and add a sample workflow

### 1. Install the extension

```bash
gh extension install github/gh-aw
gh aw --help
```

### 2. Add a pre-baked example (optional but fast)

From your practice repo root:

```bash
gh aw add-wizard githubnext/agentics/daily-repo-status
# or non-interactive:
# gh aw add githubnext/agentics/daily-repo-status --engine copilot
```

The wizard:

1. Checks permissions  
2. Lets you pick an engine  
3. Helps configure the required secret  
4. Adds `.md` + compiled `.lock.yml` under `.github/workflows/`  

### 3. Observe the files

```text
.github/workflows/
  daily-repo-status.md          # you edit this
  daily-repo-status.lock.yml    # gh aw compile output — Actions runs this
```

Commit and push both. Trigger with:

```bash
gh aw run daily-repo-status
```

Or open **Actions** and run the workflow manually. When it succeeds, you should see a new “Daily Repo Report” issue.

---

## Part B: Author your own Issue Clarifier

### 1. Create the markdown workflow

**File**: `.github/workflows/issue-clarifier.md`

```markdown
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
```

This matches the shape from the [overview](https://github.github.com/gh-aw/introduction/overview/) (trigger + read-only permissions + safe-outputs + natural language body).

### 2. Compile

```bash
gh aw compile
```

Confirm `.github/workflows/issue-clarifier.lock.yml` was created or updated.

### 3. Commit and push

```bash
git add .github/workflows/issue-clarifier.md .github/workflows/issue-clarifier.lock.yml
git commit -m "Add agentic issue clarifier workflow"
git push
```

### 4. Test

1. Open a **vague** issue (e.g. “App is broken, please fix”).  
2. Wait for the Actions run.  
3. Confirm the bot posted a clarifying comment.  
4. Open a **clear** issue and confirm a short confirmation comment (not a wall of text).

---

## Part C: Frontmatter configuration patterns

Practice editing frontmatter. After each change, run `gh aw compile` again.

### Triggers (`on:`)

```yaml
# Issues
on:
  issues:
    types: [opened, labeled]

# Pull requests
on:
  pull_request:
    types: [opened, ready_for_review]

# Schedule
on:
  schedule:
    - cron: "0 8 * * 1"

# Manual
on:
  workflow_dispatch:
```

Reference: [Frontmatter](https://github.github.com/gh-aw/reference/frontmatter/)

### Conditional runs

```yaml
on:
  issues:
    types: [labeled]

if: contains(github.event.issue.labels.*.name, 'needs-triage')
```

### Safe outputs (write allowlist)

Only list what the agent is allowed to do. Examples from [Safe Outputs](https://github.github.com/gh-aw/reference/safe-outputs/):

```yaml
safe-outputs:
  add-comment:
  add-labels:
  create-issue:
    title-prefix: "[ai] "
    labels: [automation]
  create-pull-request:
  assign-to-agent:
    name: "copilot"
    github-token: ${{ secrets.GH_AW_AGENT_TOKEN }}
```

### Engine

```yaml
engine: copilot   # or claude | codex | gemini
```

---

## Part D: Triage + hand off to Copilot coding agent (advanced)

Combine this lab with Lab 04: the workflow decides; the coding agent implements.

**File**: `.github/workflows/ready-for-agent.md`

```markdown
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
    github-token: ${{ secrets.GH_AW_AGENT_TOKEN }}
---

# Hand off to coding agent

Decide whether this issue is a good fit for the Copilot coding agent:

- Well-scoped, code-focused, low risk → assign Copilot and comment why
- Vague, infra/secrets, or needs human design → do NOT assign; comment what is missing

Never assign for production secrets, billing, or destructive infra changes.
```

### Extra secret

Create a fine-grained PAT with **Issues: Read and write** on the practice repo. Store as:

`GH_AW_AGENT_TOKEN`

(`GITHUB_TOKEN` cannot assign Copilot — anti-loop protection.)

Compile, push, then label an issue `ready-for-agent` and watch:

1. Agentic workflow run (Actions)  
2. Issue assigned to Copilot  
3. Coding agent session + PR (as in Labs 00–04)

---

## Verification

- [ ] `gh aw` extension installed and `gh aw compile` succeeds  
- [ ] You understand `.md` (source) vs `.lock.yml` (what Actions runs)  
- [ ] Issue Clarifier posts comments only via `safe-outputs.add-comment`  
- [ ] You can explain why permissions stay read-only by default  
- [ ] (Advanced) `assign-to-agent` uses a PAT secret, not `GITHUB_TOKEN`  
- [ ] Session/run logs show the AI engine step and any safe-output steps  

---

## Exam Angle

Be ready to explain:

- Agentic workflows = **natural language + frontmatter**, compiled into **hardened Actions**  
- **Least privilege**: reads by default; writes only through **safe-outputs**  
- Difference between **Copilot coding agent** (issue assignee) and **gh-aw** (Actions-hosted AI job)  
- Why a **user PAT** is required to trigger Copilot assignment from automation  

---

## Extension ideas

1. **PR reviewer** — `on: pull_request` + `add-comment` only; never approve/merge.  
2. **LabelOps** — `add-labels` + `add-comment` for `bug` / `enhancement` / `docs`.  
3. **Docs sync** — on PR merge, propose doc updates via `create-pull-request`.  
4. Explore the [Agentics collection](https://github.com/githubnext/agentics) and [design patterns](https://github.github.com/gh-aw/design-patterns/issueops/) (IssueOps, LabelOps, ChatOps).

---

## Official Knowledge Base

**GitHub Agentic Workflows docs**

- [About Workflows](https://github.github.com/gh-aw/introduction/overview/)  
- [Quick Start](https://github.github.com/gh-aw/setup/quick-start/)  
- [Frontmatter](https://github.github.com/gh-aw/reference/frontmatter/)  
- [Safe Outputs](https://github.github.com/gh-aw/reference/safe-outputs/)  
- [Safe Outputs (Copilot Cloud Agent)](https://github.github.com/gh-aw/reference/safe-outputs/copilot-cloud-agent/)  

**Microsoft Learn (GH-600)**

**Developing in Agentic AI Systems Part 1 of 2**  
https://learn.microsoft.com/en-us/training/paths/gh-developing-agentic-systems-1  

**Key concepts**

- Agents need clear boundaries, least privilege, and observable runs.  
- GitHub Actions is a control plane for agent execution environments.  
- Prefer validated write paths (safe-outputs / PRs) over giving models broad write tokens.  

**GH-600 Exam Domains**: Domain 2 (tooling & execution) + Domain 6 (governance & operations)

---

## Example files in this repo

See `examples/agentic-workflows/` for copy-paste starters used in this lab.

**After this lab**, you should be able to sketch an agentic workflow on a whiteboard: trigger → engine → tools → safe-outputs → compile → Actions run.
