# Contributing to the Design System

Thank you for your interest in contributing! This document provides guidelines for contributing to our design system.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Adding Components](#adding-components)
- [Adding Tokens](#adding-tokens)
- [Testing](#testing)
- [Documentation](#documentation)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Prioritize the user experience

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- Git
- Code editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/design-system.git
cd design-system

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

### Project Structure

```
design-system/
├── tokens/              # Design tokens (JSON)
├── components/          # React components
├── styles/             # CSS files
├── docs/               # Documentation
├── examples/           # Usage examples
└── __tests__/          # Tests
```

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/new-component
# or
git checkout -b fix/button-padding
# or
git checkout -b docs/update-readme
```

Branch naming:
- `feature/` - New features or components
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/fixes

### 2. Make Changes

Follow the guidelines below based on what you're contributing.

### 3. Test Your Changes

```bash
# Run tests
npm test

# Run linting
npm run lint

# Type check
npm run type-check

# Build
npm run build
```

### 4. Commit Your Changes

We use conventional commits:

```bash
git commit -m "feat: add Badge component"
git commit -m "fix: correct Button padding in small size"
git commit -m "docs: update Typography usage examples"
```

Commit types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Test additions/fixes
- `chore`: Build/tooling changes

## Adding Components

### Component Checklist

Before submitting a new component:

- [ ] Follows design token usage
- [ ] Has TypeScript types
- [ ] Includes JSDoc comments
- [ ] Has unit tests (>80% coverage)
- [ ] Has Storybook stories
- [ ] Is accessible (WCAG AA)
- [ ] Is documented
- [ ] Works in dark mode
- [ ] Is responsive

### Component Template

```tsx
import React from 'react';
import { cssVars } from '../../tokens';

/**
 * ComponentName description
 * 
 * @example
 * <ComponentName variant="primary">
 *   Content
 * </ComponentName>
 */
export interface ComponentNameProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Component variant
   */
  variant?: 'primary' | 'secondary';
  
  /**
   * Additional content
   */
  children?: React.ReactNode;
}

export const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  (
    {
      variant = 'primary',
      className = '',
      style,
      children,
      ...props
    },
    ref
  ) => {
    const componentStyle: React.CSSProperties = {
      backgroundColor: cssVars.card,
      padding: cssVars.spacing[4],
      borderRadius: cssVars['radius'],
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`ds-component-name ${className}`}
        style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';

export default ComponentName;
```

### File Structure

```
components/
└── ComponentName/
    ├── ComponentName.tsx        # Main component
    ├── ComponentName.test.tsx   # Unit tests
    ├── ComponentName.stories.tsx # Storybook stories
    ├── index.ts                 # Exports
    └── README.md                # Component docs
```

### Component Guidelines

**DO:**
- Use design tokens for all styling
- Support dark mode
- Include TypeScript types
- Forward refs when appropriate
- Use semantic HTML
- Support keyboard navigation
- Include ARIA attributes
- Test edge cases

**DON'T:**
- Hard-code colors or spacing
- Use `!important` CSS
- Break existing component APIs
- Add external dependencies without discussion
- Skip accessibility considerations

## Adding Tokens

### Token Guidelines

1. **Naming**: Use semantic names (e.g., `primary`, not `blue`)
2. **Format**: Follow Design Tokens Community Group spec
3. **Documentation**: Add descriptions for all tokens
4. **Consistency**: Align with existing token patterns

### Adding a New Token

1. Add to appropriate JSON file in `/tokens`:

```json
{
  "color": {
    "warning": {
      "DEFAULT": {
        "$type": "color",
        "$value": "rgba(255, 165, 0, 1.00)",
        "$description": "Warning color for alerts"
      },
      "foreground": {
        "$type": "color",
        "$value": "rgba(255, 255, 255, 1.00)",
        "$description": "Text color on warning backgrounds"
      }
    }
  }
}
```

2. Update `/tokens/index.ts`:

```typescript
export const tokens = {
  // ... existing tokens
  warning: colors.color.warning,
};
```

3. Update `/styles/tokens.css`:

```css
:root {
  --warning: rgba(255, 165, 0, 1.00);
  --warning-foreground: rgba(255, 255, 255, 1.00);
}
```

4. Document in `/docs/tokens.md`

## Testing

### Unit Tests

```tsx
// ComponentName.test.tsx
import { render, screen } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders children correctly', () => {
    render(<ComponentName>Test Content</ComponentName>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(<ComponentName variant="primary">Test</ComponentName>);
    const element = screen.getByText('Test');
    expect(element).toHaveClass('ds-component-name');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ComponentName ref={ref}>Test</ComponentName>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
```

### Accessibility Tests

```tsx
import { axe } from 'jest-axe';

it('has no accessibility violations', async () => {
  const { container } = render(<ComponentName>Test</ComponentName>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Visual Tests

Create Storybook stories for visual regression testing:

```tsx
// ComponentName.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Example content',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Example content',
  },
};
```

## Documentation

### Component Documentation

Each component needs:

1. **JSDoc comments** in the component file
2. **README.md** in the component folder
3. **Entry in `/docs/components.md`**
4. **Storybook stories** with examples

### Documentation Template

````markdown
# ComponentName

Brief description of what the component does.

## Usage

```tsx
import { ComponentName } from '@your-org/design-system/components';

<ComponentName variant="primary">
  Content
</ComponentName>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' | 'primary' | Visual variant |
| children | ReactNode | - | Content to display |

## Examples

### Basic Usage
[code example]

### Advanced Usage
[code example]

## Accessibility

- Keyboard navigation support
- ARIA labels included
- Focus management

## Related Components

- [OtherComponent](./OtherComponent.md)
````

## Pull Request Process

### Before Submitting

1. Run all tests and ensure they pass
2. Run linting and fix any issues
3. Update documentation
4. Add changeset (if applicable)
5. Ensure build succeeds

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Tests pass
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] Changeset added (if needed)
- [ ] Storybook stories added/updated
- [ ] Accessibility checked

## Screenshots (if applicable)
[Add screenshots]

## Related Issues
Closes #[issue number]
```

### Review Process

1. **Automated Checks**: CI runs tests, linting, build
2. **Code Review**: At least one maintainer reviews
3. **Visual Review**: Storybook deploy link checked
4. **Approval**: Maintainer approves changes
5. **Merge**: Squash and merge to main

### After Merge

- Changes are automatically deployed to Storybook
- New version published (if using changesets)
- Documentation site updated

## Questions?

- **Slack**: #design-system
- **GitHub Discussions**: [Link]
- **Email**: design-system@your-org.com

## Thank You!

Your contributions make this design system better for everyone. We appreciate your time and effort! 🎉
