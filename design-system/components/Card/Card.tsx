import React from 'react';
import { cssVars } from '../../tokens';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card variant
   */
  variant?: 'default' | 'elevated' | 'outlined';
  
  /**
   * Padding size
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variantStyles = {
  default: {
    backgroundColor: cssVars.card,
    border: 'none',
    boxShadow: 'none',
  },
  elevated: {
    backgroundColor: cssVars.card,
    border: 'none',
    boxShadow: cssVars['elevation-sm'],
  },
  outlined: {
    backgroundColor: cssVars.card,
    border: `1px solid ${cssVars.border}`,
    boxShadow: 'none',
  },
};

const paddingStyles = {
  none: '0',
  sm: '12px',
  md: '16px',
  lg: '24px',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      className = '',
      style,
      children,
      ...props
    },
    ref
  ) => {
    const cardStyle: React.CSSProperties = {
      ...variantStyles[variant],
      borderRadius: cssVars['radius-card'],
      padding: paddingStyles[padding],
      color: cssVars['card-foreground'],
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`ds-card ${className}`}
        style={cardStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card sub-components
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`ds-card-header ${className}`}
        style={{
          marginBottom: '12px',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className = '', style, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={`ds-card-title ${className}`}
        style={{
          fontFamily: cssVars['font-founders'],
          fontSize: cssVars['text-h4'],
          fontWeight: cssVars['font-weight-semibold'],
          color: cssVars['card-foreground'],
          margin: 0,
          ...style,
        }}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className = '', style, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`ds-card-description ${className}`}
        style={{
          fontFamily: cssVars['font-founders'],
          fontSize: cssVars['text-label'],
          fontWeight: cssVars['font-weight-normal'],
          color: cssVars['muted-foreground'],
          margin: 0,
          ...style,
        }}
        {...props}
      >
        {children}
      </p>
    );
  }
);

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`ds-card-content ${className}`}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`ds-card-footer ${className}`}
        style={{
          marginTop: '12px',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

// Export all card components together
export default Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});
