import { ExploreIcon, SearchIcon, BagIcon, CalendarIcon, ProfileIcon } from './icons';

interface BottomNavProps {
  onNavigateHome?: () => void;
  onNavigateCart?: () => void;
  activeTab?: 'home' | 'explore' | 'cart' | 'moments' | 'profile';
}

export function BottomNav({ onNavigateHome, onNavigateCart, activeTab = 'home' }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border">
      <div className="flex items-center justify-around px-4 py-3 max-w-md mx-auto">
        <NavItem icon={<ExploreIcon className="w-6 h-6" />} label="Home" active={activeTab === 'home'} onClick={onNavigateHome} />
        <NavItem icon={<SearchIcon className="w-6 h-6" />} label="Explore" active={activeTab === 'explore'} />
        <NavItem icon={<BagIcon className="w-6 h-6" />} label="Cart" active={activeTab === 'cart'} onClick={onNavigateCart} />
        <NavItem icon={<CalendarIcon className="w-6 h-6" />} label="Moments" active={activeTab === 'moments'} />
        <NavItem icon={<ProfileIcon className="w-6 h-6" />} label="Profile" active={activeTab === 'profile'} />
      </div>
      
      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-foreground" style={{ borderRadius: 'var(--radius-toggle)' }} />
      </div>
    </nav>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 ${
        active ? 'text-foreground' : 'text-muted-foreground'
      }`}
    >
      <div className="w-7 h-7 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <small className={active ? 'font-medium' : ''}>{label}</small>
    </button>
  );
}