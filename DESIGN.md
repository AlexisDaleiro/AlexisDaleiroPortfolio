---
name: Alexis Daleiro
description: Portfolio as a fashion-house lookbook; each shipped project is a look, shown full and slow.
colors:
  celeste-deep: "#2c6a98"
  celeste-pale: "#9cc3e2"
  bone-ground: "#ecedeb"
  bone-paper: "#e1e2e0"
  stone-rule: "#c7c6c0"
  ink: "#111112"
  ink-soft: "#4a4a47"
  ash-on-ink: "#b9b8b2"
  rule-on-ink: "#3a3a38"
typography:
  display-hero:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, serif"
    fontSize: "clamp(3.75rem, 11.2vw, 11.5rem)"
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  display:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, serif"
    fontSize: "clamp(3rem, 7vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, serif"
    fontSize: "1.625rem"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.12em"
  label-action:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 64px)"
  column-gap: "24px"
  nav-height: "64px"
  look-padding: "clamp(80px, 14vh, 160px)"
  passage-padding: "clamp(96px, 16vh, 180px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone-ground}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.celeste-deep}"
  button-inverse:
    backgroundColor: "{colors.bone-ground}"
    textColor: "{colors.ink}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "52px"
  button-inverse-hover:
    backgroundColor: "{colors.stone-rule}"
  textlink:
    textColor: "{colors.ink}"
    typography: "{typography.label-action}"
    padding: "12px 0"
  textlink-hover:
    textColor: "{colors.celeste-deep}"
  view-toggle:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "44px"
  view-toggle-pressed:
    textColor: "{colors.ink}"
---

# Design System: Alexis Daleiro

## Overview

**Creative North Star: "The Lookbook"**

The site is a fashion-house lookbook for a developer's work. Each shipped project is a look: a real screenshot plate, numbered like a runway sequence (01 / 05), captioned in small tracked capitals, and named in a monumental high-contrast Bodoni. The pace is slow and full; one look per scroll, never a grid of equal cards.

The ground is a cool bone, the ink nearly black, and a single deepened Uruguayan celeste appears only when something is acted on (hover, focus, caret). Structure is drawn with 1px hairlines rather than boxes. Nothing is rounded, nothing floats on a shadow, and no decorative texture is added: the real screenshots are the only image material in the world.

The page ends on ink. The contact passage inverts the world (ink ground, bone type) so the close reads as the last page of the book.

**Key Characteristics:**
- Bone ground, near-black ink, one celeste accent reserved for interaction.
- Bodoni Moda display set huge, tight and low; Schibsted Grotesk for everything functional.
- Uppercase tracked labels (0.12em) for nav, captions, stack lists and actions.
- 1px hairline rules in ink (structural) or stone (subdivision).
- Square corners everywhere; flat surfaces.
- Real screenshots as the only texture, crossfading desktop to mobile view.

## Colors

A near-monochrome bone and ink palette with one cool accent that only answers the user.

### Primary
- **Deep Celeste** (celeste-deep): hover fill of the primary button, hover color of text links, the focus ring (2px outline, 3px offset) and the text caret. Never a resting fill or a decorative color.
- **Pale Celeste** (celeste-pale): the same accent role on the ink contact passage (link and email hover), lifted so it holds against ink.

### Neutral
- **Bone Ground** (bone-ground): the page, the sticky nav, type on ink, the inverse button. Also the `theme-color`.
- **Bone Paper** (bone-paper): one step down from ground. Fills the plate frame behind screenshots, the full-bleed type-only look sections, and the index row on hover.
- **Stone** (stone-rule): subdividing hairlines (fact rows, index rows, between stacked type looks), the inverse button hover, scrollbar thumb.
- **Ink** (ink): text, primary button fill, structural hairlines (nav underline, top of the index list and fact sheet), selection background, contact passage ground.
- **Soft Ink** (ink-soft): secondary text: body copy in looks, index metadata, caption numbers, unpressed toggle buttons, inactive language.
- **Ash on Ink** (ash-on-ink): secondary text on the ink passage.
- **Rule on Ink** (rule-on-ink): the footer hairline on the ink passage.

### Named Rules
**The Answer-Only Accent Rule.** Celeste appears only in response to the user: hover, focus, caret. At rest the page is bone and ink alone.

**The Ink Close Rule.** The final passage inverts to ink ground with bone type; on ink, accent and secondary text switch to their on-ink variants (pale celeste, ash, ink rule) and the focus ring turns bone.

## Typography

**Display Font:** Bodoni Moda Variable, self-hosted with optical sizing on (fallback Bodoni 72, Didot, serif)
**Body Font:** Schibsted Grotesk Variable, self-hosted (fallback system-ui, sans-serif)

**Character:** A Didone at poster scale against a sober grotesk. The serif carries names and titles; the grotesk carries every fact, label and action.

### Hierarchy
- **Display Hero** (400, clamp(3.75rem, 11.2vw, 11.5rem), line-height 0.82, -0.035em): the name in the first viewport, single line on desktop.
- **Display Wide** (400, clamp(3.25rem, 12vw, 12rem), 0.85, -0.04em) and **Contact** (clamp(4rem, 13vw, 13rem), 0.82, -0.04em): type-only look names and the closing title.
- **Display** (400, clamp(3rem, 7vw, 6.5rem), 0.92, -0.02em, balanced wrap): look names and section titles; screenshot looks step down to clamp(2.75rem, 5.4vw, 5.5rem), About to clamp(2.5rem, 4.6vw, 4.25rem).
- **Title** (Bodoni 400, 1.375rem to 1.625rem, 1.1 to 1.25): index row names, fact values, nav wordmark.
- **Body** (400, 1.0625rem, 1.6): running copy, max 58ch in looks; About runs larger at 1.1875rem, max 62ch.
- **Label** (500, 0.75rem, 0.12em, uppercase): captions, nav links, stack lists, fact keys, role line, language switch. Buttons and text links use the same voice at 0.8125rem.

### Named Rules
**The Two Voices Rule.** Bodoni names things; Schibsted states things. Never set a label, number or action in Bodoni, and never set a project or section name in the grotesk.

**The Tabular Count Rule.** Look numbers and years use tabular numerals so sequences align.

## Layout

A 12-column grid (column gap 24px) inside a fluid gutter of clamp(16px, 4vw, 64px), under a 64px sticky nav. Looks alternate their plate between the left eight columns and the right eight, with text in the remaining four set to the bottom edge. Type-only looks span the full width on a paper band with a body/facts split (columns 1-5 / 7-12) on a subgrid.

The first viewport is look 01. The plate sits in columns 5-12; the caption and view toggle are bottom-aligned in columns 1-4; the name runs full width on its own row, pulled up 0.42em so it crosses the plate's lower edge, set in bone with `mix-blend-mode: difference` so it reads as ink on the ground and inverts over the screenshot; the role, line and actions follow in a row beneath the name, actions at the right.

Vertical rhythm is generous and viewport-relative: looks clamp(80px, 14vh, 160px), the index and closing passages up to clamp(96px, 16vh, 180px).

Breakpoints: at 1024px, looks stack (plate above text, 40px apart) and the index collapses to name/year with metadata beneath. At 720px, the nav drops its section links, the hero becomes a single column (full-bleed plate, caption, name, copy), and screenshot plates bleed to the viewport edge.

## Elevation & Depth

Flat. Depth comes from tonal steps (ground to paper) and hairlines, never from shadowed surfaces. The single shadow in the system belongs to the content: a soft drop-shadow under the phone screenshot when a plate shows its mobile view, so the device reads as an object sitting on the paper.

### Shadow Vocabulary
- **Phone on paper** (`filter: drop-shadow(0 18px 30px rgb(17 17 18 / 0.18))`): mobile screenshot inside a plate only.

### Named Rules
**The Hairline Not Box Rule.** Separate with a 1px rule (ink for structure, stone for subdivision) or a tonal band; never with a card, border box or shadow.

## Shapes

Every corner is square (0px). Plates are unframed rectangles (16:10 in looks; a viewport-capped height in the hero) clipping their screenshots. Lines are 1px. The one drawn mark is the external-link arrow: an inline stroked SVG (12-unit viewBox, 1.4 stroke, 0.75em).

## Components

### Buttons
Square, black, uppercase: a tailor's label rather than a pill.
- **Shape:** square corners (0px), min height 52px, 0 28px padding.
- **Primary:** ink fill, bone type, action label (500, 0.8125rem, 0.12em, uppercase).
- **Hover / Focus:** fill eases to deep celeste over 0.4s; focus is the global 2px celeste outline at 3px offset.
- **Inverse:** bone fill and ink type on the ink passage; hover fills stone.

### Text Links
- **Style:** action label, ink, 1px underline offset 0.5em, 12px vertical padding.
- **Hover:** color to deep celeste (pale celeste on ink); external links carry the diagonal arrow, which nudges 2px up-right on hover.

### View Toggle
- **Style:** two label buttons (Desktop / Mobile), ink-soft text, transparent 1px border, 44px tall.
- **Pressed:** ink text and an ink 1px border. Clicking pins the view; on hover-capable devices, pointer over the plate previews mobile and leaving restores the pinned view.

### Navigation
- **Style:** sticky, bone ground, 1px ink underline, three-column grid: Bodoni wordmark left, section links centered, language switch (and CV when present) right.
- **Links:** uppercase labels; hover draws a 1px underline from the left over 0.5s.
- **Language:** current code in ink, other in ink-soft, slash separator.
- **Mobile (720px):** section links hidden; wordmark and language remain.

### Plate (signature)
An unframed screenshot on bone paper holding both views of one site. Desktop view covers from the top; switching to mobile fades desktop out (scaling to 1.03) and fades the contained phone in, 0.9s opacity and 1.4s transform on the house ease. On first entry the plate reveals top-down with a clip-path wipe over 1.6s. Reduced motion collapses all of it to instant.

### Caption
Label row under the plate: soft-ink tabular number "NN / TT", then kind and year, with the view toggle at the far end.

### Index Row
A five-column ledger line (name in Bodoni, description, tech label, year, arrow) between stone hairlines under an ink top rule. Hover fills paper and indents 12px.

### Fact Sheet
Definition list under a 1px ink rule; each row a label key and a Bodoni value, separated by stone hairlines.

## Do's and Don'ts

### Do:
- **Do** use the house ease `cubic-bezier(0.16, 1, 0.3, 1)` for every transition, at 0.3s to 0.5s for state and 0.9s to 1.6s for image and reveal.
- **Do** number every look "NN / TT" in tabular numerals and caption it in the label voice.
- **Do** keep celeste for hover, focus and caret; use pale celeste for the same role on ink.
- **Do** show real screenshots of the shipped site, desktop and mobile, as the only imagery.
- **Do** draw structure with 1px ink rules and subdivision with 1px stone rules.

### Don't:
- **Don't** round a corner or add a shadow to a surface; the phone drop-shadow is the only shadow.
- **Don't** lay projects out as a grid of equal cards; one look per passage.
- **Don't** introduce illustrations, gradients, stock photography or decorative textures.
- **Don't** fill a resting element with celeste.
- **Don't** set labels or numbers in Bodoni, or names and titles in the grotesk.
