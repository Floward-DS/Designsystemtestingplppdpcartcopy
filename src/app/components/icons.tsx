import svgPaths from "../../imports/svg-dwjl1898ju";
import filterIconImg from "figma:asset/b9527e0d9a3bf69bd7302e20f287f253acd0e832.png";

interface IconProps {
  className?: string;
}

export function ChevronLeftIcon({ className = "size-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path 
        d={svgPaths.p148c1880} 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
      />
    </svg>
  );
}

export function ExploreIcon({ className = "size-[30px]" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 30 30">
      <path 
        d={svgPaths.p1d7fa600} 
        stroke="currentColor" 
        strokeMiterlimit="10" 
        strokeWidth="1.3" 
      />
      <path 
        d={svgPaths.p140f0380} 
        stroke="currentColor" 
        strokeMiterlimit="10" 
        strokeWidth="1.3" 
      />
      <path 
        d={svgPaths.p3aa4ff70} 
        stroke="currentColor" 
        strokeMiterlimit="10" 
        strokeWidth="1.3" 
      />
    </svg>
  );
}

export function BagIcon({ className = "size-[30px]" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 30 30">
      <path 
        d={svgPaths.p12364840} 
        stroke="currentColor" 
        strokeMiterlimit="10" 
        strokeWidth="1.3" 
      />
      <path 
        d={svgPaths.p46344f0} 
        stroke="currentColor" 
        strokeMiterlimit="10" 
        strokeWidth="1.3" 
      />
    </svg>
  );
}

export function CalendarIcon({ className = "size-[30px]" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 30 30">
      <g transform="translate(6.5, 6.5)">
        <path 
          d={svgPaths.p380f4500} 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="1.3" 
        />
        <path 
          d="M5.74 0.65V3.54" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="1.3" 
        />
        <path 
          d="M10.54 0.65V3.54" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="1.3" 
        />
        <path 
          d={svgPaths.p14a7f500} 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="1.3" 
        />
      </g>
    </svg>
  );
}

export function ProfileIcon({ className = "size-[30px]" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 30 30">
      <path 
        d={svgPaths.p2f01b880} 
        stroke="currentColor" 
        strokeMiterlimit="10" 
        strokeWidth="1.3" 
      />
      <path 
        d={svgPaths.pd715b00} 
        stroke="currentColor" 
        strokeMiterlimit="10" 
        strokeWidth="1.3" 
      />
    </svg>
  );
}

export function SearchIcon({ className = "size-[30px]" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 30 30">
      <path 
        d={svgPaths.p3020eb00} 
        stroke="currentColor" 
        strokeMiterlimit="10" 
        strokeWidth="1.3" 
      />
      <path 
        d="M18.21 18.1L22.9 22.9" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.3" 
      />
    </svg>
  );
}

export function ListIcon({ className = "size-[30px]" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 13 12">
      <path 
        d="M0.65 0.65H6.65" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.3" 
      />
      <path 
        d="M0.65 5.65H6.65" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.3" 
      />
      <path 
        d="M0.65 10.65H6.65" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.3" 
      />
    </svg>
  );
}

export function GridIcon({ className = "size-[30px]" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 15 15">
      <path 
        d={svgPaths.p34749a00} 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.2" 
      />
      <path 
        d={svgPaths.p37b8ce00} 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.2" 
      />
      <path 
        d={svgPaths.p2f0fab00} 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.2" 
      />
      <path 
        d={svgPaths.p6d22c00} 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.2" 
      />
    </svg>
  );
}

export function FilterIcon({ className = "size-[30px]" }: IconProps) {
  return (
    <img className={className} src={filterIconImg} alt="Filter Icon" />
  );
}

export function SortIcon({ className = "size-[30px]" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <path 
        d="M3 5h14M3 10h10M3 15h6" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
      />
    </svg>
  );
}

export function CloseIcon({ className = "size-[30px]" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path 
        d="M18 6L6 18M6 6l12 12" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
      />
    </svg>
  );
}
