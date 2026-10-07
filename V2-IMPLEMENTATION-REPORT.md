# V2 implementation handoff

## Scope and source

`v2-full-build` is based on `ab887332028fa77291971efcbfff1a2005300551`. `main` remains `4defcc217a1e82d073ed45b82befc264a9c5573e`; the frozen motion branch remains unchanged. The full supplied brief and authoritative motion handoff are retained. This work is authorized for Preview only.

## Implementation

Nine canonical routes: `/`, `/work`, `/work/field-learning-studio`, `/work/unpol-cbd`, `/work/ycps-toolkit-lab`, `/work/trifecta-performance-lab`, `/research`, `/about`, `/contact`.

Homepage continues the existing FLS reveal with three distinct systems, generalized professional trajectory, research questions, experimental lab, calm profile and professional contact links. Four source-bound case studies share nine editorial chapters. Page-specific metadata/social images, sitemap, ProfilePage/Person and case-study CreativeWork data are included.

New shared components: `HomeContinuation`, `SiteFooter`, `PageIntro`, `ProjectChapter`, `TrajectoryChapter`, `ResearchChapter`, `LabSection`, `AboutSection`, `ContactSection`, `CaseStudyChapter`, `ProjectMedia`, `WorkflowDiagram`, `ProjectBoundaryNote`, `AccessLinks`. Shared navigation now supports deep routes, active section indication, an accessible mobile menu and focus return on Escape.

No application dependencies added. Temporary review tooling is outside this repository. Existing GSAP/ScrollTrigger loads only for motion-enabled desktop; initial mobile/reduced-motion views use complete CSS layouts. The existing short progression fade is reproduced with the same duration/stagger in CSS, avoiding a second animation runtime. Geist remains the same font family; licensed local subsets reduce transfer.

## Motion preservation

Frozen timeline actions, scene timings, `+=340%` desktop pin, scrub and narrative remain unchanged. Integration changes repair the FLS case-study link, hidden-scene focus interception, heading semantics, dynamic reduced-motion switching and deferred initialization. The original `v2-motion.css` is preserved byte for byte. Subsequent chapters use modest reveals, project image focus and trajectory line progression, without extra pins or replacement scrolling.

At 768px and below, all content flows vertically and no pinned sequence initializes. Reduced motion exposes all narrative, domain and FLS content and disables progression animation. Route cleanup reverts contexts; late asynchronous initialization is cancelled.

## Content integrity

Pinned README source commits:

- FLS: `963506cede7d40644e941da838cf99c8b4e38e72`
- UNPOL: `3e30ae3c8dccabb96892804f702a9207567a3ef9`
- YCPS: `c2dc8b779522d713ae608225ad6c1f69e2978997`
- Trifecta: `07329c867f6f62ad0776cd19fd2ee403230f3d96`

FLS/UNPOL media are inherited authentic interface captures. Trifecta uses a new authentic Arabic RTL capture from the repository-listed public deployment. YCPS is explicitly a constructed workflow visualization, never an interface screenshot. Boundary statements remain visible and preserve human judgment, unofficial prototype status, local persistence and non-compensable safety failure. Public DOI is identified as a software release archive.

Intentionally omitted: email, unverified publications/doctoral status, sensitive operational details, portraits, adoption/impact claims and institutional endorsements. Future verified email is one optional `site.contactEmail` value.

## Verification and review evidence

Lint, typecheck, production build and four focused content tests pass. Chrome and WebKit cover nine routes across six specified sizes; WCAG 2 A/AA and 2.1 AA automated scans, lifecycle and mobile keyboard checks are included. Supplementary checks cover images, direct loads, unknown route 404, internal links, external links, metadata, social images, sitemap, robots and JSON-LD.

The final preview URL, exact commit SHA, final performance measurements and remaining observations are recorded in the sibling `../v2-review/FINAL-REPORT.md`, after deployment verification. Detailed JSON/HTML evidence is under `../v2-review/reports/`; final preview screenshots under `../v2-review/screenshots/`; review video under `../v2-review/video/`.

Automated checks are engineering evidence. Field INP and owner visual approval are not established by this build. No merge, promotion, production alias assignment or production release is authorized or performed.
