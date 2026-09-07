# Boot timing adjustment — 1.9 second ceiling target

The boot sequence content is unchanged. Timing was tightened so the overlay has a bounded worst-case duration below 1.9 seconds.

## Timing
- Initial delay: 80 ms
- Boot-log line delay: randomized 45–70 ms
- 19 boot lines: maximum 1,330 ms after the initial delay
- Progress bar: 25 ms steps, +18–32% per step; worst case 6 steps = 150 ms
- Hold at 100%: 100 ms
- Fade-out: 200 ms

### Maximum total overlay duration
80 + (19 × 70) + 150 + 100 + 200 = **1,860 ms**

So the boot overlay is capped at approximately **1.86 seconds**, with a typical run closer to ~1.55–1.65 seconds because the line delays and progress increments are randomized.

## Other changes
- Progress-bar CSS transition reduced from 200 ms to 75 ms so the visual bar does not lag behind the faster progress logic.
- English and Persian routes use the same timing.
- No boot lines, copy, typography, palette, content, metadata, or interactions were changed.
