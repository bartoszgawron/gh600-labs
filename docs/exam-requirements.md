# GH-600 Exam Requirements – Official Skills Breakdown

**Exam**: GH-600 – Developing in Agentic AI Systems  
**Certification**: GitHub Certified: Agentic AI Developer (beta as of May 2026)

## Audience Profile (Important for the Exam)

You should have subject matter expertise in:
- Operating, integrating, supervising, and governing AI agents inside production-grade SDLC workflows
- Using **GitHub as the system of record and control plane**
- Ensuring reliability, safety, and velocity

Key experience areas:
- SDLC + GitHub workflows/controls
- Code quality, security, and review practices
- GitHub Copilot, custom agents, MCP servers, and agent customization

---

## Skills Measured (Official Weighting)

| Domain | Weight     | Focus Area                                      |
|--------|------------|-------------------------------------------------|
| 1      | 15–20%     | Prepare agent architecture and SDLC processes   |
| 2      | **20–25%** | **Implement tool use and environment interaction** (heaviest) |
| 3      | 10–15%     | Manage memory, state, and execution             |
| 4      | 15–20%     | Perform evaluation, error analysis, and tuning  |
| 5      | 15–20%     | Orchestrate multi-agent coordination            |
| 6      | 10–15%     | Implement guardrails and accountability         |

**Note**: Part 1 of the official learning path primarily covers Domains 1–3 + foundations.

---

## Domain 1: Prepare Agent Architecture and SDLC Processes (15–20%)

### What you must know
- How to integrate agents into the SDLC
- Common anti-patterns in agentic systems
- How to define clear inputs, outputs, and success criteria
- Separation of planning, reasoning, and execution

### What you must be able to do
- Configure agent planning to be distinct from execution
- Make agents output **structured, inspectable plans**
- Validate plans before the agent takes action
- Configure observability so agents produce usable artifacts inside normal GitHub tooling (PRs, issues, checks, logs)
- Define appropriate levels of autonomy with human intervention points

**Key Pattern**: "Agents propose via PRs. Humans and policy decide."

---

## Domain 2: Implement Tool Use and Environment Interaction (20–25%)

### Highest-weighted domain in the current exam

### What you must know
- How to select and configure agent tools
- Model Context Protocol (MCP) fundamentals (local vs remote, registries, allow lists)
- Execution contexts and boundaries (repo, branch, workflow scope)
- Error handling, retries, rollbacks, escalation, and traceability for agent actions

### What you must be able to do
- Configure MCP servers (repository level and inside custom agent profiles)
- Use proper tool filtering and namespacing (e.g. `github/*`, `my-mcp/specific-tool`)
- Scope agents to specific repositories, branches, or CI workflows
- Enable safe autonomous actions (branch creation, PRs) while maintaining control
- Implement robust error handling and full traceability

**Critical for the exam**: Least-privilege tool configuration and understanding the processing order of MCP settings.

---

## Domain 3: Manage Memory, State, and Execution (10–15%)

### What you must know
- Short-term vs long-term vs external memory strategies
- Context drift and stale context problems
- How to persist agent state as durable artifacts

### What you must be able to do
- Choose appropriate memory strategies for different tasks
- Scope memory to task-relevant information only
- Capture decisions and progress as reviewable artifacts
- Detect and correct drift during long-running agent work
- Share state across tools/environments without conflicts

**Note**: This domain currently has lighter coverage in the official Part 1 learning path.

---

## Domain 4: Perform Evaluation, Error Analysis, and Tuning (15–20%)

### What you must know
- How to define success criteria and evaluation signals (qualitative + quantitative)
- How to use automated scanning tools to generate signals
- Root cause categories: reasoning errors, tool misuse, context/environment issues

### What you must be able to do
- Analyze failures using logs, plans, traces, and workflow artifacts
- Classify root causes
- Iteratively tune instructions, workflows, memory scope, and tool access based on real results

---

## Domain 5: Orchestrate Multi-Agent Coordination (15–20%)

### What you must know
- Common multi-agent orchestration patterns
- Isolation vs coordination trade-offs
- Typical failure modes (overlapping changes, duplicated effort, contradictory outputs)

### What you must be able to do
- Design multi-agent workflows with proper isolation and handoffs
- Produce auditable artifacts across multiple agents
- Detect and respond to degraded or conflicting agent behavior
- Manage the full lifecycle of agents (add / update / retire) while preserving auditability

---

## Domain 6: Implement Guardrails and Accountability (10–15%)

### What you must know
- How to classify actions by operational, security, and compliance risk
- Responsible AI principles applied to autonomous agents

### What you must be able to do
- Assign appropriate autonomy levels based on risk
- Implement human-in-the-loop workflows for high-risk actions
- Enforce least-privilege permissions and explicit authorization for irreversible changes
- Block policy-violating actions while preserving delivery velocity

---

## Exam Format Notes

- 120 minutes
- Proctored (Pearson VUE)
- Scenario-based + interactive elements possible
- Passing score: 700
- Currently in beta (results delayed)

Focus heavily on **observable behavior inside GitHub** (PRs, checks, logs, artifacts) rather than pure prompting techniques.

---

**Source**: Official Microsoft Study Guide for Exam GH-600 (May 2026)
