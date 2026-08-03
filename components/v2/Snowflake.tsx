import type { CSSProperties } from "react";

type Props = {
  className?: string;
  strokeWidth?: number;
  style?: CSSProperties;
};

// Sechsstrahliger Kristall — Signaturform von Entwurf 2.
export default function Snowflake({
  className,
  strokeWidth = 1.4,
  style,
}: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden
    >
      <path d="M12 2v20M2.9 6.9l18.2 10.2M2.9 17.1L21.1 6.9" />
      <path d="M12 6.4 9.4 4.4M12 6.4l2.6-2M12 17.6 9.4 19.6M12 17.6l2.6 2" />
      <path d="m6.7 9.3-3.2.3M6.7 9.3 5.2 6.5M17.3 14.7l3.2-.3M17.3 14.7l1.5 2.8" />
      <path d="m6.7 14.7-3.2-.3M6.7 14.7l-1.5 2.8M17.3 9.3l3.2.3M17.3 9.3l1.5-2.8" />
    </svg>
  );
}
