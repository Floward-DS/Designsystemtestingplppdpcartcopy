# Component Library

A collection of reusable React components built with design tokens for consistency.

## Overview

All components in this library:
- Use design tokens for styling
- Follow accessibility best practices (WCAG AA minimum)
- Are fully typed with TypeScript
- Support customization through props
- Are mobile-first responsive

## Components

### Button

Primary interactive element for user actions.

#### Variants

- **primary**: Main call-to-action (filled, primary color)
- **secondary**: Secondary actions (filled, secondary color)
- **outline**: Outlined button with transparent background
- **destructive**: For destructive actions (delete, remove)
- **ghost**: Minimal button with no background

#### Sizes

- **sm**: 36px height, compact padding
- **md**: 44px height, standard padding (default)
- **lg**: 56px height, generous padding

#### Usage

```tsx
import { Button } from '@your-org/design-system/components';

// Basic usage
<Button variant="primary" size="md">
  Click me
</Button>

// With icons
<Button
  variant="outline"
  iconBefore={<Icon />}
  iconAfter={<ArrowIcon />}
>
  Learn More
</Button>

// Loading state
<Button loading>
  Submitting...
</Button>

// Full width
<Button fullWidth variant="primary">
  Sign In
</Button>

// Disabled
<Button disabled>
  Disabled Button
</Button>
```

#### Props

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

---

### Card

Container component for grouping related content.

#### Variants

- **default**: Plain card with white background
- **elevated**: Card with shadow
- **outlined**: Card with border

#### Subcomponents

- `Card.Header`: Header section
- `Card.Title`: Card title (h3)
- `Card.Description`: Subtitle/description
- `Card.Content`: Main content area
- `Card.Footer`: Footer section

#### Usage

```tsx
import { Card } from '@your-org/design-system/components';

// Basic card
<Card variant="elevated" padding="lg">
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>Optional description</Card.Description>
  </Card.Header>
  <Card.Content>
    Main content goes here
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>

// Simple card
<Card padding="md">
  Simple card content
</Card>
```

#### Props

```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
```

---

### Input

Form input component with label, helper text, and error states.

#### Features

- Built-in label support
- Error state with message
- Helper text
- Icon support (before/after)
- Different sizes

#### Usage

```tsx
import { Input } from '@your-org/design-system/components';

// Basic input
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
/>

// With helper text
<Input
  label="Password"
  type="password"
  helperText="Must be at least 8 characters"
/>

// With error
<Input
  label="Username"
  error="Username is already taken"
/>

// With icons
<Input
  label="Search"
  iconBefore={<SearchIcon />}
  iconAfter={<ClearIcon />}
/>

// Different sizes
<Input size="sm" />
<Input size="md" /> {/* default */}
<Input size="lg" />
```

#### Props

```typescript
interface InputProps {
  label?: string;
  helperText?: string;
  error?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
```

---

### Typography

Text components with preset styles from design tokens.

#### Variants

- **h1**: Hero heading (72px, Montas)
- **h2**: Section heading (38px, Montas)
- **h3**: Subsection heading (32px, Montas)
- **h4**: Component heading (22px, Founders Grotesk)
- **body**: Body text (16px, Founders Grotesk)
- **label**: Label text (14px, Founders Grotesk)
- **small**: Small text (12px, Founders Grotesk)
- **price**: Price display (18px, semibold)

#### Usage

```tsx
import {
  Typography,
  H1,
  H2,
  H3,
  H4,
  Body,
  Label,
  Small,
  Price,
} from '@your-org/design-system/components';

// Using convenience components
<H1>Hero Heading</H1>
<H2>Section Title</H2>
<Body>This is body text.</Body>
<Price>$99.99</Price>

// Using Typography component
<Typography variant="h3" color="primary">
  Primary Heading
</Typography>

<Typography variant="body" align="center" color="muted">
  Centered muted text
</Typography>
```

#### Props

```typescript
interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'label' | 'small' | 'price';
  color?: 'default' | 'muted' | 'primary' | 'destructive';
  align?: 'left' | 'center' | 'right';
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
```

---

## Composition Patterns

### Form Layout

```tsx
<Card variant="outlined" padding="lg">
  <Card.Header>
    <Card.Title>Sign In</Card.Title>
    <Card.Description>Enter your credentials</Card.Description>
  </Card.Header>
  <Card.Content>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
      />
      <Input
        label="Password"
        type="password"
        helperText="Must be at least 8 characters"
      />
      <Button variant="primary" fullWidth>
        Sign In
      </Button>
    </form>
  </Card.Content>
</Card>
```

### Product Card

```tsx
<Card variant="elevated">
  <img src="product.jpg" alt="Product" />
  <Card.Content>
    <H4>Product Name</H4>
    <Body color="muted">Product description</Body>
    <Price>$199.99</Price>
    <Button variant="primary" fullWidth>
      Add to Cart
    </Button>
  </Card.Content>
</Card>
```

### Alert Message

```tsx
<Card variant="outlined" padding="md">
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <AlertIcon />
    <div>
      <Label>Important Notice</Label>
      <Small color="muted">Please read this carefully.</Small>
    </div>
  </div>
</Card>
```

## Accessibility

All components follow WCAG 2.1 Level AA guidelines:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Indicators**: Visible focus states using `--ring` color
- **Color Contrast**: Minimum 4.5:1 ratio for text
- **ARIA Labels**: Proper labeling for screen readers
- **Touch Targets**: Minimum 44x44px for mobile

## Customization

### Styling

Components accept `className` and `style` props for customization:

```tsx
<Button
  variant="primary"
  className="my-custom-class"
  style={{ marginTop: '20px' }}
>
  Custom Button
</Button>
```

### Theming

Override design tokens to customize the entire system:

```css
:root {
  --primary: rgba(0, 100, 200, 1.00);
  --radius-button: 8px;
  --font-founders: 'Inter', sans-serif;
}
```

### Component Extension

Extend components by wrapping them:

```tsx
import { Button } from '@your-org/design-system/components';

export function IconButton({ icon, ...props }) {
  return (
    <Button iconBefore={icon} {...props} />
  );
}
```

## Testing

All components are tested with:
- Unit tests (Jest + React Testing Library)
- Visual regression tests (Chromatic)
- Accessibility tests (axe-core)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on adding new components.
