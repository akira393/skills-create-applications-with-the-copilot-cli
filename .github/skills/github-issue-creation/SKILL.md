---
name: github-issue-creation
description: Guide for creating GitHub issues using the repository's issue templates. Use this when asked to create a GitHub issue.
---

When creating a GitHub issue in this repository, always follow these steps:

1. Read the issue template at `.github/ISSUE_TEMPLATE/feature_request.md` to understand the required format.
2. The template structure is:
   - **Feature Description**: A clear and concise description of the feature you'd like to see.
   - **Use Case**: Describe the use case or problem this feature would solve.
   - **Proposed Solution**: How do you envision this feature working?
   - **Additional Context**: Any other context, screenshots, or examples about the feature request.
3. The issue title must contain the word "calculator" and follow the template format.
4. Apply the `enhancement` label to the issue.
5. Create the issue using the `gh issue create` command or the GitHub MCP server tools.

Example command:
```bash
gh issue create \
  --title "Feature request: calculator <feature name>" \
  --label "enhancement" \
  --body "## Feature Description
...

## Use Case
...

## Proposed Solution
...

## Additional Context
..."
```

Always ensure the issue body follows the exact section headings from the template.
