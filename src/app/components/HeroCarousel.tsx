import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaAction?: () => void;
}

interface HeroCarouselProps {
  slides?: HeroSlide[];
  currentLocation?: string;
  onLocationClick?: () => void;
  onSearchClick?: () => void;
}

export function HeroCarousel({ 
  slides = [], 
  currentLocation = 'Ras Al-Khaimah',
  onLocationClick,
  onSearchClick
}: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default slide if none provided
  const defaultSlides: HeroSlide[] = slides.length > 0 ? slides : [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80',
      title: 'Floward X September Studio',
      ctaText: 'Explore Now'
    }
  ];

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src={defaultSlides[currentSlide].image} 
          alt={defaultSlides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        
        {/* Bottom Gradient Overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[212px]"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      {/* Top Overlay with Logo and Controls */}
      <div className="absolute top-0 left-0 right-0">
        {/* Top Gradient */}
        <div 
          className="absolute inset-0 h-[128px]"
          style={{
            backdropFilter: 'blur(5px)',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)'
          }}
        />
        
        {/* Header Content */}
        <div className="relative z-10 flex items-center justify-between px-[21px] pt-[82px] pb-4">
          {/* Floward Logo */}
          <div className="w-[172px] h-[32px]">
            <svg width="174" height="33" viewBox="0 0 174 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.6914 0.411194V31.1651C28.7502 31.105 32.7159 30.3085 36.5 28.7706L36.5039 28.7686L36.8369 28.6397L37.1777 28.5079V32.6046H21.0498V0.411194H24.6914Z" fill="white" stroke="white" strokeWidth="0.5"/>
              <path d="M16.3623 0.411194V4.49225L16.0215 4.36041L15.6885 4.23151L15.6846 4.22955C11.9212 2.69372 7.94575 1.89594 3.8916 1.83405V12.6143H16.3623V16.712L16.0215 16.5801L15.6885 16.4512L15.6846 16.4493C11.9212 14.9134 7.94575 14.1157 3.8916 14.0538V32.6046H0.25V0.411194H16.3623Z" fill="white" stroke="white" strokeWidth="0.5"/>
              <path d="M51.4761 0.25H51.4771H51.478L51.8872 0.257812C60.4552 0.527578 67.3539 7.7279 67.3384 16.5078C67.3384 20.8295 65.6628 24.9071 62.6343 27.9844C59.6215 31.0456 55.6386 32.7333 51.4136 32.7334H51.3647C47.1085 32.717 43.11 31.013 40.1128 27.9512C37.1147 24.8885 35.4879 20.8114 35.4878 16.46C35.4878 12.1059 37.1794 8.01198 40.2241 4.93457H40.2251C43.2221 1.92213 47.1883 0.250069 51.397 0.25H51.4761ZM48.8433 2.50684C48.5823 2.50684 48.3193 2.52189 48.0483 2.53809L48.0493 2.53906C45.3092 2.71213 43.0409 3.85723 41.2925 5.96387C39.6093 7.98809 38.7956 10.5065 38.7642 13.9307C38.7644 13.9617 38.77 14.0068 38.7788 14.0898C38.7864 14.1617 38.7945 14.2507 38.7954 14.3467C38.827 14.812 38.8741 15.399 38.9673 15.9834L39.0835 16.6182C39.7161 19.7691 41.1298 22.6223 43.2886 25.1143C45.1675 27.2768 47.3437 28.8183 49.7651 29.707L50.2534 29.876L50.2544 29.877C52.7111 30.6933 55.0473 30.7263 57.2271 29.9912L57.2417 29.9775L57.2983 29.958C60.6186 28.8281 62.7694 26.3551 63.7036 22.5752C64.3261 19.9978 64.1881 17.3367 63.2642 14.4404V14.4395C62.1989 11.1293 60.3522 8.31599 57.7866 6.10645V6.10547C54.9523 3.68737 52.0255 2.50694 48.8433 2.50684Z" fill="white" stroke="white" strokeWidth="0.5"/>
              <path d="M135.406 0.378967C136.326 0.378997 138.731 0.525001 140.774 1.80377H140.775C142.92 3.16155 144.001 5.29537 144.001 8.10944C144.001 9.95759 143.41 11.8259 142.141 13.2354C140.867 14.6498 138.927 15.5811 136.278 15.5811H131.933C132.122 16.7367 132.714 17.6481 133.529 18.4385C134.193 19.0824 134.997 19.639 135.842 20.1778L136.696 20.713L136.7 20.7149C137.22 21.0507 137.764 21.3929 138.273 21.7325L138.275 21.7335C138.393 21.8134 138.507 21.8902 138.622 21.9669C138.737 22.0434 138.854 22.12 138.974 22.2012L139.222 22.3702L139.206 22.3848C140.709 23.3869 142.245 24.4444 143.421 25.8809C144.671 27.4083 145.509 29.3546 145.509 32.0967V32.5889H141.598V32.0782C141.624 29.0844 139.845 27.3091 137.655 25.5421L136.695 24.7813C133.733 22.4635 130.555 19.9934 130.555 14.7667V14.2755H134.47C136.441 14.2755 137.857 13.4831 138.785 12.3311C139.719 11.1722 140.17 9.63471 140.17 8.14166C140.17 6.58653 139.68 4.98575 138.667 3.77838C137.659 2.57739 136.12 1.7492 133.979 1.74908H128.517V32.5723H124.875V0.378967H135.406Z" fill="white" stroke="white" strokeWidth="0.5"/>
              <path d="M157.574 0.411194L158.104 0.426819C163.509 0.675091 166.949 3.49136 168.9 5.85455H168.901C171.315 8.78146 172.766 12.6574 172.766 16.2178C172.766 24.1418 167.131 32.6046 156.697 32.6046H149.657V0.411194H157.574ZM153.299 31.2667H156.936C160.548 31.2667 163.441 29.3523 165.44 26.4815C167.442 23.6067 168.537 19.7846 168.537 16.0245C168.537 6.67049 161.814 1.73352 157.047 1.73346H153.299V31.2667Z" fill="white" stroke="white" strokeWidth="0.5"/>
              <path d="M71.9448 0.411194L71.9946 0.596741L78.7896 25.921L83.0278 6.87799L83.1821 6.13873C83.5191 4.40998 83.688 2.65055 83.688 0.903381V0.411194H86.4634L86.5122 0.598694L93.1177 26.0186L99.4185 0.600647L99.4653 0.411194H100.805L100.728 0.721741L94.604 25.3868C94.0693 27.5924 93.7866 29.8612 93.7866 32.129V32.6212H90.7866L90.7397 32.4307L90.6919 32.2383L84.3481 6.99713L80.2466 25.3321V25.3331C79.7431 27.5555 79.4917 29.8425 79.4917 32.1133V32.6046H76.6382L76.5884 32.42L76.5405 32.2422L68.0054 0.726624L67.9194 0.411194H71.9448Z" fill="white" stroke="white" strokeWidth="0.5"/>
              <path d="M109.844 0.411194L109.905 0.57135L122.043 32.2657L122.173 32.6046H118.192L118.132 32.4415L114.23 21.835L114.153 21.7559H103.609L103.515 21.8594L99.9932 32.4337L99.9365 32.6046H98.5029L98.6152 32.2745L106.404 9.3028C107.316 6.58748 107.788 3.76122 107.788 0.903381V0.411194H109.844ZM103.992 20.4337H113.637L108.467 7.27057L103.992 20.4337Z" fill="white" stroke="white" strokeWidth="0.5"/>
            </svg>
          </div>

          {/* Location Selector */}
          <button 
            onClick={onLocationClick}
            className="flex flex-col items-start px-4 py-[6px] rounded-[40px] backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          >
            <span 
              className="text-[#F7F6F2] opacity-70"
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: '12px',
                fontWeight: 'var(--font-weight-light)',
              }}
            >
              Deliver to
            </span>
            <div className="flex items-center gap-[5px] -mb-[3px]">
              <span 
                className="text-white text-right"
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                {currentLocation}
              </span>
              <ChevronDown className="w-[6px] h-[2px]" strokeWidth={1.5} color="white" />
            </div>
          </button>

          {/* Search Button */}
          <button 
            onClick={onSearchClick}
            className="w-[38px] h-[38px] rounded-full flex items-center justify-center backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          >
            <Search className="w-5 h-5" strokeWidth={1.5} color="#F7F6F2" />
          </button>
        </div>
      </div>

      {/* Content at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-[49px]">
        <h2 
          className="text-white mb-6"
          style={{
            fontFamily: 'var(--font-montas)',
            fontSize: '40px',
            lineHeight: '48px',
          }}
        >
          {defaultSlides[currentSlide].title}
        </h2>
        <button 
          onClick={defaultSlides[currentSlide].ctaAction}
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
            {defaultSlides[currentSlide].ctaText}
          </span>
        </button>
      </div>

      {/* Carousel Indicators (if multiple slides) */}
      {defaultSlides.length > 1 && (
        <div className="absolute bottom-[180px] left-1/2 -translate-x-1/2 flex gap-2">
          {defaultSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-6' 
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
