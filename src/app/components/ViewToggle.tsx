import { GridIcon, ListIcon } from './icons';

export type ViewMode = 'grid' | 'list';

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  return (
    <div className="relative h-[34px] w-[84px] bg-secondary" style={{ borderRadius: 'var(--radius-toggle)' }}>
      {/* Sliding background */}
      <div
        className={`absolute top-0.5 h-7 w-10 bg-card shadow-sm transition-all duration-300 ease-in-out ${
          viewMode === 'grid' ? 'left-0.5' : 'left-[42px]'
        }`}
        style={{ borderRadius: 'var(--radius-toggle)' }}
      />
      
      {/* Buttons */}
      <div className="relative flex h-full">
        <button
          onClick={() => onViewModeChange('grid')}
          className={`flex-1 flex items-center justify-center transition-colors ${
            viewMode === 'grid' ? 'text-foreground' : 'text-foreground/40'
          }`}
          aria-label="Grid view"
        >
          <GridIcon className="w-4 h-4" strokeWidth={1.5} />
        </button>
        <button
          onClick={() => onViewModeChange('list')}
          className={`flex-1 flex items-center justify-center transition-colors ${
            viewMode === 'list' ? 'text-foreground' : 'text-foreground/40'
          }`}
          aria-label="List view"
        >
          <ListIcon className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}