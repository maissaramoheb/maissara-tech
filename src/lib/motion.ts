import type { OperationalMetric } from "@/data/site";

/** Milliseconds; ordinary reveals never pin, block scrolling, or hide SSR content. */
export const motion = {
  micro: 260,
  reveal: 1050,
  editorial: 1350,
  counter: 2600,
  distance: 12,
  cinematic: { runway: "+=480%", smoothing: 1.35, focusScale: 1.08 },
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
} as const;

export function counterValue(metric: OperationalMetric, progress: number): string {
  // An ordinal describes the current service year; never manufacture intermediate ordinals.
  const bounded = Math.max(0, Math.min(1, Number.isFinite(progress) ? progress : 1));
  const value = metric.suffix === "TH"
    ? metric.targetNumber
    : Math.round((1 - Math.pow(1 - bounded, 4)) * metric.targetNumber);
  return metric.padZero ? String(value).padStart(2, "0") : String(value);
}

export function revealFrames(kind: "text" | "media" | "artwork") {
  if (kind === "media") return [
    { opacity: 0.9, transform: "scale(1.012)" },
    { opacity: 1, transform: "scale(1)" },
  ];
  if (kind === "artwork") return [{ opacity: 0.8 }, { opacity: 1 }];
  return [
    { opacity: 0.78, transform: `translateY(${motion.distance}px)` },
    { opacity: 1, transform: "translateY(0)" },
  ];
}
