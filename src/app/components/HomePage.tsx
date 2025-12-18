import imgHero from "figma:asset/a584bcb332190500f2d3e2d673a74deaf701917e.png";
import imgDiscover1 from "figma:asset/b313578e2ea845a0e42653456f2a171abd252309.png";
import imgDiscover2 from "figma:asset/f091472c128c0fc15e2afecbfb75747c256e62ba.png";

import imgSayItCard1 from "figma:asset/b313578e2ea845a0e42653456f2a171abd252309.png";
import imgSayItCard2 from "figma:asset/f091472c128c0fc15e2afecbfb75747c256e62ba.png";
import imgSayItCard3 from "figma:asset/b1b93aafd5042c494a44beba28d957a25f4d583f.png";
import imgSayItCard4 from "figma:asset/dc15b661507c79b2513d3ae9a9a57e63f972a701.png";

import imgOccasion1 from "figma:asset/dc15b661507c79b2513d3ae9a9a57e63f972a701.png";
import imgOccasion2 from "figma:asset/1ee0190d1721a0d07dfaf44e3ecc4b238d800f88.png";
import imgOccasion3 from "figma:asset/926f43c945e3fe893a0bb808f12076d78f304843.png";
import imgOccasion4 from "figma:asset/d87a2958a18817738575d4955ae1e4d2d2cb2548.png";
import imgOccasion5 from "figma:asset/3330470d1c80e8250ee64c1e34790eb07803c32d.png";
import imgOccasion6 from "figma:asset/fbb2c4547671d48bff87294c9185531885cff500.png";
import imgOccasion7 from "figma:asset/d86b8499472ed82bba017a87d508c1624a3a6484.png";
import imgOccasion8 from "figma:asset/d51bac313c22b9db7d00a5f5721a62fd0cfc35c8.png";

import imgProduct1 from "figma:asset/df3f2ec56398611caecdb1dfa9a4cbc4b41afa59.png";
import imgProduct2 from "figma:asset/ab7a3fae8b6fa0d0a47bc1115906fb9e2d62375d.png";

import imgGift1 from "figma:asset/a04d776dba7c282b974c3e4b549b705d1a4b6a12.png";
import imgGift2 from "figma:asset/af5a3ab0c17611a2594c4b932ec236ef0ded65c8.png";

import imgBetter1 from "figma:asset/37210091c83c317697606e7ff1df64ca07564932.png";
import imgBetter2 from "figma:asset/d16fedb4be77cae55a10c120f7d5a0104f7ab5c7.png";
import imgBetter3 from "figma:asset/4a0f1014c3035e0d9a617ca5a3ad707782645041.png";
import imgBetter4 from "figma:asset/b946637786dda0680bc5f2e92593d7484dc7f8fd.png";
import imgBetter5 from "figma:asset/102fdd7701f79d5e2e950c7978bc7c642d647427.png";
import imgBetter6 from "figma:asset/53855eb3f2821d6bb283baa736ef45b20f40ac69.png";
import imgBetter7 from "figma:asset/4bca1a25d2697743369caa0e88f0a62f0dd8379b.png";
import imgBetter8 from "figma:asset/76c2dcb99cb198e9a31c36c7b9b64b0fc2c88fa1.png";

import { BottomNav } from './BottomNav';

interface HomePageProps {
  onNavigateToProducts?: () => void;
}

export function HomePage({ onNavigateToProducts }: HomePageProps) {
  const occasions = [
    { name: 'Birthday', image: imgOccasion1 },
    { name: 'Wedding', image: imgOccasion2 },
    { name: 'New Born', image: imgOccasion3 },
    { name: 'Easter Day', image: imgOccasion4 },
    { name: 'Thank You', image: imgOccasion5 },
    { name: 'Congratulations', image: imgOccasion6 },
    { name: 'Anniversary', image: imgOccasion7 },
    { name: 'Graduation', image: imgOccasion8 },
  ];

  const betterWithFlowers = [
    { name: 'Decorations', image: imgBetter1 },
    { name: 'Birthdays', image: imgBetter2 },
    { name: 'Weddings', image: imgBetter3 },
    { name: 'Events', image: imgBetter4 },
    { name: 'Gifts', image: imgBetter5 },
    { name: 'Surprises', image: imgBetter6 },
    { name: 'Celebrations', image: imgBetter7 },
    { name: 'Love', image: imgBetter8 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background max-w-md mx-auto relative">
      {/* Header */}
      <header 
        className="flex items-center justify-between px-5 py-4"
        style={{ backgroundColor: 'var(--card)' }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-montas)',
            fontSize: '28px',
            fontWeight: 'var(--font-weight-normal)',
            color: 'var(--foreground)',
          }}
        >
          FLOWARD
        </h1>
        <div className="flex items-center gap-3">
          <button
            className="p-2"
            style={{ color: 'var(--foreground)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            className="p-2"
            style={{ color: 'var(--foreground)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        {/* Hero Section */}
        <div className="relative h-96 mx-5 mt-5 rounded-xl overflow-hidden">
          <img 
            src={imgHero} 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-5 right-5">
            <div 
              className="inline-block px-5 py-3 mb-3 backdrop-blur-sm rounded-full border border-white/80"
              style={{ backgroundColor: 'rgba(153, 148, 127, 0.1)' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-founders)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'white',
                }}
              >
                Gifts For Her
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-montas)',
                fontSize: '22px',
                fontWeight: 'var(--font-weight-normal)',
                color: 'white',
                lineHeight: '1.3',
              }}
            >
              Surprise her with a special gift
            </h2>
          </div>
        </div>

        {/* Discover Something New */}
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
          <div className="flex gap-3 overflow-x-auto pb-2">
            <div className="relative flex-shrink-0 w-44 h-64 rounded-xl overflow-hidden">
              <img src={imgDiscover1} alt="Discover" className="w-full h-full object-cover" />
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
                  Studio
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-montas)',
                    fontSize: '16px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'white',
                  }}
                >
                  Surprise her with a special gift
                </p>
              </div>
            </div>
            <div className="relative flex-shrink-0 w-44 h-64 rounded-xl overflow-hidden">
              <img src={imgDiscover2} alt="Discover" className="w-full h-full object-cover" />
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
                  Gifts
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-montas)',
                    fontSize: '16px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'white',
                  }}
                >
                  Surprise her with a special gift
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Say it with elegance */}
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
            {[
              { text: 'I Love You', image: imgSayItCard1 },
              { text: 'Thank You', image: imgSayItCard2 },
              { text: 'Get Well Soon', image: imgSayItCard3 },
              { text: "I'm Sorry!", image: imgSayItCard4 },
            ].map((card, index) => (
              <div key={index} className="relative h-28 rounded-xl overflow-hidden">
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

        {/* Turn occasions into moments */}
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
          <div className="flex gap-3 overflow-x-auto pb-2">
            {occasions.map((occasion, index) => (
              <button
                key={index}
                className="flex-shrink-0 flex flex-col items-center"
                onClick={onNavigateToProducts}
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

        {/* Customers love these gifts */}
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
            Customers love these gifts
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Zayan Variscite Bracelet With Silver | Elegance Vase', price: '320', image: imgProduct1 },
              { name: 'Premium Flower Arrangement', price: '410', image: imgProduct2 },
              { name: 'Luxury Gift Box', price: '520', image: imgGift1 },
              { name: 'Designer Bouquet', price: '280', image: imgGift2 },
            ].map((product, index) => (
              <div key={index} className="flex flex-col">
                <div className="rounded-lg overflow-hidden mb-2 aspect-square">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '11px',
                      fontWeight: 'var(--font-weight-normal)',
                      color: 'var(--foreground)',
                    }}
                  >
                    AED
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-founders)',
                      fontSize: '16px',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                    }}
                  >
                    {product.price}
                  </span>
                </div>
                <p
                  className="line-clamp-2"
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                  }}
                >
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Everything is better with flowers */}
        <section className="px-5 mt-8 mb-8">
          <h3
            className="mb-4"
            style={{
              fontFamily: 'var(--font-montas)',
              fontSize: '28px',
              fontWeight: 'var(--font-weight-light)',
              color: 'var(--foreground)',
            }}
          >
            Everything is better with flowers
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {betterWithFlowers.map((item, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-founders)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                  }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
