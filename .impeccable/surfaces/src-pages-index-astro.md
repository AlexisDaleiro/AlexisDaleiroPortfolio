---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/en/index.astro"]
---

# Home

Scope: portfolio home, ES at `/`, EN at `/en/`. Mode: Persuade (recruiter decides to interview).

Audience and job: recruiters, international remote (EN) and Uruguay (ES), deciding in one short visit whether Alexis Daleiro, junior full-stack, is worth an interview. Action: download CV or write an email. Proof: real deployed sites and public repos, nothing claimed that the repos do not show.

Constraints: static Astro on Vercel; ES/EN parity; self-hosted fonts; no testimonials, employers, metrics or seniority invented. CV PDF and LinkedIn URL pending from user (placeholder path `/cv/alexis-daleiro-cv.pdf`; LinkedIn `in/alexisdaleiro` from GitHub profile).

## Direction contract

THESIS: The portfolio as a fashion-house lookbook: each shipped project is a "look", presented full and slow, one per scroll. Refuses the dev-portfolio default of "Hola, soy" hero over a grid of equal project cards.

OWN-WORLD: Cool bone ground, near-black ink, one restrained accent (Uruguayan celeste, deepened) used only for active and focus states. High-contrast Bodoni display set monumental and low; Schibsted Grotesk for labels, captions and data, uppercase lightly tracked. Hairline 1px rules, square black buttons, underlined text links. Real screenshots are the only texture.

STORY: Visitor sees who (name), what (junior full-stack, Montevideo, open to remote), and the proof (look 01 is a real B2B platform he built) in the first viewport; scrolls looks; reaches an index of every public repo; closes on contact.

FIRST VIEWPORT: Hairline nav (name left; Trabajos, Índice, Contacto, ES/EN right; CV as nav action). Look 01 screenshot of Frontend-Districo occupies the right two thirds, tall, unframed. "Alexis Daleiro" in monumental Bodoni sits low-left, overlapping the plate edge. One-line role under it, then Descargar CV (black square) and Escribir (underlined). Look caption bottom-right of plate.

FORM: Luxury fashion flagship (challenger luxury-fashion-flagship, chosen by user over assigned list item 7). seed:5bf7a3f5259a3217. Signature interaction: hover/focus on a look crossfades desktop view to mobile view of the same site; looks advance by slow scroll-snap (proximity) with fade reveal; reduced motion cuts.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
