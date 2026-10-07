# V2 MOTION SYSTEM — CODEX HANDOFF SPECIFICATION

**Project:** `maissara.tech`  
**Identity:** Operational Intelligence × Cinematic Editorial  
**Audience:** Codex Engineering Implementation  
**Status:** Approved & Frozen for Full V2 Implementation  
**Working Branch:** `v2-motion-poc`  

---

## 1. Executive Motion Grammar & North Star

The visual language is strictly **90% Cinematic Editorial, 10% Operational Texture**.
The experience must feel:
- Dark, restrained, precise, institutional.
- Analytical systems thinking rather than simulated tactical warfare or a generic AI startup.
- Driven by **native vertical scrolling** (`window.scrollY`) using GSAP ScrollTrigger with **scrubbed timelines**.
- Pinned desktop storytelling with a **clean, unpinned vertical flow on mobile** (`<= 768px`).

---

## 2. Master Scene Sequence

```
SCENE 00 — Hero (Identity & Thesis)
   ↓ (Continuous transition: Contours advance, observation beacons illuminate)
SCENE 01 — Complexity → Capability (5-Step Analytical Matrix)
   ↓ (Grounded conceptual bridge)
SCENE 02 — Operating Domains (5 Approved Domains → Systems · People · Decisions)
   ↓ (Physical geometric transformation: Wireframe morphs into application frame)
SCENE 03 — Thinking Becomes System (Convergence into FLS window)
   ↓ (Internal focus sequence: Evidence → Findings → Lessons → Recommendations → Output)
SCENE 04 — Field Learning Studio Reveal (Pull-back, definitive statement, CTAs)
   ↓ (Seamless hand-off)
REMAINDER OF SITE — Selected Systems, Trajectory, Research, Lab, About, Contact
```

---

## 3. Timeline Architecture & ScrollTrigger Structure

The desktop sequence is housed in a single pinned stage:
- **Runway Container:** `.v2-cinematic-runway` (`position: relative; width: 100%;`)
- **Stage Container:** `.v2-cinematic-stage` (`position: sticky; top: 0; height: 100vh; overflow: hidden;`)
- **ScrollTrigger Configuration:**
  ```typescript
  ScrollTrigger.create({
    trigger: runwayRef.current,
    start: "top top",
    end: "+=340%",       // Total scroll distance: 3.4x viewport height
    pin: stageRef.current,
    scrub: 1,           // 1-second smooth inertia scrub
    anticipatePin: 1,
  });
  ```

### Normalized Progress Keyframes (`0.00 → 1.00`)

| Progress | Scene | Motion Action |
| :--- | :--- | :--- |
| `0.00 → 0.10` | **Scene 00 (Hero)** | Hero text scales down (`0.90`) and recedes (`y: -40px, opacity: 0`). Contours expand (`scale: 1.45`). |
| `0.04 → 0.10` | **Hero → Field Continuity** | Top telemetry fades in. Analytical canvas fades in early (NO empty black frame). 3 contour beacons pulse. |
| `0.08 → 0.18` | **Scene 01 Step A (Field)** | Observation nodes emerge directly from contour beacon coordinates. Tag: `FIELD`, Title: `OBSERVATIONS`. |
| `0.18 → 0.28` | **Scene 01 Step B (Evidence)** | Records appear with provenance indicators. Tag: `EVIDENCE`, Title: `TRACEABLE RECORDS`. |
| `0.28 → 0.38` | **Scene 01 Step C (Analysis)** | Cross-sector vector lines draw (`stroke-dasharray: 4 4`). Tag: `ANALYSIS`, Title: `RELATIONSHIPS`. |
| `0.38 → 0.48` | **Scene 01 Step D (Decision)** | Scatter nodes fade to 0.15; 3 structured columns snap into focus. Tag: `DECISION`, Title: `PRIORITIES`. |
| `0.48 → 0.58` | **Scene 01 Step E (Capability)**| Methodological grid envelope locks. Tag: `CAPABILITY`, Title: `STRUCTURED SYSTEM`. |
| `0.58 → 0.68` | **Scene 02 (Operating Domains)**| 5 approved domains cycle sequentially. Subtitle resolves: `SYSTEMS · PEOPLE · DECISIONS`. |
| `0.68 → 0.76` | **Scene 03 (Morph)** | Columns & grid envelope physically resize to match FLS frame aspect ratio. |
| `0.76 → 0.80` | **Scene 04 (Full FLS Frame)** | FLS window chrome resolves (`fls.maissara.tech`), authentic interface appears. |
| `0.80 → 0.84` | **FLS Focus 1 (Evidence)** | Camera punches into Evidence panel (`scale: 1.30, x: -6%, y: -10%`). Active tag: `01 EVIDENCE`. |
| `0.84 → 0.87` | **FLS Focus 2 (Findings)** | Camera pans to Findings panel (`scale: 1.30, x: -2%, y: -6%`). Active tag: `02 FINDINGS`. |
| `0.87 → 0.90` | **FLS Focus 3 (Lessons)** | Camera pans to Lessons panel (`scale: 1.26, x: 1%, y: -3%`). Active tag: `03 LESSONS`. |
| `0.90 → 0.93` | **FLS Focus 4 (Recommendations)**| Camera pans to Recommendations panel (`scale: 1.24, x: 4%, y: -1%`). Active tag: `04 RECOMMENDATIONS`. |
| `0.93 → 0.95` | **FLS Focus 5 (Output)** | Camera frames Executive Output draft (`scale: 1.20, x: 6%, y: 0%`). Active tag: `05 PROFESSIONAL OUTPUT`. |
| `0.95 → 0.98` | **FLS Pull-Back** | Camera pulls back smoothly to full workbench (`scale: 1.0, x: 0%, y: 0%`). |
| `0.96 → 1.00` | **FLS Final Frame** | Heading, supporting statement, and primary/secondary CTAs reveal. |

---

## 4. Exact Approved Operating Domains Taxonomy

The operating domains sequence must use **strictly these 5 domains** in this exact order:

1. **`PEACE & SECURITY`**
2. **`STRATEGY & DECISION SYSTEMS`**
3. **`LEARNING & HUMAN PERFORMANCE`**
4. **`AI & DIGITAL SYSTEMS`**
5. **`RESEARCH & INNOVATION`**

Resolving definitively with:
**`SYSTEMS · PEOPLE · DECISIONS`**

Do not substitute or alter these titles.

---

## 5. Field Learning Studio Interface Specification

- **Browser Chrome URL:** `fls.maissara.tech`
- **Asset:** `/images/field-learning-studio.webp` (authentic UI screenshot)
- **Badge:** `METHODOLOGY-FIRST WORKBENCH`
- **Final Headline:** `FIELD LEARNING STUDIO`
- **Supporting Statement:** `A human-led analytical workbench for turning field evidence into defensible institutional learning.`
- **Primary Action:** `EXPLORE CASE STUDY →` (links to `#fls-case-study`)
- **Secondary Action:** `OPEN SYSTEM ↗` (links to `https://fls.maissara.tech`)

---

## 6. Telemetry HUD Rules

To maintain the **90% editorial / 10% tactical balance**:
- **NEVER use:** Fake GPS coordinates (`04°12'N`, etc.), artificial correlation values (`r=0.84`), or fabricated operational metrics.
- **NEVER use:** Overly robotic jargon (e.g., `MORPHOLOGICAL CONVERGENCE`).
- **DO use:** Clean, restrained institutional status indicators:
  - Left: `MS. / SYSTEMS ARCHITECTURE`
  - Right:
    - Scenes 00–01: `METHODOLOGY · OBSERVE → ACT`
    - Scene 02: `INTERDISCIPLINARY PRACTICE`
    - Scenes 03–04: `PRODUCTION WORKBENCH · fls.maissara.tech`
- Telemetry bar is **hidden at scroll 0** and fades in gently as scrolling begins.

---

## 7. Responsive Breakpoint Rules (`<= 768px`)

1. **NO Viewport Pinning on Mobile:**
   Mobile devices must never be trapped in a pinned scroll loop.
2. **Vertical Flow:**
   Under `matchMedia("(max-width: 768px)")`, desktop inline transforms are cleared with `gsap.set(..., { clearProps: "all" })`.
3. **Document Flow:**
   Sections stack in natural document order:
   - Hero (`min-height: calc(100vh - 86px)`)
   - Analytical matrix summary cards
   - Operating Domains list
   - FLS Workbench card with authentic screenshot and CTAs
4. **Telemetry HUD:** Hidden completely on mobile (`display: none;`).
5. **Zero Horizontal Overflow:** Container wrappers (`.v2-cinematic-runway`, `.v2-cinematic-stage`, `.v2-topo-layer`, `.v2-analytical-stage`, `.v2-domains-bridge`) enforce `overflow-x: hidden;` and `width: 100%; max-width: 100%;`. Domain titles flex vertically (`flex-direction: column`) with `white-space: normal; word-break: break-word` to guarantee zero horizontal bleed on 390px mobile viewports.

---

## 8. Accessibility (`prefers-reduced-motion`)

When `prefers-reduced-motion: reduce` is detected:
- GSAP ScrollTrigger disables pinning and scrubbing.
- The stage container reverts to `position: relative !important; height: auto !important;`.
- All elements render statically at full opacity without transforms.

---

## 9. Performance Constraints

- **Zero LCP Impact:** Do NOT add `priority` to the large FLS image in `<head>`.
- **Prewarming:** Lazily prewarm `/images/field-learning-studio.webp` via a one-time scroll listener once `window.scrollY > 200px`.
- **Hardware Acceleration:** Only animate `transform` (`x`, `y`, `scale`) and `opacity`. Never animate `width`, `height`, `top`, or `left`.

---

## 10. WHAT MUST NOT BE CHANGED

During the full V2 build, Codex must preserve:
1. The **dark editorial color palette** (`--background: #0b0d0e`, `--accent: #c69552`, `--line: #222629`).
2. The **exact typography hierarchy** (Geist Sans for editorial headings, Geist Mono for metadata/tags).
3. The **5 narrative steps**: `FIELD` → `EVIDENCE` → `ANALYSIS` → `DECISION` → `CAPABILITY`.
4. The **exact 5 operating domains** and the resolving triad `SYSTEMS · PEOPLE · DECISIONS`.
5. The authentic **Field Learning Studio** interface preview.
6. The untouched V1 content beneath the POC handoff until scheduled for migration.
