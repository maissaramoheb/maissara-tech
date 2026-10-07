import type { CSSProperties } from "react";

// Preserve the approved 0.6s / 0.12s progression fade without a second motion runtime.
export function Progression() {
  return (
    <ol className="progression" aria-label="From field practice to capability">
      {["FIELD", "EVIDENCE", "ANALYSIS", "DECISION", "CAPABILITY"].map((step, i) => (
        <li key={step} style={{ "--progress-delay": `${i * 0.12}s` } as CSSProperties}>
          <span className="progress-node" aria-hidden="true" />
          <span>{step}</span>
          <span className="progress-index" aria-hidden="true">0{i + 1}</span>
        </li>
      ))}
    </ol>
  );
}
