# Part 1 of 2 – Learning Path Mapping to GH-600

**Path**: [Developing in Agentic AI Systems Part 1 of 2](https://learn.microsoft.com/en-us/training/paths/gh-developing-agentic-systems-1)

This path contains the three official modules that best prepare you for **Domains 1–3** of the GH-600 exam.

---

## Module 1: Foundations of Agentic AI in GitHub

**Primary Exam Coverage**: Domain 1 (Foundations)

### Learning Objectives
- Define agentic AI in the SDLC and distinguish agents from assistants
- Explain and apply the **plan → act → evaluate** lifecycle
- Describe how GitHub functions as the system of record and control plane
- Identify responsibilities, risks, anti-patterns, and traceability requirements
- Apply the contributor model to agent-generated work

### Key Concepts from the Module
- Assistants are reactive and suggestion-only
- Agents maintain goals across multiple steps, use tools, and produce durable artifacts (branches, commits, PRs)
- All agent activity should be visible and governable through normal GitHub primitives

**Corresponding Lab in this repo**: `labs/01-foundations-agent-vs-assistant/`

---

## Module 2: Designing Agent Architecture and SDLC Integration

**Primary Exam Coverage**: Domain 1 (Architecture + Boundaries)

### Learning Objectives
- Map agent responsibilities to specific SDLC stages
- Define clear inputs, outputs, and success criteria for agent tasks
- Separate planning, reasoning, and execution
- Use GitHub governance controls (PR templates, checks, CODEOWNERS, rulesets, environments)
- Design reliable workflows with proper handoffs and observability

### Most Important Pattern Taught
**"Agents propose. Humans and policy accept."**

Agents should:
- Work inside clear boundaries
- Produce inspectable plans before acting
- Use pull requests as the primary delivery mechanism

**Corresponding Labs in this repo**:
- `labs/02-scoped-sdlc-boundaries/`
- `labs/03-structured-plans-and-gates/`

---

## Module 3: Tooling, MCP, and Agent Execution Environments

**Primary Exam Coverage**: **Domain 2 (20–25%)** — Heaviest section

### Learning Objectives
- Understand how agents use tools and APIs
- Explain the role of MCP servers
- Configure execution environments and boundaries (repo / branch / workflow scope)
- Apply limits and protections (branch protection, required reviews, environment gates)

### Critical Skills
- Repository-level MCP configuration (JSON in Copilot → Cloud agent settings)
- Per-agent MCP configuration (inside YAML frontmatter of custom agents)
- Tool filtering and namespacing
- Least-privilege configuration
- Validating MCP servers via Copilot session logs

**Corresponding Lab in this repo**: `labs/04-mcp-tool-control/`

---

## How the Three Modules Map to Exam Domains

| Microsoft Learn Module                    | Primary GH-600 Domain | Weight | Lab(s) in this repo          |
|-------------------------------------------|-----------------------|--------|------------------------------|
| Foundations of Agentic AI in GitHub       | Domain 1              | 15-20% | 01-foundations               |
| Designing Agent Architecture and SDLC     | Domain 1              | 15-20% | 02 + 03                      |
| Tooling, MCP, and Agent Execution         | **Domain 2**          | 20-25% | 04 (core) + extensions       |
| (Partial)                                 | Domain 3              | 10-15% | Memory patterns in notes     |

---

## Recommended Study Order

1. Complete **Module 1** on Microsoft Learn
2. Immediately do **Lab 01** in this repo
3. Complete **Module 2**
4. Do **Lab 02** and **Lab 03**
5. Complete **Module 3** (most important for the exam)
6. Do **Lab 04** thoroughly (spend extra time here)
7. Review all labs + re-read the official study guide

---

## What This Path Does NOT Cover Well (Yet)

- Domain 3 (Memory & State) – only lightly touched
- Domain 4 (Evaluation & Tuning)
- Domain 5 (Multi-Agent Orchestration)
- Domain 6 (Guardrails & Accountability)

These will be addressed once "Part 2 of 2" of the learning path is released.

Until then, use the official GH-600 study guide links to the relevant GitHub documentation.

---

**Source**: Microsoft Learn (May 2026)
