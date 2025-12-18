/**
 * Example: Login Form
 * 
 * This example demonstrates form composition using Input,
 * Button, Card, and Typography components.
 */

import React, { useState } from 'react';
import { Card, Input, Button, Typography, cssVars } from '../components';

const { H2, Body, Small } = Typography;

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate API call
    setLoading(true);
    setErrors({});
    
    setTimeout(() => {
      setLoading(false);
      console.log('Login successful!', { email, password });
    }, 2000);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: cssVars.background,
        padding: cssVars.spacing[4],
      }}
    >
      <Card variant="elevated" padding="lg" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Header>
          <H2 style={{ marginBottom: '8px' }}>Welcome Back</H2>
          <Body color="muted">Sign in to your account to continue</Body>
        </Card.Header>

        <Card.Content>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: cssVars.spacing[4],
            }}
          >
            {/* Email Input */}
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors({ ...errors, email: undefined });
                }
              }}
              error={errors.email}
              iconBefore={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2 4l8 5 8-5M2 4v12h16V4H2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />

            {/* Password Input */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) {
                  setErrors({ ...errors, password: undefined });
                }
              }}
              error={errors.password}
              helperText={!errors.password ? 'Must be at least 8 characters' : undefined}
              iconBefore={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 9V6a5 5 0 0110 0v3M4 9h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />

            {/* Forgot Password Link */}
            <div style={{ textAlign: 'right' }}>
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  color: cssVars.primary,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <Small>Forgot password?</Small>
              </button>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="primary" fullWidth loading={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>

            {/* Divider */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: cssVars.spacing[3],
                margin: `${cssVars.spacing[2]} 0`,
              }}
            >
              <div style={{ flex: 1, height: '1px', backgroundColor: cssVars.border }} />
              <Small color="muted">or</Small>
              <div style={{ flex: 1, height: '1px', backgroundColor: cssVars.border }} />
            </div>

            {/* Social Login */}
            <Button variant="outline" fullWidth>
              Continue with Google
            </Button>
          </form>
        </Card.Content>

        <Card.Footer>
          <Body align="center" color="muted" style={{ marginTop: cssVars.spacing[2] }}>
            Don't have an account?{' '}
            <button
              type="button"
              style={{
                background: 'none',
                border: 'none',
                color: cssVars.primary,
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'underline',
              }}
            >
              Sign up
            </button>
          </Body>
        </Card.Footer>
      </Card>
    </div>
  );
}
