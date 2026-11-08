# Proposed design system

Status: proposed for review, not user-approved. Primary audience is confirmed: recruiters and engineering leads hiring senior developers.

## Art direction

Editorial is the recommendation: structural, warm, precise. Architectural layers suggest platform engineering without literal stock-code imagery. Combine generous space with dense, useful project evidence. The human note comes from serif emphasis, calm copy and a direct invitation to talk.

Midnight and Quiet are review alternatives using the same information architecture. They are available through the top review controls and URL `?theme=night` / `?theme=quiet`.

## Tokens

| Token | Editorial | Midnight | Quiet |
| --- | --- | --- | --- |
| Paper | #F5F5F0 | #141B22 | #FFFFFF |
| Ink | #202524 | #E5E9DF | #292B2E |
| Muted text | #626863 | #A8B2B8 | #66696C |
| Divider | #D5D8D0 | #38434A | #E1E3E5 |
| Accent | #294ED0 | #B9D48B | #383C40 |
| Panel | #E9ECE4 | #202D31 | #F4F4F3 |

Typography: DM Sans for UI/body, Georgia italic for selective display emphasis, IBM Plex Mono for compact metadata. Web fonts currently load from Google Fonts; system fallbacks remain. Self-host licensed font files in a production build if appropriate.

Spacing: 64px desktop outer gutters, 32px medium, 22px mobile; section gaps roughly 80–105px desktop and 55–65px mobile. Container maximum 1600px. A small set of 1px dividers organises content. Avoid boxing every paragraph.

## Page structure

Header → role/positioning → three selected projects → additional delivery experience → approach/capabilities → career/credentials → contact → footer.

High Court is the lead project, followed by NatHERS and Play by the Rules. Visual studies are supplementary; actual production screenshots should replace them when approved. A prominent illustration must never masquerade as delivered work.

## Components and behaviour

- Header: wordmark, Work/About/Experience, résumé. On narrow screens Experience remains accessible in page flow while the header reduces links.
- Primary action: selected work; secondary action: contact. Résumé remains available without scrolling.
- Project detail: native `details`/`summary`, keyboard-operable, full text visible when expanded.
- Theme controls: buttons expose `aria-pressed`; selection is reflected in the URL for shareable local reviews.
- Motion: small hover translation only; reduced-motion disables transitions and smooth scrolling.
- Hero artwork: custom classic cartoon SVG portrait based on Ajay's supplied photo, replacing the architectural hero illustration at his request. The labelled button waves on hover/focus and click/tap; reduced-motion disables animation. Maintain the standalone SVG asset and inline SVG together when editing its paths. No essential information depends on motion or colour.
- Focus: visible 3px outline; skip link and semantic headings/landmarks.
- No scroll hijacking, autoplay audio, mandatory loading animation, fake terminal, skill percentage bars or invented endorsements.

## Review-only elements

The Design notes link was removed from the homepage at the user's request on 8 November 2026. Retain the underlying rationale as project documentation. Remove the theme/design-study toolbar, `noindex` metadata and employment-date review note when transitioning to an approved production site. Replace the latter with confirmed dates. Keep concept-art labels until visuals are replaced or their illustrative purpose is clear.

## Content voice

Project descriptions and expanded contributions speak directly in Ajay’s voice. Keep source attribution and editorial checks in documentation, not visitor-facing copy. For example, use “I built custom Drupal themes…” rather than “My current portfolio describes…”.

First person, direct, specific. Explain work with verbs such as built, contributed, led and supported that match the source. Preserve qualifications. Prefer a concrete engineering decision over broad claims like “passionate problem solver.” Do not promote Ajay to a job title not supported by his record.
