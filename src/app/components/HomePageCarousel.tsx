import { useState, useEffect } from 'react';

// Hero images from GitHub repository assets folder
const heroImages = [
  'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-hero-img1.jpg',
  'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-hero-img2.jpg',
  'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-hero-img3.jpg',
];

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaAction?: () => void;
}

interface HomePageCarouselProps {
  slides?: HeroSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function HomePageCarousel({ 
  slides = [], 
  autoPlay = true,
  autoPlayInterval = 5000
}: HomePageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Default slides if none provided
  const defaultSlides: HeroSlide[] = slides.length > 0 ? slides : [
    {
      id: 1,
      image: heroImages[0],
      title: 'Floward X September Studio',
      ctaText: 'Explore Now'
    },
    {
      id: 2,
      image: heroImages[1],
      title: 'Fresh Flowers Daily',
      ctaText: 'Shop Now'
    },
    {
      id: 3,
      image: heroImages[2],
      title: 'Special Occasions',
      ctaText: 'Discover'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && defaultSlides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % defaultSlides.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, defaultSlides.length]);

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < defaultSlides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Handle slide change with transition
  const handleSlideChange = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  return (
    <div 
      className="relative w-full h-[480px] overflow-hidden" 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container with smooth transition */}
      <div 
        className="flex h-full transition-transform duration-600 ease-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transitionDuration: '600ms'
        }}
      >
        {defaultSlides.map((slide, index) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            {/* Hero Image */}
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Bottom Gradient Overlay */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[212px]"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)'
              }}
            />

            {/* Content at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-[49px]">
              <h2 
                className="text-white mb-6 transition-opacity duration-500"
                style={{
                  fontFamily: 'var(--font-montas)',
                  fontSize: '40px',
                  lineHeight: '48px',
                  opacity: index === currentSlide ? 1 : 0.3
                }}
              >
                {slide.title}
              </h2>
              <button 
                onClick={slide.ctaAction}
                className="px-6 py-3 bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(108,108,108,0.15)] transition-opacity duration-500"
                style={{
                  opacity: index === currentSlide ? 1 : 0.3
                }}
              >
                <span 
                  className="text-[#074e59] capitalize"
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '16px',
                    fontWeight: 'var(--font-weight-medium)',
                  }}
                >
                  {slide.ctaText}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      {defaultSlides.length > 1 && (
        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {defaultSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
              className={`transition-all duration-300 ease-in-out rounded-full ${
                index === currentSlide 
                  ? 'w-6 h-1 bg-white' 
                  : 'w-1.5 h-1 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}