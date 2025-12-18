interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
}

interface ProductListItemProps {
  product: Product;
  onClick?: () => void;
}

export function ProductListItem({ product, onClick }: ProductListItemProps) {
  return (
    <button onClick={onClick} className="flex flex-col gap-4 text-left w-full">
      {/* Product Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-muted" style={{ borderRadius: 'var(--radius-card)' }}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        {/* Carousel dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-4 h-0.5 bg-primary-foreground rounded-full shadow-sm" />
          <div className="w-4 h-0.5 bg-primary-foreground/60 rounded-full" />
          <div className="w-4 h-0.5 bg-primary-foreground/60 rounded-full" />
          <div className="w-4 h-0.5 bg-primary-foreground/60 rounded-full" />
          <div className="w-4 h-0.5 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-1">
          <small className="text-foreground">{product.currency}</small>
          <span className="price text-foreground">{product.price}</span>
        </div>
        <p className="text-foreground">{product.title}</p>
      </div>
    </button>
  );
}