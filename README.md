# maissara.tech — V2 review build

The complete V2 implementation starts from frozen motion commit `ab887332028fa77291971efcbfff1a2005300551`, on `v2-full-build`. The authoritative build brief is `V2-BUILD-BRIEF.txt`; motion choreography is defined in `V2-MOTION-HANDOFF.md`. Production and the frozen branch are preserved.

## Run and verify

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm run start
```

Next.js App Router, React, TypeScript, Tailwind, GSAP/ScrollTrigger and Geist. No new application dependencies, backend, contact form, authentication or CMS. Do not read or change environment files to edit public content.

## Content and routes

Nine routes: `/`, `/work`, four `/work/[slug]` case studies, `/research`, `/about`, `/contact`. Project case studies share nine editorial chapters.

- `src/data/site.ts`: identity, verified links, research, trajectory, lab and optional `contactEmail`. Undefined email shows GitHub/ORCID only.
- `src/data/projects.ts`: project facts, workflow, boundaries, authentic media and pinned README source commits.
- `src/components/v2/editorial.tsx`: shared editorial chapter and deep-page components.
- `src/components/v2/HomeContinuation.tsx`: scoped, lightly animated continuation; no additional pins.
- `src/components/v2-motion/CinematicSequence.tsx`: frozen choreography with route/accessibility integration and deferred loading.
- `src/app/v2-full.css`: extension of existing design, including complete static mobile/reduced-motion flow.
- `src/lib/metadata.ts`, `src/lib/social.tsx`: page metadata and branded social imagery.

## Motion and fonts

Native scrolling; desktop-only pinned sequence above 768px; unchanged frozen timeline values. Reduced motion reveals complete content without pinning. GSAP contexts revert on route unmount and cancel late asynchronous initialization. Same Geist variable fonts, locally subset for Latin/punctuation/arrows to reduce initial transfer; original SIL license is retained beside font files. Other scripts use the existing fallback stack.

## Media and source integrity

FLS and UNPOL images are inherited authentic public interface captures. YCPS is explicitly labeled a constructed workflow visualization, not an interface screenshot. Trifecta uses a new settled public Arabic RTL interface capture from its repository-listed live deployment. No adoption claims, fabricated metrics, portraits, client logos or email addresses.

Case-study implementation statements cite pinned public READMEs. Public DOI is a software release record, not a research article or institutional endorsement. All professional descriptions remain generalized.

## Release boundary

This branch is for an owner-authorized Vercel **Preview** only. Do not merge, promote, change production aliases or assign `maissara.tech`. Historical V1 implementation reports describe earlier states and are not the current release report. See `V2-IMPLEMENTATION-REPORT.md` for V2 verification and review artifacts.
