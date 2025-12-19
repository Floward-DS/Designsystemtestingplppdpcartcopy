interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface HomeFourProdProps {
  products?: Product[];
  onProductClick?: (productName: string) => void;
  onShopAllClick?: () => void;
}

export function HomeFourProd({ products, onProductClick, onShopAllClick }: HomeFourProdProps) {
  // Default products
  const defaultProducts: Product[] = products || [
    { 
      id: 1,
      name: 'Zayan Variscite Bracelet With Silver | Elegance Vase', 
      price: '320', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/homeprod1.jpg' 
    },
    { 
      id: 2,
      name: 'Premium Flower Arrangement', 
      price: '410', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/homeprod2.jpg' 
    },
    { 
      id: 3,
      name: 'Luxury Gift Box', 
      price: '520', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/homeprod3.jpg' 
    },
    { 
      id: 4,
      name: 'Designer Bouquet', 
      price: '280', 
      image: 'https://raw.githubusercontent.com/Floward-DS/Designsystemtestingplppdpcartcopy/main/src/assets/homeprod4.jpg' 
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
        Customers love these gifts
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {defaultProducts.map((product) => (
          <button
            key={product.id}
            className="flex flex-col text-left"
            onClick={() => onProductClick?.(product.name)}
          >
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
          </button>
        ))}
      </div>
      <button
        className="w-full mt-4 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
        style={{
          fontFamily: 'var(--font-founders)',
          fontSize: '16px',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--secondary-foreground)',
        }}
        onClick={onShopAllClick}
      >
        Shop all best sellers
      </button>
    </section>
  );
}