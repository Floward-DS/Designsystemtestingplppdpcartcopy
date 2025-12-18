import { useState } from 'react';
import { ChevronLeftIcon } from './icons';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface FilterSection {
  id: string;
  title: string;
  type: 'single' | 'multiple';
  expanded: boolean;
  options: FilterOption[];
  selectedOptions?: string[];
  displayValue?: string;
}

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FiltersModal({ isOpen, onClose }: FiltersModalProps) {
  const [filters, setFilters] = useState<FilterSection[]>([
    {
      id: 'categories',
      title: 'Categories',
      type: 'multiple',
      expanded: true,
      options: [
        { id: 'flowers', label: 'Flowers', count: 120 },
        { id: 'cakes', label: 'Cakes', count: 120 },
        { id: 'chocolates', label: 'Chocolates', count: 120 },
        { id: 'watches', label: 'Watches', count: 120 },
      ],
      selectedOptions: ['flowers'],
      displayValue: 'Flowers',
    },
    {
      id: 'bundle-type',
      title: 'Bundle Type',
      type: 'single',
      expanded: true,
      options: [
        { id: 'flowers-cakes', label: 'Flowers & Cakes', count: 120 },
        { id: 'flowers-chocolates', label: 'Flowers & Chocolates', count: 120 },
        { id: 'flowers-perfumes', label: 'Flowers & Perfumes', count: 120 },
        { id: 'flowers-candles', label: 'Flowers & Candles', count: 120 },
      ],
      selectedOptions: ['flowers-cakes'],
      displayValue: 'Flowers & Cakes',
    },
    {
      id: 'color',
      title: 'Color',
      type: 'multiple',
      expanded: false,
      options: [],
      selectedOptions: ['red', 'white', 'purple'],
      displayValue: 'Red, White, Purple',
    },
    {
      id: 'price',
      title: 'Price',
      type: 'single',
      expanded: false,
      options: [],
    },
  ]);

  const toggleSection = (sectionId: string) => {
    setFilters((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, expanded: !section.expanded }
          : section
      )
    );
  };

  const toggleOption = (sectionId: string, optionId: string) => {
    setFilters((prev) =>
      prev.map((section) => {
        if (section.id !== sectionId) return section;

        if (section.type === 'single') {
          return {
            ...section,
            selectedOptions: [optionId],
          };
        } else {
          const isSelected = section.selectedOptions?.includes(optionId);
          const newSelected = isSelected
            ? section.selectedOptions?.filter((id) => id !== optionId) || []
            : [...(section.selectedOptions || []), optionId];
          return {
            ...section,
            selectedOptions: newSelected,
          };
        }
      })
    );
  };

  const clearAllFilters = () => {
    setFilters((prev) =>
      prev.map((section) => ({
        ...section,
        selectedOptions: [],
        displayValue: undefined,
      }))
    );
  };

  const getSelectedCount = () => {
    return filters.reduce(
      (count, section) => count + (section.selectedOptions?.length || 0),
      0
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background max-w-md mx-auto">
      {/* Header */}
      <header className="sticky top-0 shadow-md z-10" style={{ backgroundColor: 'var(--card)' }}>
        <div className="pt-4 pb-3 px-5">
          {/* Status Bar Area */}
          <div className="h-5 mb-4" />
          
          {/* Title and Close Button */}
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={clearAllFilters}
              className="text-foreground underline"
              style={{ 
                fontFamily: 'var(--font-founders)',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)',
              }}
            >
              Clear All
            </button>
            
            <h1
              style={{
                fontFamily: 'var(--font-montas)',
                fontSize: '28px',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--foreground)',
              }}
            >
              Filter
            </h1>
            
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{ backgroundColor: 'var(--background)' }}
            >
              <div className="w-4 h-4">
                <svg viewBox="0 0 16 16" fill="none">
                  <path
                    d="M14.75 0.75L0.75 14.75"
                    stroke="var(--foreground)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0.75 0.75L14.75 14.75"
                    stroke="var(--foreground)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px" style={{ backgroundColor: 'var(--border)' }} />
      </header>

      {/* Scrollable Content */}
      <div className="overflow-y-auto h-[calc(100vh-147px-115px)] px-5 pt-6 pb-6">
        <div className="flex flex-col gap-4">
          {filters.map((section) => (
            <FilterSectionCard
              key={section.id}
              section={section}
              onToggle={() => toggleSection(section.id)}
              onOptionToggle={(optionId) => toggleOption(section.id, optionId)}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
        <div
          className="backdrop-blur-sm px-5 pt-6 pb-14"
          style={{
            backgroundColor: 'rgba(247, 246, 242, 0.9)',
            boxShadow: '0px -64px 18px 0px rgba(0,0,0,0), 0px -41px 16px 0px rgba(0,0,0,0.01), 0px -23px 14px 0px rgba(0,0,0,0.02), 0px -10px 10px 0px rgba(0,0,0,0.03), 0px -3px 6px 0px rgba(0,0,0,0.04)',
          }}
        >
          <button
            className="w-full h-[60px] flex items-center justify-center text-primary-foreground"
            style={{
              backgroundColor: 'var(--primary)',
              borderRadius: 'var(--radius-button)',
              fontFamily: 'var(--font-founders)',
              fontWeight: 'var(--font-weight-semibold)',
            }}
          >
            Show 115 Products
          </button>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full" />
      </div>
    </div>
  );
}

interface FilterSectionCardProps {
  section: FilterSection;
  onToggle: () => void;
  onOptionToggle: (optionId: string) => void;
}

function FilterSectionCard({ section, onToggle, onOptionToggle }: FilterSectionCardProps) {
  const hasValue = section.displayValue && !section.expanded;
  const height = section.expanded
    ? `${62 + section.options.length * 51}px`
    : hasValue
    ? '84px'
    : '62px';

  return (
    <div
      className="relative backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        height,
      }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="absolute top-0 left-0 right-0 h-[62px] flex items-center justify-between px-5"
      >
        <div className="flex flex-col items-start gap-1">
          <span
            style={{
              fontFamily: 'var(--font-founders)',
              fontSize: '18px',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--primary)',
            }}
          >
            {section.title}
          </span>
          {hasValue && (
            <span
              style={{
                fontFamily: 'var(--font-founders)',
                fontSize: 'var(--text-base)',
                color: 'var(--primary)',
              }}
            >
              {section.displayValue}
            </span>
          )}
        </div>
        
        <div className="w-6 h-6">
          <ChevronLeftIcon
            className={`w-6 h-6 transition-transform ${
              section.expanded ? '-rotate-90' : 'rotate-90'
            }`}
          />
        </div>
      </button>

      {/* Options */}
      {section.expanded && section.options.length > 0 && (
        <div className="absolute top-[62px] left-0 right-0">
          {section.options.map((option, index) => (
            <FilterOption
              key={option.id}
              option={option}
              isSelected={section.selectedOptions?.includes(option.id) || false}
              isLast={index === section.options.length - 1}
              onToggle={() => onOptionToggle(option.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface FilterOptionProps {
  option: FilterOption;
  isSelected: boolean;
  isLast: boolean;
  onToggle: () => void;
}

function FilterOption({ option, isSelected, isLast, onToggle }: FilterOptionProps) {
  return (
    <button
      onClick={onToggle}
      className="relative w-full h-[51px] px-5 flex items-center justify-between"
      style={{
        borderTop: '1px solid rgba(247, 246, 242, 1)',
        borderBottom: isLast ? 'none' : '1px solid rgba(247, 246, 242, 1)',
      }}
    >
      <div className="flex items-center gap-2">
        <span
          style={{
            fontFamily: 'var(--font-founders)',
            fontSize: 'var(--text-base)',
            color: 'var(--primary)',
          }}
        >
          {option.label}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-founders)',
            fontSize: 'var(--text-base)',
            color: 'rgba(139, 170, 173, 1)',
          }}
        >
          ({option.count})
        </span>
      </div>

      {/* Checkbox */}
      <div className="relative w-5 h-5">
        {isSelected ? (
          <svg viewBox="0 0 20 20" fill="none">
            <rect
              width="19"
              height="19"
              x="0.5"
              y="0.5"
              rx="3.5"
              fill="var(--primary)"
              stroke="var(--primary)"
            />
            <path
              d="M5 10.5L8.5 14L15 7.5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
        ) : (
          <div
            className="w-full h-full rounded"
            style={{
              border: '1px solid var(--primary)',
              borderRadius: '4px',
            }}
          />
        )}
      </div>
    </button>
  );
}