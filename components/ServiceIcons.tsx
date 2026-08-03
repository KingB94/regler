type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HeatpumpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <rect x="6" y="10" width="24" height="20" rx="1.5" />
      <circle cx="18" cy="20" r="6" />
      <path d="M18 14v3M18 23v3M12 20h3M21 20h3M13.8 15.8l2 2M20.2 24.2l2 2M13.8 24.2l2-2M20.2 15.8l2-2" />
      <path d="M30 16h4M30 24h4" />
    </svg>
  );
}

export function ClimateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <rect x="6" y="9" width="28" height="9" rx="2" />
      <circle cx="11" cy="13.5" r="0.8" fill="currentColor" />
      <path d="M11 22c1.5 2 1.5 3.5 0 5.5M17 22c1.5 2 1.5 3.5 0 5.5M23 22c1.5 2 1.5 3.5 0 5.5M29 22c1.5 2 1.5 3.5 0 5.5" />
    </svg>
  );
}

export function CoolingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M20 6v28M9 13l22 14M31 13L9 27" />
      <path d="M20 12l-3.2-2M20 12l3.2-2M20 28l-3.2 2M20 28l3.2 2" />
      <path d="M13.3 15.7l-3.6-.4M13.3 15.7l1-3.5M26.7 24.3l3.6.4M26.7 24.3l-1 3.5" />
      <path d="M26.7 15.7l3.6-.4M26.7 15.7l-1-3.5M13.3 24.3l-3.6.4M13.3 24.3l1 3.5" />
    </svg>
  );
}

export function WaterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M20 7c5 6.5 8 11.2 8 15a8 8 0 0 1-16 0c0-3.8 3-8.5 8-15z" />
      <path d="M15.5 24a4.5 4.5 0 0 0 4.5 4.5" />
    </svg>
  );
}

export function RecoveryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M29 14a9 9 0 0 0-16.5-3.5M11 26a9 9 0 0 0 16.5 3.5" />
      <path d="M12.5 10.5l0 4.5-4.5 0M27.5 29.5l0-4.5 4.5 0" />
      <path d="M17 20l2-3 2 3-2 3z" />
    </svg>
  );
}

export function ServiceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <circle cx="17" cy="17" r="8" />
      <path d="M17 12v5l3.5 2" />
      <path d="M25 25l6.5 6.5" strokeWidth="2.2" />
      <path d="M29.8 27.8a2.3 2.3 0 1 0 3.4 3.1" />
    </svg>
  );
}
