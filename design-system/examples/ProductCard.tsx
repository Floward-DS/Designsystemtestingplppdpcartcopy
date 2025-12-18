/**
 * Example: Product Card Component
 * 
 * This example shows how to compose design system components
 * to create a product card with image, title, price, and action button.
 */

import React from 'react';
import { Card, Button, Typography, cssVars } from '../components';

const { H4, Body, Price } = Typography;

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  currency?: string;
  onAddToCart?: () => void;
}

export function ProductCard({
  image,
  title,
  description,
  price,
  currency = 'AED',
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card variant="elevated" padding="none">
      {/* Product Image */}
      <div
        style={{
          width: '100%',
          height: '200px',
          overflow: 'hidden',
          borderTopLeftRadius: cssVars['radius-card'],
          borderTopRightRadius: cssVars['radius-card'],
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Product Details */}
      <Card.Content>
        <div style={{ padding: cssVars.spacing[4] }}>
          {/* Title */}
          <H4 style={{ marginBottom: '8px' }}>{title}</H4>

          {/* Description */}
          <Body color="muted" style={{ marginBottom: '12px' }}>
            {description}
          </Body>

          {/* Price */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '4px',
              marginBottom: '16px',
            }}
          >
            <Typography variant="label" color="muted">
              {currency}
            </Typography>
            <Price>{price}</Price>
          </div>

          {/* Add to Cart Button */}
          <Button variant="primary" fullWidth onClick={onAddToCart}>
            Add to Cart
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

// Usage Example
export function ProductCardExample() {
  const handleAddToCart = () => {
    console.log('Added to cart!');
  };

  return (
    <div style={{ maxWidth: '320px', margin: '0 auto' }}>
      <ProductCard
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
        title="Premium Wireless Headphones"
        description="High-quality sound with noise cancellation"
        price={299}
        currency="AED"
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
