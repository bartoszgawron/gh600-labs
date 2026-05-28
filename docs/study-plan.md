# Recommended GH-600 Study + Lab Plan (Part 1 Focus)

**Goal**: Be confident in Domains 1–3 + foundations within 2–3 weeks while working full time.

---

## Week 1 – Foundations + Architecture

### Day 1–2
- Read `docs/exam-requirements.md` (full domain breakdown)
- Start Microsoft Learn: **Foundations of Agentic AI in GitHub** module
- Complete the knowledge check

### Day 3
- Do **Lab 01** (Agent vs Assistant) in this repo
- Create your personal test repository (`gh600-practice` or similar)
- Experiment with both agent styles

### Day 4–5
- Microsoft Learn: **Designing Agent Architecture and SDLC Integration**
- Focus especially on:
  - Mapping responsibilities to SDLC stages
  - Separating planning from execution

### Day 6–7
- Do **Lab 02** (Scoped SDLC Boundaries)
- Do **Lab 03** (Structured Plans + Approval Gates)
- Spend time making the plan visible and reviewable

**Checkpoint**: You should be able to explain the "Agents propose via PRs" pattern and why it matters.

---

## Week 2 – Tooling & MCP (Highest Priority)

This week is the most important for the exam.

### Day 1–2
- Microsoft Learn: **Tooling, MCP, and Agent Execution Environments**
- Take detailed notes on MCP configuration options

### Day 3–4
- Do **Lab 04** (MCP + Tool Control) thoroughly
- Practice both:
  - Repository-level MCP configuration (Settings → Copilot → Cloud agent)
  - Per-agent MCP configuration (inside custom agent YAML)
- Test tool filtering with namespacing

### Day 5
- Experiment with least-privilege configurations
- Break things on purpose (give an agent tools it shouldn't have) and observe the results

### Day 6–7
- Review all labs
- Re-read the official GH-600 study guide
- Create 2–3 of your own agent profiles from scratch

---

## Week 3 – Review + Gap Filling

### Activities
- Re-do the most important labs (especially Lab 04)
- Read the GitHub documentation pages linked from the official study guide:
  - Custom agents configuration reference
  - Extending cloud agent with MCP
  - Custom agents examples
- Start practicing Part 2 topics using the study guide (even without the official learning path)

### Optional Deep Dives
- Build a realistic platform engineering agent (e.g. "propose safe changes to a Helm chart or Kyverno policy")
- Practice reading Copilot cloud agent session logs to validate MCP servers started correctly

---

## Daily Study Rhythm (Recommended)

1. **30–45 min** — Official Microsoft Learn module or GitHub docs
2. **45–60 min** — Hands-on lab work in your test repository
3. **10 min** — Write a short note in `notes/personal-reference.md` about what you learned

---

## Success Criteria Before the Exam

You should be able to comfortably do the following without looking anything up:

- [ ] Explain the difference between assistant and agent behavior using GitHub examples
- [ ] Design an agent with clear SDLC boundaries and success criteria
- [ ] Force an agent to produce a structured plan before acting
- [ ] Configure MCP servers at both repository and agent level
- [ ] Apply proper tool filtering and least privilege
- [ ] Explain how GitHub controls (PRs, checks, environments, rulesets) act as guardrails
- [ ] Validate MCP server startup using Copilot session logs

---

## After Part 2 Is Released

When the second learning path becomes available:
- Add new labs for Domains 4, 5, and 6
- Focus especially on evaluation signals, multi-agent conflict resolution, and risk-based autonomy levels

---

**Tip**: The exam rewards **observable, governed, auditable agent behavior** much more than clever prompting. Every lab in this repo is built around that principle.
