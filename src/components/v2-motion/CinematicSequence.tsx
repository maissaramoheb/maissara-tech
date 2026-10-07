"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Contours } from "@/components/visuals";
import { Progression } from "@/components/reveal";
import { Label } from "@/components/sections";

// Exact approved Operating Domains taxonomy (Section 7)
const DOMAINS_LIST = [
  {
    title: "PEACE & SECURITY",
    desc: "Peace operations, policing, security-sector governance and complex operational environments.",
    focus: "GOVERNANCE · INSTITUTIONAL CONTINUITY",
  },
  {
    title: "STRATEGY & DECISION SYSTEMS",
    desc: "Planning frameworks, strategic policy, monitoring, risk modeling and decision support.",
    focus: "DECISION CRITERIA · SEQUENCING",
  },
  {
    title: "LEARNING & HUMAN PERFORMANCE",
    desc: "Methodology-driven training design, scenario-based inquiry and institutional capacity.",
    focus: "HUMAN JUDGMENT · PERFORMANCE",
  },
  {
    title: "AI & DIGITAL SYSTEMS",
    desc: "Applied AI architectures, analytical tools and digital systems built around practitioner workflows.",
    focus: "HUMAN-IN-THE-LOOP · AUGMENTATION",
  },
  {
    title: "RESEARCH & INNOVATION",
    desc: "Interdisciplinary inquiry connecting field evidence, rigorous analysis and practical tooling.",
    focus: "EMPIRICAL SYNTHESIS · TOOLS",
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

  // Dynamic telemetry states (Restrained editorial metadata only — no fake GPS or fake math)
  const [telemetryPhase, setTelemetryPhase] = useState("MS. / SYSTEMS ARCHITECTURE");
  const [telemetryContext, setTelemetryContext] = useState("METHODOLOGY · OBSERVE → ACT");
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);

  // Lazy prewarm of large FLS screenshot once user begins scrolling (Section 14)
  useEffect(() => {
    let prewarmed = false;
    const handleScrollPrewarm = () => {
      if (prewarmed) return;
      if (window.scrollY > 200) {
        prewarmed = true;
        const img = new window.Image();
        img.src = "/images/field-learning-studio.webp";
        window.removeEventListener("scroll", handleScrollPrewarm);
      }
    };
    window.addEventListener("scroll", handleScrollPrewarm, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollPrewarm);
  }, []);

  useEffect(() => {
    if (!runwayRef.current || !stageRef.current) return;

    let cancelled = false;
    let started = false;
    let cleanup = () => {};
    const media = window.matchMedia("(min-width: 769px) and (prefers-reduced-motion: no-preference)");
    const initialize = () => {
      if (started || cancelled || !media.matches) return;
      started = true;
      void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();

    // ========================================================================
    // DESKTOP & TABLET CINEMATIC TIMELINE (> 768px)
    // ========================================================================
    mm.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
      if (flsSceneRef.current) flsSceneRef.current.inert = true;
      const handoffIndicator = runwayRef.current?.querySelector<HTMLElement>(".v2-handoff-indicator");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: runwayRef.current,
          start: "top top",
          end: "+=340%",
          pin: stageRef.current,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            // Hide the outgoing hint immediately at pin release, including scrub lag.
            if (handoffIndicator) handoffIndicator.style.visibility = p >= 1 ? "hidden" : "";
            // Integration: hidden scenes must not intercept clicks or keyboard focus.
            if (heroRef.current) heroRef.current.inert = p > 0.10;
            if (flsSceneRef.current) flsSceneRef.current.inert = p < 0.96;

            // Restrained editorial status updates (Section 3)
            if (p < 0.12) {
              setTelemetryPhase("MS. / SYSTEMS ARCHITECTURE");
              setTelemetryContext("METHODOLOGY · OBSERVE → ACT");
            } else if (p < 0.22) {
              setTelemetryPhase("01 / FIELD");
              setTelemetryContext("OBSERVATIONS");
            } else if (p < 0.32) {
              setTelemetryPhase("01 / EVIDENCE");
              setTelemetryContext("TRACEABLE RECORDS");
            } else if (p < 0.42) {
              setTelemetryPhase("01 / ANALYSIS");
              setTelemetryContext("RELATIONSHIPS");
            } else if (p < 0.52) {
              setTelemetryPhase("01 / DECISION");
              setTelemetryContext("PRIORITIES");
            } else if (p < 0.62) {
              setTelemetryPhase("01 / CAPABILITY");
              setTelemetryContext("STRUCTURED SYSTEM");
            } else if (p < 0.74) {
              setTelemetryPhase("02 / OPERATING DOMAINS");
              setTelemetryContext("INTERDISCIPLINARY PRACTICE");
            } else if (p < 0.80) {
              setTelemetryPhase("03 / METHODOLOGY TO SYSTEM");
              setTelemetryContext("THINKING BECOMES SYSTEM");
            } else {
              setTelemetryPhase("04 / FIELD LEARNING STUDIO");
              setTelemetryContext("PRODUCTION WORKBENCH · fls.maissara.tech");
            }

            // Workflow progression active step during FLS internal focus (Section 10)
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
      // SCENE 00 -> SCENE 01: HERO TO FIELD CONTINUOUS TRANSITION (0.00 -> 0.14)
      // No blank frame; contours enlarge and observation beacons ignite on ridges
      // ----------------------------------------------------------------------
      // Hero typography recedes smoothly
      tl.to(
        heroRef.current,
        {
          scale: 0.90,
          opacity: 0,
          y: -40,
          duration: 0.10,
          ease: "power2.inOut",
        },
        0
      );

      // Topographic contours advance and enlarge
      tl.to(
        topoRef.current,
        {
          scale: 1.45,
          opacity: 0.32,
          duration: 0.18,
          ease: "none",
        },
        0
      );

      // Telemetry fades in gently as scroll begins
      tl.to(
        telemetryRef.current,
        {
          opacity: 1,
          duration: 0.05,
        },
        0.04
      );

      // Analytical canvas fades in early (NO empty black interval!)
      tl.to(
        analyticalRef.current,
        {
          opacity: 1,
          duration: 0.06,
        },
        0.04
      );

      // Contour beacons pulse on ridge intersections
      tl.to(
        ".v2-contour-beacon",
        {
          opacity: 1,
          scale: 1,
          stagger: 0.015,
          duration: 0.05,
        },
        0.06
      );

      // Step A: Field Observations emerge directly at contour beacon locations
      tl.fromTo(
        ".v2-node-field",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, stagger: 0.02, duration: 0.06 },
        0.08
      );

      tl.to(
        ".v2-step-narrative-a",
        { opacity: 1, y: 0, duration: 0.05 },
        0.08
      );

      // ----------------------------------------------------------------------
      // SCENE 01: COMPLEXITY → CAPABILITY MATRIX PROGRESSION (0.16 -> 0.60)
      // ----------------------------------------------------------------------
      // Step B: Field -> Evidence (Traceable records indexed with source provenance)
      tl.fromTo(
        ".v2-node-evidence",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, stagger: 0.02, duration: 0.06 },
        0.20
      );
      tl.to(
        ".v2-step-narrative-b",
        { opacity: 1, y: 0, duration: 0.05 },
        0.20
      );
      tl.to(
        ".v2-step-narrative-a",
        { opacity: 0, y: -10, duration: 0.05 },
        0.20
      );

      // Step C: Analysis (Restrained vectors & systemic relationships form)
      tl.fromTo(
        ".v2-vector-line",
        { strokeDashoffset: 100, opacity: 0 },
        { strokeDashoffset: 0, opacity: 0.45, stagger: 0.02, duration: 0.06 },
        0.30
      );
      tl.to(
        ".v2-step-narrative-c",
        { opacity: 1, y: 0, duration: 0.05 },
        0.30
      );
      tl.to(
        ".v2-step-narrative-b",
        { opacity: 0, y: -10, duration: 0.05 },
        0.30
      );

      // Step D: Decision (Noise reduces, nodes align into 3 structured columns)
      tl.to(
        ".v2-node-scatter",
        {
          opacity: 0.15,
          scale: 0.75,
          duration: 0.05,
        },
        0.40
      );
      tl.fromTo(
        ".v2-matrix-column",
        { opacity: 0, scaleY: 0.4 },
        { opacity: 1, scaleY: 1, stagger: 0.025, duration: 0.07 },
        0.40
      );
      tl.to(
        ".v2-step-narrative-d",
        { opacity: 1, y: 0, duration: 0.05 },
        0.40
      );
      tl.to(
        ".v2-step-narrative-c",
        { opacity: 0, y: -10, duration: 0.05 },
        0.40
      );

      // Step E: Capability (Resolves into complete orderly system envelope)
      tl.fromTo(
        ".v2-capability-grid",
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.06 },
        0.50
      );
      tl.to(
        ".v2-step-narrative-e",
        { opacity: 1, y: 0, duration: 0.05 },
        0.50
      );
      tl.to(
        ".v2-step-narrative-d",
        { opacity: 0, y: -10, duration: 0.05 },
        0.50
      );

      // ----------------------------------------------------------------------
      // SCENE 02: OPERATING DOMAINS BRIDGE (0.60 -> 0.70)
      // Exact approved 5 domains -> SYSTEMS · PEOPLE · DECISIONS
      // ----------------------------------------------------------------------
      tl.to(
        analyticalRef.current,
        {
          opacity: 0.20,
          scale: 0.94,
          duration: 0.05,
        },
        0.58
      );

      tl.to(
        domainsRef.current,
        {
          opacity: 1,
          duration: 0.05,
        },
        0.58
      );

      // 5 approved domains sequence
      const domainItems = gsap.utils.toArray<HTMLElement>(".v2-domain-item");
      domainItems.forEach((item, idx) => {
        const startT = 0.58 + idx * 0.02;
        tl.fromTo(
          item,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.018 },
          startT
        );
        if (idx < domainItems.length - 1) {
          tl.to(item, { opacity: 0, y: -12, duration: 0.012 }, startT + 0.018);
        }
      });

      // Resolve into: SYSTEMS · PEOPLE · DECISIONS
      tl.to(
        ".v2-domains-resolve",
        {
          opacity: 1,
          duration: 0.04,
        },
        0.67
      );

      // ----------------------------------------------------------------------
      // SCENE 03: THINKING BECOMES SYSTEM (0.70 -> 0.77)
      // Physical geometric morph: analytical columns snap and expand into FLS frame
      // ----------------------------------------------------------------------
      tl.to(
        domainsRef.current,
        {
          opacity: 0,
          scale: 0.96,
          duration: 0.04,
        },
        0.70
      );

      // Analytical grid morphs its proportions to match FLS application envelope
      tl.to(
        analyticalRef.current,
        {
          opacity: 0.45,
          scale: 1.05,
          duration: 0.05,
        },
        0.70
      );

      // FLS scene scales in lockstep from the morphing analytical envelope
      tl.fromTo(
        flsSceneRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.05 },
        0.72
      );

      tl.fromTo(
        flsFrameRef.current,
        {
          scale: 0.75,
          opacity: 0.6,
          y: 20,
        },
        {
          scale: 1.0,
          opacity: 1,
          y: 0,
          duration: 0.06,
          ease: "power2.out",
        },
        0.72
      );

      // Dissolve wireframe as authentic FLS interface locks in
      tl.to(
        analyticalRef.current,
        {
          opacity: 0,
          duration: 0.04,
        },
        0.76
      );

      // ----------------------------------------------------------------------
      // SCENE 04: FLS INTERNAL CINEMATIC FOCUS SEQUENCE (0.76 -> 1.00)
      // FULL FLS -> FOCUS into EVIDENCE -> FINDINGS -> LESSONS -> RECOMMENDATIONS
      // -> PROFESSIONAL OUTPUT -> PULL BACK TO FULL SYSTEM
      // ----------------------------------------------------------------------
      // Step 1: Full FLS grounded (0.76 -> 0.80)
      // Step 2: Push camera into EVIDENCE panel (0.80 -> 0.83)
      tl.to(
        flsImageRef.current,
        {
          scale: 1.30,
          x: "-6%",
          y: "-10%",
          duration: 0.04,
          ease: "power2.inOut",
        },
        0.80
      );

      // Step 3: Glide camera into FINDINGS panel (0.83 -> 0.86)
      tl.to(
        flsImageRef.current,
        {
          scale: 1.30,
          x: "-2%",
          y: "-6%",
          duration: 0.035,
          ease: "power1.inOut",
        },
        0.835
      );

      // Step 4: Glide camera into LESSONS panel (0.86 -> 0.89)
      tl.to(
        flsImageRef.current,
        {
          scale: 1.26,
          x: "1%",
          y: "-3%",
          duration: 0.035,
          ease: "power1.inOut",
        },
        0.87
      );

      // Step 5: Glide camera into RECOMMENDATIONS panel (0.89 -> 0.92)
      tl.to(
        flsImageRef.current,
        {
          scale: 1.24,
          x: "4%",
          y: "-1%",
          duration: 0.035,
          ease: "power1.inOut",
        },
        0.90
      );

      // Step 6: Frame PROFESSIONAL OUTPUT (0.92 -> 0.94)
      tl.to(
        flsImageRef.current,
        {
          scale: 1.20,
          x: "6%",
          y: "0%",
          duration: 0.03,
          ease: "power1.inOut",
        },
        0.93
      );

      // Step 7: Smooth pull-back to full complete system (0.94 -> 0.97)
      tl.to(
        flsImageRef.current,
        {
          scale: 1.0,
          x: "0%",
          y: "0%",
          duration: 0.04,
          ease: "power2.out",
        },
        0.95
      );

      // Final Frame Statement & CTAs reveal (0.96 -> 1.00)
      tl.to(
        ".v2-fls-final-statement",
        {
          opacity: 1,
          y: 0,
          duration: 0.04,
        },
        0.96
      );

      tl.to(
        ".v2-handoff-indicator",
        {
          opacity: 1,
          duration: 0.01,
        },
        0.97
      );
      tl.to(
        ".v2-handoff-indicator",
        { opacity: 0, duration: 0.02, ease: "none" },
        0.98
      );
    });

    // ========================================================================
    // MOBILE BEHAVIOR (<= 768px & 390px)
    // Clean, legible vertical flow without pin traps or scroll conflicts
    // ========================================================================
    mm.add("(max-width: 768px), (prefers-reduced-motion: reduce)", () => {
      if (heroRef.current) heroRef.current.inert = false;
      if (flsSceneRef.current) flsSceneRef.current.inert = false;
      gsap.set(
        [
          heroRef.current,
          analyticalRef.current,
          domainsRef.current,
          flsSceneRef.current,
          flsFrameRef.current,
          flsImageRef.current,
          ctaRowRef.current,
          ".v2-fls-final-statement",
        ],
        { clearProps: "all" }
      );
    });

        cleanup = () => mm.revert();
      }
      );
    };
    initialize();
    media.addEventListener("change", initialize);
    return () => {
      cancelled = true;
      media.removeEventListener("change", initialize);
      cleanup();
    };
  }, []);

  return (
    <div ref={runwayRef} className="v2-cinematic-runway" id="identity">
      <div ref={stageRef} className="v2-cinematic-stage">
        {/* RESTRAINED TELEMETRY BAR (Section 3: No fake GPS, no correlation metrics) */}
        <div ref={telemetryRef} className="v2-telemetry-bar">
          <div className="v2-telemetry-phase">
            <span className="v2-telemetry-pulse" />
            <span>{telemetryPhase}</span>
          </div>
          <div className="v2-telemetry-coords">{telemetryContext}</div>
        </div>

        {/* TOPOGRAPHIC ELEVATION LINES LAYER */}
        <div ref={topoRef} className="v2-topo-layer" aria-hidden="true">
          <Contours className="v2-topo-svg" />

          {/* Contour Beacons for Hero -> Field continuity (Section 4) */}
          <div
            className="v2-contour-beacon"
            style={{ top: "34%", left: "48%" }}
          />
          <div
            className="v2-contour-beacon"
            style={{ top: "46%", left: "64%" }}
          />
          <div
            className="v2-contour-beacon"
            style={{ top: "58%", left: "54%" }}
          />
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
            Professional terminology, high-integrity labels (Sections 5 & 6)
            ================================================================ */}
        <div ref={analyticalRef} className="v2-analytical-stage">
          <div className="v2-analytical-container">
            <h2 className="sr-only">Complexity to capability</h2>
            {/* Step narratives */}
            <div className="v2-stage-narrative">
              <div className="v2-step-narrative-a">
                <div className="v2-stage-step-tag">FIELD</div>
                <h3 className="v2-stage-step-title">OBSERVATIONS</h3>
                <p className="v2-stage-step-desc">
                  Qualitative field inquiries, interviews, and situational notes
                  from complex operational environments.
                </p>
              </div>
              <div
                className="v2-step-narrative-b"
                style={{ opacity: 0, position: "absolute", top: 0 }}
              >
                <div className="v2-stage-step-tag">EVIDENCE</div>
                <h3 className="v2-stage-step-title">TRACEABLE RECORDS</h3>
                <p className="v2-stage-step-desc">
                  Verified observations indexed with source provenance for
                  institutional continuity.
                </p>
              </div>
              <div
                className="v2-step-narrative-c"
                style={{ opacity: 0, position: "absolute", top: 0 }}
              >
                <div className="v2-stage-step-tag">ANALYSIS</div>
                <h3 className="v2-stage-step-title">RELATIONSHIPS</h3>
                <p className="v2-stage-step-desc">
                  Connecting evidence with institutional mandates to reveal systemic
                  dependencies and root bottlenecks.
                </p>
              </div>
              <div
                className="v2-step-narrative-d"
                style={{ opacity: 0, position: "absolute", top: 0 }}
              >
                <div className="v2-stage-step-tag">DECISION</div>
                <h3 className="v2-stage-step-title">PRIORITIES</h3>
                <p className="v2-stage-step-desc">
                  Filtering operational noise into decision criteria, risk pathways,
                  and prioritized courses of action.
                </p>
              </div>
              <div
                className="v2-step-narrative-e"
                style={{ opacity: 0, position: "absolute", top: 0 }}
              >
                <div className="v2-stage-step-tag">CAPABILITY</div>
                <h3 className="v2-stage-step-title">STRUCTURED SYSTEM</h3>
                <p className="v2-stage-step-desc">
                  Codifying analytical methodology into repeatable frameworks, tools,
                  and institutional capability.
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
              {/* Coordinate Grid */}
              <g stroke="rgba(255,255,255,0.05)" strokeWidth="0.8">
                <line x1="380" y1="50" x2="380" y2="550" strokeDasharray="3 6" />
                <line x1="580" y1="50" x2="580" y2="550" strokeDasharray="3 6" />
                <line x1="780" y1="50" x2="780" y2="550" strokeDasharray="3 6" />
                <line x1="980" y1="50" x2="980" y2="550" strokeDasharray="3 6" />
                <line x1="380" y1="180" x2="980" y2="180" strokeDasharray="3 6" />
                <line x1="380" y1="360" x2="980" y2="360" strokeDasharray="3 6" />
              </g>

              {/* Step C: Restrained Relationship Vectors */}
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

              {/* Observation Nodes: High integrity, generic editorial descriptors */}
              <g className="v2-nodes-field-group">
                {/* Node 1 */}
                <g className="v2-node-field v2-node-scatter">
                  <circle cx="450" cy="130" r="4.5" className="v2-node-dot" />
                  <circle cx="450" cy="130" r="12" className="v2-node-ring" />
                  <text x="466" y="128" className="v2-node-label">
                    OBSERVATION
                  </text>
                  <text x="466" y="140" className="v2-node-meta">
                    FIELD INQUIRY
                  </text>
                </g>

                {/* Node 2 */}
                <g className="v2-node-field v2-node-scatter">
                  <circle cx="470" cy="310" r="4.5" className="v2-node-dot" />
                  <circle cx="470" cy="310" r="12" className="v2-node-ring" />
                  <text x="486" y="308" className="v2-node-label">
                    OBSERVATION
                  </text>
                  <text x="486" y="320" className="v2-node-meta">
                    CONTEXTUAL RECORD
                  </text>
                </g>

                {/* Node 3 */}
                <g className="v2-node-evidence v2-node-scatter">
                  <circle cx="640" cy="210" r="5" className="v2-node-dot" />
                  <circle cx="640" cy="210" r="14" className="v2-node-ring" />
                  <text x="658" y="208" className="v2-node-label">
                    RECORD
                  </text>
                  <text x="658" y="220" className="v2-node-meta">
                    SOURCE PROVENANCE
                  </text>
                </g>

                {/* Node 4 */}
                <g className="v2-node-evidence v2-node-scatter">
                  <circle cx="660" cy="280" r="5" className="v2-node-dot" />
                  <circle cx="660" cy="280" r="14" className="v2-node-ring" />
                  <text x="678" y="278" className="v2-node-label">
                    RECORD
                  </text>
                  <text x="678" y="290" className="v2-node-meta">
                    VERIFIED ARTIFACT
                  </text>
                </g>

                {/* Node 5 */}
                <g className="v2-node-evidence v2-node-scatter">
                  <circle cx="840" cy="160" r="5" className="v2-node-dot" />
                  <circle cx="840" cy="160" r="14" className="v2-node-ring" />
                  <text x="858" y="158" className="v2-node-label">
                    CRITERIA
                  </text>
                  <text x="858" y="170" className="v2-node-meta">
                    DECISION MATRIX
                  </text>
                </g>

                {/* Node 6 */}
                <g className="v2-node-evidence v2-node-scatter">
                  <circle cx="860" cy="340" r="5" className="v2-node-dot" />
                  <circle cx="860" cy="340" r="14" className="v2-node-ring" />
                  <text x="878" y="338" className="v2-node-label">
                    SEQUENCE
                  </text>
                  <text x="878" y="350" className="v2-node-meta">
                    ACTION PATHWAY
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
                  rx="3"
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
                  height="45"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.06)"
                  rx="2"
                />
                <rect
                  x="434"
                  y="195"
                  width="122"
                  height="45"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.06)"
                  rx="2"
                />
                <rect
                  x="434"
                  y="250"
                  width="122"
                  height="45"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.06)"
                  rx="2"
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
                  rx="3"
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
                  rx="2"
                />
                <rect
                  x="624"
                  y="230"
                  width="122"
                  height="70"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.06)"
                  rx="2"
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
                  rx="3"
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
                  rx="2"
                />
                <rect
                  x="814"
                  y="250"
                  width="122"
                  height="90"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.06)"
                  rx="2"
                />
              </g>

              {/* Step E: Capability Grid Envelope */}
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
                  rx="4"
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
                  SYSTEM ARCHITECTURE / METHODOLOGICAL BOUNDARY
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* ================================================================
            SCENE 02: OPERATING DOMAINS BRIDGE (Section 7)
            Exact approved 5 domains -> SYSTEMS · PEOPLE · DECISIONS
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
              From peace operations and security environments to human learning
              and digital decision architectures.
            </p>
            <div className="v2-domains-resolve">
              SYSTEMS · PEOPLE · DECISIONS
            </div>
          </div>
        </div>

        {/* ================================================================
            SCENE 03 & 04: FIELD LEARNING STUDIO CINEMATIC REVEAL
            Interface authenticity & Internal Focus Sequence (Sections 8, 9, 10, 11)
            ================================================================ */}
        <div ref={flsSceneRef} className="v2-fls-scene" id="fls-reveal">
          <div ref={flsFrameRef} className="v2-fls-frame-wrapper">
            {/* Window Chrome Header (Neutral authentic chrome, fls.maissara.tech) */}
            <div className="v2-fls-chrome">
              <div className="v2-fls-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="v2-fls-url-bar">fls.maissara.tech</div>
              <div className="v2-fls-badge">METHODOLOGY-FIRST WORKBENCH</div>
            </div>

            {/* Authentic FLS Image Viewport */}
            <div className="v2-fls-viewport">
              <div ref={flsImageRef} className="v2-fls-image">
                <Image
                  src="/images/field-learning-studio.webp"
                  alt="Field Learning Studio authentic interface preview."
                  fill
                  sizes="(max-width: 1280px) 94vw, 1280px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  loading="lazy"
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

          {/* FLS Final Frame: Exact Approved Headline, Statement & CTAs (Section 11) */}
          <div className="v2-fls-final-statement">
            <h2 className="v2-fls-final-title">FIELD LEARNING STUDIO</h2>
            <p className="v2-fls-final-desc">
              A human-led analytical workbench for turning field evidence into defensible institutional learning.
            </p>
            <div ref={ctaRowRef} className="v2-fls-cta-row">
              <Link className="button-primary" href="/work/field-learning-studio">
                EXPLORE CASE STUDY →
              </Link>
              <a
                className="button-secondary"
                href="https://fls.maissara.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                OPEN SYSTEM <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="v2-handoff-indicator" aria-hidden="true" style={{ pointerEvents: "none" }}>
            <span>SCROLL TO CONTINUE TO REMAINING SYSTEMS</span>
            <span>↓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
