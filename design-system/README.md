# Design System

A comprehensive design system built with design tokens and reusable React components for consistent UI development.

## 📦 Structure

```
design-system/
├── tokens/              # Design tokens (colors, typography, spacing, etc.)
├── components/          # Reusable React components
├── styles/             # Base styles and CSS utilities
├── docs/               # Documentation and guidelines
└── examples/           # Usage examples
```

## 🚀 Quick Start

### Installation

```bash
# Install the design system in your project
npm install @your-org/design-system
```

### Basic Usage

```tsx
import { Button, Card } from '@your-org/design-system/components';
import '@your-org/design-system/styles/tokens.css';

function App() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

## 🎨 Design Tokens

All design decisions are captured as tokens for consistency across platforms.

### Colors

```tsx
import { tokens } from '@your-org/design-system/tokens';

// JavaScript/TypeScript
const primaryColor = tokens.colors.primary;

// CSS
.element {
  background-color: var(--color-primary);
}
```

### Typography

```tsx
// CSS
.heading {
  font-family: var(--font-montas);
  font-size: var(--text-h1);
  font-weight: var(--font-weight-normal);
}
```

### Spacing

```tsx
// CSS
.container {
  padding: var(--spacing-4);
  gap: var(--spacing-3);
}
```

## 🧩 Components

### Button

```tsx
import { Button } from '@your-org/design-system/components';

<Button variant="primary" size="lg">
  Primary Button
</Button>

<Button variant="secondary" size="md">
  Secondary Button
</Button>

<Button variant="outline" size="sm">
  Outline Button
</Button>
```

### Card

```tsx
import { Card } from '@your-org/design-system/components';

<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
  </Card.Header>
  <Card.Content>
    Card content goes here
  </Card.Content>
</Card>
```

### Input

```tsx
import { Input } from '@your-org/design-system/components';

<Input 
  label="Email"
  type="email"
  placeholder="Enter your email"
/>
```

## 📚 Documentation

- [Design Tokens](./docs/tokens.md)
- [Components](./docs/components.md)
- [Typography](./docs/typography.md)
- [Color System](./docs/colors.md)
- [Spacing System](./docs/spacing.md)
- [Contribution Guidelines](./docs/CONTRIBUTING.md)

## 🎯 Design Principles

1. **Consistency** - Use tokens for all design decisions
2. **Accessibility** - WCAG AA compliant minimum
3. **Responsiveness** - Mobile-first approach
4. **Simplicity** - Clear component APIs
5. **Flexibility** - Composable and customizable

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build the library
npm run build

# Run tests
npm test

# Lint
npm run lint
```

## 📄 License

MIT © Your Organization

## 🤝 Contributing

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for contribution guidelines.

## 📮 Support

- GitHub Issues: [github.com/your-org/design-system/issues](https://github.com/your-org/design-system/issues)
- Documentation: [design-system.your-org.com](https://design-system.your-org.com)
- Slack: #design-system
