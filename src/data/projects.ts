import { systems } from "./site";
export type Project = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  status: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  imageWidth: number;
  imageHeight: number;
  url?: string;
  repository: string;
  qualifier?: string;
  workflow: string[];
  context: string;
  problem: string;
  principle: string;
  system: string;
  current: string[];
  boundaries: string[];
  doi?: string;
  sourceCommit: string;
};
export const projects: Project[] = [
  {
    ...systems[0],
    slug: "field-learning-studio",
    shortName: "Field Learning Studio",
    status: "LOCAL WORKBENCH / ACTIVE DEVELOPMENT",
    image: "/images/field-learning-studio.webp",
    imageAlt:
      "Field Learning Studio public homepage, including its fictional showcase workbench preview.",
    imageCaption: "PUBLIC HOMEPAGE / FICTIONAL SHOWCASE PREVIEW",
    imageWidth: 1440,
    imageHeight: 1000,
    context:
      "MEL, evaluation, donor reporting and programme learning teams work with interviews, observations and field notes that rarely arrive in a consistent structure.",
    problem:
      "A polished summary can conceal weak evidence, missing provenance or an unreviewed inference. The difficult work is retaining the relationship between source material, analytical claims and the decisions that follow.",
    principle:
      "Keep the human analyst responsible for qualification and judgment. Make evidence relationships and readiness checks inspectable rather than treating a fluent draft as proof.",
    system:
      "A human-led, browser-local field learning synthesis app. Local studies connect questions, scope and framework with imported field material and reviewed analytical outputs.",
    workflow: [
      "Raw field evidence",
      "Source inventory",
      "Evidence matrix",
      "Findings",
      "Lessons learned",
      "Good practices",
      "Recommendations",
      "QA review",
      "Donor-ready learning brief",
    ],
    current: [
      "Local study creation or cloning of read-only showcase cases; questions, scope and framework.",
      "DOCX, CSV/TSV and structured-note intake with human qualification of observations.",
      "Findings with supporting, challenging and qualifying evidence relationships.",
      "Lessons, practices and recommendations developed from reviewed findings.",
      "Professional Draft assembly, Final Review and controlled working/professional export.",
      "Browser-local IndexedDB persistence, structured backup and file-inclusive recovery archives.",
    ],
    boundaries: [
      "Browser-local workbench; no authentication, backend storage or collaboration service.",
      "No external AI generation or external AI API calls. Human qualification is required.",
      "Deterministic checks do not replace professional judgment or certify substantive agreement.",
      "Showcase material is fictional or sanitized. Use fictional/sanitized data for testing.",
      "Local records, archives and exports are not encrypted or centrally governed. Hosting/analytics metadata is distinct from local study storage.",
    ],
    sourceCommit: "963506cede7d40644e941da838cf99c8b4e38e72",
  },
  {
    ...systems[1],
    slug: "unpol-cbd",
    shortName: "UNPOL CBD Planning Tool",
    name: "UNPOL Capacity-Building & Development Integrated Planning Tool",
    status: "UNOFFICIAL / ACTIVE DEVELOPMENT",
    image: "/images/unpol-planning.webp",
    imageAlt:
      "The public UNPOL CBD planning prototype home interface and planning navigation.",
    imageCaption: "PUBLIC INTERFACE / UNOFFICIAL PLANNING PROTOTYPE",
    imageWidth: 1280,
    imageHeight: 470,
    context:
      "UNPOL advisory teams, SSR specialists, peace operations planners, Rule of Law practitioners and training users must translate mandates into context-sensitive capacity-building work.",
    problem:
      "Policing reform is politically sensitive and dependent on context, actor motivations and institutional constraints. Sequencing cannot be reduced to a generic ranking or detached from local ownership.",
    principle:
      "Structure analysis without automating strategic decisions. Preserve source links, analyst classifications and human-reviewed sequencing, with transparent limits on the prototype heuristic.",
    system:
      "An unofficial educational and decision-support planning prototype. PESTEL-S analysis, stakeholder mapping, optional SWOT/TOWS synthesis and CBD priorities lead into prioritization and implementation planning.",
    workflow: [
      "Context & Mandate",
      "Diagnostic Analysis",
      "Stakeholders & Ownership",
      "Analysis Synthesis",
      "CBD Priorities",
      "Prioritization & Sequencing",
      "Results & Implementation",
    ],
    current: [
      "Seven-stage planning journey with a separate Home / Planning Overview.",
      "PESTEL-S diagnosis and stakeholder influence, reform posture and engagement assumptions.",
      "Optional analyst-written SWOT findings and unscored TOWS Strategic Options.",
      "CBD Key Areas × Cross-Cutting Analytical Lenses matrix for capacity problems and intervention packages.",
      "Transparent prototype prioritization heuristic with human-reviewed sequencing.",
      "Browser localStorage persistence, JSON backup/restore, and separate Word, print/PDF, Markdown and JSON export.",
    ],
    boundaries: [
      "UNOFFICIAL / EDUCATIONAL & DECISION-SUPPORT PROTOTYPE.",
      "Not official United Nations doctrine; does not represent the United Nations.",
      "Does not replace mission mandates, official guidance, host-state law, human-rights due diligence, command approval or verified country analysis.",
      "No automated strategic decision-making. Formal ownership validation is not yet captured.",
      "The complete CBD matrix is not a formal UN taxonomy. The documented core Results stage is not a Theory of Change, Logframe or M&E framework.",
      "Do not store classified, restricted or sensitive operational information in public or unencrypted browser environments.",
    ],
    doi: "https://doi.org/10.5281/zenodo.23079627",
    sourceCommit: "3e30ae3c8dccabb96892804f702a9207567a3ef9",
  },
  {
    ...systems[2],
    slug: "ycps-toolkit-lab",
    shortName: "YCPS Toolkit Lab",
    name: "Youth, Climate, Peace and Security Toolkit Lab",
    status: "PROTOTYPE / v0.4.8",
    image: "/images/ycps-toolkit-lab.webp",
    imageAlt:
      "Conceptual YCPS workflow visualization; this is not an application screenshot.",
    imageCaption: "WORKFLOW VISUALIZATION / NOT AN INTERFACE SCREENSHOT",
    imageWidth: 1440,
    imageHeight: 800,
    context:
      "Policymakers, practitioners, trainers, youth actors, climate practitioners and peacebuilding professionals need to connect YCPS concepts with programme and policy work in African contexts.",
    problem:
      "Recognizing intersecting pressures is only a starting point. Analysis must articulate risk pathways, actors, possible responses and wording that can be critically reviewed.",
    principle:
      "Move from conceptual recognition to structured, review-ready outputs while keeping context-specific evidence and professional judgment central.",
    system:
      "A browser-based planning, training and policy-support workspace. The YCPS Matrix, Risk Pathway Builder and Stakeholder Workspace connect to case studies, a Training Simulator, Language Assistant, Toolkit Builder and Review Workspace.",
    workflow: [
      "Context and scenario selection",
      "YCPS Matrix",
      "Risk Pathways",
      "Stakeholder Mapping",
      "Toolkit and Session Builder",
      "Review and wording screen",
      "Final output package",
    ],
    current: [
      "v0.4.8 — Archival and Zenodo Integration Release; application functionality unchanged from v0.4.7.",
      "YCPS Matrix 2.0, Risk Pathway Builder and Stakeholder Workspace.",
      "Fictional and regional case studies, scenario-based Training Simulator and Language Assistant.",
      "Toolkit Builder, Review Workspace, Policy Brief and printable/transferable export tools.",
      "Browser-local persistence and a prototype access gate for controlled demonstration.",
    ],
    boundaries: [
      "No central operational database or automated institutional validation.",
      "Supports human analysis and professional judgment; does not replace official policy or expert review.",
      "Context-specific evidence, safeguarding requirements and institutional validation remain the user’s responsibility.",
      "The visual shown here is an explanatory workflow, not a fabricated product interface. No institutional endorsement is claimed.",
    ],
    sourceCommit: "c2dc8b779522d713ae608225ad6c1f69e2978997",
  },
  {
    ...systems[3],
    slug: "trifecta-performance-lab",
    shortName: "Trifecta Performance Lab",
    status: "LOCAL-FIRST APPLICATION / v2.2.0",
    image: "/images/trifecta-interface.webp",
    imageAlt:
      "Trifecta Performance Lab public Arabic-first trainer-development interface.",
    imageCaption: "PUBLIC INTERFACE / ARABIC-FIRST TRAINER DEVELOPMENT",
    imageWidth: 1440,
    imageHeight: 1000,
    context:
      "Trainer development connects learning objectives, station design, observed performance, assessment and progression. The system is Arabic-first and bilingual.",
    problem:
      "A total score can obscure missing evidence or a critical safety failure. Progression requires inspectable evidence and explicit gate decisions rather than compensating aggregate scores.",
    principle:
      "Keep the build-versus-diagnose distinction explicit. Link evidence to progression and treat Critical Safety Failure as a non-compensable No-Go.",
    system:
      "A local-first trainer-development application covering Cognitive, Psychomotor and Affective learning domains, plus Physical, Technical and Cognitive / Neurophysiological performance dimensions.",
    workflow: [
      "Curriculum",
      "Levels",
      "Stations",
      "Drills",
      "Evidence Chain",
      "Gate decision",
      "AAR & intervention",
    ],
    current: [
      "Curriculum → Levels → Stations → Drills hierarchy with evidence-based progression.",
      "Gate decisions: Go, No-Go, Need More Data and Retest. Critical Safety Failure is non-compensable.",
      "Evidence Chain, 15 guided cases, calibration tools, performance profile, AAR and intervention tools.",
      "Arabic RTL and English LTR, keyboard navigation and responsive layouts.",
      "Device-local storage, browser print/PDF, JSON station export and offline core content.",
    ],
    boundaries: [
      "Local-first; no cloud database or cross-device progress sync.",
      "Not a clinical, neurological or personality assessment. Does not teach operational tactics.",
      "Additional validation and workflow rules are marked “Applied recommendation / توصية تطبيقية” in the application.",
      "Demonstration curriculum is editable rather than a centrally governed library. Calibration is descriptive, not a validated reliability statistic.",
      "Print/PDF outputs are not signed or centrally managed records.",
    ],
    sourceCommit: "07329c867f6f62ad0776cd19fd2ee403230f3d96",
  },
];
export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
export const caseChapters = [
  "CONTEXT",
  "PROBLEM",
  "DESIGN PRINCIPLE",
  "SYSTEM",
  "WORKFLOW",
  "CURRENT STATE",
  "INTERFACE",
  "BOUNDARIES",
  "ACCESS",
] as const;
