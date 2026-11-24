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
- [x] Remove the unused legacy font configuration and unused Canela Trial font asset; avoid shipping an unverified trial font in production.

## Pending implementation

- [ ] Review Services, About, and CTA sections for consistency with the editorial direction.
- [ ] Review mobile menu open / close behavior and focus handling on narrow screens.
- [ ] Review portfolio image asset dimensions, formats, and loading priority; optimize only after checking actual assets.
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

- The first implementation batch is in PR #11.
- The checklist is a living record, not a claim that pending verification has passed.
- Do not merge automatically; inspect the preview and confirm conflicts/checks first.
