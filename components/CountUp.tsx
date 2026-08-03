"use client";

import { useEffect, useRef, useState } from "react";

// Zählt beim Einscrollen einmalig hoch. Respektiert reduzierte Bewegung.
export default function CountUp({
  end,
  suffix = "",
  duration = 1800,
  className,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        // Bei reduzierter Bewegung direkt den Endwert zeigen.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValue(end);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setValue(Math.round(end * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {value}
      {suffix}
    </span>
  );
}
