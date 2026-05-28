# Custom Agent YAML Quick Reference

## Basic Structure

```yaml
---
name: my-agent
description: What this agent is good at
tools: ["read", "edit", "search"]     # or ["*"] or []
model: gpt-4o                        # optional
---

# Your detailed instructions for the agent go here (markdown)
```

## Important Frontmatter Fields

| Field                        | Purpose                                                                 | Common Values                     |
|-----------------------------|-------------------------------------------------------------------------|-----------------------------------|
| `name`                      | Display name                                                            | -                                 |
| `description`               | Required. What the agent does                                           | Clear sentence                    |
| `tools`                     | Controls which tools (including MCP) the agent can use                  | `["*"]`, `[]`, or specific list   |
| `mcp-servers`               | Define MCP servers **for this specific agent**                          | Object with server configs        |
| `disable-model-invocation`  | Prevent Copilot from auto-using this agent                              | `true` / `false`                  |

## Tool Filtering Examples

```yaml
# Allow everything
tools: ["*"]

# Very restrictive
tools: ["read", "search"]

# Only specific MCP tools
tools: ["read", "github-mcp/get_issue", "github-mcp/list_issues"]

# All tools from one MCP server
tools: ["my-mcp-server/*"]
```

## MCP Server Configuration Inside an Agent

```yaml
mcp-servers:
  my-mcp:
    type: "local"          # or "http", "sse"
    command: "npx"
    args: ["some-mcp-server@latest"]
    tools: ["*"]           # or specific tools
    env:
      API_KEY: ${{ secrets.COPILOT_MCP_API_KEY }}
```

## Common Patterns

**Planning-only agent**
```yaml
tools: ["read", "search"]
```

**Implementation agent with limited MCP access**
```yaml
tools: ["read", "edit", "my-mcp/specific-tool"]
```

**Very safe read-only agent**
```yaml
tools: ["read", "search"]
```

## Validation Tip

After an agent runs, always check the Copilot session logs (in the PR timeline → "View session") and expand **Start MCP Servers** to confirm your MCP servers started and exposed the expected tools.

---

**Source**: Compiled from official GitHub documentation (2026)
