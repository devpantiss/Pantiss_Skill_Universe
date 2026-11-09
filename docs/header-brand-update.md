# Header and brand update

- Restored the previous three-row header layout: red announcement strip, logo and navigation row, and portal links row.
- Kept the optimized header logo as the official organisation mark. Header and footer share `BrandLogo`, backed by `src/constants/brand.ts`; the favicon is derived from the same `PSU_H.png` source. Partner and school identities remain distinct.
- Changed shared primary, accent, focus, and marketing UI accents to red. Dashboard data colours retain their semantic meaning.
- Reserve the measured expanded header height so content starts below it; keep portal links inside a horizontally scrollable mobile row.
- Preserve reduced-motion support and existing navigation interactions. Replaced dated announcements with evergreen text.

Verified the header at 1440×900 and 390×844: no horizontal document overflow, matching header/footer logo URLs, content aligned below the header, mobile menu opens and closes with Escape. TypeScript, targeted ESLint, and production build checked.

This supersedes the earlier compact-header/green-accent direction recorded in site-optimization.md and its screenshots.

## Responsive portal links

The earlier horizontally scrolling mobile portal row is superseded by a labelled Portals disclosure below 1024px. It opens all five options in a two-column grid with minimum 48px touch targets. Desktop keeps the inline row. The disclosure exposes its expanded state, closes with Escape, restores focus to its trigger, and closes when the main mobile navigation opens. Verified at 320, 390, 768, 1024, and 1440px with no horizontal document overflow.

## Dropdown refinement

Desktop dropdowns now use bounded floating panels positioned below the live header height, with scroll limits for smaller screens. Programme choices have grouped icon tiles, readable descriptions, restrained red hover states, and a prominent View All action to /our-programmes. The same programme content and View All link appear in the mobile menu. Study at PSU has separated school, location, and flagship groups with quieter availability badges. Selecting a destination closes the dropdown, and Escape restores focus to the desktop trigger. Mobile menu scrolling stays inside the available viewport.
