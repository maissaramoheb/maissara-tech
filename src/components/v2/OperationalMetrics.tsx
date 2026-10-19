"use client";

import React, { useEffect, useRef } from "react";
import { Label } from "@/components/sections";
import { operationalMetrics } from "@/data/site";
import type { OperationalMetric } from "@/data/site";

function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}

export function OperationalMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Formatting helper
    const formatValue = (metric: OperationalMetric, val: number) =>
      metric.padZero ? String(val).padStart(2, "0") : String(val);

    // If reduced motion is preferred, ensure final values are rendered and exit
    if (prefersReducedMotion) {
      operationalMetrics.forEach((m, idx) => {
        const el = numRefs.current[idx];
        if (el) el.textContent = formatValue(m, m.targetNumber);
      });
      return;
    }

    // Set initial 0 values before animating
    operationalMetrics.forEach((m, idx) => {
      const el = numRefs.current[idx];
      if (el) el.textContent = formatValue(m, 0);
    });

    let rafId: number;
    let observer: IntersectionObserver | null = null;
    let hasAnimated = false;

    const startAnimation = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      const duration = 1500; // 1.5 seconds: calm, precise, confident
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuart(progress);

        operationalMetrics.forEach((m, idx) => {
          const el = numRefs.current[idx];
          if (!el) return;
          const current = Math.round(eased * m.targetNumber);
          el.textContent = formatValue(m, current);
        });

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          operationalMetrics.forEach((m, idx) => {
            const el = numRefs.current[idx];
            if (el) el.textContent = formatValue(m, m.targetNumber);
          });
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startAnimation();
          observer?.disconnect();
          observer = null;
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience-in-numbers"
      className="operational-metrics container"
      aria-labelledby="metrics-title"
    >
      <header className="metrics-intro chapter-reveal">
        <div className="metrics-tag-row">
          <Label>04B / OPERATIONAL EVIDENCE</Label>
        </div>
        <div className="metrics-header-grid">
          <h2 id="metrics-title" className="metrics-heading">
            EXPERIENCE IN NUMBERS<span className="metrics-dot">.</span>
          </h2>
          <p className="metrics-lead">
            Field experience, international engagement, applied systems, and research.
          </p>
        </div>
      </header>

      <div className="metrics-grid">
        {operationalMetrics.map((metric, idx) => (
          <article
            key={metric.id}
            className="metric-cell"
            aria-label={metric.ariaLabel}
          >
            <div className="metric-cell-top">
              <span className="metric-index" aria-hidden="true">
                {metric.index} / {metric.id.toUpperCase().replace("-", " ")}
              </span>
            </div>

            <div className="metric-value-row" aria-hidden="true">
              <span
                ref={(el) => {
                  numRefs.current[idx] = el;
                }}
                className="metric-value"
              >
                {metric.padZero
                  ? String(metric.targetNumber).padStart(2, "0")
                  : String(metric.targetNumber)}
              </span>
              {metric.suffix && (
                <span
                  className={`metric-suffix ${
                    metric.suffix === "TH"
                      ? "metric-suffix-th"
                      : "metric-suffix-plus"
                  }`}
                >
                  {metric.suffix}
                </span>
              )}
            </div>

            <div className="metric-copy">
              <h3 className="metric-label">{metric.label}</h3>
              <p className="metric-supporting">{metric.supporting}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
