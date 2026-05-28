# GH-600 Labs & Study Reference

**GitHub Certified: Agentic AI Developer** (Exam GH-600)  
**Developing in Agentic AI Systems – Part 1 of 2 Focus**

This repository contains practical, working hands-on labs, example configurations, and study notes for preparing for the **GH-600** certification.

It is designed around the official Microsoft Learn path:
- [Developing in Agentic AI Systems Part 1 of 2](https://learn.microsoft.com/en-us/training/paths/gh-developing-agentic-systems-1)

---

## Repository Structure

```
gh600-labs/
├── README.md
├── docs/
│   ├── exam-requirements.md          # Full 6-domain breakdown from official study guide
│   ├── part1-learning-path.md        # Mapping of the 3 official modules
│   └── study-plan.md                 # Recommended study + lab schedule
├── labs/
│   ├── 00-getting-started.md
│   ├── 01-foundations-agent-vs-assistant/
│   ├── 02-scoped-sdlc-boundaries/
│   ├── 03-structured-plans-and-gates/
│   └── 04-mcp-tool-control/
├── examples/
│   ├── custom-agents/                # Ready-to-use .md agent profiles
│   └── mcp-configs/                  # JSON snippets for repository settings
└── notes/
    └── personal-reference.md
```

---

## Quick Start

1. Clone or open this repo.
2. Read `docs/exam-requirements.md` to understand what the exam actually tests.
3. Go through the labs in order (they are progressive).
4. Use the files in `examples/` directly in your own test repositories.

Each lab folder contains:
- Clear learning objectives tied to the exam
- Step-by-step instructions
- Exact files you can copy
- Verification steps
- "Exam angle" notes (what the test is likely checking)

---

## Why This Repo Exists

The official Microsoft Learn path is excellent for concepts, but the GH-600 exam is very **hands-on and scenario-based**. This repo turns the theory into repeatable, observable practice using real GitHub features:

- Custom agents (YAML frontmatter + Markdown)
- MCP server configuration (repository-level + per-agent)
- Tool filtering and least privilege
- Plan → Act → Evaluate patterns
- GitHub-native governance (PRs, checks, rulesets, environments)

---

## Current Status

- **Focus**: Part 1 of the learning path (Domains 1–3 + foundations)
- Labs 01–04 are complete and tested against current GitHub behavior (2026)
- Part 2 topics (Evaluation, Multi-agent, Guardrails) will be added when the second learning path is released

---

## Recommended Workflow

1. Read the domain summary (`docs/exam-requirements.md`)
2. Complete the three official Microsoft Learn modules
3. Do the corresponding lab(s) in this repo **immediately after** each module
4. Create your own test repository (e.g. `gh600-practice`) and apply the examples there
5. Review the "Exam angle" section at the end of each lab

---

## Resources

- Official Study Guide: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600
- Main Certification Page: https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-developer/
- Microsoft Learn Path (Part 1): https://learn.microsoft.com/en-us/training/paths/gh-developing-agentic-systems-1

---

**Last updated**: 2026 (aligned with current GitHub Copilot custom agents + MCP behavior)

Good luck with your GH-600 preparation!
