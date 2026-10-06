# maissara.tech

Local first-production implementation of Maissara Selim’s professional digital headquarters. The owner’s authoritative brief is preserved in `PROJECT-BRIEF.txt`.

## Run

Use Node.js 22.9+ and npm. The implementation was verified with Node 26.9.0 and npm 11.19.1.

```sh
npm ci
npm run dev
```

To review the production build:

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

Next.js App Router 16.3.8, React 19.3, TypeScript, Tailwind 4.3, Motion 14 and locally served Geist fonts. Versions and lockfile are pinned. No database, authentication, CMS, API, analytics or environment variables.

## Change content

- `src/data/site.ts`: identity, public links, contact destination, domains, systems, research territories, biography and lab entries.
- `src/app/globals.css`: design tokens, responsive grid and visual treatments.
- `src/components/`: reusable headers, labels, external links, matrix, showcases, trajectory, research and lab items; navigation and the short progression animation are the only client components.
- `src/app/layout.tsx`: canonical, Open Graph and social metadata.
- `src/app/opengraph-image.tsx`, `icon.svg`, `sitemap.ts`, `robots.ts`: generated identity and discoverability assets.
- `src/app/page.tsx`: section composition and ProfilePage + Person JSON-LD. Person sameAs contains identity profiles; the software DOI is linked in the research section rather than identifying the Person as software.

Set `site.contact.href` to a verified `mailto:` or contact URL before publication. Until then the contact area explicitly states that direct details are forthcoming; it contains no fabricated address or working contact form. The About monogram is an intentional portrait placeholder.

English V1 follows the supplied copy. Logical CSS properties support future direction changes; no Arabic translation or bilingual release is claimed.

## Image provenance

Screenshots captured from the owner-supplied public sites on 5 October 2026:

- `public/images/field-learning-studio.webp`: public homepage at https://fls.maissara.tech, 1440 × 1000.
- `public/images/unpol-planning.webp`: public homepage at https://unpol.maissara.tech, cropped to its 1280 × 470 header/workbench introduction for readability.

Images are authentic public views, optimized as WebP and rendered with Next Image. They are not invented product mockups. Other systems remain editorial text showcases rather than fabricated interfaces.

## Release boundary

No Git branch, commit, pull request, remote preview or deployment was created. The generated project directory is isolated from existing repositories. Production remains unpublished until the owner reviews the implementation and authorizes deployment. A Vercel deployment can use the defaults (`npm run build`, Next.js framework) after review.

See `IMPLEMENTATION-REPORT.md` for checks, assumptions and limitations.
