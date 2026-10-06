export const site = {
  name: "Maissara Selim",
  url: "https://maissara.tech",
  description:
    "Maissara Selim works across operational practice, peace and security, institutional learning, strategic planning, research and emerging technology—turning complex field problems into structured decisions, tools and capability.",
  // Set a verified mailto: or contact URL before publication. Never infer an email.
  contact: { href: null as string | null, label: "Start a conversation" },
  github: "https://github.com/maissaramoheb",
  orcid: "https://orcid.org/0009-0004-3009-5888",
};
export const navigation = [
  ["WORK", "#work"],
  ["EXPERIENCE", "#experience"],
  ["RESEARCH", "#research"],
  ["LAB", "#lab"],
  ["ABOUT", "#about"],
] as const;
export const domains = [
  {
    name: "Peace & Security",
    description:
      "Peace operations, policing, security-sector development, protection and complex operational environments.",
  },
  {
    name: "Strategy & Decision Systems",
    description:
      "Planning, policy, analysis, monitoring, organizational performance and decision support.",
  },
  {
    name: "Learning & Human Performance",
    description:
      "Training design, trainer development, scenario-based learning, assessment and capability development.",
  },
  {
    name: "AI & Digital Systems",
    description:
      "Applied AI, human–AI interaction and digital tools designed around real professional workflows.",
  },
  {
    name: "Research & Innovation",
    description:
      "Interdisciplinary inquiry connecting practice, evidence, decision-making and emerging technology.",
  },
];
export type System = {
  id: string;
  name: string;
  description: string;
  tags?: string[];
  url?: string;
  repository: string;
  qualifier?: string;
  image?: string;
  imageAlt?: string;
};
export const systems: System[] = [
  {
    id: "001",
    image: "/images/field-learning-studio.webp",
    imageAlt:
      "Field Learning Studio public homepage showing the workflow from field material to a professional draft.",
    name: "Field Learning Studio",
    description:
      "A human-led analytical workbench for turning field evidence into findings, lessons, recommendations and professional learning outputs.",
    tags: ["FIELD EVIDENCE", "EVALUATION", "LEARNING", "DECISION SUPPORT"],
    url: "https://fls.maissara.tech",
    repository: "https://github.com/maissaramoheb/field-learning-studio",
  },
  {
    id: "002",
    image: "/images/unpol-planning.webp",
    imageAlt: "UNPOL capacity-building planning tool public interface.",
    name: "UNPOL Capacity-Building & Development Planning Tool",
    description:
      "A structured planning prototype for analysing policing environments, stakeholders, priorities, sequencing and implementation in peace-operation and security-sector reform contexts.",
    tags: ["PLANNING", "CAPACITY DEVELOPMENT", "DECISION SUPPORT"],
    qualifier: "UNOFFICIAL / EDUCATIONAL & DECISION-SUPPORT PROTOTYPE",
    url: "https://unpol.maissara.tech",
    repository: "https://github.com/maissaramoheb/unpol-cbd-planning-tool",
  },
  {
    id: "003",
    name: "Youth, Climate, Peace & Security Toolkit Lab",
    description:
      "A planning, policy and training workspace connecting youth, climate-security and peacebuilding analysis with practical programme and policy design.",
    repository: "https://github.com/maissaramoheb/ycps-toolkit-lab",
  },
  {
    id: "004",
    name: "Trifecta Performance Lab",
    description:
      "A bilingual trainer-development and performance system connecting learning domains, assessment, evidence, progression and human-performance design.",
    repository: "https://github.com/maissaramoheb/trifecta-performance-lab",
  },
];
export const trajectory = [
  "Field operations & investigations",
  "Specialized security operations",
  "UN peace operations",
  "Training & capability development",
  "Planning, policy & organizational performance",
  "AI, research & digital systems",
];
export const research = [
  "Human–AI Decision-Making in High-Stakes Environments",
  "AI & Data-Driven Decision Support in Peace Operations, Policing and Security-Sector Reform",
  "Training, Human Performance & Decision-Making in Complex Operations",
];
// Public DOI resolved to the UNPOL v0.10.0 software record during local QA.
export const publication = {
  doi: "https://doi.org/10.5281/zenodo.23079627",
  verified: true,
};
export const labs = [
  {
    name: "Mission Learning Design Lab",
    status: "PROTOTYPE",
    url: "https://learninglab.maissara.tech",
    repository: "https://github.com/maissaramoheb/mission-learning-design-lab",
  },
];
export const biography = [
  "Maissara Selim is a security and peace-operations practitioner, trainer, researcher and builder working across operational practice, institutional learning, strategic planning and emerging technology.",
  "His professional experience spans policing and specialized security operations, United Nations peace operations, capacity development, planning and organizational performance.",
  "His current work increasingly focuses on translating practical field problems into structured methodologies, learning systems and digital decision-support tools.",
];
