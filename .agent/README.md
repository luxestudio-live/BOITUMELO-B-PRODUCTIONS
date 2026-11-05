# Agent Routing Architecture

This directory defines the operational routing, capabilities, and skill boundaries for specialized AI agents collaborating in this workspace.

> Read your own agent file first, then load only the skills it lists for the task at hand.

## Agent Roster & Specialization

| Agent | Routing File | Core Responsibilities | Primary Skills | Secondary Skills |
|---|---|---|---|---|
| **Claude** | [claude.md](claude.md) | Architecture, reasoning, design systems, large refactors | `impeccable`, `design-taste-frontend`, `web-design-guidelines`, `ui-ux-pro-max` | `tailwind` |
| **Gemini** | [gemini.md](gemini.md) | Visual design, references, rapid iteration | `ui-ux-pro-max`, `awwwards`, `jury`, `tailwind` | `design-taste-frontend` |
| **ChatGPT** | [chatgpt.md](chatgpt.md) | Precise implementation, animation, polish | `framer-motion-animator`, Emil Kowalski skills suite (`animate`, `choreograph`, `emil-design-eng`, etc.), `tailwind` | `web-design-guidelines` |

## General Collaboration Rules

1. **Stack & Convention Preservation**: Never introduce foreign patterns, libraries, or unapproved architectural shifts without explicit alignment.
2. **Token Integrity**: Preserve established design tokens, theme configurations, CSS variables, and spacing scales.
3. **Quality Gate**: Every agent must verify that any modified or created user interface completes a `web-design-guidelines` review before declaring UI work finished.
4. **Handoffs**: Coordinate transitions using the handoff paths outlined in each agent's specification.

