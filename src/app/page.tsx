import { Navigation } from "@/components/navigation";
import { Progression } from "@/components/reveal";
import { Contours, EvidenceGraph } from "@/components/visuals";
import {
  Label,
  SectionHeader,
  DomainMatrix,
  SystemShowcase,
  Trajectory,
  ResearchCards,
  LabItems,
  ExternalLink,
} from "@/components/sections";
import { site, systems, biography, publication } from "@/data/site";
export default function Home() {
  const personId = `${site.url}/#person`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.url}/#profile`,
    url: site.url,
    name: "Maissara Selim — Research, Systems, Practice",
    mainEntity: {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      url: site.url,
      description: site.description,
      sameAs: [site.github, site.orcid],
    },
  };
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <section
          id="identity"
          className="hero container"
          aria-labelledby="hero-title"
        >
          <div className="hero-top">
            <Label>
              MS / 01 <span className="label-divider">—</span> FIELD • STRATEGY
              • SYSTEMS
            </Label>
            <Label className="hero-note">RESEARCH · SYSTEMS · PRACTICE</Label>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                MAISSARA
                <br />
                SELIM<span className="identity-dot">.</span>
              </h1>
              <h2 className="hero-thesis">
                From complex environments
                <br className="desktop-break" /> to better decisions
                <br className="desktop-break" /> and practical systems.
              </h2>
              <p className="hero-description">
                I work at the intersection of operational experience,
                institutional learning, strategic planning and emerging
                technology—turning complex field problems into structured
                decisions, tools and capability.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#work">
                  Explore Selected Work <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#research">
                  Research & Publications <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <Contours />
              <div className="visual-caption label">
                COMPLEXITY → CAPABILITY
              </div>
              <Progression />
              <div className="visual-register label" aria-hidden="true">
                <span>OBSERVE / UNDERSTAND / ACT</span>
                <span>MS — 01</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <Label>
              PEACE & SECURITY / STRATEGY / LEARNING / AI / RESEARCH
            </Label>
            <a className="label scroll-link" href="#domains">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section
          id="domains"
          className="section container observations"
          aria-labelledby="domains-title"
        >
          <SectionHeader
            id="domains-title"
            number="02"
            label="OPERATING DOMAINS"
            title="Working across systems, people and decisions."
          >
            My work sits across several disciplines, but the underlying problem
            is consistent: how institutions understand complex environments,
            develop people, make decisions and turn knowledge into action.
          </SectionHeader>
          <DomainMatrix />
        </section>
        <section
          id="work"
          className="section work-section"
          aria-labelledby="work-title"
        >
          <EvidenceGraph />
          <div className="container">
            <SectionHeader
              id="work-title"
              number="03"
              label="SELECTED SYSTEMS"
              title="Selected Systems"
            >
              Tools built from recurring problems encountered in planning,
              learning, evaluation and professional practice.
            </SectionHeader>
            <div className="systems-featured">
              {systems.slice(0, 2).map((system) => (
                <SystemShowcase key={system.id} system={system} featured />
              ))}
            </div>
            <div className="systems-secondary">
              {systems.slice(2).map((system) => (
                <SystemShowcase key={system.id} system={system} />
              ))}
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="section container"
          aria-labelledby="experience-title"
        >
          <SectionHeader
            id="experience-title"
            number="04"
            label="PROFESSIONAL TRAJECTORY"
            title="Practice before product."
          >
            The systems above did not begin as software ideas. They grew from
            repeated problems encountered across operations, peace missions,
            training, planning and institutional work.
          </SectionHeader>
          <div className="trajectory-layout">
            <p className="trajectory-note">
              A progression from understanding environments to building the
              capability to act within them.
            </p>
            <Trajectory />
          </div>
        </section>
        <section
          id="research"
          className="section research-section"
          aria-labelledby="research-title"
        >
          <div className="container">
            <SectionHeader
              id="research-title"
              number="05"
              label="RESEARCH"
              title="Research emerging from practice."
            >
              My research interests focus on how people and institutions make
              consequential decisions under complexity, and how technology can
              support those decisions without displacing professional judgment.
            </SectionHeader>
            <ResearchCards />
            <div className="research-links">
              <ExternalLink href={site.orcid}>
                Publications / ORCID
              </ExternalLink>
              {publication.verified && (
                <ExternalLink href={publication.doi}>DOI / Zenodo</ExternalLink>
              )}
              <a className="external-link" href="#research-projects">
                Research territories <span aria-hidden="true">↑</span>
              </a>
            </div>
          </div>
        </section>
        <section
          id="lab"
          className="section container"
          aria-labelledby="lab-title"
        >
          <SectionHeader
            id="lab-title"
            number="06"
            label="EXPERIMENTAL WORK"
            title="Maissara Lab"
          >
            Experiments at the intersection of learning, decision-making and
            emerging technology.
          </SectionHeader>
          <LabItems />
        </section>
        <section
          id="about"
          className="section container"
          aria-labelledby="about-title"
        >
          <SectionHeader
            id="about-title"
            number="07"
            label="ABOUT"
            title="Grounded in practice. Open to what’s next."
          />
          <div className="about-layout">
            <div
              className="portrait-placeholder"
              role="img"
              aria-label="Abstract MS monogram with topographic contours; portrait placeholder"
            >
              <Contours />
              <span className="portrait-ms" aria-hidden="true">
                MS<span>.</span>
              </span>
              <Label className="portrait-label">
                MAISSARA SELIM / PRACTITIONER & BUILDER
              </Label>
            </div>
            <div className="about-copy">
              {biography.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="credential-list">
                <Label>LAW & POLICE SCIENCES</Label>
                <Label>MBA — AI IN BUSINESS ORGANIZATIONS</Label>
                <Label>UN PEACE OPERATIONS</Label>
                <Label>TRAINER DEVELOPMENT</Label>
              </div>
              <div className="system-links">
                <ExternalLink href={site.github}>GitHub</ExternalLink>
                <ExternalLink href={site.orcid}>ORCID</ExternalLink>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section container"
          aria-labelledby="contact-title"
        >
          <Label>08 / CONTACT</Label>
          <div className="closing-geometry" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <h2 id="contact-title">
            Complex problem?{" "}
            <br />
            <span>Start with the system around it.</span>
          </h2>
          <p>Research · Advisory · Collaboration · Training · Technology</p>
          {site.contact.href ? (
            <ExternalLink className="button-primary" href={site.contact.href}>
              {site.contact.label}
            </ExternalLink>
          ) : (
            <div className="contact-pending">
              <div className="system-links">
                <ExternalLink href={site.github}>GitHub Profile</ExternalLink>
                <ExternalLink href={site.orcid}>ORCID Record</ExternalLink>
              </div>
              <p>Direct contact details will be published here upon official activation.</p>
            </div>
          )}
        </section>
      </main>
      <footer className="footer container">
        <p>© {new Date().getFullYear()} Maissara Selim</p>
        <Label>RESEARCH · SYSTEMS · PRACTICE</Label>
        <a className="text-link" href="#identity">
          BACK TO TOP <span aria-hidden="true">↑</span>
        </a>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
