# Boot progress timing update

Only the loading progress-bar cadence was changed. The boot log cadence, initial delay, post-progress pause, and overlay fade were left unchanged.

- Progress update interval: `90 ms` → `35 ms`
- Random progress increment remains: `8–28%` per update
- Expected progress-fill time: about `0.21 s` (previously about `0.55 s`)
- Practical fill range is typically about `0.14–0.35 s`; even an unusually slow run remains well below one second.
- Boot-line timing remains `45–100 ms` per line with the existing `180 ms` initial delay.
- Existing `250 ms` pause after 100% and `550 ms` fade-out are unchanged.

Current total boot overlay timing is stochastic because the line delays and progress increments are randomized. Before this change, the expected total from page load until the overlay is fully gone was about `2.9 s`. After this change it is about `2.57 s`. The boot-line phase itself remains about `1.56 s` on average.
