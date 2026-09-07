# Persian font update

Applied the user-provided Persian fonts directly into the rebuilt site.

## Changes
- Embedded `fonts/persian/titr.ttf` and used it for Persian titles/headings.
- Embedded `fonts/persian/koodak.ttf` and used it for Persian body text.
- Preserved local `Vazirmatn` only as a fallback.
- Preloaded both Titr and Koodak in `fa/index.html`.
- Updated the direct static Persian page and the mirrored `site-src/fa/index.html` for consistency.

## CSS mapping
- Headings (`h1`–`h6`): `Titr`
- Body/UI text: `Koodak`
- Fallbacks: `Vazirmatn`, then system Persian-capable fonts.
- Technical/monospace UI keeps `JetBrains Mono` first, with Persian fallbacks when glyphs are needed.

## Files touched
- `fa/index.html`
- `site-src/fa/index.html`
- `fonts/persian/titr.ttf`
- `fonts/persian/koodak.ttf`
- `site-src/public/fonts/persian/titr.ttf`
- `site-src/public/fonts/persian/koodak.ttf`
