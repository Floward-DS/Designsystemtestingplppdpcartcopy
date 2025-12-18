import React from 'react';
import { cssVars } from '../../tokens';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'label' | 'small' | 'price';

export interface TypographyProps {
  /**
   * Typography variant
   */
  variant?: TypographyVariant;
  
  /**
   * Custom color
   */
  color?: 'default' | 'muted' | 'primary' | 'destructive';
  
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right';
  
  /**
   * Custom HTML element
   */
  as?: keyof JSX.IntrinsicElements;
  
  /**
   * Additional CSS class
   */
  className?: string;
  
  /**
   * Inline styles
   */
  style?: React.CSSProperties;
  
  /**
   * Content
   */
  children: React.ReactNode;
}

const variantStyles: Record<TypographyVariant, React.CSSProperties> = {
  h1: {
    fontFamily: cssVars['font-montas'],
    fontSize: cssVars['text-h1'],
    fontWeight: cssVars['font-weight-normal'],
    lineHeight: 1.2,
  },
  h2: {
    fontFamily: cssVars['font-montas'],
    fontSize: cssVars['text-h2'],
    fontWeight: cssVars['font-weight-normal'],
    lineHeight: 1.3,
  },
  h3: {
    fontFamily: cssVars['font-montas'],
    fontSize: cssVars['text-h3'],
    fontWeight: cssVars['font-weight-normal'],
    lineHeight: 1.3,
  },
  h4: {
    fontFamily: cssVars['font-founders'],
    fontSize: cssVars['text-h4'],
    fontWeight: cssVars['font-weight-light'],
    lineHeight: 1.4,
  },
  body: {
    fontFamily: cssVars['font-founders'],
    fontSize: cssVars['text-base'],
    fontWeight: cssVars['font-weight-normal'],
    lineHeight: 1.5,
  },
  label: {
    fontFamily: cssVars['font-founders'],
    fontSize: cssVars['text-label'],
    fontWeight: cssVars['font-weight-normal'],
    lineHeight: 1.4,
  },
  small: {
    fontFamily: cssVars['font-founders'],
    fontSize: cssVars['text-small'],
    fontWeight: cssVars['font-weight-normal'],
    lineHeight: 1.4,
  },
  price: {
    fontFamily: cssVars['font-founders'],
    fontSize: cssVars['text-price'],
    fontWeight: cssVars['font-weight-semibold'],
    lineHeight: 1.3,
  },
};

const colorStyles = {
  default: cssVars.foreground,
  muted: cssVars['muted-foreground'],
  primary: cssVars.primary,
  destructive: cssVars.destructive,
};

const variantElementMap: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  label: 'span',
  small: 'small',
  price: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = 'default',
  align = 'left',
  as,
  className = '',
  style,
  children,
}) => {
  const Element = as || variantElementMap[variant];
  
  const typographyStyle: React.CSSProperties = {
    ...variantStyles[variant],
    color: colorStyles[color],
    textAlign: align,
    margin: 0,
    ...style,
  };

  return (
    <Element
      className={`ds-typography ds-typography-${variant} ${className}`}
      style={typographyStyle}
    >
      {children}
    </Element>
  );
};

// Convenience components
export const H1: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h1" {...props} />
);

export const H2: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h2" {...props} />
);

export const H3: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h3" {...props} />
);

export const H4: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h4" {...props} />
);

export const Body: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body" {...props} />
);

export const Label: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="label" {...props} />
);

export const Small: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="small" {...props} />
);

export const Price: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="price" {...props} />
);

export default Typography;
