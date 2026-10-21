import {
  PageIntro,
  AboutSection,
  TrajectoryChapter,
} from "@/components/v2/editorial";
import { Label } from "@/components/sections";
import { profileAreas } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { EditorialArtwork } from "@/components/v2/EditorialArtwork";
export const metadata = pageMetadata(
  "About",
  "Maissara Selim’s professional practice across peace operations, learning, planning, research and system building.",
  "/about",
);
export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="ABOUT / PROFESSIONAL PROFILE"
        title="Practice informs the system."
        description="Operational experience, institutional learning, strategic planning and emerging technology."
      />
      <AboutSection deep />
      <section className="academic-milestone container" aria-labelledby="academic-title">
        <EditorialArtwork variant="academic" />
        <div className="academic-copy chapter-reveal">
          <Label>Academic development · 2026</Label>
          <h2 id="academic-title">Master of Business Administration <span>(MBA)</span></h2>
          <p className="academic-focus">AI in Business Organizations</p>
          <p>Management education connects strategic thinking with emerging technology, institutional performance and the design of practical systems.</p>
          <p>This academic development complements a practice grounded in professional judgment, organizational learning and decision-making.</p>
        </div>
      </section>
      <section
        className="profile-areas container"
        aria-labelledby="profile-areas-title"
      >
        <h2 id="profile-areas-title" className="sr-only">
          Areas of professional practice
        </h2>
        {profileAreas.map((area) => (
          <article key={area.title}>
            <Label>
              {area.title}
            </Label>
            <p>{area.copy}</p>
          </article>
        ))}
      </section>
      <TrajectoryChapter deep />
    </>
  );
}
