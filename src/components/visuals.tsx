export function Contours({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`contours ${className}`}
      viewBox="0 0 800 800"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="0.8">
        {Array.from({ length: 19 }, (_, i) => {
          const s = 1 - i * 0.038;
          return (
            <path
              key={i}
              transform={`translate(${400 * (1 - s)} ${400 * (1 - s)}) scale(${s})`}
              d="M100 73C209-19 385 66 503 37C653 0 785 127 752 277C735 355 801 457 734 559C686 632 604 597 542 683C456 802 352 754 268 709C173 658 47 702 36 568C27 462 99 432 67 341C36 253-4 161 100 73Z"
            />
          );
        })}
      </g>
      <g stroke="currentColor" opacity="0.25">
        <path d="M0 400H800M400 0V800" strokeDasharray="3 9" />
      </g>
    </svg>
  );
}
export function EvidenceGraph() {
  return (
    <svg
      className="evidence-graph"
      viewBox="0 0 440 260"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1">
        <path d="M40 170L130 55L222 128L345 45M130 55L340 195L222 128L40 170M222 128L400 135M340 195L400 135M130 55L345 45" />
        {[
          [40, 170],
          [130, 55],
          [222, 128],
          [345, 45],
          [340, 195],
          [400, 135],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === 2 ? 7 : 4}
            fill="var(--background)"
          />
        ))}
      </g>
    </svg>
  );
}
