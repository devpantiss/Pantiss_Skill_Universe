# Home page performance

ECC skills applied: react-performance, benchmark-optimization-loop, and make-interfaces-feel-better.

## Changes

- Preload the 79 KB WebP hero image (previous JPEG: 3,548,827 bytes).
- Use a 20-second, 1280px, silent H.264 hero loop (about 3.4 MB instead of 50 MB).
- Load decorative video after critical resources and only while visible. Pause in background tabs and outside the viewport. Honor reduced motion, data saver, and slow connections; respond to connection changes.
- Replace character-by-character React updates with a sector change every 4.5 seconds, paused outside the viewport. Reserve label space to stabilize the CTA.
- Compress campus, accreditation, carousel, and map imagery as WebP, retaining originals.
- Remove unused global html2canvas and jsPDF CDN scripts; there are no consumers in src.
- Remove manual vendor grouping that pulled dashboard charts into the home page's initial dependency graph.
- Render the home shell immediately; retain lazy mounting and splitting for lower sections and other routes.
- Pause partner and placement marquees and the school carousel when inactive. Cancel the latest statistics animation frame during cleanup.
- Combine font requests, preconnect font origins, and remove the CSS font import waterfall.

## Local measurements

Production Vite preview; Chrome DevTools performance trace, reload, 1x CPU, no network throttling. These are local lab observations, not field metrics or a production SLA.

| Variant | LCP | CLS | Result |
| --- | --- | --- | --- |
| Baseline | 1,932 ms | 0.00 | Reference |
| Compressed assets, conditional media, natural bundle splitting | 391 ms | 1.03 | Rejected: route loading placeholder moved footer |
| Immediate home shell | 384 ms | 0.01 | Accepted |

Initial image resource observations dropped from approximately 8.8 MB transferred to 1.6 MB encoded image bodies; cache and carousel timing differ, so this is directional rather than a controlled transfer comparison.

## Reproduce

```sh
npm run build -- --outDir /tmp/pantiss-home-verified
npm run preview -- --host 127.0.0.1 --port 4174 --outDir /tmp/pantiss-home-verified
```

Open the preview at the top of the home page and record a reload in Chrome Performance. Compare the same viewport, cache policy, CPU, and network conditions. Check navigation and the enterprise tabs, scroll through all deferred sections, and confirm video pauses after scrolling away. Check reduced motion and data saver as well.

Regenerate images with `python3 scripts/optimize-home-images.py` (requires Pillow). Regenerate the video with:

```sh
ffmpeg -i public/Homepage/HomePage_Hero.mp4 -t 20 -vf 'scale=1280:-2,fps=24' -an -c:v libx264 -preset fast -crf 29 -movflags +faststart public/Homepage/hero-optimized.mp4
```

The build still reports large chunks for unrelated 3D and dashboard routes. Those remain dynamically loaded. Deployment must run the build; checked-in dist output is intentionally not updated.
