import {
  PageIntro,
  AboutSection,
  TrajectoryChapter,
} from "@/components/v2/editorial";
import { Label } from "@/components/sections";
import { profileAreas } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
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
      <section
        className="profile-areas container"
        aria-labelledby="profile-areas-title"
      >
        <h2 id="profile-areas-title" className="sr-only">
          Areas of professional practice
        </h2>
        {profileAreas.map((area, i) => (
          <article key={area.title}>
            <Label>
              0{i + 1} / {area.title}
            </Label>
            <p>{area.copy}</p>
          </article>
        ))}
      </section>
      <TrajectoryChapter deep />
    </>
  );
}
