# Project state

Updated: 8 November 2026 (Australia/Sydney).

## Production handoff — supersedes local-only status below

The user explicitly requested publishing all code to GitHub and the existing Netlify site.
Repository: https://github.com/Ajaykc90/ajayportfolio, branch `main`.
Netlify project: `modest-lewin-61e8a8`, existing domain https://www.ajaykc.com.
Netlify confirms main auto-publishing is enabled. Previous production commit: `da29b97`.
The root HTML/CSS/JS now contains the reviewed Editorial design, cartoon and accessibility fixes.
The review toolbar/noindex are removed for production. Original résumé is preserved.
Build with `node scripts/build.mjs`; only allowlisted files in `dist/` are published.
The design study, audit harness, skill and documentation remain in GitHub, not the web output.
Local checkout is `production/` within the original design workspace; in a fresh clone use the repository root.
Historical local-only statements below describe earlier stages, not the current authorisation.

## User intent and confirmed decisions

- Rework the portfolio with creative design assistance.
- Existing website: https://www.ajaykc.com (user supplied ajaykc.com).
- Research strong online portfolios and show a design before proceeding further.
- Create an agent skill and documentation for ongoing reference.
- Primary audience: **recruiters and engineering leads hiring senior developers** (explicit user answer).
- 8 November: user requested removal of the homepage Design notes link and a hero that describes Ajay directly as a software engineer. Implemented “Hi, I’m Ajay. Software engineer.” with a concise introduction covering Canberra, Drupal, GovCMS, React and delivery. Supporting research documents remain available in the workspace.

## Current deliverables

- Accessibility review completed for the local homepage against WCAG 2.2 AA checks. See `docs/ACCESSIBILITY.md` for fixes, automated results, keyboard/reflow checks and limitations. All three themes report zero axe violations; this is not a full conformance claim. Development-only audit runner: `design-review/audit/` (exclude from deployment).

- Added a small “Hi!” speech bubble above the waving hand at the user's request. It appears on hover, keyboard focus and click/tap replay, alongside the existing wave. Uses theme colours and respects reduced-motion transitions.

- Matching proportions: both hands now reference one shared SVG hand definition with identical uniform scale (1.05); only pose/rotation differs. Balanced the resting shoulder/sleeve against the raised side. This supersedes the earlier independent hand drawings and 28% width adjustment.

- Latest wrist correction: widened the waving hand 28% and widened the sleeve opening to match. Lowered the hand into the sleeve and added a fixed SVG clipping boundary at the opening so the animated wrist cannot protrude past it. Reduced wave to ±5°. Both SVG copies and CSS updated.

- Latest portrait feedback: resting left arm too thin, raised right palm too flat, boxed cuff looked attached. Rebuilt both sleeves and torso as one continuous silhouette, broadened the resting sleeve/hand, added restrained palm shading and removed the double-line raised cuff. Inline and standalone SVG remain synchronised.

- Portrait refinement after user rejected the proportions: redrew the palm/fingers at a smaller scale, shortened and rounded the raised sleeve, and moved the wrist pivot to 119/246 with ±7° motion. Both SVG copies and CSS are updated; preview refreshed. This supersedes the earlier ±10° hand and sleeve geometry.

- Portrait correction: user requested the anatomical right hand (viewer’s left) and a smoother arm shape. Redrew the raised sleeve as a continuous torso outline, moved the watch to the resting left wrist, and limited animation to the hand at the wrist to prevent shoulder distortion. Updated both inline and standalone SVG.

- 8 November portrait revision: user supplied a photo and requested a classic cartoon SVG with a hover hand wave. Replaced the hero's platform illustration with a custom inline SVG portrait; standalone source is `design-review/assets/ajay-cartoon.svg`. Hover/focus runs three waves, click/tap replays, and reduced-motion disables animation. Portrait reflects glasses, swept dark hair, white sweatshirt and watch; it is a stylised likeness.

- 8 November copy revision: all six project descriptions now use direct first-person contribution language. Replaced research-style source attribution in all three expanded summaries; changed disclosure labels to “My contribution”. Removed the employment-date editorial note from the visible page, retaining the confirmation requirement in CONTENT.md. User expects polished portfolio copy, not commentary about its source.

- `design-review/index.html`: responsive homepage design study with Editorial, Midnight and Quiet treatments. These are variations of one layout, not three independent information architectures.
- `design-review/rationale.html`: visual rationale, reference links, comparison and launch gaps.
- `skills/ajay-portfolio-design/`: maintained source of the reusable design skill.
- Skill installed and validated at `/Users/ajaykc/.codex/skills/ajay-portfolio-design`. Future edits should update the maintained workspace source and synchronise the installed copy.
- `AGENTS.md`: project entrypoint for future agents.
- `docs/CONTENT.md`, `RESEARCH.md`, `DESIGN-SYSTEM.md`, `IMPLEMENTATION.md`: source-of-truth documentation.
- `docs/QA.md`: completed checks and remaining verification limits. Desktop and mobile screenshots are saved in `design-review/screenshots/`.

## Proposed, not yet approved

- Recommend Editorial: warm white, ink, cobalt, architectural illustrations, large headings with restrained serif emphasis.
- Lead with three projects: High Court of Australia, NatHERS, Play by the Rules.
- Use concise contribution summaries and expandable detail in this study. Production should gain substantive individual case studies when evidence is available.
- Primary CTA: selected work. Secondary actions: résumé, email, LinkedIn.
- The early “creative lab” direction was proposed before the existing site was supplied. It is superseded by the engineering-focused proposal, not a user preference.

## External state

The previous interrupted turn created an owner-private, unpublished Sites shell:

- Project ID: `appgprj_6af032846d888191b8bc496944aaa5c2`
- Slug: `ajay-creative-portfolio-2026`
- Expected origin: https://ajay-creative-portfolio-2026.chalkycookie1.chatgpt.site
- No deployment was performed. No change was made to ajaykc.com.
- No source credentials are stored in this project. Do not create a duplicate Site if later using this shell. Re-read its current state and obtain a fresh write credential through Sites tools.

The current user request is a research/design review and documentation task. The study stays local at this stage.

## Next useful work

1. Get feedback on the visible study and preferred treatment.
2. Confirm current employment, availability and project scope; collect approved screenshots and case-study details.
3. Locate the actual production repository/hosting configuration before implementation on ajaykc.com.
4. Implement the selected direction in the appropriate production stack and complete the launch checklist.

Record future decisions here with dates. Do not convert suggestions into facts simply because they appear in a mockup.
