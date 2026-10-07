import Link from "next/link";
import { CinematicSequence } from "@/components/v2-motion/CinematicSequence";
import { HomeContinuation } from "@/components/v2/HomeContinuation";
import {
  ProjectChapter,
  TrajectoryChapter,
  ResearchChapter,
  LabSection,
  AboutSection,
  ContactSection,
} from "@/components/v2/editorial";
import { Label } from "@/components/sections";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.url}/#profile`,
    url: site.url,
    name: "Maissara Selim — Research, Systems, Practice",
    mainEntity: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      description: site.description,
      sameAs: [site.github, site.orcid],
    },
  };
  return (
    <>
      <CinematicSequence />
      <HomeContinuation>
        <section
          id="work"
          className="selected-systems"
          aria-labelledby="selected-title"
        >
          <header className="selected-intro container chapter-reveal">
            <Label>05 / SELECTED SYSTEMS</Label>
            <h2 id="selected-title">
              DIFFERENT PROBLEMS.
              <br />
              <span>SAME DISCIPLINE.</span>
            </h2>
            <div>
              <p>
                Tools built from recurring problems in planning, learning,
                evaluation and professional practice.
              </p>
              <Link className="case-link" href="/work">
                ALL SELECTED WORK <span aria-hidden="true">→</span>
              </Link>
            </div>
          </header>
          {projects.slice(1).map((project, i) => (
            <ProjectChapter key={project.slug} project={project} index={i} />
          ))}
        </section>
        <TrajectoryChapter />
        <ResearchChapter />
        <LabSection />
        <AboutSection />
        <ContactSection />
      </HomeContinuation>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
