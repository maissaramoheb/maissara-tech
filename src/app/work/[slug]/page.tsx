import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/data/projects";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { Label, ExternalLink } from "@/components/sections";
import {
  CaseStudyChapter,
  WorkflowDiagram,
  ProjectMedia,
  ProjectBoundaryNote,
  AccessLinks,
} from "@/components/v2/editorial";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) return {};
  return pageMetadata(
    project.name,
    project.description,
    `/work/${project.slug}`,
  );
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    url: `${site.url}/work/${project.slug}`,
    description: project.description,
    creator: { "@type": "Person", name: site.name, url: site.url },
    isBasedOn: `${project.repository}/blob/${project.sourceCommit}/README.md`,
    ...(project.doi ? { identifier: project.doi } : {}),
  };
  return (
    <>
      <header className="case-study-hero container">
        <Link className="case-back label" href="/work">
          ← SELECTED WORK
        </Link>
        <Label>SYSTEM / {project.id} — CASE STUDY</Label>
        <h1 className="editorial-title">{project.name}</h1>
        <p className="project-status label">{project.status}</p>
        {project.qualifier && (
          <p className="boundary-qualifier">{project.qualifier}</p>
        )}
        <p className="editorial-description">{project.description}</p>
        <AccessLinks project={project} caseStudy={false} />
      </header>
      <div className="case-study-jump container">
        <nav aria-label="Case study chapters">
          {[
            "Context",
            "Problem",
            "Design principle",
            "System",
            "Workflow",
            "Current state",
            "Interface",
            "Boundaries",
            "Access",
          ].map((name, i) => (
            <a key={name} href={`#case-${i + 1}`}>
              {name}
            </a>
          ))}
        </nav>
      </div>
      <CaseStudyChapter number={1} title="CONTEXT">
        <p>{project.context}</p>
      </CaseStudyChapter>
      <CaseStudyChapter number={2} title="PROBLEM">
        <p>{project.problem}</p>
      </CaseStudyChapter>
      <CaseStudyChapter number={3} title="DESIGN PRINCIPLE">
        <p className="principle-statement">{project.principle}</p>
      </CaseStudyChapter>
      <CaseStudyChapter number={4} title="SYSTEM">
        <p>{project.system}</p>
      </CaseStudyChapter>
      <CaseStudyChapter number={5} title="WORKFLOW">
        <WorkflowDiagram steps={project.workflow} />
        {project.slug === "unpol-cbd" && (
          <p className="workflow-note">
            Export is a separate persistent action, outside the seven numbered
            planning stages.
          </p>
        )}
      </CaseStudyChapter>
      <CaseStudyChapter number={6} title="CURRENT STATE">
        <ul className="current-state-list">
          {project.current.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseStudyChapter>
      <CaseStudyChapter number={7} title="INTERFACE">
        <ProjectMedia project={project} />
      </CaseStudyChapter>
      <CaseStudyChapter number={8} title="BOUNDARIES">
        <ProjectBoundaryNote project={project} />
      </CaseStudyChapter>
      <CaseStudyChapter number={9} title="ACCESS">
        <AccessLinks project={project} caseStudy={false} />
        <div className="source-note">
          <p>
            Implementation facts checked against the public repository README.
          </p>
          <ExternalLink
            href={`${project.repository}/blob/${project.sourceCommit}/README.md`}
          >
            SOURCE / README
          </ExternalLink>
        </div>
      </CaseStudyChapter>
      <nav className="case-next container" aria-label="More work">
        <Link className="case-link" href="/work">
          ALL SELECTED WORK <span aria-hidden="true">→</span>
        </Link>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
