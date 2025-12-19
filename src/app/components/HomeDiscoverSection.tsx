interface DiscoverItem {
  id: number;
  image: string;
  category: string;
  description: string;
}

interface HomeDiscoverSectionProps {
  items?: DiscoverItem[];
}

export function HomeDiscoverSection({ items }: HomeDiscoverSectionProps) {
  // Default discover items
  const defaultItems: DiscoverItem[] = items || [
    {
      id: 1,
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-discover-1.jpg',
      category: 'Studio',
      description: 'Surprise her with a special gift'
    },
    {
      id: 2,
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-discover-2.jpg',
      category: 'Gifts',
      description: 'Surprise her with a special gift'
    },
    {
      id: 3,
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-discover-1.jpg',
      category: 'Studio',
      description: 'Surprise her with a special gift'
    },
    {
      id: 4,
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-discover-2.jpg',
      category: 'Gifts',
      description: 'Surprise her with a special gift'
    }
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
        Discover something new
      </h3>
      <div 
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {defaultItems.map((item) => (
          <div 
            key={item.id} 
            className="relative flex-shrink-0 w-44 h-64 rounded-xl overflow-hidden"
          >
            <img 
              src={item.image} 
              alt={item.category} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span
                className="block mb-2"
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'white',
                }}
              >
                {item.category}
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-montas)',
                  fontSize: '16px',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'white',
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
