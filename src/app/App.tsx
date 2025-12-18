import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { HomePage } from './components/HomePage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartPageNew as CartPage, type CartItem } from './components/CartPageNew';
import { Header } from './components/Header';
import { ViewToggle, type ViewMode } from './components/ViewToggle';
import { ProductCard } from './components/ProductCard';
import { ProductListItem } from './components/ProductListItem';
import { BottomNav } from './components/BottomNav';
import { FilterSortButton } from './components/FilterSortButton';
import { FiltersModal } from './components/FiltersModal';
import { CustomizeWrapping } from './components/CustomizeWrapping';
import { CustomizeGiftCard } from './components/CustomizeGiftCard';
import { SuccessBanner } from './components/SuccessBanner';
import { products } from './data/products';
import type { Product } from './data/products';
import type { WrappingOption, GiftCardOption } from './types/wrapping';

type Page = 'home' | 'products' | 'product-detail' | 'cart';
type Screen = 'pdp' | 'customize' | 'cart' | 'giftcard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState('popularity');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Gift wrapping flow state
  const [currentScreen, setCurrentScreen] = useState<Screen>('pdp');
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isWrappingAllItems, setIsWrappingAllItems] = useState(false);
  const [customizingItemId, setCustomizingItemId] = useState<string | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    setCurrentScreen('pdp');
  };

  // Flow 1: Customize from PDP (single item with wrapping)
  const handleCustomizeFromPDP = () => {
    setCurrentScreen('customize');
  };

  const handleConfirmWrappingFromPDP = (wrapping: WrappingOption, message?: string) => {
    if (!selectedProduct) return;

    const newItem: CartItem = {
      product: selectedProduct,
      quantity: 1,
      wrapping,
      message: message || '',
    };

    setCartItems((prev) => [...prev, newItem]);
    setCurrentScreen('cart');
    setCurrentPage('cart');
    setSuccessMessage('Gift wrapping added!');
    setShowSuccessBanner(true);
  };

  // Flow 2: Add to Cart without wrapping (multi-item)
  const handleAddToCartWithoutWrapping = () => {
    if (!selectedProduct) return;

    // Add 3 items to demonstrate multi-item wrapping flow
    const multiItems: CartItem[] = [
      {
        product: selectedProduct,
        quantity: 1,
        wrapping: null,
        message: '',
      },
      {
        product: products[1] || selectedProduct,
        quantity: 2,
        wrapping: null,
        message: '',
      },
      {
        product: products[2] || selectedProduct,
        quantity: 1,
        wrapping: null,
        message: '',
      },
    ];

    setCartItems((prev) => [...prev, ...multiItems]);
    setCurrentScreen('cart');
    setCurrentPage('cart');
  };

  // Flow 3: Wrap all items from cart
  const handleWrapAllItems = () => {
    setIsWrappingAllItems(true);
    setCurrentScreen('customize');
  };

  const handleConfirmWrapAllItems = (wrapping: WrappingOption, message?: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        !item.isGiftCard
          ? {
              ...item,
              wrapping,
              message: message || '',
            }
          : item
      )
    );

    setIsWrappingAllItems(false);
    setCurrentScreen('cart');
    setSuccessMessage('Gift wrapping applied to all items!');
    setShowSuccessBanner(true);
  };

  // Flow 4: Apply existing wrapping to all items (instant)
  const handleApplyExistingWrappingToAll = (wrapping: WrappingOption) => {
    setCartItems((prev) =>
      prev.map((item) =>
        !item.isGiftCard
          ? {
              ...item,
              wrapping,
              message: item.message || '',
            }
          : item
      )
    );

    setSuccessMessage(`${wrapping.name} applied to all items!`);
    setShowSuccessBanner(true);
  };

  // Flow 5: Individual item customization
  const handleCustomizeCartItem = (itemId: string) => {
    setCustomizingItemId(itemId);
    setCurrentScreen('customize');
  };

  const handleConfirmCustomizeCartItem = (wrapping: WrappingOption, message?: string) => {
    if (!customizingItemId) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === customizingItemId
          ? {
              ...item,
              wrapping,
              message: message || '',
            }
          : item
      )
    );

    setCustomizingItemId(null);
    setCurrentScreen('cart');
    setSuccessMessage('Gift wrapping updated!');
    setShowSuccessBanner(true);
  };

  // Remove wrapping from item
  const handleRemoveWrapping = (itemId: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === itemId
          ? {
              ...item,
              wrapping: null,
              message: '',
            }
          : item
      )
    );

    setSuccessMessage('Wrapping removed');
    setShowSuccessBanner(true);
  };

  // Flow 6: Add gift card
  const handleAddGiftCard = () => {
    setCurrentScreen('giftcard');
  };

  const handleConfirmGiftCard = (card: GiftCardOption, message: string) => {
    const giftCardItem: CartItem = {
      product: selectedProduct || products[0],
      quantity: 1,
      isGiftCard: true,
      giftCard: {
        card,
        message,
      },
    };

    setCartItems((prev) => [...prev, giftCardItem]);
    setCurrentScreen('cart');
    // NO success banner for gift cards (per PRD)
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleCloseCustomization = () => {
    setCurrentScreen(currentPage === 'cart' ? 'cart' : 'pdp');
    setIsWrappingAllItems(false);
    setCustomizingItemId(null);
  };

  // Get smart button logic for "Gift wrap all items"
  const getWrapAllButtonState = () => {
    const regularItems = cartItems.filter((item) => !item.isGiftCard);
    const wrappedItems = regularItems.filter((item) => item.wrapping);
    
    if (wrappedItems.length === 0) {
      return { show: true, text: 'Gift wrap all items', instant: false };
    }

    // Check if all wrapped items have the SAME wrapping
    const firstWrapping = wrappedItems[0]?.wrapping;
    const allSameWrapping = wrappedItems.every(
      (item) => item.wrapping?.id === firstWrapping?.id
    );

    if (allSameWrapping && wrappedItems.length > 0 && wrappedItems.length < regularItems.length) {
      return {
        show: true,
        text: `Apply ${firstWrapping?.name} to all`,
        instant: true,
        wrapping: firstWrapping,
      };
    }

    // Different wrappings - hide button
    const hasDifferentWrappings = wrappedItems.length > 1 && !allSameWrapping;
    if (hasDifferentWrappings) {
      return { show: false, text: '', instant: false };
    }

    return { show: true, text: 'Gift wrap all items', instant: false };
  };

  if (currentPage === 'home') {
    return <HomePage onNavigateToProducts={() => setCurrentPage('products')} />;
  }

  if (currentPage === 'cart' && currentScreen === 'cart') {
    return (
      <>
        <AnimatePresence>
          {showSuccessBanner && (
            <SuccessBanner
              message={successMessage}
              onDismiss={() => setShowSuccessBanner(false)}
            />
          )}
        </AnimatePresence>
        <CartPage
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onBack={() => setCurrentPage('products')}
          onNavigateHome={() => setCurrentPage('home')}
          onWrapAllItems={handleWrapAllItems}
          onApplyWrappingToAll={handleApplyExistingWrappingToAll}
          onCustomizeItem={handleCustomizeCartItem}
          onRemoveWrapping={handleRemoveWrapping}
          onAddGiftCard={handleAddGiftCard}
          wrapAllButtonState={getWrapAllButtonState()}
        />
      </>
    );
  }

  if (currentScreen === 'customize') {
    const customizingItem = customizingItemId
      ? cartItems.find((item) => item.product.id === customizingItemId)
      : null;

    return (
      <AnimatePresence mode="wait">
        <CustomizeWrapping
          onConfirm={(wrapping, message) => {
            if (currentPage === 'cart') {
              if (isWrappingAllItems) {
                handleConfirmWrapAllItems(wrapping, message);
              } else if (customizingItemId) {
                handleConfirmCustomizeCartItem(wrapping, message);
              }
            } else {
              handleConfirmWrappingFromPDP(wrapping, message);
            }
          }}
          onClose={handleCloseCustomization}
          isMultiItem={isWrappingAllItems}
          itemCount={isWrappingAllItems ? cartItems.filter((i) => !i.isGiftCard).length : 1}
          productName={customizingItem?.product.title || selectedProduct?.title || ''}
          productImage={customizingItem?.product.image || selectedProduct?.image || ''}
        />
      </AnimatePresence>
    );
  }

  if (currentScreen === 'giftcard') {
    return (
      <AnimatePresence mode="wait">
        <CustomizeGiftCard
          onConfirm={handleConfirmGiftCard}
          onClose={() => setCurrentScreen('cart')}
        />
      </AnimatePresence>
    );
  }

  if (currentPage === 'product-detail' && selectedProduct && currentScreen === 'pdp') {
    return (
      <>
        <AnimatePresence>
          {showSuccessBanner && (
            <SuccessBanner
              message={successMessage}
              onDismiss={() => setShowSuccessBanner(false)}
            />
          )}
        </AnimatePresence>
        <ProductDetailPage
          product={selectedProduct}
          onBack={() => setCurrentPage('products')}
          onAddToCart={handleAddToCartWithoutWrapping}
          onCustomize={handleCustomizeFromPDP}
        />
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background max-w-md mx-auto relative">
      {/* Header */}
      <Header title="Birthday" />

      {/* Main Content */}
      <main className="flex-1 px-4 pt-4 pb-32 overflow-y-auto">
        {/* Products Header with View Toggle */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-foreground">Showing {products.length} Products</p>
          <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>

        {/* Products Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {products.map((product) => (
              <ProductListItem
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Filter & Sort Button */}
      <FilterSortButton
        onFilterClick={() => setIsFiltersOpen(true)}
        onSortSelect={setCurrentSort}
        currentSort={currentSort}
      />

      {/* Bottom Navigation */}
      <BottomNav
        activeTab="home"
        onNavigateHome={() => setCurrentPage('home')}
        onNavigateCart={() => setCurrentPage('cart')}
      />

      {/* Filters Modal */}
      <FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
    </div>
  );
}