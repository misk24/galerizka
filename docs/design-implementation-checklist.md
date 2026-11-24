# Galeriz.ka Design Implementation Checklist

**Direction:** Modern Tailoring Editorial  
**Tracking rule:** Update this file whenever an implementation batch is completed. Keep verification separate from implementation; do not mark a visual or automated check complete until it has actually been run.

## Completed

- [x] Establish editorial direction while retaining the existing dusty rose, blush, and mulberry brand palette.
- [x] Redesign the Hero with a mobile-first editorial composition, clearer headline, and WhatsApp / portfolio actions.
- [x] Redesign the Portfolio as an image-led asymmetric gallery; preserve existing work data, categories, image assets, and detail modal.
- [x] Improve contact form field borders, placeholder legibility, and visible keyboard focus states.
- [x] Add explicit high-contrast keyboard focus indicators to desktop navigation, navbar CTA, logo link, and mobile menu toggle.
- [x] Normalize typography wiring: Cormorant Garamond is used for headings and Inter for body text through the Next.js-generated font variables.
- [x] Remove the unused legacy local-font configuration and orphaned Canela Trial / Satoshi font assets.

## Pending implementation

- [x] Redesign Services with a numbered editorial service list while preserving the existing service content.
- [x] Rework About into an image-led editorial layout while preserving the existing brand image and factual copy.
- [x] Restyle the final CTA with a high-contrast mulberry treatment and retain the existing WhatsApp destination.
- [x] Refine mobile menu disclosure behavior, icon transitions, outside-click closing, Escape-to-close focus restoration, scroll locking, and keyboard focus styles for menu links.
- [x] Audit all 20 Portfolio assets: JPEG, approximately 769 × 1080 px, 4.05 MiB combined; tune responsive `sizes` and lazy loading, and remove eager priority loading from below-the-fold cards and modal images.
- [ ] Review semantic heading order and remove undefined or unused color tokens / utility classes.
- [ ] Review contact form validation, loading, success, and error states end-to-end.

## Verification still required

- [ ] Run lint, tests, and production build on the current branch.
- [ ] Inspect the Vercel preview at mobile, tablet, and desktop breakpoints.
- [ ] Confirm the computed heading and body fonts in a browser after deployment.
- [ ] Test keyboard-only navigation, visible focus, modal focus trap, Escape close, and focus restoration.
- [ ] Check color contrast for body text, placeholders, controls, and focus indicators.
- [ ] Confirm image loading and layout stability on a throttled mobile connection.
- [ ] Resolve all CI and deployment checks before considering merge.

## Notes

- Portfolio asset audit: all 20 source images are JPEGs at approximately 769 × 1080 px (one is 769 × 1079 px), totaling 4.05 MiB. `gamis.jpeg` is the largest at about 640 KB. Source assets were not recompressed or resized; the gallery now uses more accurate responsive `sizes` and lazy loading, while Next.js Image optimization can negotiate modern formats at runtime. Higher-resolution originals may improve sharpness on high-density desktop displays.

- The first implementation batch is in PR #11.
- The checklist is a living record, not a claim that pending verification has passed.
- Do not merge automatically; inspect the preview and confirm conflicts/checks first.
