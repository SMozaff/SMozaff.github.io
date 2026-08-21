# Soheil Mozaffari — Personal Website

Canonical bilingual portfolio and professional identity site for **Soheil Mozaffari**, Software Engineer · Systems Architect · creator of IFEM.

- English: https://smozaff.github.io/
- Persian: https://smozaff.github.io/fa/
- GitHub: https://github.com/SMozaff
- ORCID: https://orcid.org/0009-0001-2428-1295
- IFEM Doctrine: https://ifem-doctrine.github.io/

## Engineering case studies

The portfolio links to five evidence-led project case studies:

- [Raven Metadata Extractor](https://ravenmeta-b9c2fz9g.manus.space/)
- [Rezvan Mesh](https://rezvanmesh-ctebutsc.manus.space/)
- [Watermelon Vector Graphics Converter](https://watervector-hz2inn6j.manus.space/)
- [Watermelon MediaPlayer](https://watermelonmp-b828xakc.manus.space/)
- [ONYX Framework](https://onyxcase-bxl5ndbk.manus.space/)

The current `manus.space` addresses are external case-study destinations. See `CASE_STUDY_INTEGRATION_NOTES.md` for the future stable-URL migration plan.

## Repository structure

- `site-src/` — editable React/Vite source and source HTML documents.
- `assets/`, root `index.html`, and `fa/` — deployed GitHub Pages output.
- `manus-storage/` — portfolio evidence imagery.
- `sitemap.xml` / `robots.txt` — crawl and discovery metadata.

## Development

```bash
pnpm install
pnpm check
pnpm build
```

The root package scripts use Vite and TypeScript. A normal production update should regenerate deployed assets from the editable source before publishing.

## Search and identity architecture

The English and Persian pages provide:

- self-canonical URLs;
- reciprocal `hreflang` relationships;
- crawler-readable semantic fallback content;
- `Person`, `WebSite`, and engineering-case-study `ItemList` JSON-LD;
- Open Graph and Twitter/X metadata;
- links to GitHub, ORCID, IFEM Doctrine, and the full project case studies.
