interface EleganceCard {
  id: number;
  text: string;
  image: string;
}

interface HomeEleganceCardsProps {
  cards?: EleganceCard[];
}

export function HomeEleganceCards({ cards }: HomeEleganceCardsProps) {
  // Default elegance cards
  const defaultCards: EleganceCard[] = cards || [
    { 
      id: 1,
      text: 'I Love You', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-ele-love.jpg' 
    },
    { 
      id: 2,
      text: 'Thank You', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-ele-thank.jpg' 
    },
    { 
      id: 3,
      text: 'Get Well Soon', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-ele-well.jpg' 
    },
    { 
      id: 4,
      text: "I'm Sorry!", 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/home-ele-sorry.jpg' 
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
        Say it with elegance
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {defaultCards.map((card) => (
          <div key={card.id} className="relative h-28 rounded-xl overflow-hidden">
            <img src={card.image} alt={card.text} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-shadow-lg"
                style={{
                  fontFamily: 'var(--font-montas)',
                  fontSize: '24px',
                  fontWeight: 'var(--font-weight-light)',
                  color: 'white',
                  textShadow: '0px 1px 3px rgba(0,0,0,0.4)',
                }}
              >
                {card.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
