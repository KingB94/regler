import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 font-mono text-[0.8rem] uppercase tracking-[0.1em] transition-colors duration-200 whitespace-nowrap";

const variants = {
  primary: "bg-brand-red text-white hover:bg-brand-red-deep",
  outline: "border border-current text-frost hover:bg-frost hover:text-navy",
  ghost: "text-ink hover:text-brand-red-deep underline decoration-1 underline-offset-4",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  external = false,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("http") || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
