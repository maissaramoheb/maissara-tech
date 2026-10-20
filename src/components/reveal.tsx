import type { CSSProperties } from "react";

// Shared reveal duration in CSS; a restrained cadence without another runtime.
export function Progression() {
  return (
    <ol className="progression" aria-label="From field practice to capability">
      {["FIELD", "EVIDENCE", "ANALYSIS", "DECISION", "CAPABILITY"].map((step, i) => (
        <li key={step} style={{ "--progress-delay": `${i * 0.14}s` } as CSSProperties}>
          <span className="progress-node" aria-hidden="true" />
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}
