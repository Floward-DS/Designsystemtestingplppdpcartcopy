import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, X, Upload } from 'lucide-react';
import { wrappingOptions, type WrappingOption } from '../types/wrapping';

interface CustomizeWrappingProps {
  onConfirm: (wrapping: WrappingOption, message?: string) => void;
  onClose: () => void;
  isMultiItem?: boolean;
  itemCount?: number;
  productName?: string;
  productImage?: string;
}

export function CustomizeWrapping({
  onConfirm,
  onClose,
  isMultiItem = false,
  itemCount = 1,
  productName = '',
  productImage = '',
}: CustomizeWrappingProps) {
  const [selectedWrapping, setSelectedWrapping] = useState<WrappingOption | null>(null);
  const [customMessage, setCustomMessage] = useState('');
  const [uploadedPhoto, setUploadedPhoto] = useState('');

  const handleConfirm = () => {
    if (!selectedWrapping) return;

    const wrappingWithExtras = {
      ...selectedWrapping,
      customMessage: selectedWrapping.hasCustomMessage ? customMessage : undefined,
      uploadedPhotoUrl: selectedWrapping.hasPhotoUpload ? uploadedPhoto : undefined,
    };

    onConfirm(wrappingWithExtras, customMessage);
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
          {isMultiItem ? `Gift Wrap All Items (${itemCount} items)` : 'Customize Gift Wrapping'}
        </h1>
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center">
          <X size={24} style={{ color: 'var(--foreground)' }} />
        </button>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-4 pt-4 pb-32">
        {/* Compact Product Preview */}
        {productImage && (
          <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--card)' }}>
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0" style={{ backgroundColor: 'var(--muted)' }}>
                <img src={productImage} alt={productName} className="w-full h-full object-cover" />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                  }}
                >
                  {productName}
                </p>
                {isMultiItem && itemCount > 1 && (
                  <p
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '12px',
                      fontWeight: 'var(--font-weight-normal)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    and {itemCount - 1} more items
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Wrapping Options Title */}
        <div className="mb-4">
          <h2
            style={{
              fontFamily: 'var(--font-founders)',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
            }}
          >
            Wrapping Paper
          </h2>
        </div>

        {/* Horizontal Scrolling Swatches */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-6">
          {wrappingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedWrapping(option)}
              className="flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-xl transition-all"
              style={{
                border: selectedWrapping?.id === option.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                backgroundColor: selectedWrapping?.id === option.id ? 'var(--accent)' : 'var(--card)',
                minWidth: '100px',
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center relative"
                style={{ backgroundColor: option.color, border: '1px solid rgba(0,0,0,0.1)' }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
                >
                  <span style={{ fontSize: '16px', color: 'var(--foreground)' }}>+</span>
                </div>
              </div>
              <div className="text-center">
                <p
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    marginBottom: '2px',
                  }}
                >
                  {option.name}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '11px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {option.price} SAR
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Custom Message Input */}
        {selectedWrapping?.hasCustomMessage && (
          <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--card)' }}>
            <label
              className="block mb-2"
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--foreground)',
              }}
            >
              Custom Message (max 50 characters)
            </label>
            <textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value.slice(0, 50))}
              placeholder="Type your message here..."
              className="w-full p-3 rounded-lg resize-none"
              style={{
                backgroundColor: 'var(--input-background)',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-founders)',
                fontSize: '14px',
                color: 'var(--foreground)',
                minHeight: '80px',
              }}
              maxLength={50}
            />
            <p
              className="mt-1 text-right"
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: '12px',
                color: 'var(--muted-foreground)',
              }}
            >
              {customMessage.length}/50
            </p>
            {customMessage && (
              <div className="mt-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--accent)' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                    fontStyle: 'italic',
                  }}
                >
                  Preview: "{customMessage}"
                </p>
              </div>
            )}
          </div>
        )}

        {/* Photo Upload */}
        {selectedWrapping?.hasPhotoUpload && (
          <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--card)' }}>
            <label
              className="block mb-2"
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--foreground)',
              }}
            >
              Upload Photo
            </label>
            {!uploadedPhoto ? (
              <button
                onClick={() => setUploadedPhoto('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400')}
                className="w-full p-6 rounded-lg flex flex-col items-center justify-center gap-2"
                style={{ border: '2px dashed var(--border)', backgroundColor: 'var(--accent)' }}
              >
                <Upload size={32} style={{ color: 'var(--primary)' }} />
                <p
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    color: 'var(--foreground)',
                  }}
                >
                  Tap to upload photo
                </p>
              </button>
            ) : (
              <div className="relative">
                <div className="w-full h-40 rounded-lg overflow-hidden">
                  <img src={uploadedPhoto} alt="Uploaded" className="w-full h-full object-cover" />
                </div>
                <button
                  onClick={() => setUploadedPhoto('')}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                >
                  <X size={16} style={{ color: 'white' }} />
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto px-5 py-4" style={{ backgroundColor: 'var(--background)' }}>
        <button
          onClick={handleConfirm}
          disabled={!selectedWrapping}
          className="w-full h-14 flex items-center justify-center text-white rounded-full disabled:opacity-50"
          style={{
            backgroundColor: 'var(--primary)',
            fontFamily: 'var(--font-founders)',
            fontSize: '16px',
            fontWeight: 'var(--font-weight-semibold)',
          }}
        >
          {isMultiItem ? 'Apply to All Items' : 'Add to Cart'}
        </button>
      </div>
    </motion.div>
  );
}
