import { useState } from 'react';

interface OrderTrackingProps {
  orderNumber?: string;
  currentStatus?: 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered';
  estimatedDelivery?: string;
  recipientName?: string;
}

export function OrderTracking({
  orderNumber = '#FW-2024-1842',
  currentStatus = 'out-for-delivery',
  estimatedDelivery = 'Today, 4:00 PM - 6:00 PM',
  recipientName = 'Sarah Ahmed'
}: OrderTrackingProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusSteps = [
    { id: 'confirmed', label: 'Confirmed', icon: '✓' },
    { id: 'preparing', label: 'Preparing', icon: '📦' },
    { id: 'out-for-delivery', label: 'Out for Delivery', icon: '🚚' },
    { id: 'delivered', label: 'Delivered', icon: '🎉' }
  ];

  const currentStepIndex = statusSteps.findIndex(step => step.id === currentStatus);
  const isDelivered = currentStatus === 'delivered';

  return (
    <div className="fixed left-0 right-0 z-40 max-w-md mx-auto" style={{ bottom: '83px' }}>
      <div className="mx-4 bg-white rounded-xl shadow-lg border border-border overflow-hidden">
        {/* Compact View */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-3 flex items-center justify-between active:bg-secondary/30 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl">{statusSteps[currentStepIndex]?.icon}</span>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">
                  {statusSteps[currentStepIndex]?.label}
                </span>
                <span className="text-xs text-muted-foreground">{orderNumber}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {isDelivered ? 'Delivered successfully' : estimatedDelivery}
              </p>
            </div>
          </div>
          
          {/* Chevron */}
          <svg
            className={`w-5 h-5 text-muted-foreground transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        {/* Expanded View */}
        {isExpanded && (
          <div className="px-4 pb-4 border-t border-border/50">
            {/* Progress Stepper */}
            <div className="py-4">
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute left-[15px] top-[15px] w-[2px] h-[calc(100%-30px)] bg-border" />
                <div 
                  className="absolute left-[15px] top-[15px] w-[2px] bg-primary transition-all duration-500"
                  style={{ height: `${(currentStepIndex / (statusSteps.length - 1)) * 100}%` }}
                />

                {/* Steps */}
                <div className="space-y-4">
                  {statusSteps.map((step, index) => {
                    const isActive = index === currentStepIndex;
                    const isCompleted = index < currentStepIndex;
                    const isPending = index > currentStepIndex;

                    return (
                      <div key={step.id} className="flex items-start gap-3 relative">
                        {/* Step Circle */}
                        <div
                          className={`
                            w-[30px] h-[30px] rounded-full flex items-center justify-center shrink-0 border-2 z-10 transition-colors
                            ${isCompleted ? 'bg-primary border-primary' : ''}
                            ${isActive ? 'bg-primary border-primary' : ''}
                            ${isPending ? 'bg-white border-border' : ''}
                          `}
                        >
                          {isCompleted && (
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                              <path
                                d="M5 13l4 4L19 7"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </svg>
                          )}
                          {isActive && (
                            <div className="w-3 h-3 bg-white rounded-full" />
                          )}
                          {isPending && (
                            <div className="w-2 h-2 bg-border rounded-full" />
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 pt-1">
                          <p
                            className={`text-sm ${
                              isActive || isCompleted ? 'font-semibold text-foreground' : 'text-muted-foreground'
                            }`}
                          >
                            {step.label}
                          </p>
                          {isActive && !isDelivered && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Estimated: {estimatedDelivery}
                            </p>
                          )}
                          {isActive && isDelivered && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Received by {recipientName}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-secondary/30 rounded-lg p-3 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Order Number</span>
                <span className="text-xs font-semibold text-foreground">{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Recipient</span>
                <span className="text-xs font-semibold text-foreground">{recipientName}</span>
              </div>
              {!isDelivered && (
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Delivery Window</span>
                  <span className="text-xs font-semibold text-foreground">{estimatedDelivery}</span>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button className="mt-3 w-full py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm active:scale-98 transition-transform">
              View Full Order Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
