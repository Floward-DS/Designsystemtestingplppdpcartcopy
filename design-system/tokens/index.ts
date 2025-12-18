/**
 * Design Tokens
 * 
 * Centralized design tokens for colors, typography, spacing, and more.
 * These tokens ensure consistency across all components and applications.
 */

import colors from './colors.json';
import typography from './typography.json';
import spacing from './spacing.json';
import shadows from './shadows.json';

export const tokens = {
  colors: colors.color,
  typography: typography.typography,
  spacing: spacing.spacing,
  borderRadius: spacing.borderRadius,
  borderWidth: spacing.borderWidth,
  shadows: shadows.shadow,
};

// Export individual token categories
export { colors, typography, spacing, shadows };

// TypeScript types for tokens
export type ColorToken = keyof typeof tokens.colors;
export type TypographyToken = keyof typeof tokens.typography;
export type SpacingToken = keyof typeof tokens.spacing;
export type BorderRadiusToken = keyof typeof tokens.borderRadius;
export type ShadowToken = keyof typeof tokens.shadows;

/**
 * Helper function to get CSS variable name from token path
 */
export function getTokenVar(path: string): string {
  return `var(--${path.replace(/\./g, '-')})`;
}

/**
 * CSS Variables mapping
 */
export const cssVars = {
  // Colors
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  card: 'var(--card)',
  'card-foreground': 'var(--card-foreground)',
  popover: 'var(--popover)',
  'popover-foreground': 'var(--popover-foreground)',
  primary: 'var(--primary)',
  'primary-foreground': 'var(--primary-foreground)',
  secondary: 'var(--secondary)',
  'secondary-foreground': 'var(--secondary-foreground)',
  muted: 'var(--muted)',
  'muted-foreground': 'var(--muted-foreground)',
  accent: 'var(--accent)',
  'accent-foreground': 'var(--accent-foreground)',
  destructive: 'var(--destructive)',
  'destructive-foreground': 'var(--destructive-foreground)',
  border: 'var(--border)',
  input: 'var(--input)',
  'input-background': 'var(--input-background)',
  ring: 'var(--ring)',
  
  // Typography
  'font-montas': 'var(--font-montas)',
  'font-founders': 'var(--font-founders)',
  'text-h1': 'var(--text-h1)',
  'text-h2': 'var(--text-h2)',
  'text-h3': 'var(--text-h3)',
  'text-h4': 'var(--text-h4)',
  'text-base': 'var(--text-base)',
  'text-label': 'var(--text-label)',
  'text-small': 'var(--text-small)',
  'text-price': 'var(--text-price)',
  'font-weight-light': 'var(--font-weight-light)',
  'font-weight-normal': 'var(--font-weight-normal)',
  'font-weight-medium': 'var(--font-weight-medium)',
  'font-weight-semibold': 'var(--font-weight-semibold)',
  
  // Spacing & Radius
  'radius': 'var(--radius)',
  'radius-button': 'var(--radius-button)',
  'radius-card': 'var(--radius-card)',
  'radius-toggle': 'var(--radius-toggle)',
  
  // Shadows
  'elevation-sm': 'var(--elevation-sm)',
} as const;

export default tokens;
