import React from 'react';
import { cssVars } from '../../tokens';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input label
   */
  label?: string;
  
  /**
   * Helper text below input
   */
  helperText?: string;
  
  /**
   * Error message
   */
  error?: string;
  
  /**
   * Icon before input
   */
  iconBefore?: React.ReactNode;
  
  /**
   * Icon after input
   */
  iconAfter?: React.ReactNode;
  
  /**
   * Input size
   */
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: {
    height: '36px',
    padding: '0 12px',
    fontSize: cssVars['text-small'],
  },
  md: {
    height: '44px',
    padding: '0 16px',
    fontSize: cssVars['text-base'],
  },
  lg: {
    height: '52px',
    padding: '0 20px',
    fontSize: cssVars['text-base'],
  },
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      iconBefore,
      iconAfter,
      size = 'md',
      className = '',
      style,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;
    const sizeStyle = sizeStyles[size];

    const inputStyle: React.CSSProperties = {
      ...sizeStyle,
      width: '100%',
      backgroundColor: cssVars['input-background'],
      border: `1px solid ${hasError ? cssVars.destructive : cssVars.border}`,
      borderRadius: cssVars['radius'],
      fontFamily: cssVars['font-founders'],
      fontWeight: cssVars['font-weight-normal'],
      color: cssVars.foreground,
      outline: 'none',
      transition: 'all 0.2s ease',
      paddingLeft: iconBefore ? '44px' : sizeStyle.padding,
      paddingRight: iconAfter ? '44px' : sizeStyle.padding,
      ...style,
    };

    const containerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%',
    };

    const labelStyle: React.CSSProperties = {
      fontFamily: cssVars['font-founders'],
      fontSize: cssVars['text-label'],
      fontWeight: cssVars['font-weight-medium'],
      color: cssVars.foreground,
    };

    const helperStyle: React.CSSProperties = {
      fontFamily: cssVars['font-founders'],
      fontSize: cssVars['text-small'],
      fontWeight: cssVars['font-weight-normal'],
      color: hasError ? cssVars.destructive : cssVars['muted-foreground'],
    };

    return (
      <div className={`ds-input-container ${className}`} style={containerStyle}>
        {label && (
          <label htmlFor={inputId} style={labelStyle}>
            {label}
          </label>
        )}
        
        <div style={{ position: 'relative' }}>
          {iconBefore && (
            <div
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                color: cssVars['muted-foreground'],
              }}
            >
              {iconBefore}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className="ds-input"
            style={inputStyle}
            {...props}
          />
          
          {iconAfter && (
            <div
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                color: cssVars['muted-foreground'],
              }}
            >
              {iconAfter}
            </div>
          )}
        </div>
        
        {(helperText || error) && (
          <span style={helperStyle}>
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
