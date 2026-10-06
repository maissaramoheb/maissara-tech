"use client";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
export function Progression() {
  const reduced = useReducedMotion();
  return (
    <LazyMotion features={domAnimation}>
      <ol
        className="progression"
        aria-label="From field practice to capability"
      >
        {["FIELD", "EVIDENCE", "ANALYSIS", "DECISION", "CAPABILITY"].map(
          (step, i) => (
            <m.li
              key={step}
              initial={false}
              animate={{ opacity: reduced ? 1 : [0.65, 1] }}
              transition={{
                duration: reduced ? 0 : 0.6,
                delay: reduced ? 0 : i * 0.12,
              }}
            >
              <span className="progress-node" aria-hidden="true" />
              <span>{step}</span>
              <span className="progress-index" aria-hidden="true">
                0{i + 1}
              </span>
            </m.li>
          ),
        )}
      </ol>
    </LazyMotion>
  );
}
