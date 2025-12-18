import React from 'react';
import { cssVars } from '../../tokens';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variants based on design system
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost';
  
  /**
   * Button sizes
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Full width button
   */
  fullWidth?: boolean;
  
  /**
   * Loading state
   */
  loading?: boolean;
  
  /**
   * Icon to display before children
   */
  iconBefore?: React.ReactNode;
  
  /**
   * Icon to display after children
   */
  iconAfter?: React.ReactNode;
}

const variantStyles = {
  primary: {
    backgroundColor: cssVars.primary,
    color: cssVars['primary-foreground'],
    border: 'none',
  },
  secondary: {
    backgroundColor: cssVars.secondary,
    color: cssVars['secondary-foreground'],
    border: 'none',
  },
  outline: {
    backgroundColor: 'transparent',
    color: cssVars.primary,
    border: `1px solid ${cssVars.primary}`,
  },
  destructive: {
    backgroundColor: cssVars.destructive,
    color: cssVars['destructive-foreground'],
    border: 'none',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: cssVars.foreground,
    border: 'none',
  },
};

const sizeStyles = {
  sm: {
    height: '36px',
    padding: '0 16px',
    fontSize: cssVars['text-small'],
  },
  md: {
    height: '44px',
    padding: '0 24px',
    fontSize: cssVars['text-base'],
  },
  lg: {
    height: '56px',
    padding: '0 32px',
    fontSize: cssVars['text-base'],
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      iconBefore,
      iconAfter,
      disabled,
      className = '',
      children,
      style,
      ...props
    },
    ref
  ) => {
    const variantStyle = variantStyles[variant];
    const sizeStyle = sizeStyles[size];

    const buttonStyle: React.CSSProperties = {
      ...variantStyle,
      ...sizeStyle,
      borderRadius: cssVars['radius-button'],
      fontFamily: cssVars['font-founders'],
      fontWeight: cssVars['font-weight-semibold'],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      opacity: disabled || loading ? 0.5 : 1,
      transition: 'all 0.2s ease',
      width: fullWidth ? '100%' : 'auto',
      ...style,
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`ds-button ${className}`}
        style={buttonStyle}
        {...props}
      >
        {loading ? (
          <span className="ds-button-spinner">Loading...</span>
        ) : (
          <>
            {iconBefore && <span className="ds-button-icon-before">{iconBefore}</span>}
            {children}
            {iconAfter && <span className="ds-button-icon-after">{iconAfter}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
