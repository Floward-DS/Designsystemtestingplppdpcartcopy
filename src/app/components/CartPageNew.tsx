import { useState } from 'react';
import imgExpressDelivery from "figma:asset/25fa27b9b6ae9ba0531610a8efd7e0dd1f29b247.png";
import imgGiftCard from "figma:asset/afaf807ea76641048d3cea332c5476b8c9432a4b.png";
import imgAddon1 from "figma:asset/6121d911b7338d66238ca5de1d2f3f5034af15a4.png";
import imgAddon2 from "figma:asset/cf2c24ea3fa0ec87c51a7cfb8b02edd4d2f7f22e.png";
import imgAddon3 from "figma:asset/dbe7b22d2c2899a7dee5ac516e51a42202aee01e.png";
import type { Product } from '../data/products';
import type { WrappingOption, GiftCardOption } from '../types/wrapping';
import { BottomNav } from './BottomNav';

export interface CartItem {
  product: Product;
  quantity: number;
  wrapping?: WrappingOption | null;
  message?: string;
  isGiftCard?: boolean;
  giftCard?: {
    card: GiftCardOption;
    message: string;
  };
}

interface CartPageNewProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onBack: () => void;
  onNavigateHome?: () => void;
  onWrapAllItems?: () => void;
  onApplyWrappingToAll?: (wrapping: WrappingOption) => void;
  onCustomizeItem?: (itemId: string) => void;
  onRemoveWrapping?: (itemId: string) => void;
  onAddGiftCard?: () => void;
  wrapAllButtonState?: {
    show: boolean;
    text: string;
    instant: boolean;
    wrapping?: WrappingOption;
  };
}

export function CartPageNew({
  cartItems,
  onUpdateQuantity,
  onBack,
  onNavigateHome,
  onWrapAllItems,
  onApplyWrappingToAll,
  onCustomizeItem,
  onRemoveWrapping,
  onAddGiftCard,
  wrapAllButtonState,
}: CartPageNewProps) {
  const [selectedTab, setSelectedTab] = useState('best-match');

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const wrappingTotal = cartItems.reduce((sum, item) => {
    if (item.wrapping && !item.isGiftCard) {
      return sum + (item.wrapping.price * item.quantity);
    }
    return sum;
  }, 0);
  const giftCardTotal = cartItems.reduce((sum, item) => {
    if (item.isGiftCard && item.giftCard) {
      return sum + item.giftCard.card.price;
    }
    return sum;
  }, 0);
  const deliveryCharges = 0; // Free delivery
  const total = subtotal + wrappingTotal + giftCardTotal + deliveryCharges;
  const progressToFreeDelivery = 110; // Amount left for free delivery

  const hasGiftCard = cartItems.some((item) => item.isGiftCard);

  const handleWrapAllClick = () => {
    if (wrapAllButtonState?.instant && wrapAllButtonState?.wrapping && onApplyWrappingToAll) {
      onApplyWrappingToAll(wrapAllButtonState.wrapping);
    } else if (onWrapAllItems) {
      onWrapAllItems();
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <header className="px-4 py-3" style={{ backgroundColor: 'var(--card)' }}>
        <div className="flex items-center justify-center relative">
          <button
            onClick={onBack}
            className="absolute left-0 w-10 h-10 flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="var(--foreground)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1
            style={{
              fontFamily: 'var(--font-montas)',
              fontSize: '20px',
              fontWeight: 'var(--font-weight-light)',
              color: 'var(--foreground)',
            }}
          >
            Cart ({cartItems.length})
          </h1>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto pb-32 px-4 pt-4">
        {/* Free Delivery Progress */}
        <div className="mb-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--card)' }}>
          <div className="flex items-center gap-3 mb-2">
            <img src={imgExpressDelivery} alt="Express Delivery" className="w-16 h-7 object-contain" />
            <div className="flex-1">
              <p
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--foreground)',
                }}
              >
                Only <span style={{ fontWeight: 'var(--font-weight-medium)' }}>AED {progressToFreeDelivery}</span> left to unlock Free Delivery
              </p>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--foreground)',
              }}
            >
              AED {total}
            </p>
          </div>
          {/* Progress Bar */}
          <div className="relative h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: 'var(--muted)' }}>
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                backgroundColor: '#84C502',
                width: `${Math.min((total / (total + progressToFreeDelivery)) * 100, 100)}%`,
              }}
            />
          </div>
        </div>

        {/* Gift Wrap All Items Button */}
        {wrapAllButtonState?.show && (
          <div className="mb-4">
            <button
              onClick={handleWrapAllClick}
              className="w-full h-12 flex items-center justify-center border"
              style={{
                borderRadius: 'var(--radius-button)',
                borderColor: 'var(--primary)',
                fontFamily: 'var(--font-founders)',
                fontSize: '16px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--primary)',
                backgroundColor: 'var(--card)',
              }}
            >
              {wrapAllButtonState.text}
            </button>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex flex-col gap-4 mb-4">
          {cartItems.filter((item) => !item.isGiftCard).map((item) => (
            <div
              key={item.product.id}
              className="p-3 rounded-xl"
              style={{ backgroundColor: 'var(--card)' }}
            >
              <div className="flex gap-3">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <div
                    className="w-[100px] h-[100px] rounded-lg overflow-hidden"
                    style={{ border: '1px solid var(--border)' }}
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-founders)',
                        fontSize: '16px',
                        fontWeight: 'var(--font-weight-normal)',
                        color: 'var(--foreground)',
                        lineHeight: '1.3',
                        marginBottom: '4px',
                      }}
                    >
                      {item.product.title}
                    </p>
                    
                    {/* Wrapping Status */}
                    {item.wrapping && (
                      <div className="flex items-center gap-2 mt-2 mb-2">
                        <div
                          className="w-4 h-4 rounded-full border"
                          style={{
                            backgroundColor: item.wrapping.color,
                            borderColor: 'var(--border)',
                          }}
                        />
                        <span
                          style={{
                            fontFamily: 'var(--font-founders)',
                            fontSize: '12px',
                            fontWeight: 'var(--font-weight-normal)',
                            color: 'var(--foreground)',
                          }}
                        >
                          {item.wrapping.name} - {item.wrapping.price} SAR
                        </span>
                      </div>
                    )}

                    {/* Custom Message */}
                    {item.message && (
                      <p
                        style={{
                          fontFamily: 'var(--font-founders)',
                          fontSize: '11px',
                          fontWeight: 'var(--font-weight-normal)',
                          color: 'var(--muted-foreground)',
                          fontStyle: 'italic',
                          marginTop: '4px',
                        }}
                      >
                        "{item.message}"
                      </p>
                    )}
                  </div>

                  {/* Quantity Controls and Price */}
                  <div className="flex items-center justify-between mt-2">
                    <div
                      className="flex items-center gap-3 px-3 py-1 rounded-full"
                      style={{ border: '1px solid var(--border)', backgroundColor: 'var(--card)' }}
                    >
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                        className="w-4 h-4 flex items-center justify-center"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3 8h10"
                            stroke="var(--foreground)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <span
                        style={{
                          fontFamily: 'var(--font-founders)',
                          fontSize: '14px',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-4 h-4 flex items-center justify-center"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8 3v10M3 8h10"
                            stroke="var(--foreground)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1">
                      <span
                        style={{
                          fontFamily: 'var(--font-founders)',
                          fontSize: '14px',
                          fontWeight: 'var(--font-weight-normal)',
                          color: 'var(--foreground)',
                        }}
                      >
                        {item.product.currency}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-founders)',
                          fontSize: '18px',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                        }}
                      >
                        {item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wrapping Actions */}
              <div className="flex gap-2 mt-3">
                {item.wrapping ? (
                  <>
                    <button
                      onClick={() => onCustomizeItem && onCustomizeItem(item.product.id)}
                      className="flex-1 h-9 flex items-center justify-center border"
                      style={{
                        borderRadius: 'var(--radius-button)',
                        borderColor: 'var(--primary)',
                        fontFamily: 'var(--font-founders)',
                        fontSize: '14px',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--primary)',
                        backgroundColor: 'transparent',
                      }}
                    >
                      Customize
                    </button>
                    <button
                      onClick={() => onRemoveWrapping && onRemoveWrapping(item.product.id)}
                      className="flex-1 h-9 flex items-center justify-center"
                      style={{
                        borderRadius: 'var(--radius-button)',
                        fontFamily: 'var(--font-founders)',
                        fontSize: '14px',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--destructive)',
                        backgroundColor: 'transparent',
                      }}
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => onCustomizeItem && onCustomizeItem(item.product.id)}
                    className="w-full h-9 flex items-center justify-center border"
                    style={{
                      borderRadius: 'var(--radius-button)',
                      borderColor: 'var(--primary)',
                      fontFamily: 'var(--font-founders)',
                      fontSize: '14px',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--primary)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    Add Gift Wrapping
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Gift Message Card Section */}
        <div className="mb-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--card)' }}>
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2v16M2 10h16"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <h3
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: '18px',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--foreground)',
              }}
            >
              Gift Message Card
            </h3>
          </div>

          {hasGiftCard ? (
            <div className="p-3 rounded-lg mb-3" style={{ backgroundColor: 'var(--accent)' }}>
              {cartItems
                .filter((item) => item.isGiftCard)
                .map((item) => (
                  <div key={item.product.id}>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        style={{
                          fontFamily: 'var(--font-founders)',
                          fontSize: '14px',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                        }}
                      >
                        {item.giftCard?.card.name}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-founders)',
                          fontSize: '14px',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                        }}
                      >
                        {item.giftCard?.card.price} SAR
                      </span>
                    </div>
                    {item.giftCard?.message && (
                      <p
                        style={{
                          fontFamily: 'var(--font-founders)',
                          fontSize: '12px',
                          fontWeight: 'var(--font-weight-normal)',
                          color: 'var(--muted-foreground)',
                          fontStyle: 'italic',
                        }}
                      >
                        "{item.giftCard.message}"
                      </p>
                    )}
                  </div>
                ))}
            </div>
          ) : (
            <button
              onClick={onAddGiftCard}
              className="w-full h-12 flex items-center justify-center gap-2"
              style={{
                borderRadius: 'var(--radius-button)',
                border: '2px dashed var(--primary)',
                fontFamily: 'var(--font-founders)',
                fontSize: '16px',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--primary)',
                backgroundColor: 'transparent',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 5v10M5 10h10"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Add Gift Message Card
            </button>
          )}
        </div>

        {/* Order Summary */}
        <div className="mb-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--card)' }}>
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="3" width="14" height="14" stroke="var(--foreground)" strokeWidth="1.5" fill="none" />
            </svg>
            <h3
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: '18px',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--foreground)',
              }}
            >
              Order Summary
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--foreground)',
                }}
              >
                Subtotal
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                }}
              >
                AED {subtotal}
              </span>
            </div>

            {wrappingTotal > 0 && (
              <div className="flex justify-between items-center">
                <span
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                  }}
                >
                  Gift Wrapping
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                  }}
                >
                  SAR {wrappingTotal}
                </span>
              </div>
            )}

            {giftCardTotal > 0 && (
              <div className="flex justify-between items-center">
                <span
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                  }}
                >
                  Gift Card
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                  }}
                >
                  SAR {giftCardTotal}
                </span>
              </div>
            )}

            <div className="flex justify-between items-start">
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                  }}
                >
                  Delivery Charges
                </p>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                }}
              >
                AED {deliveryCharges}
              </span>
            </div>
            <div className="h-px" style={{ backgroundColor: 'var(--border)' }} />
            <div className="flex justify-between items-center">
              <span
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '16px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '18px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                }}
              >
                AED {total}
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Checkout Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
        <div className="px-5 py-4 backdrop-blur-sm" style={{ backgroundColor: 'rgba(247, 246, 242, 0.95)' }}>
          <button
            className="w-full h-14 flex items-center justify-between px-6 text-white"
            style={{
              backgroundColor: 'var(--primary)',
              borderRadius: 'var(--radius-button)',
              fontFamily: 'var(--font-founders)',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-semibold)',
            }}
          >
            <span>Proceed To Checkout</span>
            <span>AED {total}</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="cart" onNavigateHome={onNavigateHome} />
    </div>
  );
}
