# GitHub Copilot Changelog Summary — Last 2 Months
**Period: February 2 – April 2, 2026**  
**Source: [github.blog/changelog/label/copilot](https://github.blog/changelog/label/copilot)**  
**Audience: GitHub Copilot Trainers**

---

## Overview

A high volume of updates landed in March and early April 2026. The dominant themes are:
- **Copilot coding agent** maturation (speed, visibility, control, integrations)
- **New models** reaching general availability
- **Agentic workflows** expanding across IDEs, mobile, and third-party tools
- **Admin & metrics** improvements for enterprise adoption

---

## 🤖 Copilot Coding Agent

The coding agent received the most attention this period — important for trainers covering autonomous coding workflows.

| Date | Change | Type |
|------|--------|------|
| Apr 1 | [Research, plan, and code with Copilot cloud agent](https://github.blog/changelog/2026-04-01-research-plan-and-code-with-copilot-cloud-agent) | 🆕 Release |
| Apr 1 | [GitHub Mobile: Faster, more flexible agent assignment from issues](https://github.blog/changelog/2026-04-01-github-mobile-faster-more-flexible-agent-assignment-from-issues) | ⬆️ Improvement |
| Mar 26 | [Ask @copilot to resolve merge conflicts on pull requests](https://github.blog/changelog/2026-03-26-ask-copilot-to-resolve-merge-conflicts-on-pull-requests) | ⬆️ Improvement |
| Mar 24 | [Ask @copilot to make changes to a pull request](https://github.blog/changelog/2026-03-24-ask-copilot-to-make-changes-to-any-pull-request) | ⬆️ Improvement |
| Mar 24 | [Manage Copilot coding agent repository access via the API](https://github.blog/changelog/2026-03-24-manage-copilot-coding-agent-repository-access-via-the-api) | 🆕 Release |
| Mar 20 | [Trace any Copilot coding agent commit to its session logs](https://github.blog/changelog/2026-03-20-trace-any-copilot-coding-agent-commit-to-its-session-logs) | ⬆️ Improvement |
| Mar 20 | [Monitor Copilot coding agent logs live in Raycast](https://github.blog/changelog/2026-03-20-monitor-copilot-coding-agent-logs-live-in-raycast) | ⬆️ Improvement |
| Mar 19 | [More visibility into Copilot coding agent sessions](https://github.blog/changelog/2026-03-19-more-visibility-into-copilot-coding-agent-sessions) | ⬆️ Improvement |
| Mar 19 | [Copilot coding agent now starts work 50% faster](https://github.blog/changelog/2026-03-19-copilot-coding-agent-now-starts-work-50-faster) | ⬆️ Improvement |
| Mar 18 | [Configure Copilot coding agent's validation tools](https://github.blog/changelog/2026-03-18-configure-copilot-coding-agents-validation-tools) | ⬆️ Improvement |
| Mar 17 | [Copilot coding agent works faster with semantic code search](https://github.blog/changelog/2026-03-17-copilot-coding-agent-works-faster-with-semantic-code-search) | ⬆️ Improvement |
| Mar 13 | [Optionally skip approval for Copilot coding agent Actions workflows](https://github.blog/changelog/2026-03-13-optionally-skip-approval-for-copilot-coding-agent-actions-workflows) | ⬆️ Improvement |
| Mar 5 | [Discover and manage agent activity with new session filters](https://github.blog/changelog/2026-03-05-discover-and-manage-agent-activity-with-new-session-filters) | ⬆️ Improvement |
| Mar 5 | [Add images to agent sessions](https://github.blog/changelog/2026-03-05-add-images-to-agent-sessions) | 🆕 Release |
| Mar 2 | [Network configuration changes for Copilot coding agent now in effect](https://github.blog/changelog/2026-03-02-network-configuration-changes-for-copilot-coding-agent-now-in-effect) | ⬆️ Improvement |

**Trainer talking points:**
- The agent can now self-serve merge conflict resolution and PR edits — great for demonstrating autonomous PR workflows.
- Session logs are now traceable per commit and viewable live in Raycast — useful for debugging and explaining agent behaviour to teams.
- Validation tools are now configurable — teach teams how to enforce quality gates in agentic pipelines.
- Approval gates for Actions workflows can now be skipped — discuss governance trade-offs.

---

## 🧠 New Models & Model Updates

Critical content for trainers: students always ask "which model should I use?"

| Date | Change | Type |
|------|--------|------|
| Apr 1 | [GPT-5.4 mini available in Copilot Student auto model selection](https://github.blog/changelog/2026-04-01-gpt-5-4-mini-is-now-available-in-copilot-student-auto-model-selection) | 🆕 Release |
| Mar 31 | [Upcoming deprecation of Claude Sonnet 4](https://github.blog/changelog/2026-03-31-upcoming-deprecation-of-claude-sonnet-4-in-github-copilot) | ⚠️ Deprecated |
| Mar 26 | [Gemini 3 Pro deprecated](https://github.blog/changelog/2026-03-26-gemini-3-pro-deprecated) | ⚠️ Deprecated |
| Mar 23 | [Gemini 3.1 Pro available in JetBrains, Xcode, and Eclipse](https://github.blog/changelog/2026-03-23-gemini-3-1-pro-is-now-available-in-jetbrains-ides-xcode-and-eclipse) | 🆕 Release |
| Mar 18 | [GPT-5.3-Codex long-term support in GitHub Copilot](https://github.blog/changelog/2026-03-18-gpt-5-3-codex-long-term-support-in-github-copilot) | 🆕 Release |
| Mar 17 | [GPT-5.4 mini is now generally available](https://github.blog/changelog/2026-03-17-gpt-5-4-mini-is-now-generally-available-for-github-copilot) | 🆕 Release |
| Mar 12 | [Copilot auto model selection GA in JetBrains IDEs](https://github.blog/changelog/2026-03-12-copilot-auto-model-selection-is-generally-available-in-jetbrains-ides) | 🆕 Release |
| Mar 5 | [GPT-5.4 is generally available in GitHub Copilot](https://github.blog/changelog/2026-03-05-gpt-5-4-is-generally-available-in-github-copilot) | 🆕 Release |
| Mar 4 | [Grok Code Fast 1 now in Copilot Free auto model selection](https://github.blog/changelog/2026-03-04-grok-code-fast-1-is-now-available-in-copilot-free-auto-model-selection) | 🆕 Release |
| Mar 2 | [Gemini 3 Pro and GPT-5.1 deprecation announced](https://github.blog/changelog/2026-03-02-upcoming-deprecation-of-gemini-3-pro-and-gpt-5-1-models) | ⚠️ Deprecated |

**Trainer talking points:**
- GPT-5.4 and GPT-5.4 mini are GA — highlight these as the current primary models.
- Auto model selection is now GA in JetBrains — good for demonstrating multi-IDE parity.
- Claude Sonnet 4 and Gemini 3 Pro are being deprecated — update any training materials that reference these.
- Grok Code Fast 1 in Free tier — useful for demos targeting students and Copilot Free users.

---

## 💻 IDE & Editor Updates

| Date | Change | Type |
|------|--------|------|
| Mar 11 | [Major agentic capabilities improvements in GitHub Copilot for JetBrains](https://github.blog/changelog/2026-03-11-major-agentic-capabilities-improvements-in-github-copilot-for-jetbrains-ides) | ⬆️ Improvement |
| Mar 6 | [GitHub Copilot in VS Code v1.110 – February release](https://github.blog/changelog/2026-03-06-github-copilot-in-visual-studio-code-v1-110-february-release) | 🆕 Release |
| Mar 6 | [Figma MCP server can now generate design layers from VS Code](https://github.blog/changelog/2026-03-06-figma-mcp-server-can-now-generate-design-layers-from-vs-code) | 🆕 Release |
| Mar 4 | [GitHub Copilot in Visual Studio — February update](https://github.blog/changelog/2026-03-04-github-copilot-in-visual-studio-february-update) | 🆕 Release |

**Trainer talking points:**
- VS Code v1.110 and Visual Studio February updates — review release notes to update any IDE-specific demo scripts.
- JetBrains now has major agentic capability parity — relevant for Java/Kotlin-focused audiences.
- Figma MCP integration in VS Code — powerful demo for design-to-code workflows.

---

## 📱 GitHub Mobile

| Date | Change | Type |
|------|--------|------|
| Apr 1 | [Refreshed Copilot tab and native session logs in GitHub Mobile](https://github.blog/changelog/2026-04-01-github-mobile-stay-in-flow-with-a-refreshed-copilot-tab-and-native-session-logs) | 🆕 Release |
| Apr 1 | [Faster, more flexible agent assignment from issues](https://github.blog/changelog/2026-04-01-github-mobile-faster-more-flexible-agent-assignment-from-issues) | ⬆️ Improvement |

**Trainer talking points:**
- Session logs are now natively accessible in mobile — teams can review agent activity on the go.

---

## 🔍 Code Review

| Date | Change | Type |
|------|--------|------|
| Mar 11 | [Request Copilot code review from GitHub CLI](https://github.blog/changelog/2026-03-11-request-copilot-code-review-from-github-cli) | ⬆️ Improvement |
| Mar 5 | [Copilot code review now runs on an agentic architecture](https://github.blog/changelog/2026-03-05-copilot-code-review-now-runs-on-an-agentic-architecture) | 🆕 Release |
| Mar 5 | [Pick a model for @copilot in pull request comments](https://github.blog/changelog/2026-03-05-pick-a-model-for-copilot-in-pull-request-comments) | ⬆️ Improvement |

**Trainer talking points:**
- Code review is now agentic — it can iterate, not just comment once. Highlight this as a significant architectural upgrade.
- Model selection per PR comment — a nuanced feature useful for power users.
- CLI support for requesting reviews — relevant for DevOps-focused trainings.

---

## 🔗 Integrations & Ecosystem (Slack, Jira, Web)

| Date | Change | Type |
|------|--------|------|
| Mar 30 | [Create issues from Slack with Copilot](https://github.blog/changelog/2026-03-30-create-issues-from-slack-with-copilot) | 🆕 Release |
| Mar 25 | [GitHub Copilot for Jira — Public preview enhancements](https://github.blog/changelog/2026-03-25-github-copilot-for-jira-public-preview-enhancements) | ⬆️ Improvement |
| Mar 11 | [Explore a repository using Copilot on the web](https://github.blog/changelog/2026-03-11-explore-a-repository-using-copilot-on-the-web) | 🆕 Release |
| Mar 5 | [GitHub Copilot coding agent for Jira is now in public preview](https://github.blog/changelog/2026-03-05-github-copilot-coding-agent-for-jira-is-now-in-public-preview) | 🆕 Release |

**Trainer talking points:**
- Jira integration is now in public preview — great for enterprise audiences using Atlassian toolchains.
- Slack-to-issue creation with Copilot — a concrete, easy-to-demonstrate productivity feature.
- Repo exploration via Copilot on the web — good for onboarding demos showing how new team members can ramp up.

---

## 📊 Admin, Metrics & Enterprise

| Date | Change | Type |
|------|--------|------|
| Mar 25 | [Copilot usage metrics now identify active coding agent users](https://github.blog/changelog/2026-03-25-copilot-usage-metrics-now-identify-active-copilot-coding-agent-users) | ⬆️ Improvement |
| Mar 20 | [Copilot usage metrics now resolve auto model selection to actual models](https://github.blog/changelog/2026-03-20-copilot-usage-metrics-now-resolve-auto-model-selection-to-actual-models) | ⬆️ Improvement |
| Mar 17 | [Copilot usage metrics now include org-level CLI activity](https://github.blog/changelog/2026-03-17-copilot-usage-metrics-now-includes-organization-level-github-copilot-cli-activity) | ⬆️ Improvement |
| Mar 13 | [Updates to GitHub Copilot for students](https://github.blog/changelog/2026-03-13-updates-to-github-copilot-for-students) | 🆕 Release |
| Mar 5 | [Copilot usage metrics now includes user-level CLI activity](https://github.blog/changelog/2026-03-05-copilot-usage-metrics-now-includes-user-level-github-copilot-cli-activity) | 🆕 Release |
| Mar 4 | [Copilot Memory now on by default for Pro and Pro+ (public preview)](https://github.blog/changelog/2026-03-04-copilot-memory-now-on-by-default-for-pro-and-pro-users-in-public-preview) | ⬆️ Improvement |
| Mar 2 | [Copilot metrics now includes plan mode](https://github.blog/changelog/2026-03-02-copilot-metrics-now-includes-plan-mode) | 🆕 Release |

**Trainer talking points:**
- Metrics now break down CLI, coding agent, and model-specific usage — equip enterprise admins with this for ROI reporting.
- Copilot Memory is now on by default for Pro/Pro+ — important behavioral change to communicate to users.
- Student plan updates — keep education-focused training materials current.

---

## ⚠️ Deprecations to Watch

Models being removed — update training demos and documentation.

| Model | Status |
|-------|--------|
| Claude Sonnet 4 | Upcoming deprecation (announced Mar 31) |
| Gemini 3 Pro | Deprecated (Mar 26) |
| GPT-5.1 | Deprecated (announced Mar 2) |

---

## Key Themes for Trainers

1. **Copilot is becoming an agent, not just an assistant** — multiple releases focus on autonomous task completion, PR modification, conflict resolution, and session observability.
2. **Enterprise governance is maturing** — validation tool configuration, API-controlled repository access, and richer usage metrics give organisations more control.
3. **Multi-IDE parity is improving** — JetBrains, Visual Studio, Xcode, Eclipse, and Eclipse now support more features previously limited to VS Code.
4. **Third-party integrations are expanding** — Jira, Slack, Figma, and Raycast integrations make Copilot part of the broader developer toolchain, not just the editor.
5. **Model landscape shifting fast** — several models deprecated within weeks of newer ones going GA; trainers should avoid hardcoding model names in materials.
