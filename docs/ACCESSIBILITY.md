# Accessibility review — 8 November 2026

Scope: local portfolio homepage, all three themes, expanded project disclosures, and keyboard interactions. Target: WCAG 2.2 Level AA. Reference: https://www.w3.org/WAI/WCAG22/quickref/.

This review is not a full conformance certification. It does not cover ajaykc.com, the linked Word résumé, third-party pages, or the separate design-rationale document.

## Automated results

Ran axe-core 4.10.3 with wcag2a, wcag2aa, wcag21aa and wcag22aa tags, with all disclosures expanded and font/theme transitions settled.

| Theme | Reported violations | Passed rule groups | Manual review items |
| --- | --- | --- | --- |
| Editorial | 0 | 25 | 2 contrast items |
| Midnight | 0 | 25 | 2 contrast items |
| Quiet | 0 | 25 | 2 contrast items |

The remaining manual items are the decorative down-arrow glyph and the Play by the Rules metadata label. Both use the theme's main ink colour on its paper background; contrast was calculated from those tokens. The metadata heading and label bounding boxes were checked and did not overlap. The arrow is hidden from assistive technology, and its parent link has a descriptive accessible name.

The initial theme-switch scan could sample a transitioning button background. The harness now waits for the transition to settle. Separately, the Midnight hover rule used dark text on a blue background; this real hover-state issue was corrected with a pale background and dark text.

## Changes made

- Fixed Midnight primary-button hover/focus contrast; made Quiet hover/focus consistent.
- Gave theme controls a white focus outline on the dark toolbar.
- Moved the focused skip link above the toolbar and gave it a two-colour focus indicator.
- Made the main landmark focusable and transferred focus on in-page navigation, so subsequent Tab navigation starts at the destination.
- Removed smooth scrolling to avoid keyboard focus moving ahead of the visible viewport.
- Added scroll margins and mobile anchor clearance for the sticky toolbar.
- Increased small navigation/scroll controls to at least 28px height and theme buttons to 32px.
- Added solid background surfaces behind portrait metadata to make its contrast deterministic.
- Allowed project metadata headings to wrap.
- Matched the portrait's accessible name to its visible instruction and added keyboard instructions.
- Added Escape dismissal for the greeting and animation. Focus stays on the portrait, and later interaction can replay it.
- Added forced-colour focus/selected-state rules.

## Keyboard and layout checks performed

- Shift+Tab reaches the skip link; it is visible at the top of the viewport.
- Enter on the skip link focuses main; the next Tab reaches Explore selected work.
- Walked every control from the first theme button through Back to top using Tab. Every page control had a visible solid focus outline. Toolbar controls stay within the toolbar; document controls scroll into view below it. Tab then leaves the page normally—no keyboard trap.
- Enter opens a native project disclosure and Space closes it.
- Space activates the portrait; Escape hides its greeting and stops its wave while retaining focus.
- Native theme buttons are keyboard-operable and retain aria-pressed state.
- At 320 CSS px, document width was 320px with no horizontal overflow.
- Applied WCAG text-spacing values (line height 1.5, paragraph spacing 2em, letter spacing .12em, word spacing .16em) to the audit frame at desktop width. No horizontal overflow or overflow in the inspected buttons, summaries, headings or paragraphs; hero visually inspected.
- Reduced-motion CSS disables animation/transitions and smooth scrolling; forced-colour support is present. These OS preference modes were source-reviewed, not independently exercised in an OS/device session.

## Remaining manual work before claiming conformance

Test with VoiceOver/Safari and NVDA/Firefox or Chrome, including native disclosure announcements and navigation focus. Check 200% text resizing and browser zoom on the production stack, combined mobile/text-spacing scenarios, forced-colour mode, reduced-motion preference, and the downloadable résumé. Test actual mobile devices and production metadata/assets. This audit did not assess the accuracy of claimed accessibility work on client projects.

## Re-running

Serve `design-review/` and open `/audit/`. Click Run all themes. Toggle WCAG text spacing for manual inspection. `audit/axe.min.js` is the pinned public axe-core 4.10.3 distribution downloaded from cdnjs; the harness and library are development-only and must be excluded from production deployment.
