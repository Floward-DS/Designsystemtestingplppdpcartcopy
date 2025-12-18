import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface SuccessBannerProps {
  message: string;
  onDismiss: () => void;
}

export function SuccessBanner({ message, onDismiss }: SuccessBannerProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-md"
    >
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg"
        style={{ backgroundColor: '#10B981' }}
      >
        <Check size={20} style={{ color: 'white' }} />
        <p
          style={{
            fontFamily: 'var(--font-founders)',
            fontSize: '14px',
            fontWeight: 'var(--font-weight-medium)',
            color: 'white',
          }}
        >
          {message}
        </p>
      </div>
    </motion.div>
  );
}
