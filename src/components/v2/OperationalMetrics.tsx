"use client";

import React, { useEffect, useRef } from "react";
import { Label } from "@/components/sections";
import { operationalMetrics } from "@/data/site";
import { counterValue, motion } from "@/lib/motion";

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
    const formatValue = counterValue;

    // If reduced motion is preferred, ensure final values are rendered and exit
    if (prefersReducedMotion) {
      operationalMetrics.forEach((m, idx) => {
        const el = numRefs.current[idx];
        if (el) el.textContent = formatValue(m, 1);
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

      const duration = motion.counter;
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);


        operationalMetrics.forEach((m, idx) => {
          const el = numRefs.current[idx];
          if (!el) return;
          el.textContent = formatValue(m, progress);
        });

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          operationalMetrics.forEach((m, idx) => {
            const el = numRefs.current[idx];
            if (el) el.textContent = formatValue(m, 1);
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

    // Start when the numerals approach the viewport, not at the section padding.
    observer.observe(section.querySelector(".metrics-grid") ?? section);

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
            Experience in numbers<span className="metrics-dot">.</span>
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
      <p className="metrics-scope">Service since July 2009 · UN engagement across 2021–2026, including peace operations and capacity development. Research figures describe focus areas, not publications.</p>
    </section>
  );
}
