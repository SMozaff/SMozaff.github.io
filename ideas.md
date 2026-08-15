# Design Directions for Soheil Mozaffari

## Three possible approaches

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| Technical Folio | A quiet, publication-led personal identity with clear rules, measured typography, and diagrammatic details. It feels closer to a research monograph than a product landing page. | 0.07 |
| Material Index | A warm paper-and-ink composition that treats publications as carefully indexed physical artifacts. It balances scholarly clarity with a human, authored presence. | 0.04 |
| Signal Ledger | A precise, high-contrast visual system that uses typographic hierarchy and sparse data marks to make work feel inspectable. It is confident without adopting the visual language of the IFEM Doctrine site. | 0.08 |

## Chosen approach: Technical Folio

**Design Movement.** Swiss editorial design, technical documentation, and contemporary academic publishing inform a light, textual, and restrained interface.

**Core Principles.** The site prioritizes legibility over decoration, uses asymmetry to express an authored point of view, makes verification links visible rather than ornamental, and reserves visual emphasis for work that visitors can independently inspect.

**Color Philosophy.** An eggshell canvas reduces digital glare and gives the site the quiet character of a well-made publication. Near-black typography establishes authority, steel-blue communicates technical precision, and a single vermilion mark signals authorship and attention without borrowing IFEM's stronger visual identity.

**Layout Paradigm.** The page follows a vertical editorial folio: a narrow running rail carries section markers and navigation while content occupies an offset reading column. Each major section changes rhythm through rules, captions, and deliberate whitespace rather than uniform cards.

**Signature Elements.** A three-bar boundary mark represents explicit interfaces; fine measurement rules and coordinate labels frame sections; and publication entries use a bibliographic red margin mark.

**Interaction Philosophy.** Interactions are quiet confirmations of structure: navigation reveals its location, copy actions report completion, and mobile navigation opens without forcing attention away from the reading flow.

**Animation.** Motion is limited to a small opening reveal, hover shifts of two to four pixels, and gentle underline expansion. All nonessential motion is removed when reduced motion is requested.

**Typography System.** `Newsreader` is used for distinctive editorial headlines and large quotations. `IBM Plex Sans` handles body copy, labels, navigation, and metadata. The hierarchy uses compact uppercase metadata, generous serif display headings, and short readable line lengths.

**Brand Essence.** A professional home for an author and software architect whose work makes the boundaries of technical execution explicit. **Measured, rigorous, independent.**

**Brand Voice.** Headlines are direct, analytic, and uncluttered; calls to action invite inspection rather than make promises; microcopy makes source and status clear. Example headline: “Make the boundary legible.” Example CTA: “Inspect the publication record.”

**Wordmark & Logo.** The wordmark pairs a strong serif name with a three-bar red boundary mark. The logo itself is an abstract three-bar symbol, not typography, so it is usable as a favicon and an identity mark.

**Signature Brand Color.** **Boundary Vermilion — #C94A33.**

## Style Decisions

### Hero systems animation

The hero will add a compact, line-drawn system panel rather than a cinematic illustration. It will show three synchronized layers: a hardware board and edge nodes, a software service flow, and an architectural-pattern stack. Slow vermilion signal traces, restrained pulse states, and a moving verification cursor will suggest an active engineering system; the hero copy remains the primary reading layer. The complete panel becomes static when reduced motion is preferred.
