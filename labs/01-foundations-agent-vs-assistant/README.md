# Lab 01 – Foundations: Agent vs Assistant

**Primary Exam Coverage**: Domain 1 (Prepare agent architecture and SDLC processes)

## Learning Objectives

- Clearly distinguish assistant behavior from agent behavior
- Understand why the **plan → act → evaluate** pattern matters
- See how GitHub primitives (branches, PRs, checks) become the control plane
- Practice creating custom agent profiles using YAML frontmatter

---

## Scenario

You want to compare two different approaches to the same task:
- A pure assistant that only gives suggestions
- A proper agent that plans, acts through GitHub workflows, and produces reviewable artifacts

---

## Step-by-Step Instructions

### 1. Create the Agent Profiles

In your practice repository, create the following files:

**File**: `.github/agents/assistant-only.md`

```yaml
---
name: assistant-only
description: Purely reactive assistant that only gives suggestions. Never creates branches or PRs.
tools: []
---

You are a helpful coding assistant.

Rules:
- You only provide suggestions, explanations, and code snippets.
- You must NEVER create branches, commits, or pull requests.
- You must NEVER modify files in the repository yourself.
- Always clearly state that the user must perform the actions manually.
```

**File**: `.github/agents/proper-agent.md`

```yaml
---
name: proper-agent
description: Goal-driven agent that follows plan → act → evaluate using proper GitHub workflows
---

You are a disciplined software engineering agent.

When given any task you MUST follow this process:

1. **Plan First**
   - Analyze the request
   - Create a clear, numbered implementation plan
   - State the expected success criteria

2. **Act Through GitHub**
   - Create a new branch for the work
   - Make the necessary changes
   - Open a pull request that includes the plan in the description

3. **Never bypass governance**
   - Never push directly to the default branch
   - Always wait for review and checks before considering work complete

Be transparent about every step you take.
```

### 2. Commit the Files

```bash
git add .github/agents/
git commit -m "Add first two custom agents for comparison"
git push
```

### 3. Test Both Agents

**Test 1 – Assistant behavior**
1. Create a new Issue with the title: "Add a simple CONTRIBUTING.md file"
2. Assign the issue to **Copilot**
3. In the assignment comment, explicitly mention `@assistant-only` (or just let it pick)

**Test 2 – Proper agent behavior**
1. Create another Issue: "Add a SECURITY.md file with our vulnerability reporting process"
2. Assign it to Copilot
3. Mention `@proper-agent`

### 4. Observe the Difference

For the assistant-only agent, you should see:
- Comments with suggestions
- No branches or PRs created by the agent

For the proper-agent, you should see:
- A branch created
- A pull request opened
- The plan visible in the PR description or comments
- Changes made through normal GitHub workflows

---

## Verification Checklist

- [ ] Assistant agent only commented and did not create any git objects
- [ ] Proper agent created a branch + PR
- [ ] The PR description or first comment contains a visible plan
- [ ] You can see the plan → act → evaluate thinking in the agent's output

---

## Exam Angle – What This Lab Teaches

The GH-600 exam heavily tests whether you understand that **real agents must produce observable, governable artifacts** inside GitHub.

Common exam themes:
- Why is "just giving suggestions" not sufficient agent behavior?
- What makes a PR-based workflow the preferred pattern?
- How does requiring a plan before action improve reliability and auditability?

Be ready to recognize anti-patterns (direct pushes to main, no visible plan, no human review points).

---

## Extension Ideas

1. Add a third agent that creates a plan but refuses to implement anything until a human comments "approved".
2. Create an agent that deliberately tries to break the rules (e.g. "update the deployment workflow") and observe how it behaves.
3. Add branch protection rules on `main` and test whether the agent respects them.

---

**Next Lab**: Lab 02 – Scoped SDLC Boundaries (recommended after Microsoft Learn Module 2)
