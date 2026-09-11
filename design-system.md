# RankReels Sales Page Design System

## Direction

The sales page combines RankReels’ established brand identity with the confident pacing of the ReelRemix founders page. RankReels owns the visual language; ReelRemix contributes layout lessons only. The result should feel editorial, cinematic, product-led, and conversion-focused—not cloned and not like a generic SaaS template.

## Observed brand foundation

Measurements taken from the live RankReels site on 2026-09-04:

- Page background: `#0A0A0B`
- Primary text / warm ivory: `#F7F6F3`
- Accent coral: `#FF5C39`
- Secondary accent observed in imagery/UI: `#D97757`
- Muted text: `#A3A3AA`; deep-muted text: `#69696F`
- Elevated surfaces: `#101013`, `#0D0D0F`, and `#141414`
- Hairline border: `rgba(255, 255, 255, 0.07)`; stronger dividers may use `0.10`
- Body type: Inter, system UI fallback
- Display type: Inter Tight, sans-serif fallback
- Existing desktop H1: 62px / 66.96px, weight 600
- Existing desktop H2: 40px / 43.2px, weight 600
- Existing body: 16px / 27.2px, weight 400
- Existing compact CTA: ivory fill, near-black text, full pill radius
- Main content container observed: 1080px with 24px side padding

## Color roles

- `canvas`: `#0A0A0B`
- `surface-1`: `#0D0D0F`; `surface-2`: `#101013`; `surface-3`: `#141414`
- `text-primary`: `#F7F6F3`; `text-secondary`: `#A3A3AA`; `text-tertiary`: `#69696F`
- `accent`: `#FF5C39`; `accent-muted`: `#D97757`
- `border-subtle`: `rgba(255,255,255,.07)`; `border-strong`: `rgba(255,255,255,.12)`

Use coral selectively for section labels, numeric emphasis, active ranking states, price emphasis, and important cues. The primary CTA may use the established ivory pill treatment; coral is not required as a button fill everywhere.

## Typography

- Display/H1: Inter Tight 600; responsive `clamp(3rem, 6vw, 5.25rem)`; line-height 0.98–1.06; slight negative tracking.
- Section H2: Inter Tight 600; responsive `clamp(2.25rem, 4.4vw, 4rem)`; line-height 1.04–1.10.
- H3: Inter Tight 600; 28–36px desktop, 24–30px mobile.
- Body large: Inter 400; 19–21px; line-height 1.55–1.7.
- Body: Inter 400; 16–18px; line-height 1.65–1.75.
- Eyebrows/labels: Inter 600; 11–13px; uppercase; 0.10–0.16em letter spacing.
- Numeric proof and pricing may use Inter Tight 600–700.
- Caveat may appear only as a rare brand-consistent handwritten annotation, never for core reading content.

## Layout and rhythm

- Primary container: 1080px max width; 24px mobile gutters; 32–48px larger-screen gutters.
- Reading column: 680–760px. Wide product/demo frame: up to 1180–1240px.
- Section padding: 88–120px desktop; 64–88px tablet; 48–72px mobile.
- Alternate full-bleed canvas, elevated dark panels, and subtle grid/textural bands to sustain long-page rhythm.
- Keep each section focused on one persuasion job. Avoid several unrelated card grids in succession.

## Components

### Buttons

- Primary: warm ivory background, near-black text, pill radius, medium weight.
- High-emphasis launch CTA: coral fill only after contrast verification.
- Secondary: transparent, subtle light border, ivory text.
- Minimum touch target: 44px. Focus: visible 2px coral outline with offset.

### Cards and media

- Cards: dark elevated surface, 1px subtle border, 16–24px radius, minimal shadow.
- Use cards for comparisons, steps, features, audience segments, and pricing—not every paragraph.
- Treat screenshots and vertical reels as visual heroes in restrained frames with correct aspect ratios.
- Videos need poster images, accessible controls, captions where applicable, and no surprise autoplay with sound.

### Ranking motif

Use tier/rank markers, ascending numbers, progress tracks, or stacked positions as a recurring RankReels-specific device. Keep the motif functional and legible, not merely decorative.

## Motion

- Use short opacity/translate reveals, restrained list stagger, and subtle media parallax only where hierarchy benefits.
- Keep durations around 180–450ms and respect `prefers-reduced-motion`.
- Do not use continuous glowing, floating, or attention-seeking motion.

## Reference-page lessons to adapt

The ReelRemix page uses a near-black base (`#050806`), 64–69px headings, consistent ~112px desktop section padding, coral CTAs, dark panels, grid textures, modular product demos, numbered feature runs, repeated CTAs, offer stacking, proof, guarantee, FAQ, and an urgency close.

Adapt its hierarchy, long-form pacing, alternation of dense copy and visual modules, and proof/CTA cadence. Do not reproduce its green tint, exact section compositions, microcopy, artwork, or proprietary UI imagery.

## Accessibility and responsive rules

- Maintain WCAG AA contrast; never encode rank/comparison meaning by color alone.
- Collapse columns with intentional reading order; prevent narrow headline word stacks.
- Tables become labeled cards or horizontally scroll with a clear affordance.
- Accordion triggers expose expanded state and work by keyboard.
- Provide useful alt text for product/proof images; decorative textures use empty alt text.
