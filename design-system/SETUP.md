# Design System Setup Guide

Complete guide for setting up, deploying, and maintaining the design system on GitHub.

## 📋 Table of Contents

1. [Initial Setup](#initial-setup)
2. [GitHub Repository Setup](#github-repository-setup)
3. [CI/CD Configuration](#cicd-configuration)
4. [Publishing to NPM](#publishing-to-npm)
5. [Storybook Deployment](#storybook-deployment)
6. [Team Collaboration](#team-collaboration)

---

## Initial Setup

### 1. Create GitHub Repository

```bash
# Create a new repository on GitHub
# https://github.com/new

# Initialize git in your design-system folder
cd design-system
git init

# Add all files
git add .

# Initial commit
git commit -m "feat: initial design system setup"

# Add remote origin
git remote add origin https://github.com/your-org/design-system.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Repository Structure

Your repository should now have this structure:

```
design-system/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── publish.yml
│   │   └── storybook.yml
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── components/         # React components
├── tokens/            # Design tokens (JSON)
├── styles/            # CSS files
├── docs/              # Documentation
├── examples/          # Usage examples
├── __tests__/         # Tests
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── SETUP.md
```

---

## GitHub Repository Setup

### 1. Repository Settings

#### General Settings

Go to `Settings > General`:

- ✅ Enable "Require branches to be up to date before merging"
- ✅ Enable "Automatically delete head branches"
- ✅ Disable "Allow merge commits" (use squash merge only)

#### Branch Protection Rules

Go to `Settings > Branches` and add protection for `main`:

```
Branch name pattern: main

Protect matching branches:
✅ Require a pull request before merging
  ✅ Require approvals (1)
  ✅ Dismiss stale pull request approvals
  ✅ Require review from Code Owners
✅ Require status checks to pass before merging
  ✅ Require branches to be up to date
  Required checks:
    - test
    - lint
    - type-check
    - build
✅ Require conversation resolution before merging
✅ Do not allow bypassing the above settings
```

### 2. Add CODEOWNERS File

Create `.github/CODEOWNERS`:

```
# Design System Code Owners
# These users will be requested for review when someone opens a PR

# All files
* @your-org/design-system-team

# Tokens require design team approval
/tokens/ @your-org/design-team

# Components require engineering review
/components/ @your-org/engineering-team

# Documentation
/docs/ @your-org/design-system-team
```

### 3. Issue Templates

Create `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug Report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
---

## Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14]
- Design System Version: [e.g., 1.2.0]

## Additional Context
Any other relevant information
```

Create `.github/ISSUE_TEMPLATE/feature_request.md`:

```markdown
---
name: Feature Request
about: Suggest an idea for the design system
title: '[FEATURE] '
labels: enhancement
---

## Problem
What problem does this solve?

## Proposed Solution
Describe the feature you'd like

## Alternatives Considered
Other solutions you've thought about

## Design Mockups
If available

## Additional Context
Any other context or screenshots
```

### 4. Pull Request Template

Create `.github/PULL_REQUEST_TEMPLATE.md`:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature (component/token)
- [ ] Breaking change
- [ ] Documentation update
- [ ] Refactoring

## Related Issues
Closes #[issue number]

## Checklist
- [ ] Tests pass locally
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Storybook stories added/updated
- [ ] Accessibility checked (keyboard, screen reader)
- [ ] Works in dark mode
- [ ] Mobile responsive

## Visual Changes
[Add screenshots or Storybook links]

## Breaking Changes
[Describe any breaking changes and migration path]

## Additional Notes
[Any other context]
```

---

## CI/CD Configuration

### 1. GitHub Actions Workflow

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test -- --coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json

  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint

  type-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Type check
        run: npm run type-check

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
```

### 2. Publish Workflow

Create `.github/workflows/publish.yml`:

```yaml
name: Publish

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Publish to NPM
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
      
      - name: Create GitHub Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          draft: false
          prerelease: false
```

---

## Publishing to NPM

### 1. Setup NPM Account

1. Create account at [npmjs.com](https://www.npmjs.com)
2. Create organization: `@your-org`
3. Generate access token:
   - Settings > Access Tokens > Generate New Token
   - Type: Automation
   - Copy the token

### 2. Add NPM Token to GitHub

1. Go to repository Settings > Secrets and variables > Actions
2. Click "New repository secret"
3. Name: `NPM_TOKEN`
4. Value: [paste your NPM token]
5. Click "Add secret"

### 3. Publishing Process

```bash
# Update version in package.json
npm version patch  # or minor, or major

# This creates a git tag
# Push the tag to trigger publish workflow
git push --follow-tags

# Or manually publish
npm publish --access public
```

### 4. Version Management

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features (backward compatible)
- **PATCH** (0.0.1): Bug fixes

```bash
# Patch release (bug fixes)
npm version patch

# Minor release (new features)
npm version minor

# Major release (breaking changes)
npm version major
```

---

## Storybook Deployment

### 1. Deploy to GitHub Pages

Create `.github/workflows/storybook.yml`:

```yaml
name: Deploy Storybook

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build Storybook
        run: npm run build-storybook
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

### 2. Enable GitHub Pages

1. Go to repository Settings > Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save

Your Storybook will be available at:
`https://your-org.github.io/design-system/`

### 3. Alternative: Chromatic

For visual regression testing and hosting:

```bash
# Install Chromatic
npm install --save-dev chromatic

# Add script to package.json
"chromatic": "chromatic"

# Run Chromatic
npx chromatic --project-token=YOUR_TOKEN
```

---

## Team Collaboration

### 1. Team Setup

#### Design Team Access

```
Settings > Collaborators and teams > Add teams

Team: design-team
Role: Write
Permissions:
  - Push to non-protected branches
  - Create issues and PRs
  - Review PRs
```

#### Engineering Team Access

```
Team: engineering-team
Role: Write
Permissions:
  - Push to non-protected branches
  - Create issues and PRs
  - Review PRs
  - Merge PRs (with approval)
```

### 2. Workflow

#### For Contributors

1. **Create a branch**
   ```bash
   git checkout -b feature/new-button-variant
   ```

2. **Make changes and commit**
   ```bash
   git add .
   git commit -m "feat: add ghost button variant"
   ```

3. **Push and create PR**
   ```bash
   git push origin feature/new-button-variant
   ```
   Then create PR on GitHub

4. **Wait for review and checks**

5. **Merge after approval**

#### For Maintainers

1. **Review PRs**
   - Check code quality
   - Test functionality
   - Review visual changes in Storybook
   - Ensure documentation is updated

2. **Merge strategy**
   - Use "Squash and merge"
   - Write clear merge commit message
   - Delete branch after merge

### 3. Release Process

1. **Prepare release**
   ```bash
   # Review changes since last release
   git log v1.0.0..HEAD --oneline
   
   # Update CHANGELOG.md
   # Update version in package.json
   npm version minor
   ```

2. **Create release notes**
   - List new features
   - List bug fixes
   - List breaking changes (if any)
   - Include migration guide

3. **Publish**
   ```bash
   git push --follow-tags
   ```

4. **Announce**
   - Slack announcement
   - Email to design/engineering
   - Update documentation site

---

## Monitoring & Maintenance

### 1. Analytics

- **NPM Downloads**: Track at npmjs.com
- **GitHub Insights**: Check repository traffic
- **Storybook**: Monitor via hosting platform

### 2. Issue Triage

Weekly process:
- Review new issues
- Label appropriately
- Assign to team members
- Set milestones

### 3. Dependency Updates

Use Dependabot:

Create `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
```

---

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version  # Should be 18+

# Rebuild
npm run build
```

### Tests Fail

```bash
# Run tests locally
npm test

# Update snapshots
npm test -- -u

# Check coverage
npm test -- --coverage
```

### NPM Publish Fails

- Check NPM_TOKEN secret is set
- Verify package.json version is updated
- Ensure no version conflicts
- Check registry access

---

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [NPM Publishing Guide](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [Storybook Deployment](https://storybook.js.org/docs/react/sharing/publish-storybook)
- [Semantic Versioning](https://semver.org/)

---

## Support

- **Issues**: [github.com/your-org/design-system/issues](https://github.com/your-org/design-system/issues)
- **Discussions**: [github.com/your-org/design-system/discussions](https://github.com/your-org/design-system/discussions)
- **Slack**: #design-system
- **Email**: design-system@your-org.com

---

**Last Updated**: 2025-01-XX  
**Maintainers**: @design-system-team
