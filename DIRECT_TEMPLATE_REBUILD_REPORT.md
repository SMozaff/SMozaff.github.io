# Direct Template Rebuild Report

## Why this rebuild exists

The previous implementation recreated selected pieces of the supplied `HTML File.html` prototype inside the older React portfolio layout. That preserved content and deployment safety, but it did not preserve the prototype's composition closely enough.

This rebuild reverses that approach:

- `HTML File.html` is the **visual and interaction shell**.
- The current verified portfolio/BOUND/IFEM content is the **content source of truth**.
- Root GitHub Pages files are deployable directly without running the old React/Vite bundle.

## Deployed pages rebuilt

- `/index.html`
- `/fa/index.html`

Both pages retain:

- one H1;
- canonical and reciprocal hreflang metadata;
- Person/WebSite/BOUND/ItemList JSON-LD;
- BOUND-first identity;
- IFEM lineage;
- six engineering records;
- verified external identity/publication links;
- favicon and local evidence assets.

## Prototype systems preserved directly

- full-screen boot sequence;
- Linux-style system/status bar;
- terminal-window composition;
- three-column desktop hero;
- htop/process monitor;
- module monitor;
- command palette;
- interactive terminal;
- animated 3D systems core;
- technical grid, scanlines, orbs and code snippets;
- technical marquee;
- five technical focus cards;
- four-part interactive lab: Signal, Logic Gates, XOR Cipher, Fractal;
- alternating case-study cards;
- methodology panel;
- records/footer system;
- responsive mobile navigation.

## Content corrections

- Hero: Soheil Mozaffari — Software Engineer & Systems Architect.
- Authority: Author of BOUND Method v3.0 — Boundary-Oriented Unified Development.
- Primary methodology: BOUND.
- IFEM: earlier methodology / conceptual lineage.
- Primary BOUND DOI: `10.5281/zenodo.22257583`.
- IFEM DOI: `10.5281/zenodo.20621561`.
- Six engineering records preserved.
- No replacement URL was invented for Rezvan Mesh where the current repository destination was unresolved.
- LinkedIn article titles remain marked forthcoming when no verified article URL exists.

## Asset handling

All Qwen-hosted image references from the prototype were removed from the deployed pages. Existing repository-local project/evidence assets are used instead.

The prototype's Tailwind browser CDN and Fontsource stylesheet links remain because they are integral to the original standalone prototype's utility-class visual system. A later production-hardening pass may compile/localize those dependencies without changing layout.

## Architecture note

`site-src/` and the previous generated bundles remain in the repository as historical/reference implementation material, but root `/index.html` and `/fa/index.html` are now the deployed visual authority.

Do not run the old Vite workflow and copy its output over the root pages unless the template-based design is first ported back into that source tree.

## Static validation completed

- one H1 on English and Persian pages;
- no duplicate IDs;
- no broken internal anchors;
- no missing local image/script/link assets;
- no remaining Qwen image hotlinks;
- inline JavaScript syntax passes `node --check`;
- old React bundle references removed from deployed pages.
