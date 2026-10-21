import Image from "next/image";

/** Curated artwork is separate from application evidence and always qualified. */
export function EditorialArtwork({ variant }: { variant: "portrait" | "inquiry" | "academic" }) {
  if (variant === "academic") return (
    <figure className="editorial-artwork academic-artwork">
      <div className="artwork-plate" data-editorial-media data-artwork>
        <Image src="/images/maissara-mba-editorial.webp"
          alt="Editorial engraving supplied by Maissara Selim, depicting him in academic dress holding a certificate folder and a medallion."
          width={1024} height={1536} quality={85} sizes="(max-width: 768px) 90vw, 480px" loading="lazy" />
      </div>
      <figcaption>Owner-supplied editorial illustration · not a documentary record of a qualification or award</figcaption>
    </figure>
  );
  if (variant === "portrait") return (
    <figure className="editorial-artwork editorial-portrait">
      <div className="artwork-plate" data-editorial-media data-artwork>
        <Image src="/images/maissara-editorial-engraving.webp" alt="Engraved editorial portrait of Maissara Selim, derived from his supplied photograph."
          width={960} height={1200} quality={85} sizes="(max-width: 768px) 90vw, 440px" loading="lazy" />
      </div>
      <figcaption>Editorial illustration · from the owner’s photograph</figcaption>
    </figure>
  );
  return (
    <figure className="editorial-artwork inquiry-artwork">
      <svg viewBox="0 0 900 240" role="img" aria-label="Conceptual line illustration connecting evidence, human judgment and practical systems. It does not depict an operational event.">
        <defs>
          <pattern id="inquiry-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(25)"><path d="M0 0v7" stroke="currentColor" strokeWidth=".7" /></pattern>
        </defs>
        <g fill="none" stroke="currentColor" strokeWidth=".7">
          <path d="M80 119H820M285 40V200M615 40V200" opacity=".25" />
          <circle cx="450" cy="120" r="76" /><circle cx="450" cy="120" r="62" opacity=".4" />
          <path d="M168 63l72 57-72 57-72-57Z" fill="url(#inquiry-hatch)" />
          <path d="M660 62h104v116H660Z" fill="url(#inquiry-hatch)" />
          <path d="M168 120Q310 20 450 120T712 120M168 120Q310 220 450 120T712 120" />
          <path d="M430 120h40M450 100v40M686 90h52M686 110h52M686 130h34M686 150h44" />
          <circle cx="168" cy="120" r="5" /><circle cx="450" cy="120" r="5" /><circle cx="712" cy="120" r="5" />
        </g>
      </svg>
      <figcaption>Evidence · Human judgment · Practical systems<span>Conceptual illustration</span></figcaption>
    </figure>
  );
}
