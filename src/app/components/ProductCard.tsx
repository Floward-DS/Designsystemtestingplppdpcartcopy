interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <button onClick={onClick} className="flex flex-col gap-4 text-left w-full">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted" style={{ borderRadius: 'var(--radius-card)' }}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-baseline gap-1">
          <small className="text-foreground">{product.currency}</small>
          <span className="price text-foreground">{product.price}</span>
        </div>
        <label className="text-foreground line-clamp-2">{product.title}</label>
      </div>
    </button>
  );
}