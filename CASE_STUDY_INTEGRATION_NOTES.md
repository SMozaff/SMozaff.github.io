# Case Study Integration Notes

**Updated:** 2026-08-21  
**Scope:** Personal portfolio integration and discoverability

## What changed

- Connected all five software project records to their dedicated full case-study sites.
- Added clear **View full case study** actions to the project UI, alongside source and IFEM methodology links.
- Restored **Watermelon Vector Graphics Converter** to the deployed production bundle and kept numbering consistent across the project sequence.
- Standardized the ONYX public label as **ONYX Framework**, with **Mission Operations Architecture** as its subtitle/context.
- Added the Watermelon Vector Converter evidence visual to the deployed bundle.
- Reworked the static crawler fallback into an **Engineering case studies** section with full case-study and source links in both English and Persian.
- Added an `ItemList` JSON-LD node for the five engineering case studies in both English and Persian documents.
- Kept the Persian hero copy native and concise, and retained the software-engineer / systems-architect positioning.
- Shortened navigation labels to **Case Studies** in English and **نمونه‌کارها** in Persian while keeping the section itself evidence-led.
- Updated sitemap freshness metadata.

## Current external case-study destinations

- ONYX Framework — https://onyxcase-bxl5ndbk.manus.space/
- Raven Metadata Extractor — https://ravenmeta-b9c2fz9g.manus.space/
- Rezvan Mesh — https://rezvanmesh-ctebutsc.manus.space/
- Watermelon MediaPlayer — https://watermelonmp-b828xakc.manus.space/
- Watermelon Vector Graphics Converter — https://watervector-hz2inn6j.manus.space/

## Important deployment note

The repository contains both the editable React/Vite source and the already-built GitHub Pages assets. Package downloads were unavailable in the repair environment, so the editable source **and** the existing production bundle were updated in parallel and syntax-validated. On a normal development machine, run the repository's standard install/check/build workflow before the next deployment so the production bundle is regenerated from source.

## Future URL migration

The current `manus.space` case-study URLs are suitable for the present integration, but they should eventually be migrated to stable addresses under infrastructure controlled by the project owner. When that happens, update:

1. `site-src/src/lib/portfolio.ts`
2. static fallback links in `index.html`, `fa/index.html`, and their `site-src` counterparts
3. JSON-LD case-study URLs
4. the generated production bundle through a normal rebuild
5. the IFEM Doctrine Applications/case-study references

Do not create duplicate canonical project identities during that migration.

## Navigation, media, and motion refinement

A second refinement pass addressed the usability and presentation issues found after the case-study integration:

- Promoted **IFEM Doctrine** to a first-class destination in the main navigation, hero actions, methodology section, and professional-profile grid.
- Added a direct **Zenodo** publication card beside GitHub, IFEM Doctrine, ORCID, and LinkedIn.
- Made the English/Persian language switcher substantially more noticeable and sticky at the top of the viewport.
- Added an explicit **Home / خانه** navigation target and preserved the brand-as-home behavior.
- Added a floating **Back to top / بالا** control that appears after meaningful scrolling.
- Replaced page-load-only section motion with **IntersectionObserver-based scroll reveals**, so content animates when it actually enters the viewport rather than finishing off-screen.
- Extended the motion language to project records, evidence panels, methodology content, and profile cards while respecting `prefers-reduced-motion`.
- Enlarged and emphasized project evidence media. Raven, Watermelon MediaPlayer, and Watermelon Vector Graphics Converter use actual project/interface imagery; Rezvan Mesh and ONYX retain clearly labeled conceptual architecture diagrams rather than synthetic product screenshots.
- Added a small runtime enhancement layer (`site-enhancements.js`) so the already-built GitHub Pages bundle receives the same navigation and motion improvements without pretending that a full Vite rebuild occurred in this environment.

The editable React source was updated in parallel so a later normal Vite build will preserve the same information architecture.
