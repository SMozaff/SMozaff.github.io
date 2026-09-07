# Hero / Boot / Interactive Lab Refinement

## Changes made

### Boot sequence
The startup/boot sequence was kept intact but accelerated slightly:

- initial boot delay: 300 ms → 180 ms
- per-line cadence: 60–140 ms → 45–100 ms
- progress updates: 120 ms → 90 ms
- progress increments increased moderately
- completion pause: 400 ms → 250 ms
- fade duration: 800 ms → 550 ms

The intent is to keep the boot experience readable while reducing idle waiting.

### Hero right column
Removed the two stacked simulated monitoring windows:

- `htop — boundary monitor` CPU/RAM/process window
- `lsmod — loaded modules` window

The existing animated `heroCore` JavaScript/canvas visualization was moved from the lower hero row into that right-hand hero column. This is now the primary visual opposite the identity content.

The lower hero row now contains only the interactive terminal, centered at a wider readable width.

The unused HTOP and module-list JavaScript initialization blocks were removed to prevent null-element errors after the windows were deleted.

### Interactive section
Reframed the old `Touch the Concepts` section as a broader engineering section.

English:

- kicker: `SYSTEMS IN PRACTICE`
- title: `Interactive Engineering Lab`
- framing connects the four instruments to software, security, communications and mathematical reasoning
- tabs: `Signals`, `Logic`, `XOR Transform`, `Fractal Systems`

Persian:

- kicker: `سامانه‌ها در عمل`
- title: `آزمایشگاه تعاملی مهندسی`
- natural Persian explanatory copy
- Persian tab labels for the four instruments

### Preserved

- BOUND-first identity
- interactive terminal
- hero background canvas and effects
- hero-core animation itself
- all four interactive lab tools
- Persian embedded Vazirmatn font
- direct EN/FA static-file language switching
- SEO/schema/content sections

## Validation

- English H1 count: 1
- Persian H1 count: 1
- duplicate IDs: none
- `heroCore` IDs: exactly 1 on each route
- removed monitor DOM IDs: none remaining
- executable inline JavaScript passes `node --check`
- EN → FA links still target `fa/index.html`
- FA → EN links still target `../index.html`

A bounded headless Chromium screenshot remains unreliable because the page intentionally contains perpetual canvas/requestAnimationFrame loops. Static DOM and JavaScript validation were used instead.
