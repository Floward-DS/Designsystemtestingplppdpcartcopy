import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, X } from 'lucide-react';
import { giftCardOptions, type GiftCardOption } from '../types/wrapping';

interface CustomizeGiftCardProps {
  onConfirm: (card: GiftCardOption, message: string) => void;
  onClose: () => void;
  existingMessage?: string;
  existingCard?: GiftCardOption;
}

export function CustomizeGiftCard({ onConfirm, onClose, existingMessage = '', existingCard }: CustomizeGiftCardProps) {
  const [selectedCard, setSelectedCard] = useState<GiftCardOption>(existingCard || giftCardOptions[0]);
  const [message, setMessage] = useState(existingMessage);

  const handleConfirm = () => {
    onConfirm(selectedCard, message);
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 max-w-md mx-auto flex flex-col"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: 'var(--card)' }}>
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center">
          <ChevronLeft size={24} style={{ color: 'var(--foreground)' }} />
        </button>
        <h1
          style={{
            fontFamily: 'var(--font-montas)',
            fontSize: '18px',
            fontWeight: 'var(--font-weight-normal)',
            color: 'var(--foreground)',
          }}
        >
          Add Gift Message Card
        </h1>
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center">
          <X size={24} style={{ color: 'var(--foreground)' }} />
        </button>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-4 pt-4 pb-32">
        {/* Preview Card with Message */}
        <div className="mb-6 p-6 rounded-xl" style={{ backgroundColor: 'var(--card)' }}>
          <div
            className="w-full h-48 rounded-lg flex items-center justify-center p-6 relative overflow-hidden"
            style={{
              backgroundColor: selectedCard.id === 'classic' ? '#F5F5DC' : 
                             selectedCard.id === 'floral' ? '#FFE4E1' :
                             selectedCard.id === 'modern' ? '#F0F0F0' : '#FFF8DC',
              border: '1px solid var(--border)',
            }}
          >
            {/* Card decorative elements */}
            {selectedCard.id === 'floral' && (
              <div className="absolute top-4 right-4 text-4xl opacity-20">🌸</div>
            )}
            {selectedCard.id === 'celebration' && (
              <div className="absolute top-4 right-4 text-4xl opacity-20">🎉</div>
            )}
            
            {/* Message Display */}
            <p
              className="text-center z-10"
              style={{
                fontFamily: 'var(--font-montas)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--foreground)',
                lineHeight: '1.6',
                fontStyle: 'italic',
              }}
            >
              {message || 'Your message will appear here...'}
            </p>
          </div>
        </div>

        {/* Card Style Options */}
        <div className="mb-6">
          <h2
            className="mb-3"
            style={{
              fontFamily: 'var(--font-founders)',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
            }}
          >
            Card Style
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {giftCardOptions.map((card) => (
              <button
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className="flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-xl"
                style={{
                  border: selectedCard.id === card.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                  backgroundColor: selectedCard.id === card.id ? 'var(--accent)' : 'var(--card)',
                  minWidth: '90px',
                }}
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: card.id === 'classic' ? '#F5F5DC' : 
                                   card.id === 'floral' ? '#FFE4E1' :
                                   card.id === 'modern' ? '#F0F0F0' : '#FFF8DC',
                    border: '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  {card.id === 'floral' && <span className="text-2xl">🌸</span>}
                  {card.id === 'celebration' && <span className="text-2xl">🎉</span>}
                  {card.id === 'modern' && <span className="text-2xl">✨</span>}
                  {card.id === 'classic' && <span className="text-2xl">💌</span>}
                </div>
                <div className="text-center">
                  <p
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '11px',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                    }}
                  >
                    {card.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '10px',
                      fontWeight: 'var(--font-weight-normal)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {card.price} SAR
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label
            className="block mb-2"
            style={{
              fontFamily: 'var(--font-founders)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)',
            }}
          >
            Your Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, 200))}
            placeholder="Write your message here..."
            className="w-full p-4 rounded-lg resize-none"
            style={{
              backgroundColor: 'var(--input-background)',
              border: '1px solid var(--border)',
              fontFamily: 'var(--font-founders)',
              fontSize: '14px',
              color: 'var(--foreground)',
              minHeight: '120px',
            }}
            maxLength={200}
          />
          <p
            className="mt-1 text-right"
            style={{
              fontFamily: 'var(--font-founders)',
              fontSize: '12px',
              color: 'var(--muted-foreground)',
            }}
          >
            {message.length}/200
          </p>
        </div>
      </main>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto px-5 py-4" style={{ backgroundColor: 'var(--background)' }}>
        <button
          onClick={handleConfirm}
          className="w-full h-14 flex items-center justify-center text-white rounded-full"
          style={{
            backgroundColor: 'var(--primary)',
            fontFamily: 'var(--font-founders)',
            fontSize: '16px',
            fontWeight: 'var(--font-weight-semibold)',
          }}
        >
          {existingCard ? 'Update' : 'Add to Cart'}
        </button>
      </div>
    </motion.div>
  );
}
