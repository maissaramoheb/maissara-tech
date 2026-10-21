# V2.2.2 artwork decisions — 21 October 2026

The owner approves the V2.2.1 professional engraving and visual direction. Retain the primary portrait on Home/About. Add only the explicitly supplied graduation illustration on /about, adjacent to the credentials and development narrative. Instructor and office/strategy illustrations are **not approved and are not integrated**. Earlier proposals below are historical and do not authorize future contextual portraits.

## Academic milestone source and treatment

Approved input: `codex-clipboard-6b65d76c-91b0-4ebe-8c88-331e498ea560.png`, 1024×1536, owner-supplied finished editorial engraving. SHA-256: `1fe15972dbb80ceee368272741f241637b338c389c7f0b55824e07285379bd35`. It is a finished illustration, not the private original graduation photograph. No new likeness was generated, no other graduation photograph was substituted, and no instructor image was copied into the repository.

Public derivative: `/images/maissara-mba-editorial.webp`, 1024×1536, 530,234 bytes, WebP quality 88. Conversion preserves all illustration pixels and omits source metadata. It retains warm ivory, navy and antique brass; no thick frame, new badge, logo, parallax or facial zoom. Next Image serves responsive optimized widths at quality 85. Maximum desktop artwork width 480 CSS px; mobile fits the reading column. The 2:3 container reserves geometry and uses contain. No private source photographs or attachment PNGs are committed.

The visible medallion and certificate folder must be verified by the owner against the real event before production. The supplied artwork also contains stylized academic dress and background architectural motifs. These details do not establish an award, institution, degree classification or endorsement. Caption explicitly identifies an owner-supplied editorial illustration and says it is not a documentary record of a qualification or award. Alt describes visible objects without interpreting the medallion as an earned distinction. The adjacent facts come only from the owner's brief: MBA, AI in Business Organizations, 2026. No DBA, university or award claim is added.

Use the existing opacity-only 1350ms artwork reveal. SSR content is visible without the animation; reduced-motion content is immediately complete. Cold, warm, delayed and throttled loading, decode failures and unavailable animation APIs are tested separately from screenshot readiness.

## Application-source improvement

UNPOL's new 1440×900 screenshot was captured directly from the public `https://unpol.maissara.tech/` interface on 21 October 2026, dark mode, with the real How It Works explanation expanded. No workspace records were entered or changed. No personal or operational records are visible. The prototype qualifier remains in the image and caption. This authentic 16:10 capture replaces the 1280×470 display crop in projects.ts; the older asset remains for historical data compatibility. No application UI was generated or composited.

---

## Historical V2.2.1 art direction

# Editorial illustration art direction

V2.2.1 · Owner visual and likeness approval pending · Preview only.

## Final technique and source

Fine-art graphite engraving: delicate cross-hatching and stipple, restrained tonal modeling and warm ivory paper. Preserve the owner's actual facial proportions, hair, pose, expression and civilian clothing. No caricature, plastic rendering, invented role, uniform, insignia, institutional logo or operational activity.

The owner supplied **DSC_1762 copy 2.jpg** with this request. That source supersedes the pasted brief's earlier statement that photographs were unavailable. One derived portrait has been generated with the built-in image tool, visually checked against the source and integrated into About on Home and /about. It remains an editorial illustration, not a documentary photograph. The original photograph is not committed or published with the site.

Public asset: `public/images/maissara-editorial-engraving.webp`, 960×1200. Original generated master: 1122×1402. Responsive next/image sizes serve the portrait up to 440 CSS pixels; the 960-pixel source supports that size at 2× density. A 480-pixel mobile export is supplied with the review artifacts. Image quality 85 is explicitly allowed for the line artwork; existing screenshots retain their existing quality setting.

## Curated placement plan

| Placement | Treatment and palette | State / required source |
|---|---|---|
| About, Home and /about | Primary 4:5 engraved portrait; graphite #272a29 on warm ivory #f3f0e9 | Implemented from supplied real portrait; owner likeness approval pending |
| Research, Home and /research | Wide abstract inquiry plate; slate #b7c3c8 on charcoal, restrained muted brass context | Implemented as clearly conceptual line art; no person or real event is represented |
| Professional trajectory | Landscape context engraving; stone, charcoal and restrained copper | Awaiting a genuine approved context photograph; no fictional professional scene inserted |
| Training and capability | Human-centered learning illustration; ivory, deep navy and muted brass | Awaiting an approved real training photograph, with permission for everyone identifiable |

These are four proposed editorial placements, not a requirement to fill every section. Two artwork types are integrated now. Application screenshots retain visual priority in the work exhibits. The same portrait is reused consistently rather than creating multiple fictional versions of the owner.

## Dimensions and crop guidance

- Portrait master: retain at least 1120×1400 where possible; preserve hair margin, ears, face and shoulders. No facial feature changes to fit a layout. Desktop: 960×1200 export; mobile: 480×600 export, with responsive higher-density derivatives.
- Trajectory context: request a high-resolution landscape photograph, preferably 2400×1500 or larger. Leave room around the activity for a restrained editorial crop; retain factual context.
- Training: request a 2400px-or-wider original with clear subject identity and source permission. Avoid readable participant records, badges or sensitive operational details. Ask the owner to provide a cleared source rather than reconstructing those details.
- Research concept: 900×240 vector plate. No literal scale, data, institutional mandate or empirical result is implied.
- Application canvases: a separate 16:10 presentation system, using contain and matte framing. Never replace real application UI with generated illustration.

## Palette variants for future source-based artwork

1. Graphite on ivory: personal profile and professional reading surfaces.
2. Deep navy with muted brass: training and capability, if a cleared photograph becomes available.
3. Charcoal / stone / restrained copper: professional development and trajectory.
4. Slate line work on graphite: conceptual research, with no photorealistic event claim.

Color follows the surrounding section; do not apply one tinted filter indiscriminately to every source. Avoid gold decoration, film-poster effects, ornamental frames and dramatic invented lighting that changes perceived context.

## Accessible and efficient integration

The reusable EditorialArtwork component keeps portrait and conceptual artwork separate from ProjectMedia. Captions disclose the image type and source role. Alt text describes the illustration accurately; the SVG inquiry plate states that it does not depict an operational event. No essential research claim relies on artwork. Reserve dimensions to reduce layout shift, lazy-load below-fold artwork and retain the line structure in exported WebP. Reduced motion removes all illustration entrance effects. Portrait entrance uses opacity only, without facial zoom or crop.

## Copyright and provenance safeguards

Use only owner-supplied or specifically authorized originals. Do not invent a person's face, insignia, biography or professional activity. Confirm source rights and any identifiable third-party consent before publishing new contextual illustrations. Keep originals private and outside Git; commit only the approved derivative intended for the website. No UN/government endorsement is implied. New context imagery remains unimplemented until appropriate photographs are supplied. Owner review must include likeness as well as aesthetic fit.

## Generation record

Mode: built-in image generation/editing tool. Source role: identity/edit target. Output role: derived editorial illustration. No fallback CLI/API or new application dependency was used.

Prompt: Transform the exact supplied man's real studio photograph into a refined graphite/copperplate engraving on warm ivory paper. Preserve facial proportions, eyes, eyebrows, nose, mouth and modest smile, hair texture/hairline, ears, age, frontal pose, black jacket and white shirt. No beautification, face reshaping, age/expression change, uniform, insignia, badges, added people, text, watermark, logos, props or invented activity. Use delicate cross-hatching and stipple, mature architectural-publication portrait etching, subtle print texture and restrained tones. Vertical 4:5 head and upper torso, comfortable hair margin and shoulders at lower edges; reduce surplus headroom. Graphite/charcoal only, no gold ornament. Treat the photograph as identity target, not a mood reference.
