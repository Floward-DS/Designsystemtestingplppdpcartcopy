# Design Tokens

Design tokens are the visual design atoms of the design system. They are named entities that store visual design attributes, ensuring consistency and scalability across products.

## What are Design Tokens?

Design tokens are platform-agnostic variables that represent design decisions. Instead of hard-coding values like colors, spacing, or typography, we use tokens that can be updated globally.

## Token Categories

### Colors

All colors in the design system follow a semantic naming convention based on their purpose.

#### Base Colors

```css
--background: The default background color for the application
--foreground: The default text/element color on backgrounds
--card: Background color for cards and containers
--card-foreground: Text color on cards
```

#### Semantic Colors

```css
--primary: Primary brand color for CTAs and important elements
--secondary: Secondary color for less prominent actions
--accent: Accent color for highlights
--muted: Muted color for disabled or less prominent elements
--destructive: Color for destructive actions (delete, remove)
--success: Color for success states and confirmations
```

#### Component Colors

```css
--border: Default border color
--input: Input field fill color
--input-background: Input field background
--ring: Focus ring color
```

### Typography

#### Font Families

```css
--font-montas: 'Montas', serif
  Usage: Display headings (H1, H2, H3)
  
--font-founders: 'Founders Grotesk', sans-serif
  Usage: Body text, UI elements, buttons
```

#### Font Sizes

```css
--text-h1: 72px    /* Hero headings */
--text-h2: 38px    /* Section headings */
--text-h3: 32px    /* Subsection headings */
--text-h4: 22px    /* Card/component headings */
--text-base: 16px  /* Body text */
--text-label: 14px /* Form labels */
--text-small: 12px /* Captions, helper text */
--text-price: 18px /* Price displays */
```

#### Font Weights

```css
--font-weight-light: 300     /* Subtle text */
--font-weight-normal: 400    /* Body text */
--font-weight-medium: 500    /* Emphasis */
--font-weight-semibold: 600  /* Strong emphasis */
```

### Spacing

Spacing tokens follow a consistent scale for padding, margins, and gaps.

```css
--spacing-0: 0px      /* None */
--spacing-1: 4px      /* Extra small */
--spacing-2: 8px      /* Small */
--spacing-3: 12px     /* Medium */
--spacing-4: 16px     /* Base */
--spacing-5: 20px     /* Large */
--spacing-6: 24px     /* Extra large */
--spacing-8: 32px     /* 2XL */
--spacing-10: 40px    /* 3XL */
--spacing-12: 48px    /* 4XL */
--spacing-16: 64px    /* 5XL */
--spacing-20: 80px    /* 6XL */
--spacing-24: 96px    /* 7XL */
--spacing-32: 128px   /* 8XL */
```

### Border Radius

```css
--radius: 12px           /* Default radius */
--radius-sm: 8px         /* Small radius */
--radius-md: 10px        /* Medium radius */
--radius-lg: 12px        /* Large radius */
--radius-xl: 16px        /* Extra large radius */
--radius-button: 54px    /* Button radius (pill-shaped) */
--radius-card: 12px      /* Card radius */
--radius-toggle: 100px   /* Toggle/pill radius */
--radius-full: 9999px    /* Fully rounded */
```

### Shadows

```css
--elevation-sm: 0px 4px 4px 0px rgba(108, 108, 108, 0.15)
  Usage: Cards, small elevations
  
--elevation-md: 0px 6px 12px 0px rgba(108, 108, 108, 0.15)
  Usage: Dropdowns, tooltips
  
--elevation-lg: 0px 10px 24px 0px rgba(108, 108, 108, 0.2)
  Usage: Modals, dialogs
  
--elevation-xl: 0px 20px 40px 0px rgba(108, 108, 108, 0.25)
  Usage: Prominent overlays
```

## Usage

### In CSS

```css
.button {
  background-color: var(--primary);
  color: var(--primary-foreground);
  padding: var(--spacing-4);
  border-radius: var(--radius-button);
  font-family: var(--font-founders);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
}
```

### In JavaScript/TypeScript

```typescript
import { tokens, cssVars } from '@your-org/design-system/tokens';

// Access token values
const primaryColor = tokens.colors.primary.DEFAULT.$value;

// Use CSS variable references
const buttonStyle = {
  backgroundColor: cssVars.primary,
  color: cssVars['primary-foreground'],
};
```

### In React Components

```tsx
import { cssVars } from '@your-org/design-system/tokens';

function MyComponent() {
  return (
    <div
      style={{
        backgroundColor: cssVars.card,
        padding: cssVars.spacing[4],
        borderRadius: cssVars['radius-card'],
      }}
    >
      Content
    </div>
  );
}
```

## Dark Mode

The design system supports dark mode through the `.dark` class:

```html
<html class="dark">
  <!-- Dark mode enabled -->
</html>
```

Dark mode tokens are automatically applied when the `.dark` class is present on a parent element.

## Best Practices

### ✅ DO

- Use semantic token names instead of literal values
- Reference tokens through CSS variables for runtime flexibility
- Use spacing tokens for all margins, padding, and gaps
- Use typography tokens for all text styles
- Document custom tokens when extending the system

### ❌ DON'T

- Hard-code color values (e.g., `#074E59`)
- Use arbitrary spacing values (e.g., `17px`)
- Mix token types (e.g., using `--text-h1` for spacing)
- Override token values inline without good reason
- Create tokens that aren't semantic

## Extending Tokens

To add custom tokens:

1. Add to the appropriate JSON file in `/tokens`
2. Update `/tokens/index.ts` to export new tokens
3. Update `/styles/tokens.css` to include CSS variables
4. Document the new tokens in this guide

Example:

```json
// tokens/colors.json
{
  "color": {
    "brand": {
      "light": {
        "$type": "color",
        "$value": "rgba(139, 170, 173, 1.00)"
      }
    }
  }
}
```

```css
/* styles/tokens.css */
:root {
  --brand-light: rgba(139, 170, 173, 1.00);
}
```

## Token Format

We follow the [Design Tokens Community Group](https://design-tokens.github.io/community-group/format/) specification:

- `$type`: The type of token (color, dimension, fontFamily, etc.)
- `$value`: The actual value of the token
- `$description`: Human-readable description of the token's purpose

## Tools & Integration

- **Figma**: Use [Tokens Studio](https://tokens.studio/) plugin to sync tokens
- **Style Dictionary**: Export tokens to multiple platforms (iOS, Android, Web)
- **Storybook**: View all tokens in the design system documentation

## References

- [Design Tokens Community Group](https://design-tokens.github.io/community-group/format/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Tokens Studio for Figma](https://tokens.studio/)
