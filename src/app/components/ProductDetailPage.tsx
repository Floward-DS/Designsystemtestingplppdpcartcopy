import { useState } from 'react';
import imgProduct from "figma:asset/2503cb841c0c505f871a03cb7c55aa7409241efe.png";
import imgRelatedProduct1 from "figma:asset/1a55111ced794a70d2b9edbf3590a4a5fcfb795d.png";
import imgRelatedProduct2 from "figma:asset/3fd406361a3ebfb7c86dd31b6ff9178c9596656d.png";
import imgRelatedProduct3 from "figma:asset/5aafdd662d9208fe7c80a52921ca6b90172d9c30.png";
import imgPaymentApple from "figma:asset/50b4f73ed7085b86bc63bc984a5c0ff76bb80775.png";
import imgPaymentMaster from "figma:asset/c0a5a7b3b6255937a4abf27e3aa3b8288f4076ec.png";
import imgPaymentVisa from "figma:asset/598c87302583f18dc4913e428985aae32b0ac423.png";
import imgPaymentTabby from "figma:asset/3ece0687e503b99cf8c16c9765b5d41af8da2e6e.png";
import type { Product } from '../data/products';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: () => void;
  onCustomize?: () => void;
}

export function ProductDetailPage({ product, onBack, onAddToCart, onCustomize }: ProductDetailPageProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'care'>('description');
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background max-w-md mx-auto relative">
      {/* Header - Floating over image */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full"
            style={{ backgroundColor: 'var(--card)' }}
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
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{ backgroundColor: 'var(--card)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill={isFavorite ? "var(--primary)" : "none"}>
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="var(--foreground)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{ backgroundColor: 'var(--card)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                  stroke="var(--foreground)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 6l-4-4-4 4M12 2v13"
                  stroke="var(--foreground)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto pb-28">
        {/* Product Image - Full screen hero */}
        <div className="relative w-full h-[60vh] mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Info Card */}
        <div className="mx-4 mb-4 p-5" style={{ backgroundColor: 'var(--card)', borderRadius: 'var(--radius-card)' }}>
          {/* Price Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                  }}
                >
                  {product.currency}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '32px',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--foreground)',
                  }}
                >
                  {product.price}
                </span>
              </div>
              <div
                className="flex items-center gap-2 px-3 py-2 rounded"
                style={{ backgroundColor: 'rgba(139, 170, 173, 0.1)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                    stroke="var(--primary)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 5v3l2 2"
                    stroke="var(--primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--primary)',
                  }}
                >
                  Earn 460 Flowerpoints
                </span>
              </div>
            </div>
          </div>

          {/* Product Title */}
          <div className="mb-6">
            <h1
              style={{
                fontFamily: 'var(--font-montas)',
                fontSize: '28px',
                fontWeight: 'var(--font-weight-light)',
                color: 'var(--foreground)',
                lineHeight: '1.3',
              }}
            >
              {product.title}
            </h1>
          </div>

          {/* Delivery Info */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-1 flex-shrink-0">
                  <path
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                    stroke="var(--foreground)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 6v4l2 2"
                    stroke="var(--foreground)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '14px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      marginBottom: '4px',
                    }}
                  >
                    No Address (Dubai)
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '12px',
                      fontWeight: 'var(--font-weight-normal)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    Get full recipient address for you
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-1 flex-shrink-0">
                  <circle cx="10" cy="8" r="3" stroke="var(--foreground)" strokeWidth="1.5" />
                  <path
                    d="M10 18c4 0 7-3.5 7-7 0-3.5-3-6-7-6s-7 2.5-7 6c0 3.5 3 7 7 7z"
                    stroke="var(--foreground)"
                    strokeWidth="1.5"
                  />
                </svg>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '14px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      marginBottom: '4px',
                    }}
                  >
                    Premium delivery
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '12px',
                      fontWeight: 'var(--font-weight-normal)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    Free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description/Care Card */}
        <div className="mx-4 mb-4 p-5" style={{ backgroundColor: 'var(--card)', borderRadius: 'var(--radius-card)' }}>
          {/* Tabs */}
          <div className="mb-4">
            <div className="flex gap-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <button
                onClick={() => setActiveTab('description')}
                className="pb-3 relative"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '16px',
                    fontWeight: activeTab === 'description' ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
                    color: activeTab === 'description' ? 'var(--foreground)' : 'var(--muted-foreground)',
                  }}
                >
                  Description
                </span>
                {activeTab === 'description' && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: 'var(--foreground)' }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('care')}
                className="pb-3 relative"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '16px',
                    fontWeight: activeTab === 'care' ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
                    color: activeTab === 'care' ? 'var(--foreground)' : 'var(--muted-foreground)',
                  }}
                >
                  Care
                </span>
                {activeTab === 'care' && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: 'var(--foreground)' }}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'description' ? (
              <div>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                    lineHeight: '1.6',
                  }}
                >
                  A dazzling and delicate surprise, our Royal Letterbox Vase is beautifully composed in chic blush tones. This bouquet includes extraordinary blooms and lush greens, making it perfect for a myriad of occasions and dates. The rosey shades portray tenderness and joyous celebration in unison, engrossing you in its effusion of magic and the blissful wrapping adds a cocooning of mystery and affection.
                </p>

                {/* Bouquet Includes */}
                <div className="mb-4">
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '14px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                    }}
                  >
                    Bouquet Includes:
                  </p>
                  <ul className="space-y-1">
                    {['Red Roses - (6)', 'Wrapping: Blush Paper', '+ More ...'].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-founders)',
                            fontSize: '14px',
                            color: 'var(--foreground)',
                          }}
                        >
                          •
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-founders)',
                            fontSize: '14px',
                            fontWeight: 'var(--font-weight-normal)',
                            color: 'var(--foreground)',
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dimensions */}
                <div>
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '14px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                    }}
                  >
                    Dimensions:
                  </p>
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect
                        x="3"
                        y="3"
                        width="14"
                        height="14"
                        stroke="var(--foreground)"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path d="M3 3L17 17M17 3L3 17" stroke="var(--foreground)" strokeWidth="1" />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'var(--font-founders)',
                        fontSize: '14px',
                        fontWeight: 'var(--font-weight-normal)',
                        color: 'var(--foreground)',
                      }}
                    >
                      Height: 48cm
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect
                        x="3"
                        y="3"
                        width="14"
                        height="14"
                        stroke="var(--foreground)"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path d="M3 3L17 17M17 3L3 17" stroke="var(--foreground)" strokeWidth="1" />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'var(--font-founders)',
                        fontSize: '14px',
                        fontWeight: 'var(--font-weight-normal)',
                        color: 'var(--foreground)',
                      }}
                    >
                      Width: 30cm
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                    lineHeight: '1.6',
                  }}
                >
                  Keep flowers in a cool spot away from direct sunlight. Change water every 2-3 days and trim stems at an angle. Remove any leaves below the waterline to prevent bacterial growth.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Frequently Bought Together Card */}
        <div className="mx-4 mb-4 p-5" style={{ backgroundColor: 'var(--card)', borderRadius: 'var(--radius-card)' }}>
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-founders)',
              fontSize: '18px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
            }}
          >
            Frequently bought together
          </h2>
          <div className="flex items-center gap-3 mb-4 overflow-x-auto pb-2">
            {[imgRelatedProduct1, imgRelatedProduct2, imgRelatedProduct3].map((img, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="w-28 h-28 rounded-lg overflow-hidden mb-2">
                  <img src={img} alt={`Related product ${index + 1}`} className="w-full h-full object-cover" />
                </div>
                {index < 2 && (
                  <div className="flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 5v10M5 10h10" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <span
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--foreground)',
              }}
            >
              The Royal Letterbox Floral Vase + Dates & Ro'kn Chocolate Bites Box + This
            </span>
          </div>
          <button
            className="w-full h-12 flex items-center justify-center border"
            style={{
              borderRadius: 'var(--radius-button)',
              borderColor: 'var(--primary)',
              fontFamily: 'var(--font-founders)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--primary)',
            }}
          >
            Add Both To Cart For AED 650
          </button>
        </div>

        {/* Payment Methods Card */}
        <div className="mx-4 mb-6 p-5" style={{ backgroundColor: 'var(--card)', borderRadius: 'var(--radius-card)' }}>
          <p
            className="mb-3"
            style={{
              fontFamily: 'var(--font-founders)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
            }}
          >
            Ways to pay
          </p>
          <div className="flex items-center gap-3 mb-4">
            <img src={imgPaymentApple} alt="Apple Pay" className="h-6" />
            <img src={imgPaymentMaster} alt="Mastercard" className="h-6" />
            <img src={imgPaymentVisa} alt="Visa" className="h-6" />
          </div>
          
          <div className="space-y-3">
            <div
              className="p-3 rounded-lg flex items-center gap-2"
              style={{ backgroundColor: 'rgba(255, 248, 242, 1)' }}
            >
              <img src={imgPaymentTabby} alt="Tabby" className="h-5" />
              <span
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--foreground)',
                }}
              >
                Split your bill with 4 payments, interest-free
              </span>
            </div>
            <div
              className="p-3 rounded-lg flex items-center gap-2"
              style={{ backgroundColor: 'rgba(215, 255, 237, 1)' }}
            >
              <div
                className="px-2 py-1 rounded text-white text-xs font-semibold"
                style={{ backgroundColor: 'rgba(0, 201, 167, 1)' }}
              >
                TABBY
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--foreground)',
                }}
              >
                or 3 interest-free payments of AED 208.33. Learn more
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Add to Cart Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
        <div className="px-5 py-4 backdrop-blur-sm flex gap-3" style={{ backgroundColor: 'rgba(247, 246, 242, 0.95)' }}>
          {onCustomize && (
            <button
              className="flex-1 h-14 flex items-center justify-center border"
              style={{
                borderRadius: 'var(--radius-button)',
                borderColor: 'var(--primary)',
                fontFamily: 'var(--font-founders)',
                fontSize: '16px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--primary)',
                backgroundColor: 'transparent',
              }}
              onClick={onCustomize}
            >
              Customize
            </button>
          )}
          <button
            className="flex-1 h-14 flex items-center justify-center gap-2 text-white"
            style={{
              backgroundColor: 'var(--primary)',
              borderRadius: 'var(--radius-button)',
              fontFamily: 'var(--font-founders)',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-semibold)',
            }}
            onClick={onAddToCart}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M6 1L3 5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5l-3-4H6z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 5h14M13 9a3 3 0 1 1-6 0"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add To Cart
          </button>
        </div>
        {/* Home Indicator */}
        <div className="flex justify-center pb-2" style={{ backgroundColor: 'rgba(247, 246, 242, 0.95)' }}>
          <div className="w-32 h-1 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </div>
  );
}