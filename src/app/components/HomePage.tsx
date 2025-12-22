import { BottomNav } from './BottomNav';
import { HomeHeader } from './HomeHeader';
import { HomeHeroCarousel } from './HomeHeroCarousel';
import { HomeDiscoverSection } from './HomeDiscoverSection';
import { HomeEleganceCards } from './HomeEleganceCards';
import { HomeMoments } from './HomeMoments';
import { HomeFourProd } from './HomeFourProd';
import { HomeProdCats } from './HomeProdCats';
import { OrderTracking } from './OrderTracking';
import { useState, useEffect, useRef } from 'react';

interface HomePageProps {
  onNavigateToProducts?: () => void;
  activeTab?: 'home' | 'explore' | 'cart' | 'moments' | 'account';
  onTabChange?: (tab: 'home' | 'explore' | 'cart' | 'moments' | 'account') => void;
}

export function HomePage({ onNavigateToProducts, activeTab = 'home', onTabChange }: HomePageProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      console.error('scrollContainer ref not found');
      return;
    }

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const shouldBlur = scrollTop > 380;
      setIsScrolled(shouldBlur);
    };

    // Call once to get initial state
    handleScroll();
    
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen overflow-y-auto bg-background max-w-md mx-auto relative scrollbar-hide"
      style={{
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* IE and Edge */
      }}
    >
      {/* Fixed Header with Blur */}
      <HomeHeader 
        currentLocation="Dubai"
        onLocationClick={() => console.log('Location clicked')}
        onSearchClick={() => console.log('Search clicked')}
        isScrolled={isScrolled}
      />

      {/* Main Content - no ref needed, scrolls with parent */}
      <main className="pb-24">
        {/* Hero Carousel Section */}
        <HomeHeroCarousel />

        {/* Discover Something New */}
        <HomeDiscoverSection />

        {/* Say it with elegance */}
        <HomeEleganceCards />

        {/* Turn occasions into moments */}
        <HomeMoments onOccasionClick={onNavigateToProducts ? () => onNavigateToProducts() : undefined} />

        {/* Customers love these gifts */}
        <HomeFourProd 
          onProductClick={onNavigateToProducts ? () => onNavigateToProducts() : undefined}
          onShopAllClick={onNavigateToProducts ? () => onNavigateToProducts() : undefined}
        />

        {/* Premium gifts for all */}
        <HomeProdCats />
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
      
      {/* Order Tracking Widget */}
      <OrderTracking />
    </div>
  );
}