# Agentic workflow examples (gh-aw)

Copy these into a practice repo under `.github/workflows/`, then:

```bash
gh extension install github/gh-aw
gh aw compile
git add .github/workflows/
git commit -m "Add agentic workflows"
git push
```

| File | Purpose |
|------|---------|
| [issue-clarifier.md](./issue-clarifier.md) | On issue opened → clarifying comment only |
| [ready-for-agent.md](./ready-for-agent.md) | On label `ready-for-agent` → optionally assign Copilot |

Docs: [About Workflows](https://github.github.com/gh-aw/introduction/overview/) · Lab: [05-github-agentic-workflows](../../labs/05-github-agentic-workflows/)
