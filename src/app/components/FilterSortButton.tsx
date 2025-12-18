import { useState } from 'react';
import { FilterIcon, SortIcon, CloseIcon } from './icons';

interface FilterSortButtonProps {
  onFilterClick: () => void;
  onSortSelect: (sortOption: string) => void;
  currentSort?: string;
}

type SortOption = {
  id: string;
  label: string;
};

const sortOptions: SortOption[] = [
  { id: 'popularity', label: 'Popularity' },
  { id: 'price-low-high', label: 'Price: Low to High' },
  { id: 'price-high-low', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest First' },
  { id: 'rating', label: 'Customer Rating' },
  { id: 'discount', label: 'Discount' },
];

export function FilterSortButton({ onFilterClick, onSortSelect, currentSort = 'popularity' }: FilterSortButtonProps) {
  const [showSortMenu, setShowSortMenu] = useState(false);

  const handleSortSelect = (sortId: string) => {
    onSortSelect(sortId);
    setShowSortMenu(false);
  };

  return (
    <>
      <div
        className="fixed bottom-28 left-1/2 -translate-x-1/2 flex items-center bg-primary text-primary-foreground shadow-lg z-40"
        style={{ borderRadius: 'var(--radius-button)' }}
      >
        {/* Filter Button */}
        <button
          onClick={onFilterClick}
          className="flex items-center gap-2 px-4 py-2 hover:opacity-90 transition-opacity"
        >
          <FilterIcon className="w-5 h-5" />
          <span>Filter</span>
        </button>

        {/* Divider */}
        <div 
          className="h-5 w-px" 
          style={{ backgroundColor: 'var(--primary-foreground)' }}
        />

        {/* Sort Button */}
        <button
          onClick={() => setShowSortMenu(true)}
          className="flex items-center gap-2 px-4 py-2 hover:opacity-90 transition-opacity"
        >
          <SortIcon className="w-5 h-5" />
          <span>Sort</span>
        </button>
      </div>

      {/* Sort Menu */}
      {showSortMenu && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowSortMenu(false)}
        >
          <div 
            className="absolute bottom-0 left-0 right-0 max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-t-3xl overflow-hidden"
              style={{ backgroundColor: 'var(--card)' }}
            >
              {/* Header */}
              <div className="px-5 pt-6 pb-4 relative">
                <h3
                  style={{
                    fontFamily: 'var(--font-montas)',
                    fontSize: '24px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--foreground)',
                    textAlign: 'center',
                  }}
                >
                  Sort By
                </h3>
                <button
                  onClick={() => setShowSortMenu(false)}
                  className="absolute right-5 top-6 p-1 hover:opacity-70 transition-opacity"
                  aria-label="Close"
                >
                  <CloseIcon className="w-6 h-6" style={{ color: 'var(--foreground)' }} />
                </button>
              </div>

              {/* Sort Options */}
              <div className="px-5 pb-6">
                {sortOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleSortSelect(option.id)}
                    className="w-full flex items-center justify-between py-4"
                    style={{
                      borderTop: index > 0 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-founders)',
                        fontSize: 'var(--text-base)',
                        fontWeight: currentSort === option.id ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
                        color: 'var(--foreground)',
                      }}
                    >
                      {option.label}
                    </span>
                    {currentSort === option.id && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M4 10L8 14L16 6"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>

              {/* Bottom Safe Area */}
              <div className="h-8" style={{ backgroundColor: 'var(--card)' }}>
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}