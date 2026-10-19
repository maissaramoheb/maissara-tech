import type { OperationalMetric } from "@/data/site";

/** Milliseconds; ordinary reveals never pin, block scrolling, or hide SSR content. */
export const motion = {
  micro: 220,
  reveal: 850,
  editorial: 1100,
  counter: 2200,
  distance: 14,
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
