import Image from "next/image";
import type { ReactNode } from "react";
import { domains, trajectory, research, labs, type System } from "@/data/site";
import { EvidenceGraph } from "./visuals";
export function Label({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`label ${className}`}>{children}</p>;
}
export function SectionHeader({
  id,
  number,
  label,
  title,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <Label>
        <span className="section-num">{number}</span> / {label}
      </Label>
      <div>
        <h2 id={id}>{title}</h2>
        {children && <p className="section-intro">{children}</p>}
      </div>
    </div>
  );
}
export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`external-link ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
export function DomainMatrix() {
  return (
    <div className="domain-matrix">
      {domains.map((domain, i) => (
        <article className="domain-row" key={domain.name}>
          <Label>DOMAIN / 0{i + 1}</Label>
          <h3>{domain.name}</h3>
          <p>{domain.description}</p>
          <span className="domain-marker" aria-hidden="true">
            +
          </span>
        </article>
      ))}
    </div>
  );
}
export function SystemShowcase({
  system,
  featured = false,
}: {
  system: System;
  featured?: boolean;
}) {
  return (
    <article
      className={`system ${featured ? "system-featured" : "system-compact"}`}
    >
      <div className="system-copy">
        <Label>SYSTEM / {system.id}</Label>
        <h3>{system.name}</h3>
        {system.qualifier && <p className="qualifier">{system.qualifier}</p>}
        <p className="system-description">{system.description}</p>
        {system.tags && (
          <ul className="tags" aria-label="Focus areas">
            {system.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <div className="system-links">
          {system.url && (
            <ExternalLink href={system.url}>Explore system</ExternalLink>
          )}
          <ExternalLink href={system.repository}>Repository</ExternalLink>
        </div>
      </div>
      {featured && (
        <div className="system-visual">
          {system.image ? (
            <figure>
              <Image
                src={system.image}
                alt={system.imageAlt || `${system.name} public interface`}
                width={system.id === "002" ? 1280 : 1440}
                height={system.id === "002" ? 470 : 1000}
                sizes="(max-width: 760px) 100vw, 60vw"
              />
              <figcaption className="label">
                PUBLIC INTERFACE / {system.name}
              </figcaption>
            </figure>
          ) : (
            <div className="system-diagram">
              <EvidenceGraph />
              <Label>
                {system.id === "001"
                  ? "FIELD / EVIDENCE / LEARNING"
                  : "ENVIRONMENT / PRIORITIES / PLANNING"}
              </Label>
              <p className="diagram-caption">
                Conceptual relationships · interface preview pending
              </p>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
export function Trajectory() {
  return (
    <ol className="trajectory">
      {trajectory.map((step, i) => (
        <li key={step}>
          <span className="trajectory-index label" aria-hidden="true">
            0{i + 1}
          </span>
          <h3>{step}</h3>
          {i < trajectory.length - 1 && (
            <span className="trajectory-arrow" aria-hidden="true">
              ↓
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
export function ResearchCards() {
  return (
    <div id="research-projects" className="research-grid">
      {research.map((title, i) => (
        <article className="research-item" key={title}>
          <Label>RESEARCH / 0{i + 1}</Label>
          <h3>{title}</h3>
          <p className="label research-type">RESEARCH INTEREST</p>
        </article>
      ))}
    </div>
  );
}
export function LabItems() {
  return (
    <div className="lab-items">
      {labs.map((lab) => (
        <article key={lab.name} className="lab-item">
          <div>
            <span className="status">
              <span aria-hidden="true" /> {lab.status}
            </span>
            <h3>{lab.name}</h3>
          </div>
          <div className="system-links">
            <ExternalLink href={lab.url}>Explore lab</ExternalLink>
            <ExternalLink href={lab.repository}>Repository</ExternalLink>
          </div>
        </article>
      ))}
    </div>
  );
}
