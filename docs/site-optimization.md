# Site performance and UI pass

## Scope and direction

Applied ECC's React Performance, Frontend Design Direction, Accessibility, and Benchmark Optimization Loop methods across all 19 public routes. Preserve the Pantiss industrial identity, use Inter for readable body copy, establish consistent dark surfaces and green actions, and replace continuous decorative work with deliberate interactions. No runtime dependencies were added.

The pass builds on the earlier home page optimization. Source changes and original assets from that work are retained.

## Measured resource changes

| Resource | Before | After |
| --- | ---: | ---: |
| 96 referenced local images, combined | 222,505,862 bytes | 13,293,954 bytes |
| Programme background video | About 58 MB | About 1.1 MB |
| Workforce background video | About 59 MB | About 2.0 MB |
| About: initially loaded image bodies | 52,362,680 bytes | 425,417 bytes |
| Programme catalogue: initial image bodies | 9,881,051 bytes | 200,770 bytes |
| ITI: initial image bodies | 4,015,746 bytes | 775,002 bytes |

Initial page samples were taken from production Vite previews at 1440×900, 600 ms after navigation completed. Values sum Resource Timing `encodedBodySize` for image URLs. Caching, external availability, and deferred sections affect request timing; these are local observations, not a production guarantee.

Final desktop Chrome traces at 1× CPU with no network throttling measured About LCP at 428 ms and catalogue LCP at 314 ms; both had CLS 0.00 during the five-second initial-load trace. No comparable baseline LCP trace was captured for these routes, and scroll-time field CLS/INP have not been measured.

## Performance implementation

- WebP copies and a manifest for 96 referenced images; originals remain intact.
- Two silent 16-second H.264 background loops. Full user-selected content videos retain their original duration.
- Shared background video controls: defer decoration until page load, respect data saver/slow networks/reduced motion, and pause when offscreen or in background tabs.
- Viewport-gated imports for lower sections, map-heavy course selectors, dashboard panels, and galleries.
- Click-to-play programme videos: no YouTube player until requested; full controls remain available.
- Replace the pinned GSAP programme stack and eager image preloader with an accessible selector rendering one programme panel.
- Replace the decorative worker canvas with relevant static imagery. Fleet 3D code/model load only after the viewer button is activated.
- Pause Slick autoplay offscreen and during reduced motion. Consolidate count-up animation with capped React updates and proper frame cancellation.
- Cache shared GeoJSON requests and parsed data; handle failures, including a partial-data notice for programme maps.
- Use the existing dashboard basemap configuration in programme maps instead of requests that failed with authorization errors.
- Stop chart animation restarts on dashboard filter changes.
- Remove duplicate Tailwind CSS inclusion, unused Orbitron download, and remote favicon request.

## UI and interaction implementation

- Stable shared header with static utility links, clear navigation, programme and portal disclosures, and a native mobile dialog.
- Useful footer links replacing placeholder anchors; maintain campus/organisation contact paths.
- Semantic design tokens, shared action and focus styles, reserved header space, and readable typography.
- Responsive programme selector with keyboard navigation and consistent detail hierarchy.
- Specific programme headings and working overview/enquiry actions.
- Simplified Contact page, removal of randomized animated blur backgrounds, clearer navigation, and safe email wrapping.
- Built the previously empty Placements page using the existing shared outcomes content.
- Keyboard-enabled dashboard tabs, horizontal tab scrolling, wrapping mobile filters, labelled overview selects, and tabular numerals.
- Native resource-video dialog with focus containment, Escape, and focus restoration.
- Route loading structure, a React error boundary, unknown-route recovery, and an empty-job-filter recovery action.
- Local image-unavailable fallback and matching local partner logos where identifiable. Fleet gallery placeholders replaced with a useful contact state.

## Validation and evidence

- `npm run build -- --outDir /tmp/pantiss-site-final` — TypeScript and Vite production build.
- `npm run lint` — repository lint completed successfully.
- `git diff --check` — clean.
- All 19 public routes were opened and scrolled at 390×844. After fixes, no page crashes, document overflow, or broken image elements were observed.
- Desktop checks on About, catalogue, ITI, and dashboard; rendered programme selector review at 768×1024 and 1440×900.
- Programme and dashboard keyboard selection, mobile menu focus, resource dialog focus restoration, empty jobs recovery, failed map loading, click-to-play embed creation, and unknown-route recovery exercised.
- Evidence checker: `node /Users/apple/.codex/plugins/cache/ecc/ecc/2.2.3/skills/frontend-design-direction/scripts/check-evidence.js docs/site-design-evidence.json`.

See `site-route-checks.json`, `site-design-evidence.json`, and the desktop/mobile/tablet PNGs in this directory.

## Reproduce

```sh
npm run build -- --outDir /tmp/pantiss-site-final
npm run preview -- --host 127.0.0.1 --port 4175 --outDir /tmp/pantiss-site-final
npm run lint
```

Image regeneration: `python3 scripts/optimize-site-images.py` (requires Pillow). Per-image sizes and paths are recorded in `site-image-manifest.json`. To reproduce background encodes, run FFmpeg with `-t 16 -vf 'scale=1280:-2,fps=24' -an -c:v libx264 -threads 2 -preset fast -crf 29 -movflags +faststart`, using `public/programs/6618336-uhd_3840_2160_24fps.mp4` → `public/optimized/video/programmes.mp4` and `public/vid.mp4` → `public/optimized/video/workforce.mp4`.

## Limits

- Some existing Cloudinary/Unsplash URLs remain unavailable. Their slots now have an explicit fallback; this pass does not recover missing original photography.
- Existing dashboard and placement sample content has not been verified against a backend. No claims or statistics were independently validated.
- Mobile checks used a 390×844 browser viewport; real-device touch, full screen-reader testing, production CDN behavior, and field INP remain untested.
- Shared tokens include a light variant, but the legacy marketing sections retain their existing dark palette; a complete light-theme rollout was not performed.
- The optional 3D fleet viewer remains a large lazy chunk/model. Opening it intentionally incurs that cost; a complete interactive 3D session was not part of the smoke test.
- Production build output is intentionally kept outside tracked dist. Deployment needs to rebuild from source.
