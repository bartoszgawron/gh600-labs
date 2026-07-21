# Lab 04 – MCP and Tool Control (Highest Priority)

**Primary Exam Coverage**: Domain 2 – Implement Tool Use and Environment Interaction (20–25%)

This is currently the most important lab for the GH-600 exam.

## Learning Objectives

- Configure MCP servers at the repository level
- Configure MCP servers inside individual custom agent profiles
- Apply proper tool filtering and least privilege using namespacing
- Validate MCP server startup using Copilot session logs
- Understand the processing order of MCP configurations

---

## Background

Copilot cloud agents can use external tools through the **Model Context Protocol (MCP)**.

There are two main places to configure MCP servers:
1. **Repository level** – JSON in Settings → Copilot → Cloud agent → MCP configuration
2. **Per custom agent** – YAML under `mcp-servers:` in the agent's frontmatter

The exam expects you to understand both and know how to restrict tools appropriately.

---

## Part A: Repository-Level MCP Configuration

### 1. Add a Basic MCP Configuration

Go to your practice repository:

**Settings → Copilot → Cloud agent → MCP configuration**

Add the following example using the official Azure MCP server:

```json
{
  "mcpServers": {
    "azure": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@azure/mcp@latest"],
      "env": {
        "AZURE_SUBSCRIPTION_ID": "${AZURE_SUBSCRIPTION_ID}"
      },
      "tools": ["*"]
    }
  }
}
```

Save the configuration.

### 2. Validate the Configuration

1. Create an issue and assign it to Copilot.
2. Once it creates a PR, go to the PR → "Copilot started work" timeline event → **View session**.
3. Expand the **Start MCP Servers** step.
4. Confirm that `azure` appears and lists available tools.

---

## Part B: Per-Agent MCP Configuration + Tool Filtering

### 1. Create an Agent That Uses MCP With Restrictions

**File**: `.github/agents/mcp-aware-implementation-agent.md`

```yaml
---
name: mcp-aware-implementation
description: Implementation agent with carefully controlled MCP access
tools: ["read", "edit", "github-mcp-readonly/get_issue", "github-mcp-readonly/list_issues"]
mcp-servers:
  github-mcp-readonly:
    type: "http"
    url: "https://api.githubcopilot.com/mcp/readonly"
    tools: ["get_issue", "list_issues"]
---

You are an implementation agent with access to GitHub issue data via MCP.

You have access to the following MCP tools only:
- github-mcp-readonly/get_issue
- github-mcp-readonly/list_issues

You must NOT attempt to use any other MCP tools.

When working on tasks:
- First read relevant issues using the allowed MCP tools
- Then produce a plan
- Then implement changes through normal GitHub workflows (branch + PR)
```

### 2. Test Tool Restrictions

Create tasks that try to use tools the agent should **not** have access to.

Observe whether the agent respects the `tools:` list in both the frontmatter and the `mcp-servers` section.

---

## Part C: Least Privilege Practice (Exam-Critical)

Experiment with these variations:

1. Use `tools: ["github-mcp-readonly/get_issue"]` (very narrow)
2. Use `tools: ["github-mcp-readonly/*"]` (all tools from one server)
3. Use `tools: ["read", "edit"]` with no MCP tools at all

Document what happens in each case.

---

## Verification

- [ ] You can see MCP servers starting in the Copilot session logs
- [ ] The agent only has access to the tools you explicitly allowed
- [ ] You understand the difference between repository-level and agent-level MCP config
- [ ] You can explain why you should almost always use narrow tool allow lists

---

## Exam Angle – This Lab Is High Yield

The exam loves questions about:
- How to restrict what tools an agent can use
- The difference between configuring MCP at repo level vs inside a custom agent
- How to read the session logs to prove MCP servers are working
- Why giving agents too many tools is dangerous

Spend extra time on this lab.

---

## Common MCP Configuration Patterns (Reference)

See the files in `examples/mcp-configs/` for more examples (Sentry, Azure, GitHub extended access, etc.).

---

## Official Knowledge Base

This lab is based on the official Microsoft Learn learning path:

**Developing in Agentic AI Systems Part 1 of 2**  
https://learn.microsoft.com/en-us/training/paths/gh-developing-agentic-systems-1

**Relevant Module**: Tooling, MCP, and Agent Execution Environments

**Key Concepts from the Official Material**:
- Agents use tools, MCP servers, and GitHub workflows to execute tasks safely.
- Clear boundaries, security controls, and the principle of least privilege are essential when granting tools to agents.
- MCP (Model Context Protocol) allows agents to connect to external services in a controlled way.
- Repository-level vs per-agent MCP configuration provides different levels of governance.
- Always verify MCP server startup and exposed tools in the Copilot session logs ("Start MCP Servers" step).

**GH-600 Exam Domain**: Domain 2 – Tooling, MCP & Execution (highest-weighted domain)

---

**After completing this lab**, you will have covered the majority of the highest-weighted domain in the current version of the exam.
