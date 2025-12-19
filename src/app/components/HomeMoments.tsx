interface Occasion {
  id: number;
  name: string;
  image: string;
}

interface HomeMomentsProps {
  occasions?: Occasion[];
  onOccasionClick?: (occasionName: string) => void;
}

export function HomeMoments({ occasions, onOccasionClick }: HomeMomentsProps) {
  // Default occasions
  const defaultOccasions: Occasion[] = occasions || [
    { 
      id: 1,
      name: 'Birthday', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-birthday-moments.png' 
    },
    { 
      id: 2,
      name: 'Wedding', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-wedding-moments.png' 
    },
    { 
      id: 3,
      name: 'New Born', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-newborn-moments.png' 
    },
    { 
      id: 4,
      name: 'Easter Day', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-easter-moments.png' 
    },
    { 
      id: 5,
      name: 'Thank You', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-thank-moments.png' 
    },
    { 
      id: 6,
      name: 'Congratulations', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-congrats-moments.png' 
    },
    { 
      id: 7,
      name: 'Anniversary', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-anniversary-moments.png' 
    },
    { 
      id: 8,
      name: 'Graduation', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-grad-moments.png' 
    },
  ];

  return (
    <section className="px-5 mt-8">
      <h3
        className="mb-4"
        style={{
          fontFamily: 'var(--font-montas)',
          fontSize: '28px',
          fontWeight: 'var(--font-weight-light)',
          color: 'var(--foreground)',
        }}
      >
        Turn occasions into moments
      </h3>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {defaultOccasions.map((occasion) => (
          <button
            key={occasion.id}
            className="flex-shrink-0 flex flex-col items-center"
            onClick={() => onOccasionClick?.(occasion.name)}
          >
            <div className="relative w-24 h-24 mb-2">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <img src={occasion.image} alt={occasion.name} className="w-full h-full object-cover" />
              </div>
              <div 
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-3 rounded-full"
                style={{ backgroundColor: 'var(--card)', opacity: 0.3 }}
              />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--foreground)',
              }}
            >
              {occasion.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
