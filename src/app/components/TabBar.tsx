import { ExploreIcon, SearchIcon, BagIcon, CalendarIcon, ProfileIcon } from './icons';

interface TabBarProps {
  activeTab?: 'home' | 'explore' | 'cart' | 'moments' | 'account';
  onTabChange?: (tab: 'home' | 'explore' | 'cart' | 'moments' | 'account') => void;
}

export function TabBar({ activeTab = 'home', onTabChange }: TabBarProps) {
  const handleTabClick = (tab: 'home' | 'explore' | 'cart' | 'moments' | 'account') => {
    onTabChange?.(tab);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border/50">
      {/* Tab Bar - 49pt height per iOS HIG */}
      <div className="flex items-center justify-around px-2 h-[49px] max-w-md mx-auto">
        <NavItem 
          icon={<ExploreIcon className="w-7 h-7" />} 
          label="Home" 
          active={activeTab === 'home'} 
          onClick={() => handleTabClick('home')} 
        />
        <NavItem 
          icon={<SearchIcon className="w-7 h-7" />} 
          label="Explore" 
          active={activeTab === 'explore'} 
          onClick={() => handleTabClick('explore')} 
        />
        <NavItem 
          icon={<BagIcon className="w-7 h-7" />} 
          label="Cart" 
          active={activeTab === 'cart'} 
          onClick={() => handleTabClick('cart')}
          badge={3}
        />
        <NavItem 
          icon={<CalendarIcon className="w-7 h-7" />} 
          label="Moments" 
          active={activeTab === 'moments'} 
          onClick={() => handleTabClick('moments')} 
        />
        <NavItem 
          icon={<ProfileIcon className="w-7 h-7" />} 
          label="Account" 
          active={activeTab === 'account'} 
          onClick={() => handleTabClick('account')} 
        />
      </div>
      
      {/* Home Indicator - 34pt height per iOS HIG for safe area */}
      <div className="flex justify-center items-center h-[34px]">
        <div className="w-[134px] h-[5px] bg-foreground rounded-full" />
      </div>
    </nav>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  badge?: number;
}

function NavItem({ icon, label, active = false, onClick, badge }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        flex flex-col items-center justify-center gap-[1px] min-w-[48px] 
        transition-all duration-150 ease-out
        active:scale-95 active:opacity-70
        ${active ? 'text-foreground opacity-100' : 'text-muted-foreground opacity-60'}
      `}
    >
      {/* Icon container - 28pt per iOS HIG */}
      <div className="w-7 h-7 flex items-center justify-center relative">
        {icon}
        {/* iOS HIG Badge - 16pt diameter, positioned at top-right */}
        {badge !== undefined && badge > 0 && (
          <div className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-[4px] bg-[#FF3B30] rounded-full flex items-center justify-center">
            <span className="text-white text-[10px] font-semibold leading-none">
              {badge > 99 ? '99+' : badge}
            </span>
          </div>
        )}
      </div>
      {/* Label - 10pt per iOS HIG */}
      <span className={`text-[10px] leading-tight ${active ? 'font-semibold' : 'font-normal'}`}>
        {label}
      </span>
    </button>
  );
}
