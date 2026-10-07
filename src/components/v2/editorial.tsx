import Link from "next/link";
import Image from "next/image";
import { Label, ExternalLink } from "@/components/sections";
import { Contours } from "@/components/visuals";
import {
  site,
  biography,
  credentials,
  professionalTrajectory,
  researchThemes,
  labs,
  contactAreas,
} from "@/data/site";
import type { Project } from "@/data/projects";

export function SiteFooter() {
  return (
    <footer className="footer container">
      <p>© {new Date().getFullYear()} Maissara Selim</p>
      <Label>RESEARCH · SYSTEMS · PRACTICE</Label>
      <Link className="text-link" href="/work">
        SELECTED WORK <span aria-hidden="true">↗</span>
      </Link>
    </footer>
  );
}
export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="editorial-intro container">
      <Label>{label}</Label>
      <h1 className="editorial-title">{title}</h1>
      {description && <p className="editorial-description">{description}</p>}
    </header>
  );
}
export function AccessLinks({
  project,
  caseStudy = true,
}: {
  project: Project;
  caseStudy?: boolean;
}) {
  return (
    <div className="access-links">
      {caseStudy && (
        <Link className="case-link" href={`/work/${project.slug}`}>
          EXPLORE CASE STUDY <span aria-hidden="true">→</span>
          <span className="sr-only"> — {project.shortName}</span>
        </Link>
      )}
      {project.url && (
        <ExternalLink href={project.url}>
          OPEN SYSTEM<span className="sr-only"> — {project.shortName}</span>
        </ExternalLink>
      )}
      <ExternalLink href={project.repository}>
        REPOSITORY<span className="sr-only"> — {project.shortName}</span>
      </ExternalLink>
      {!caseStudy && project.doi && (
        <ExternalLink href={project.doi}>
          PUBLIC SOFTWARE RECORD / DOI
        </ExternalLink>
      )}
    </div>
  );
}
export function ProjectMedia({ project }: { project: Project }) {
  return (
    <figure className="project-media">
      <div className="project-media-clip">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 70vw, 900px"
          loading="lazy"
        />
      </div>
      <figcaption className="label">{project.imageCaption}</figcaption>
    </figure>
  );
}
export function WorkflowDiagram({
  steps,
  compact = false,
}: {
  steps: string[];
  compact?: boolean;
}) {
  return (
    <ol
      className={`workflow-diagram ${compact ? "workflow-compact" : ""}`}
      aria-label="Information workflow"
    >
      {steps.map((step, i) => (
        <li key={step}>
          <span className="workflow-dot" aria-hidden="true" />
          <span className="workflow-order label" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{step}</span>
          {i < steps.length - 1 && (
            <span className="workflow-arrow" aria-hidden="true">
              ↓
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
export function ProjectBoundaryNote({ project }: { project: Project }) {
  return (
    <aside
      className="boundary-note"
      aria-label={`${project.shortName} limitations`}
    >
      {project.qualifier && (
        <p className="boundary-qualifier">{project.qualifier}</p>
      )}
      <ul>
        {project.boundaries.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </aside>
  );
}
export function ProjectChapter({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={`project-chapter project-chapter-${project.slug}`}
      id={project.slug}
    >
      <div className="container project-chapter-grid">
        <div className="project-chapter-copy chapter-reveal">
          <Label>
            SYSTEM / {project.id} <span className="index-divider">—</span>{" "}
            {project.status}
          </Label>
          <h3>{project.shortName}</h3>
          {project.qualifier && (
            <p className="boundary-qualifier">{project.qualifier}</p>
          )}
          <p className="chapter-description">{project.description}</p>
          <AccessLinks project={project} />
        </div>
        <div className="project-chapter-object">
          <ProjectMedia project={project} />
          <WorkflowDiagram
            steps={
              index === 0
                ? [
                    "Context",
                    "Stakeholders",
                    "Synthesis",
                    "Priorities",
                    "Sequencing",
                    "Implementation",
                  ]
                : index === 1
                  ? [
                      "Youth + climate + peace/security pressures",
                      "Risk pathways",
                      "Actors",
                      "Programme / policy responses",
                      "Review-ready outputs",
                    ]
                  : [
                      "Learning domains + human performance",
                      "Evidence",
                      "Progression",
                      "Trainer-development decisions",
                    ]
            }
            compact
          />
        </div>
      </div>
    </article>
  );
}
export function TrajectoryChapter({ deep = false }: { deep?: boolean }) {
  return (
    <section
      id="experience"
      className={`trajectory-chapter container ${deep ? "deep-trajectory" : ""}`}
      aria-labelledby="trajectory-title"
    >
      <div className="chapter-intro chapter-reveal">
        <Label>06 / PROFESSIONAL TRAJECTORY</Label>
        <h2 id="trajectory-title">
          PRACTICE
          <br />
          BEFORE PRODUCT.
        </h2>
        <p>
          The systems did not begin as software ideas. They emerged from
          recurring problems in operations, training, peace missions, planning
          and institutional work.
        </p>
      </div>
      <div className="trajectory-object">
        <div className="trajectory-terrain" aria-hidden="true">
          <Contours />
        </div>
        <ol className="professional-path">
          {professionalTrajectory.map((step, i) => (
            <li key={step}>
              <span className="path-node" aria-hidden="true" />
              <span className="label path-index" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{step}</h3>
              {i < professionalTrajectory.length - 1 && (
                <span className="path-arrow" aria-hidden="true">
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export function ResearchChapter({ deep = false }: { deep?: boolean }) {
  const Heading = deep ? "h2" : "h3";
  return (
    <section
      id="research"
      className="research-chapter container"
      aria-labelledby="research-heading"
    >
      <div className="chapter-intro">
        <Label>{deep ? "RESEARCH THEMES" : "07 / RESEARCH"}</Label>
        <h2 id="research-heading" className={deep ? "sr-only" : ""}>
          Research emerging from practice.
        </h2>
        {!deep && (
          <p>
            How people and institutions make consequential decisions under
            complexity—and how technology can support those decisions without
            displacing professional judgment.
          </p>
        )}
      </div>
      <div className="research-questions">
        {researchThemes.map((theme, i) => (
          <article
            key={theme.title}
            className="research-question chapter-reveal"
          >
            <Label>THEME / 0{i + 1}</Label>
            <div>
              <Heading>{theme.question}</Heading>
              <p className="research-territory">{theme.title}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="access-links">
        {!deep && (
          <Link href="/research" className="case-link">
            RESEARCH <span aria-hidden="true">→</span>
          </Link>
        )}
        <ExternalLink href={site.orcid}>ORCID</ExternalLink>
        <ExternalLink href="https://doi.org/10.5281/zenodo.23079627">
          PUBLIC OUTPUTS / DOI
        </ExternalLink>
      </div>
    </section>
  );
}
export function LabSection() {
  return (
    <section
      id="lab"
      className="lab-chapter container"
      aria-labelledby="lab-heading"
    >
      <div className="chapter-intro chapter-reveal">
        <Label>08 / EXPERIMENTAL WORK</Label>
        <h2 id="lab-heading">MAISSARA LAB</h2>
        <p>
          Experiments at the intersection of learning, decision-making and
          emerging technology.
        </p>
      </div>
      {labs.map((lab) => (
        <article className="lab-editorial" key={lab.name}>
          <span className="lab-bracket" aria-hidden="true">
            [&nbsp;]
          </span>
          <div>
            <Label className="lab-status">{lab.status}</Label>
            <h3>{lab.name}</h3>
          </div>
          <div className="access-links">
            <ExternalLink href={lab.url}>EXPLORE LAB</ExternalLink>
            <ExternalLink href={lab.repository}>REPOSITORY</ExternalLink>
          </div>
        </article>
      ))}
    </section>
  );
}
export function AboutSection({ deep = false }: { deep?: boolean }) {
  return (
    <section
      id="about"
      className={`about-chapter container ${deep ? "about-deep" : ""}`}
      aria-labelledby="about-heading"
    >
      <div
        className="about-signature"
        role="img"
        aria-label="Maissara Selim MS monogram"
      >
        <Contours />
        <span aria-hidden="true">
          MS<span>.</span>
        </span>
      </div>
      <div className="about-editorial">
        <Label>{deep ? "PROFESSIONAL PROFILE" : "09 / ABOUT"}</Label>
        <h2 id="about-heading">
          Grounded in practice.
          <br />
          Open to what’s next.
        </h2>
        {biography.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <ul className="credential-tags">
          {credentials.map((credential) => (
            <li key={credential}>{credential}</li>
          ))}
        </ul>
        {!deep && (
          <Link className="case-link" href="/about">
            PROFESSIONAL PROFILE <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}
export function ContactSection({ deep = false }: { deep?: boolean }) {
  const Heading = deep ? "h1" : "h2";
  return (
    <section
      id="contact"
      className={`contact-chapter container ${deep ? "contact-deep" : ""}`}
      aria-labelledby="contact-heading"
    >
      <Label>{deep ? "CONTACT / COLLABORATION" : "10 / CONTACT"}</Label>
      <div className="closing-geometry" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Heading id="contact-heading">
        COMPLEX PROBLEM?
        <br />
        <span>START WITH THE SYSTEM AROUND IT.</span>
      </Heading>
      <p className="contact-categories">
        {contactAreas.join(" · ").toUpperCase()}
      </p>
      <div className="access-links">
        {site.contactEmail && (
          <ExternalLink href={`mailto:${site.contactEmail}`}>
            EMAIL
          </ExternalLink>
        )}
        <ExternalLink href={site.github}>GITHUB</ExternalLink>
        <ExternalLink href={site.orcid}>ORCID</ExternalLink>
        {!deep && (
          <Link className="case-link" href="/contact">
            COLLABORATION ROUTES <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}
export function CaseStudyChapter({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="case-study-chapter container"
      aria-labelledby={`case-${number}`}
    >
      <Label>
        {String(number).padStart(2, "0")} / {title}
      </Label>
      <div>
        <h2 id={`case-${number}`}>
          {title.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase())}
        </h2>
        {children}
      </div>
    </section>
  );
}
