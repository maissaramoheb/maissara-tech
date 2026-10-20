import { PageIntro, ProjectExhibit } from "@/components/v2/editorial";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Selected Work",
  "Systems built from recurring problems in field learning, planning, policy and trainer development.",
  "/work",
);
export default function WorkPage() {
  return <>
    <PageIntro label="Work / Selected systems" title="Different problems. Same discipline."
      description="Substantial systems built from recurring problems in planning, learning, evaluation and professional practice." />
    <div className="work-index">
      {projects.map(project => <ProjectExhibit key={project.slug} project={project} heading="h2" title={project.name} />)}
    </div>
  </>;
}
