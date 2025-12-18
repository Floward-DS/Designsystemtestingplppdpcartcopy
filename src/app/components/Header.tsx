import { ChevronLeftIcon } from './icons';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md backdrop-filter bg-background/80 border-b border-border">
      <div className="flex flex-col gap-4 px-4 pb-6">
        {/* Status Bar */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <span className="text-[17px] tracking-[-0.408px] text-foreground">9:41</span>
          </div>
          <div className="flex items-center gap-1">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M0 2.5C0 1.67157 0.671573 1 1.5 1H15.5C16.3284 1 17 1.67157 17 2.5V9.5C17 10.3284 16.3284 11 15.5 11H1.5C0.671573 11 0 10.3284 0 9.5V2.5Z" className="fill-foreground/35"/>
              <path d="M1.5 2H15.5V10H1.5V2Z" className="fill-foreground"/>
            </svg>
          </div>
        </div>

        {/* Title with Back Button */}
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center w-6 h-6 -ml-1">
            <ChevronLeftIcon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
          </button>
          <h4 className="text-foreground">{title}</h4>
        </div>

        {/* Filters Carousel */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <FilterChip image="🌸" label="Flowers" />
          <FilterChip image="🍰" label="Cakes" />
          <FilterChip image="🍫" label="Chocolates" />
          <FilterChip image="🕯️" label="Candles" />
          <FilterChip image="🌸" label="Flowers" />
        </div>
      </div>
    </header>
  );
}

interface FilterChipProps {
  image: string;
  label: string;
}

function FilterChip({ image, label }: FilterChipProps) {
  return (
    <button className="flex items-center gap-2 px-3 py-1.5 bg-card shadow-sm border border-border shrink-0 hover:shadow-md transition-shadow my-1" style={{ borderRadius: 'var(--radius-toggle)' }}>
      <span className="text-lg">{image}</span>
      <span className="text-base text-foreground">{label}</span>
    </button>
  );
}