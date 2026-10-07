import {
  PageIntro,
  ProjectMedia,
  AccessLinks,
} from "@/components/v2/editorial";
import { Label } from "@/components/sections";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Selected Work",
  "Systems built from recurring problems in field learning, planning, policy and trainer development.",
  "/work",
);
export default function WorkPage() {
  return (
    <>
      <PageIntro
        label="WORK / SELECTED SYSTEMS"
        title="Different problems. Same discipline."
        description="Substantial systems built from recurring problems in planning, learning, evaluation and professional practice."
      />
      <div className="work-index container">
        {projects.map((project, i) => (
          <article
            key={project.slug}
            className={`work-index-item ${i === 0 ? "work-index-flagship" : ""}`}
          >
            <div className="work-index-copy">
              <Label>
                SYSTEM / {project.id} {i === 0 ? "— FLAGSHIP" : ""}
              </Label>
              <h2>{project.name}</h2>
              <p className="project-status label">{project.status}</p>
              {project.qualifier && (
                <p className="boundary-qualifier">{project.qualifier}</p>
              )}
              <p className="chapter-description">{project.description}</p>
              <AccessLinks project={project} />
            </div>
            <ProjectMedia project={project} />
          </article>
        ))}
      </div>
    </>
  );
}
