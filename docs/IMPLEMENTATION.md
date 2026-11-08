# Implementation and verification

## Current artifact

A buildless, local design review. This is not the source repository of ajaykc.com. There are no application dependencies or package scripts.

Files:

- `design-review/index.html`: portfolio study.
- `design-review/styles.css`: responsive layout, graphics and theme tokens.
- `design-review/script.js`: theme-selection interaction.
- `design-review/rationale.html`: research and design rationale.

Start from the workspace:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory design-review
```

Open http://127.0.0.1:4173. Stop the server with Ctrl-C. The HTML can also be opened directly; a server is preferable for browser testing. Google Fonts is the only external styling dependency, with fallback fonts provided. Contact links and the résumé intentionally point to existing public destinations.

## Proportional QA

- Inspect desktop and narrow mobile layout; verify no horizontal overflow.
- Select all three themes; verify pressed state and URL update.
- Open project disclosures and verify contribution text is visible.
- Test work/about links and keyboard focus/skip navigation.
- Confirm no invented destinations or empty primary actions.
- Check reduced-motion rules, readable text, landmark/heading order and descriptive links.
- Check browser errors relevant to the local study.

See `docs/QA.md` for actual checks and limitations; do not equate the checklist with completed testing.

Accessibility findings and the repeatable local axe runner are documented in `docs/ACCESSIBILITY.md`. Exclude `design-review/audit/` from any production package.

## Production work after design selection

Find the current production source, framework and hosting setup before choosing an implementation stack. Preserve existing SEO and URL behaviour. Confirm project detail content and visual permissions. Resolve current role/availability and résumé freshness. Use a PDF résumé if supplied; do not silently convert an unreviewed document.

For launch: add metadata, social sharing image, icons and appropriate indexing/canonical settings; verify keyboard and screen-reader behaviour; check contrast including all interactive states; test current mobile browsers; measure performance; verify project links and downloads. Performance/accessibility scores must come from actual checks.

No deploy or domain change is part of the current design-review artifact. The unpublished Sites shell is recorded in `PROJECT-STATE.md` solely to avoid orphaned context or duplicate creation.
