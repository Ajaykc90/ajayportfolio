# Verification record

Date: 8 November 2026.

## Live style selector restoration

Restored Editorial, Midnight and Quiet controls at the user's request. Production
build and JavaScript syntax checks pass. In the production preview, Enter selected
Midnight and Space selected Quiet; both updated body theme and aria-pressed correctly.
Clicking Editorial restored the default and updated the shareable theme URL.

## Accessibility review

The later dedicated review supersedes earlier keyboard/contrast verification limits for the checks it actually covers. See `ACCESSIBILITY.md`: zero axe WCAG A/AA violations across all themes, full Tab traversal, skip/in-page focus, disclosure Enter/Space, portrait Space/Escape, 320px reflow and desktop text-spacing checks. Screen-reader, OS preference and production-document checks remain outstanding as documented there.

## Cartoon portrait revision

Greeting bubble: refreshed and activated the portrait; visually confirmed the outlined “Hi!” bubble above the waving hand without overlapping the face. Saved `design-review/screenshots/hi-speech-bubble.jpg`.

Matched-hand revision: verified both SVG uses reference the shared hand with scale(1.05), inspected the balanced sleeve/body silhouette, and confirmed click activates `hello-wave`. Screenshot: `design-review/screenshots/matched-hands-portrait.jpg`.

Wrist-fit revision: refreshed the browser, activated the wave and visually inspected the wider hand and sleeve opening. The wrist is clipped at the fixed sleeve edge. Saved `design-review/screenshots/wider-hand-fitted-wrist.jpg`.

Sleeve/palm revision: inspected the refreshed hero after activating the wave. The raised cuff now uses a single curved opening rather than a bordered rectangle; both sleeves share the torso outline. DOM width check shows no horizontal overflow. Saved `design-review/screenshots/connected-arms-portrait.jpg`.

Proportion refinement: inspected the refreshed portrait with the smaller redrawn hand and rounded elbow. Click activation reports `hello-wave` at wrist pivot `119px 246px`; Enter activates the replay class. No horizontal overflow at the inspected width. Saved `design-review/screenshots/refined-right-hand-wave.jpg`.

Right-hand correction: visually inspected the redrawn sleeve and shoulder in the browser and triggered the wave. Computed animation remains `hello-wave` with the new wrist pivot `112px 224px`. Screenshot: `design-review/screenshots/right-hand-wave.jpg`.

JavaScript syntax check passed. Inspected the SVG in the desktop hero after replacing the earlier illustration. Clicking the portrait activated `is-waving`; computed animation name was `hello-wave`, and the page had no horizontal overflow. Saved `design-review/screenshots/cartoon-portrait.jpg`. Hover/focus and reduced-motion behaviours are defined in CSS; a separate reduced-motion/device test has not been performed for this revision.

## Introduction revision

Subsequent project-copy revision: checked all three `.detail-body` texts in the refreshed browser, confirmed no “current portfolio” or “confirm before launch” wording remains in the homepage's rendered text, and visually inspected the expanded High Court contribution. All six project summaries were rewritten in first person. Screenshot: `design-review/screenshots/updated-project-copy.jpg`.

Removed the homepage Design notes link and changed the hero to “Hi, I’m Ajay. Software engineer.” Refreshed the existing browser preview and confirmed the new heading, absence of the rationale link, and no horizontal overflow at the inspected desktop width. Saved `design-review/screenshots/updated-introduction.jpg`. Local preview restarted for continued review.

## Completed

- Local HTTP preview returned 200 for the homepage.
- JavaScript syntax check passed with `node --check design-review/script.js`.
- Inspected the rendered Editorial desktop hero and High Court project feature.
- Inspected the mobile layout at 390px width; DOM measurement showed document width 390px, with no horizontal overflow.
- Selected Midnight and Quiet using their controls; confirmed theme changes and `aria-pressed=true`, then returned to Editorial.
- Selected the Work CTA; confirmed the `#work` destination.
- Expanded the first project disclosure; confirmed one open disclosure and visible contribution content.
- Selected the About link; confirmed `#about` destination.
- Opened the design rationale and returned to the homepage successfully.
- Browser error log query returned no errors during the checked local session.
- Validated the installed `ajay-portfolio-design` skill with the skill-creator validator: `Skill is valid!`.
- Installed the skill at `/Users/ajaykc/.codex/skills/ajay-portfolio-design`; the workspace copy remains its maintained source.

Screenshots are in `design-review/screenshots/`: Editorial desktop hero, project detail and mobile hero.

## Verification limits

This is a design-review pass, not a production accessibility certification or exhaustive cross-browser audit. Keyboard tab order, screen-reader behaviour, all theme contrast combinations, live résumé download contents and external destination availability still need launch QA. No performance score has been measured. The responsive browser override was reset after inspection.

The project artwork is explicitly labelled concept art. Current employment and availability require confirmation. No deployment or change to ajaykc.com was performed.
