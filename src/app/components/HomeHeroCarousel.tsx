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

interface HomeHeroCarouselProps {
  slides?: HeroSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function HomeHeroCarousel({ 
  slides = [], 
  autoPlay = true,
  autoPlayInterval = 5000
}: HomeHeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

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

  // Create infinite loop by duplicating first slide at the end
  const infiniteSlides = [...defaultSlides, defaultSlides[0]];

  // Auto-play functionality with infinite loop
  useEffect(() => {
    if (autoPlay && defaultSlides.length > 1) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setCurrentSlide(prev => prev + 1);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, defaultSlides.length]);

  // Handle the infinite loop reset
  useEffect(() => {
    if (currentSlide === infiniteSlides.length - 1) {
      // After transition to the duplicate first slide, reset to actual first slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 600);
    }
  }, [currentSlide, infiniteSlides.length]);

  // Handle touch events for swipe (with infinite loop)
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

    if (isLeftSwipe) {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev - 1);
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Handle slide change with transition
  const handleSlideChange = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  // Get the actual slide index for indicators (accounting for duplicate)
  const actualSlideIndex = currentSlide >= defaultSlides.length ? 0 : currentSlide;

  return (
    <div 
      className="relative w-full h-[480px] overflow-hidden" 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container with smooth transition */}
      <div 
        className="flex h-full will-change-transform"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning ? 'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
          WebkitTransform: `translateX(-${currentSlide * 100}%)`,
          WebkitTransition: isTransitioning ? 'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
        }}
      >
        {infiniteSlides.map((slide, index) => {
          const isActive = index === currentSlide || (currentSlide === infiniteSlides.length - 1 && index === 0);
          return (
            <div key={`slide-${index}`} className="relative min-w-full h-full flex-shrink-0">
              {/* Hero Image */}
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{
                  opacity: isActive ? 1 : 0.6,
                  transform: isActive ? 'scale(1)' : 'scale(1.05)',
                  transition: 'opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  willChange: 'opacity, transform'
                }}
              />
              
              {/* Bottom Gradient Overlay */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[212px] pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)',
                  opacity: isActive ? 1 : 0.8,
                  transition: 'opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              />

              {/* Content at Bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 px-5 pb-[49px]"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  willChange: 'opacity, transform'
                }}
              >
                <h2 
                  className="text-white mb-6"
                  style={{
                    fontFamily: 'var(--font-montas)',
                    fontSize: '40px',
                    lineHeight: '48px'
                  }}
                >
                  {slide.title}
                </h2>
                <button 
                  onClick={slide.ctaAction}
                  className="px-6 py-3 bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(108,108,108,0.15)]"
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
          );
        })}
      </div>

      {/* Carousel Indicators */}
      {defaultSlides.length > 1 && (
        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {defaultSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 ease-in-out rounded-full ${
                index === actualSlideIndex 
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