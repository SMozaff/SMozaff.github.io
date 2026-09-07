# Language Switch + Persian Font Fix

## Changes

- Persian → English switches now target `../index.html` directly instead of `/`.
- English → Persian switches now target `fa/index.html` directly instead of `/fa/`.
- This avoids passing through a root/router/fallback path and always loads the direct static template file.
- Embedded the repository-local **Vazirmatn** variable font in the Persian page from `fonts/vazirmatn/Vazirmatn-wght-v33.003.woff2`.
- Added font preload and `@font-face` with `font-display: swap`.
- Persian body/display typography uses Vazirmatn as the primary font.
- Persian text inside technical/monospace UI falls back from JetBrains Mono to Vazirmatn for Persian glyph coverage.

## Preserved

- Canonical URLs and hreflang metadata remain unchanged.
- No content, schema, BOUND/IFEM positioning, or visual layout was changed.
