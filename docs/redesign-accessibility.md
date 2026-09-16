# Redesign accessibility notes

The September 16, 2026 redesign targets WCAG 2.2 AA. These engineering checks do not establish full WCAG conformance or certify ADA compliance.

## Design and interaction safeguards

- Native header, navigation, main, and footer landmarks, one main heading per route, and a visible-on-focus skip link.
- Keyboard-operable mobile navigation with expanded state, hidden closed links, Escape handling, and focus restoration.
- Route-specific document titles and focus moved to main after client navigation.
- Persistent contact labels, autocomplete attributes, native required-field validation, and live success/error messages. Test submissions are mocked; live backend delivery has not been verified.
- Category filters expose their selected state and announce the new result count. Small screens use a labeled native select.
- Project details use a native modal dialog. Background page controls are inert while it is open; Escape closes it and restores the activating button. Native browser chrome remains reachable.
- Closed service panels are inert and hidden from assistive technology; images are requested only after the first expansion.
- Text uses contrasting solid backgrounds; hero text sits over a dark blue overlay that shields it from changing video frames. Focus indicators use an outline and contrasting ring. Interactive controls have spacing and usable target sizes.
- The original decorative hero video loops silently with a persistent keyboard-operable play/pause button. It does not autoplay for reduced-motion users; its matching poster remains visible instead. Enabling reduced motion pauses active playback. A manual pause persists when preferences change. The video pauses in hidden tabs. There are no flashing effects, automatic carousels, or animated counters. Entrance animations are finite and respect reduced motion.
- Responsive WebP sources, intrinsic image sizes, deferred secondary images, and prerendered route content remain in place.

## Reference criteria

Animation choices follow the W3C guidance for [Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) and [Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html). Text colors target [Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

## Verification results

Verified locally on September 16, 2026, and rerun after restoring the company-blue palette and supplied logo icon:

- 15 regression tests passed, including both contact submission outcomes with mocked requests and cancellation of active reveals when reduced motion is enabled.
- The production build and all six prerender assertions passed. Production routes loaded without runtime or hydration errors, and the homepage heading remained available with JavaScript disabled.
- Chromium layout checks at 320, 390, 768, and 1440 CSS pixels found no horizontal overflow, broken loaded images, or duplicate main headings across all six routes.
- Axe-core scans at 320 and 1440 pixels reported **zero violations** for WCAG 2 A/AA, WCAG 2.1 AA, WCAG 2.2 AA, and best-practice tags. Additional scans of the open project dialog and all service panels expanded reported zero violations.
- Browser keyboard checks passed for the skip link, mobile menu Escape/focus return, route focus, project dialog background isolation, Escape, and restoration to the activating project button.
- Reduced-motion emulation left no running animations after scrolling. The homepage had no horizontal overflow at 320px with increased line height, letter spacing, word spacing, and paragraph spacing.
- Initial scans found transient contrast loss during opacity-based reveal animations. Those fades were removed; the final reveal animations use only transforms and preserve full text contrast throughout.

The machine-readable layout and axe results are in [redesign-audit.json](redesign-audit.json). These are local engineering results, not a claim that every WCAG criterion has been tested. Contact delivery was not tested against the live backend.

## Before a conformance claim

Complete a manual assistive-technology review, including VoiceOver/Safari and NVDA, actual browser zoom, forced-colors appearance, image descriptions, and all form error states. Recheck the deployed site after publishing. Automated scanners cannot verify every WCAG requirement.

## Restored video hero verification

The homepage now uses `hero-df568505855b.mp4` at its original 1920×1080 resolution, muted and inline, with a matching still poster. The restored hero passed automated axe scans at 320, 390, 768, and 1440px with no violations or horizontal overflow. Browser checks confirmed keyboard play/pause, reduced-motion suppression of autoplay, pausing when reduced motion is enabled, and preservation of a manual pause. All 15 regression tests and the production build/prerender checks pass. Automated contrast results supplement the dark-overlay design; they do not certify all WCAG requirements.
