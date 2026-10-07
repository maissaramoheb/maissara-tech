import { PageIntro, ResearchChapter } from "@/components/v2/editorial";
import { Label, ExternalLink } from "@/components/sections";
import { site, publication } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Research",
  "Practice-led research into human–AI judgment, peace operations decision support, learning and performance under complexity.",
  "/research",
);
export default function ResearchPage() {
  return (
    <>
      <PageIntro
        label="RESEARCH / INQUIRY & PUBLIC OUTPUTS"
        title="Research emerging from practice."
        description="How people and institutions make consequential decisions under complexity—and how technology can support those decisions without displacing professional judgment."
      />
      <ResearchChapter deep />
      <section
        className="public-outputs container"
        aria-labelledby="outputs-title"
      >
        <Label>PUBLIC OUTPUTS / VERIFIED RECORDS</Label>
        <h2 id="outputs-title">Public records. Clear boundaries.</h2>
        <article>
          <Label>SOFTWARE ARCHIVE / DOI</Label>
          <h3>UNPOL CBD Integrated Planning Tool — v0.10.0</h3>
          <p>
            A public software release record on Zenodo. This is a software
            archive, not a journal article or evidence of institutional
            endorsement.
          </p>
          <ExternalLink href={publication.doi}>
            VIEW PUBLIC SOFTWARE RECORD
          </ExternalLink>
        </article>
        <article>
          <Label>RESEARCH IDENTITY</Label>
          <h3>ORCID</h3>
          <p>Public researcher identifier: 0009-0004-3009-5888.</p>
          <ExternalLink href={site.orcid}>VIEW ORCID RECORD</ExternalLink>
        </article>
      </section>
    </>
  );
}
