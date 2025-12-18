import type { Product } from '../data/products';
import { BottomNav } from './BottomNav';
import type { WrappingOption, GiftCardOption } from '../types/wrapping';

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

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onBack: () => void;
  onNavigateHome?: () => void;
}

export function CartPage({ cartItems, onUpdateQuantity, onBack, onNavigateHome }: CartPageProps) {
  const [selectedTab, setSelectedTab] = useState('best-match');

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryCharges = 0; // Free delivery
  const total = subtotal + deliveryCharges;
  const progressToFreeDelivery = 110; // Amount left for free delivery

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

        {/* Cart Items */}
        <div className="flex flex-col gap-4 mb-4">
          {cartItems.map((item) => (
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
                  <p
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '16px',
                      fontWeight: 'var(--font-weight-normal)',
                      color: 'var(--foreground)',
                      lineHeight: '1.3',
                    }}
                  >
                    {item.product.title}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between">
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
            </div>
          ))}
        </div>

        {/* Gift Card & Message */}
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
              Gift Card & Message
            </h3>
            <span
              className="ml-auto"
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: '16px',
                fontWeight: 'var(--font-weight-medium)',
                color: '#94B651',
              }}
            >
              Free
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Select Card Design */}
            <div>
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-2" style={{ border: '1px solid var(--border)' }}>
                <img src={imgGiftCard} alt="Gift Card" className="w-full h-full object-cover" />
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--foreground)',
                  textAlign: 'center',
                }}
              >
                Select Card Design
              </p>
            </div>

            {/* Add a Message */}
            <div>
              <div
                className="w-full aspect-square rounded-xl flex flex-col items-center justify-center mb-2"
                style={{ border: '2px dashed var(--primary)' }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-2">
                  <circle cx="16" cy="16" r="12" fill="#B98D81" opacity="0.2" />
                  <path
                    d="M16 10v12M10 16h12"
                    stroke="#B98D81"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p
                  className="text-center px-4"
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                    opacity: 0.7,
                  }}
                >
                  Tap here to add a message
                </p>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--foreground)',
                  textAlign: 'center',
                }}
              >
                Add a Message
              </p>
            </div>
          </div>

          <button
            className="w-full h-12 flex items-center justify-center border"
            style={{
              borderRadius: 'var(--radius-button)',
              borderColor: 'var(--primary)',
              fontFamily: 'var(--font-founders)',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--primary)',
            }}
          >
            Customize
          </button>
        </div>

        {/* Make it extra special */}
        <div className="mb-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--card)' }}>
          <div className="flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2v20M17 7l-5-5-5 5"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
              Make it extra special
            </h3>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
            {['Best Match', 'Balloons', 'Tea And Coffee'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab.toLowerCase().replace(/ /g, '-'))}
                className="shrink-0"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '16px',
                    fontWeight: selectedTab === tab.toLowerCase().replace(/ /g, '-') ? 'var(--font-weight-medium)' : 'var(--font-weight-normal)',
                    color: selectedTab === tab.toLowerCase().replace(/ /g, '-') ? 'var(--foreground)' : 'var(--muted-foreground)',
                  }}
                >
                  {tab}
                </span>
                {selectedTab === tab.toLowerCase().replace(/ /g, '-') && (
                  <div className="h-0.5 mt-2 rounded-full" style={{ backgroundColor: 'var(--foreground)' }} />
                )}
              </button>
            ))}
          </div>

          {/* Add-ons */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { img: imgAddon1, title: '16 Pcs Chocolate...', price: 90 },
              { img: imgAddon2, title: 'Pinwheel Chocolat...', price: 80 },
              { img: imgAddon3, title: 'Pistachio Rocher...', price: 150 },
            ].map((addon, index) => (
              <div key={index}>
                <div
                  className="w-full aspect-square rounded-lg overflow-hidden mb-2"
                  style={{ border: index === 0 ? '1.5px solid var(--primary)' : '1px solid var(--border)', padding: '4px' }}
                >
                  <img src={addon.img} alt={addon.title} className="w-full h-full object-cover rounded" />
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '12px',
                      fontWeight: 'var(--font-weight-normal)',
                      color: 'var(--foreground)',
                    }}
                  >
                    AED
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '16px',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                    }}
                  >
                    {addon.price}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                  }}
                >
                  {addon.title}
                </p>
                {index === 0 ? (
                  <div className="flex items-center gap-2 mt-2">
                    <button className="flex-1 h-8 flex items-center justify-center rounded-full" style={{ border: '1px solid var(--border)' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    <span style={{ fontFamily: 'var(--font-founders)', fontSize: '14px', fontWeight: 'var(--font-weight-medium)', color: 'var(--foreground)' }}>1</span>
                    <button className="flex-1 h-8 flex items-center justify-center rounded-full" style={{ border: '1px solid var(--border)' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2v8M2 6h8" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <button
                    className="w-full h-8 flex items-center justify-center rounded-full mt-2"
                    style={{
                      border: '1px solid var(--primary)',
                      fontFamily: 'var(--font-founders)',
                      fontSize: '14px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--primary)',
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            ))}
          </div>
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
                <p
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Please note that specific regions and express delivery may incur additional delivery fees.
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