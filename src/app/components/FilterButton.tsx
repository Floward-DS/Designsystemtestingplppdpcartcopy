import { FilterIcon } from './icons';

interface FilterButtonProps {
  onClick?: () => void;
}

export function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow z-40"
      style={{ borderRadius: 'var(--radius-button)' }}
    >
      <FilterIcon className="w-5 h-5" strokeWidth={1.5} />
      <span>Filters</span>
    </button>
  );
}