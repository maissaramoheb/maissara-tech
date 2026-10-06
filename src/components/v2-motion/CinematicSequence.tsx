"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Contours } from "@/components/visuals";
import { Progression } from "@/components/reveal";
import { Label } from "@/components/sections";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DOMAINS_LIST = [
  {
    title: "PEACE & SECURITY",
    desc: "Peace operations, policing, security-sector development and complex operational theaters.",
    focus: "THEATER / ACTORS / STRUCTURE",
  },
  {
    title: "STRATEGY & DECISION SYSTEMS",
    desc: "Planning, policy, analysis, monitoring, organizational performance and decision support.",
    focus: "PRIORITIES / SEQUENCING / RISK",
  },
  {
    title: "LEARNING & HUMAN PERFORMANCE",
    desc: "Training design, trainer development, scenario-based learning and human performance.",
    focus: "PROGRESSION / CAPABILITY / PEOPLE",
  },
  {
    title: "AI & DIGITAL SYSTEMS",
    desc: "Applied AI, human–AI interaction and digital tools designed around real professional workflows.",
    focus: "HUMAN-IN-THE-LOOP / DECISION AUGMENTATION",
  },
  {
    title: "RESEARCH & INNOVATION",
    desc: "Interdisciplinary inquiry connecting practice, evidence, decision-making and emerging technology.",
    focus: "EMPIRICAL EVIDENCE / SYNTHESIS",
  },
];

const WORKFLOW_STEPS = [
  "EVIDENCE",
  "FINDINGS",
  "LESSONS",
  "RECOMMENDATIONS",
  "PROFESSIONAL OUTPUT",
];

export function CinematicSequence() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // Scene layer refs
  const heroRef = useRef<HTMLDivElement>(null);
  const topoRef = useRef<HTMLDivElement>(null);
  const telemetryRef = useRef<HTMLDivElement>(null);
  const analyticalRef = useRef<HTMLDivElement>(null);
  const domainsRef = useRef<HTMLDivElement>(null);
  const flsSceneRef = useRef<HTMLDivElement>(null);
  const flsFrameRef = useRef<HTMLDivElement>(null);
  const flsImageRef = useRef<HTMLDivElement>(null);
  const ctaRowRef = useRef<HTMLDivElement>(null);

  // Dynamic telemetry states
  const [telemetryPhase, setTelemetryPhase] = useState("SCENE 00 / IDENTITY");
  const [telemetryCoord, setTelemetryCoord] = useState("04°12'N · 31°35'E");
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);

  useEffect(() => {
    if (!runwayRef.current || !stageRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // In reduced-motion mode, keep elements statically legible without pinning
      return;
    }

    const mm = gsap.matchMedia();

    // ========================================================================
    // DESKTOP & TABLET CINEMATIC TIMELINE (> 768px)
    // ========================================================================
    mm.add("(min-width: 769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: runwayRef.current,
          start: "top top",
          end: "+=320%",
          pin: stageRef.current,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.15) {
              setTelemetryPhase("SCENE 00 / IDENTITY");
              setTelemetryCoord("04°12'N · 31°35'E");
            } else if (p < 0.23) {
              setTelemetryPhase("SCENE 01 / STEP A — FIELD");
              setTelemetryCoord("04°14'N · 31°36'E · RAW TERRAIN");
            } else if (p < 0.32) {
              setTelemetryPhase("SCENE 01 / STEP B — EVIDENCE");
              setTelemetryCoord("04°16'N · 31°38'E · TRACEABLE RECORDS");
            } else if (p < 0.40) {
              setTelemetryPhase("SCENE 01 / STEP C — ANALYSIS");
              setTelemetryCoord("CROSS-SECTOR VECTORS · r=0.84");
            } else if (p < 0.47) {
              setTelemetryPhase("SCENE 01 / STEP D — DECISION");
              setTelemetryCoord("CRITERIA MATRIX · NOISE REDUCED");
            } else if (p < 0.54) {
              setTelemetryPhase("SCENE 01 / STEP E — CAPABILITY");
              setTelemetryCoord("STRUCTURED REPEATABLE SYSTEM");
            } else if (p < 0.68) {
              setTelemetryPhase("SCENE 02 / OPERATING DOMAINS");
              setTelemetryCoord("INTERDISCIPLINARY PRACTICE");
            } else if (p < 0.78) {
              setTelemetryPhase("SCENE 03 / THINKING → SYSTEM");
              setTelemetryCoord("MORPHOLOGICAL CONVERGENCE");
            } else {
              setTelemetryPhase("SCENE 04 / FIELD LEARNING STUDIO");
              setTelemetryCoord("fls.maissara.tech · PRODUCTION ACTIVE");
            }

            // Workflow progression active step
            if (p < 0.82) {
              setActiveWorkflowIndex(0); // EVIDENCE
            } else if (p < 0.86) {
              setActiveWorkflowIndex(1); // FINDINGS
            } else if (p < 0.90) {
              setActiveWorkflowIndex(2); // LESSONS
            } else if (p < 0.94) {
              setActiveWorkflowIndex(3); // RECOMMENDATIONS
            } else {
              setActiveWorkflowIndex(4); // PROFESSIONAL OUTPUT
            }
          },
        },
      });

      // ----------------------------------------------------------------------
      // SCENE 00: HERO TRANSITION (0.00 -> 0.15)
      // Subtle recession of hero typography; camera advances "into" contours
      // ----------------------------------------------------------------------
      tl.to(
        heroRef.current,
        {
          scale: 0.86,
          opacity: 0,
          y: -50,
          duration: 0.15,
          ease: "power2.inOut",
        },
        0
      );

      tl.to(
        topoRef.current,
        {
          scale: 1.5,
          opacity: 0.35,
          duration: 0.2,
          ease: "none",
        },
        0
      );

      tl.to(
        telemetryRef.current,
        {
          opacity: 1,
          duration: 0.08,
        },
        0.05
      );

      // ----------------------------------------------------------------------
      // SCENE 01: COMPLEXITY → CAPABILITY (0.12 -> 0.54)
      // ----------------------------------------------------------------------
      // Reveal Analytical Canvas
      tl.to(
        analyticalRef.current,
        {
          opacity: 1,
          duration: 0.08,
        },
        0.12
      );

      // Step A: Field Observations (Sparse dots)
      tl.fromTo(
        ".v2-node-field",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, stagger: 0.02, duration: 0.08 },
        0.14
      );

      // Step B: Field -> Evidence (Tags & additional observations appear)
      tl.fromTo(
        ".v2-node-evidence",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.02, duration: 0.08 },
        0.22
      );
      tl.to(
        ".v2-step-narrative-b",
        { opacity: 1, y: 0, duration: 0.06 },
        0.22
      );
      tl.to(
        ".v2-step-narrative-a",
        { opacity: 0, y: -10, duration: 0.06 },
        0.22
      );

      // Step C: Analysis (Restrained vectors & relationship lines form)
      tl.fromTo(
        ".v2-vector-line",
        { strokeDashoffset: 100, opacity: 0 },
        { strokeDashoffset: 0, opacity: 0.45, stagger: 0.02, duration: 0.08 },
        0.30
      );
      tl.to(
        ".v2-step-narrative-c",
        { opacity: 1, y: 0, duration: 0.06 },
        0.30
      );
      tl.to(
        ".v2-step-narrative-b",
        { opacity: 0, y: -10, duration: 0.06 },
        0.30
      );

      // Step D: Decision (Noise reduces, nodes align into 3 structured columns)
      tl.to(
        ".v2-node-scatter",
        {
          opacity: 0.15,
          scale: 0.7,
          duration: 0.06,
        },
        0.38
      );
      tl.fromTo(
        ".v2-matrix-column",
        { opacity: 0, scaleY: 0.4 },
        { opacity: 1, scaleY: 1, stagger: 0.03, duration: 0.08 },
        0.38
      );
      tl.to(
        ".v2-step-narrative-d",
        { opacity: 1, y: 0, duration: 0.06 },
        0.38
      );
      tl.to(
        ".v2-step-narrative-c",
        { opacity: 0, y: -10, duration: 0.06 },
        0.38
      );

      // Step E: Capability (Resolves into complete orderly system)
      tl.fromTo(
        ".v2-capability-grid",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.08 },
        0.46
      );
      tl.to(
        ".v2-step-narrative-e",
        { opacity: 1, y: 0, duration: 0.06 },
        0.46
      );
      tl.to(
        ".v2-step-narrative-d",
        { opacity: 0, y: -10, duration: 0.06 },
        0.46
      );

      // ----------------------------------------------------------------------
      // SCENE 02: OPERATING DOMAINS BRIDGE (0.54 -> 0.68)
      // ----------------------------------------------------------------------
      tl.to(
        analyticalRef.current,
        {
          opacity: 0.15,
          scale: 0.92,
          duration: 0.06,
        },
        0.54
      );

      tl.to(
        domainsRef.current,
        {
          opacity: 1,
          duration: 0.06,
        },
        0.54
      );

      // 5 domains appear and highlight sequentially
      const domainItems = gsap.utils.toArray<HTMLElement>(".v2-domain-item");
      domainItems.forEach((item, idx) => {
        const startT = 0.54 + idx * 0.024;
        tl.fromTo(
          item,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.02 },
          startT
        );
        if (idx < domainItems.length - 1) {
          tl.to(item, { opacity: 0, y: -16, duration: 0.015 }, startT + 0.02);
        }
      });

      // Resolve all 5 into: SYSTEMS · PEOPLE · DECISIONS
      tl.to(
        ".v2-domains-resolve",
        {
          opacity: 1,
          duration: 0.04,
        },
        0.66
      );

      // ----------------------------------------------------------------------
      // SCENE 03: THINKING BECOMES SYSTEM (0.68 -> 0.78)
      // Morphological conversion: matrix columns & vectors expand into FLS frame
      // ----------------------------------------------------------------------
      tl.to(
        domainsRef.current,
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.05,
        },
        0.68
      );

      tl.to(
        analyticalRef.current,
        {
          opacity: 0,
          scale: 1.1,
          duration: 0.06,
        },
        0.68
      );

      tl.fromTo(
        flsSceneRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.06 },
        0.70
      );

      tl.fromTo(
        flsFrameRef.current,
        {
          scale: 0.55,
          opacity: 0.6,
          y: 40,
        },
        {
          scale: 0.8,
          opacity: 1,
          y: 0,
          duration: 0.08,
          ease: "power2.out",
        },
        0.70
      );

      // ----------------------------------------------------------------------
      // SCENE 04: FIELD LEARNING STUDIO REVEAL (0.78 -> 1.00)
      // Stage 1: Frame grounded ("Field evidence is rarely born structured")
      // Stage 2: Camera pushes into Evidence panel
      // Stage 3: Workflow progression illuminates
      // Stage 4: Expands to 88-90% viewport with supporting statement & CTA
      // ----------------------------------------------------------------------
      // Stage 2: Push into Evidence
      tl.to(
        flsImageRef.current,
        {
          scale: 1.15,
          x: "-4%",
          y: "-6%",
          duration: 0.08,
        },
        0.80
      );

      // Stage 3 & 4: Full expansion & Workflow progression
      tl.to(
        flsFrameRef.current,
        {
          scale: 1,
          duration: 0.1,
          ease: "power2.inOut",
        },
        0.88
      );

      tl.to(
        flsImageRef.current,
        {
          scale: 1,
          x: "0%",
          y: "0%",
          duration: 0.08,
        },
        0.88
      );

      tl.to(
        ctaRowRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.06,
        },
        0.92
      );

      tl.to(
        ".v2-handoff-indicator",
        {
          opacity: 1,
          duration: 0.05,
        },
        0.94
      );
    });

    // ========================================================================
    // MOBILE BEHAVIOR (<= 768px & 390px)
    // Clean, legible vertical flow without pin traps or scroll conflicts
    // ========================================================================
    mm.add("(max-width: 768px)", () => {
      // Clear any desktop inline transforms to ensure native mobile readability
      gsap.set(
        [
          heroRef.current,
          analyticalRef.current,
          domainsRef.current,
          flsSceneRef.current,
          flsFrameRef.current,
          ctaRowRef.current,
        ],
        { clearProps: "all" }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={runwayRef} className="v2-cinematic-runway" id="identity">
      <div ref={stageRef} className="v2-cinematic-stage">
        {/* TOP TELEMETRY BAR */}
        <div ref={telemetryRef} className="v2-telemetry-bar">
          <div className="v2-telemetry-phase">
            <span className="v2-telemetry-pulse" />
            <span>{telemetryPhase}</span>
          </div>
          <div className="v2-telemetry-coords">{telemetryCoord}</div>
        </div>

        {/* TOPOGRAPHIC ELEVATION LINES LAYER */}
        <div ref={topoRef} className="v2-topo-layer" aria-hidden="true">
          <Contours className="v2-topo-svg" />
        </div>

        {/* ================================================================
            SCENE 00: HERO (Approved Identity & Thesis)
            ================================================================ */}
        <div ref={heroRef} className="v2-scene-hero">
          <div className="v2-hero-inner">
            <div className="v2-hero-grid">
              <div className="v2-hero-copy">
                <div className="hero-top" style={{ marginBottom: "28px" }}>
                  <Label>
                    MS / 01 <span className="label-divider">—</span> FIELD •
                    STRATEGY • SYSTEMS
                  </Label>
                </div>
                <h1 id="hero-title">
                  MAISSARA
                  <br />
                  SELIM<span className="identity-dot">.</span>
                </h1>
                <h2 className="hero-thesis">
                  From complex environments
                  <br className="desktop-break" /> to better decisions
                  <br className="desktop-break" /> and practical systems.
                </h2>
                <p className="hero-description">
                  I work at the intersection of operational experience,
                  institutional learning, strategic planning and emerging
                  technology—turning complex field problems into structured
                  decisions, tools and capability.
                </p>
                <div className="hero-actions">
                  <a className="button-primary" href="#work">
                    Explore Selected Work <span aria-hidden="true">↗</span>
                  </a>
                  <a className="text-link" href="#research">
                    Research & Publications <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
              <div className="v2-hero-visual">
                <div className="visual-caption label">
                  COMPLEXITY → CAPABILITY
                </div>
                <Progression />
                <div className="visual-register label" aria-hidden="true">
                  <span>OBSERVE / UNDERSTAND / ACT</span>
                  <span>MS — 01</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================
            SCENE 01: COMPLEXITY → CAPABILITY (Analytical Matrix)
            ================================================================ */}
        <div ref={analyticalRef} className="v2-analytical-stage">
          <div className="v2-analytical-container">
            {/* Step narratives */}
            <div className="v2-stage-narrative">
              <div className="v2-step-narrative-a">
                <div className="v2-stage-step-tag">STEP A / FIELD</div>
                <h3 className="v2-stage-step-title">Raw Field Observation</h3>
                <p className="v2-stage-step-desc">
                  Complex operational environments produce fragmented, qualitative
                  signals—field interviews, patrol reports, and situational notes.
                </p>
              </div>
              <div
                className="v2-step-narrative-b"
                style={{ opacity: 0, position: "absolute", top: 0 }}
              >
                <div className="v2-stage-step-tag">STEP B / EVIDENCE</div>
                <h3 className="v2-stage-step-title">Traceable Records</h3>
                <p className="v2-stage-step-desc">
                  Observations are verified, assigned source provenance, and
                  indexed for institutional continuity.
                </p>
              </div>
              <div
                className="v2-step-narrative-c"
                style={{ opacity: 0, position: "absolute", top: 0 }}
              >
                <div className="v2-stage-step-tag">STEP C / ANALYSIS</div>
                <h3 className="v2-stage-step-title">Cross-Sector Relationships</h3>
                <p className="v2-stage-step-desc">
                  Connecting qualitative field notes with institutional mandates,
                  identifying systemic patterns and root bottlenecks.
                </p>
              </div>
              <div
                className="v2-step-narrative-d"
                style={{ opacity: 0, position: "absolute", top: 0 }}
              >
                <div className="v2-stage-step-tag">STEP D / DECISION</div>
                <h3 className="v2-stage-step-title">Noise Reduction</h3>
                <p className="v2-stage-step-desc">
                  Organizing complexity into decision criteria, risk pathways,
                  and prioritized courses of action.
                </p>
              </div>
              <div
                className="v2-step-narrative-e"
                style={{ opacity: 0, position: "absolute", top: 0 }}
              >
                <div className="v2-stage-step-tag">STEP E / CAPABILITY</div>
                <h3 className="v2-stage-step-title">Structured System</h3>
                <p className="v2-stage-step-desc">
                  Insight is codified into repeatable analytical tools and
                  institutional capability.
                </p>
              </div>
            </div>

            {/* SVG Analytical Stage Canvas */}
            <svg
              className="v2-analytical-svg"
              viewBox="0 0 1000 600"
              fill="none"
              aria-hidden="true"
            >
              {/* Background Coordinate Grid */}
              <g stroke="rgba(255,255,255,0.05)" strokeWidth="0.8">
                <line x1="380" y1="50" x2="380" y2="550" strokeDasharray="3 6" />
                <line x1="580" y1="50" x2="580" y2="550" strokeDasharray="3 6" />
                <line x1="780" y1="50" x2="780" y2="550" strokeDasharray="3 6" />
                <line x1="980" y1="50" x2="980" y2="550" strokeDasharray="3 6" />
                <line x1="380" y1="180" x2="980" y2="180" strokeDasharray="3 6" />
                <line x1="380" y1="360" x2="980" y2="360" strokeDasharray="3 6" />
              </g>

              {/* Step C: Restrained Vectors & Relationship Lines */}
              <g className="v2-vector-group">
                <line
                  className="v2-vector-line"
                  x1="450"
                  y1="130"
                  x2="640"
                  y2="210"
                />
                <line
                  className="v2-vector-line"
                  x1="640"
                  y1="210"
                  x2="840"
                  y2="160"
                />
                <line
                  className="v2-vector-line"
                  x1="470"
                  y1="310"
                  x2="660"
                  y2="280"
                />
                <line
                  className="v2-vector-line"
                  x1="660"
                  y1="280"
                  x2="860"
                  y2="340"
                />
                <line
                  className="v2-vector-line"
                  x1="640"
                  y1="210"
                  x2="660"
                  y2="280"
                />
                <line
                  className="v2-vector-line"
                  x1="450"
                  y1="130"
                  x2="470"
                  y2="310"
                />
                <line
                  className="v2-vector-line"
                  x1="840"
                  y1="160"
                  x2="860"
                  y2="340"
                />
              </g>

              {/* Step A & B: Scattered Field Observation Nodes */}
              <g className="v2-nodes-field-group">
                {/* Node 1 */}
                <g className="v2-node-field v2-node-scatter">
                  <circle cx="450" cy="130" r="4.5" className="v2-node-dot" />
                  <circle cx="450" cy="130" r="12" className="v2-node-ring" />
                  <text x="466" y="128" className="v2-node-label">
                    OBS-01
                  </text>
                  <text x="466" y="140" className="v2-node-meta">
                    04°12&apos;N · INTERVIEWS
                  </text>
                </g>

                {/* Node 2 */}
                <g className="v2-node-field v2-node-scatter">
                  <circle cx="470" cy="310" r="4.5" className="v2-node-dot" />
                  <circle cx="470" cy="310" r="12" className="v2-node-ring" />
                  <text x="486" y="308" className="v2-node-label">
                    OBS-02
                  </text>
                  <text x="486" y="320" className="v2-node-meta">
                    04°18&apos;N · PATROL LOGS
                  </text>
                </g>

                {/* Node 3 */}
                <g className="v2-node-evidence v2-node-scatter">
                  <circle cx="640" cy="210" r="5" className="v2-node-dot" />
                  <circle cx="640" cy="210" r="14" className="v2-node-ring" />
                  <text x="658" y="208" className="v2-node-label">
                    EVD-03 · CLUSTER
                  </text>
                  <text x="658" y="220" className="v2-node-meta">
                    COMMUNITY ADVISORY
                  </text>
                </g>

                {/* Node 4 */}
                <g className="v2-node-evidence v2-node-scatter">
                  <circle cx="660" cy="280" r="5" className="v2-node-dot" />
                  <circle cx="660" cy="280" r="14" className="v2-node-ring" />
                  <text x="678" y="278" className="v2-node-label">
                    EVD-04 · METRIC
                  </text>
                  <text x="678" y="290" className="v2-node-meta">
                    INFRASTRUCTURE STATUS
                  </text>
                </g>

                {/* Node 5 */}
                <g className="v2-node-evidence v2-node-scatter">
                  <circle cx="840" cy="160" r="5" className="v2-node-dot" />
                  <circle cx="840" cy="160" r="14" className="v2-node-ring" />
                  <text x="858" y="158" className="v2-node-label">
                    DEC-01 · CRITERIA
                  </text>
                  <text x="858" y="170" className="v2-node-meta">
                    POLICING ENVIRONMENT
                  </text>
                </g>

                {/* Node 6 */}
                <g className="v2-node-evidence v2-node-scatter">
                  <circle cx="860" cy="340" r="5" className="v2-node-dot" />
                  <circle cx="860" cy="340" r="14" className="v2-node-ring" />
                  <text x="878" y="338" className="v2-node-label">
                    DEC-02 · SEQUENCE
                  </text>
                  <text x="878" y="350" className="v2-node-meta">
                    CAPACITY WORKBENCH
                  </text>
                </g>
              </g>

              {/* Step D: Structured Matrix Columns (Order emerging) */}
              <g className="v2-matrix-column" style={{ opacity: 0 }}>
                {/* Column 1: Evidence */}
                <rect
                  x="420"
                  y="90"
                  width="150"
                  height="340"
                  fill="rgba(17,20,22,0.85)"
                  stroke="var(--line)"
                  strokeWidth="1"
                />
                <text
                  x="434"
                  y="120"
                  fontFamily="var(--font-geist-mono)"
                  fontSize="10"
                  fill="var(--accent)"
                  letterSpacing="0.12em"
                >
                  01 / EVIDENCE
                </text>
                <rect
                  x="434"
                  y="140"
                  width="122"
                  height="44"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.06)"
                />
                <rect
                  x="434"
                  y="200"
                  width="122"
                  height="44"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.06)"
                />
                <rect
                  x="434"
                  y="260"
                  width="122"
                  height="44"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.06)"
                />

                {/* Column 2: Analysis */}
                <rect
                  x="610"
                  y="90"
                  width="150"
                  height="340"
                  fill="rgba(17,20,22,0.85)"
                  stroke="var(--line)"
                  strokeWidth="1"
                />
                <text
                  x="624"
                  y="120"
                  fontFamily="var(--font-geist-mono)"
                  fontSize="10"
                  fill="var(--accent)"
                  letterSpacing="0.12em"
                >
                  02 / ANALYSIS
                </text>
                <rect
                  x="624"
                  y="140"
                  width="122"
                  height="70"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.06)"
                />
                <rect
                  x="624"
                  y="230"
                  width="122"
                  height="70"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.06)"
                />

                {/* Column 3: Decision */}
                <rect
                  x="800"
                  y="90"
                  width="150"
                  height="340"
                  fill="rgba(17,20,22,0.85)"
                  stroke="var(--line)"
                  strokeWidth="1"
                />
                <text
                  x="814"
                  y="120"
                  fontFamily="var(--font-geist-mono)"
                  fontSize="10"
                  fill="var(--accent)"
                  letterSpacing="0.12em"
                >
                  03 / DECISION
                </text>
                <rect
                  x="814"
                  y="140"
                  width="122"
                  height="90"
                  fill="rgba(198,149,82,0.08)"
                  stroke="var(--accent)"
                  strokeWidth="0.8"
                />
                <rect
                  x="814"
                  y="250"
                  width="122"
                  height="90"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.06)"
                />
              </g>

              {/* Step E: Complete Capability Grid Envelope */}
              <g className="v2-capability-grid" style={{ opacity: 0 }}>
                <rect
                  x="400"
                  y="70"
                  width="570"
                  height="380"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  opacity="0.4"
                />
                <text
                  x="410"
                  y="60"
                  fontFamily="var(--font-geist-mono)"
                  fontSize="9"
                  fill="var(--accent)"
                  letterSpacing="0.16em"
                >
                  SYSTEM ARCHITECTURE / DEFENSIVE LEARNING BOUNDARY
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* ================================================================
            SCENE 02: OPERATING DOMAINS BRIDGE
            ================================================================ */}
        <div ref={domainsRef} className="v2-domains-bridge" id="domains">
          <div className="v2-domains-content">
            <div className="v2-domains-tag">
              02 / OPERATING DOMAINS — INTERDISCIPLINARY PRACTICE
            </div>
            <div className="v2-domains-title-track">
              {DOMAINS_LIST.map((domain) => (
                <div key={domain.title} className="v2-domain-item">
                  {domain.title}
                </div>
              ))}
            </div>
            <p className="v2-domain-desc">
              From peace operations and security environments to learning design
              and digital decision architectures.
            </p>
            <div className="v2-domains-resolve">
              SYSTEMS · PEOPLE · DECISIONS
            </div>
          </div>
        </div>

        {/* ================================================================
            SCENE 03 & 04: FIELD LEARNING STUDIO CINEMATIC REVEAL
            ================================================================ */}
        <div ref={flsSceneRef} className="v2-fls-scene" id="fls-reveal">
          <div ref={flsFrameRef} className="v2-fls-frame-wrapper">
            {/* Window Chrome Header */}
            <div className="v2-fls-chrome">
              <div className="v2-fls-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="v2-fls-url-bar">
                field-learning-studio.app/studio · Community Bridges
              </div>
              <div className="v2-fls-badge">METHODOLOGY-FIRST WORKBENCH</div>
            </div>

            {/* Authentic FLS Image Viewport */}
            <div className="v2-fls-viewport">
              <div ref={flsImageRef} className="v2-fls-image">
                <Image
                  src="/images/field-learning-studio.webp"
                  alt="Field Learning Studio authentic interface preview."
                  fill
                  priority
                  sizes="(max-width: 1280px) 94vw, 1280px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </div>

              {/* Floating Stage Context Card & Workflow Track */}
              <div className="v2-fls-overlay-info">
                <div className="v2-fls-concept-card">
                  <div className="v2-fls-concept-tag">
                    STAGE 0{activeWorkflowIndex + 1} / {WORKFLOW_STEPS[activeWorkflowIndex]}
                  </div>
                  <div className="v2-fls-concept-title">
                    Field Learning Studio
                  </div>
                  <div className="v2-fls-concept-body">
                    {activeWorkflowIndex === 0 &&
                      "Field evidence is rarely born structured. Turn raw interviews and observations into traceable findings."}
                    {activeWorkflowIndex === 1 &&
                      "Evidence items are analyzed against operational integrity rules, isolating defensible claims."}
                    {activeWorkflowIndex === 2 &&
                      "Cross-case extraction reveals recurring institutional lessons across deployment theaters."}
                    {activeWorkflowIndex === 3 &&
                      "Actionable recommendations synthesized with explicit methodological boundaries."}
                    {activeWorkflowIndex === 4 &&
                      "An executive working draft keeping human practitioner judgment visible at every step."}
                  </div>
                </div>

                {/* Workflow Progression Track */}
                <div
                  className="v2-fls-workflow-bar"
                  role="list"
                  aria-label="Workflow progression"
                >
                  {WORKFLOW_STEPS.map((step, idx) => (
                    <div
                      key={step}
                      className={`v2-workflow-step ${
                        idx === activeWorkflowIndex ? "is-active" : ""
                      }`}
                      role="listitem"
                    >
                      <span>0{idx + 1}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statement & CTA Row */}
          <div ref={ctaRowRef} className="v2-fls-cta-row">
            <a
              className="button-primary"
              href="https://fls.maissara.tech"
              target="_blank"
              rel="noreferrer"
            >
              EXPLORE CASE STUDY <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#work">
              CONTINUE TO REMAINING SYSTEMS <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="v2-handoff-indicator" aria-hidden="true">
            <span>SCROLL TO CONTINUE TO REMAINING SYSTEMS</span>
            <span>↓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
