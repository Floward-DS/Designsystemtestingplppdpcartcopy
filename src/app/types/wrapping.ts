export type WrappingOption = {
  id: string;
  name: string;
  price: number;
  color: string;
  hasCustomMessage?: boolean;
  hasPhotoUpload?: boolean;
  customMessage?: string;
  uploadedPhotoUrl?: string;
};

export type GiftCardOption = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export const wrappingOptions: WrappingOption[] = [
  { id: 'classic-white', name: 'Classic White', price: 12, color: '#FFFFFF' },
  { id: 'royal-blue', name: 'Royal Blue', price: 15, color: '#4169E1' },
  { id: 'rose-gold', name: 'Rose Gold', price: 18, color: '#B76E79' },
  { id: 'forest-green', name: 'Forest Green', price: 15, color: '#228B22' },
  { id: 'silver-metallic', name: 'Silver Metallic', price: 20, color: '#C0C0C0' },
  { id: 'burgundy', name: 'Burgundy', price: 15, color: '#800020' },
  { id: 'custom-message', name: 'Custom Message Paper', price: 25, color: '#FFE5B4', hasCustomMessage: true },
  { id: 'photo-upload', name: 'Photo Upload Paper', price: 30, color: '#E6E6FA', hasPhotoUpload: true },
];

export const giftCardOptions: GiftCardOption[] = [
  { id: 'classic', name: 'Classic Card', price: 15, imageUrl: '' },
  { id: 'floral', name: 'Floral Design', price: 18, imageUrl: '' },
  { id: 'modern', name: 'Modern Minimal', price: 15, imageUrl: '' },
  { id: 'celebration', name: 'Celebration', price: 20, imageUrl: '' },
];
