# ChatGPT project context

This directory is a local mirror of the ChatGPT project “RankReels”.

- Treat every file under `sources/` as read-only reference material.
- Do not edit, rename, move, or delete synced project files.
- These files may be replaced the next time a task is created from this ChatGPT project.


## Project instructions

### Project purpose

Build the RankReels founders-launch sales page as a responsive, long-form narrative sales page.

### Sources of truth

- `docs/sales-copy.md` is the approved copy snapshot. Do not rewrite, shorten, expand, “improve,” correct, or invent sales copy unless the user explicitly requests copy changes.
- `docs/design-system.md` defines RankReels visual language. Prefer it over styling inferred from external references.
- `docs/page-blueprint.md` defines page order, section purpose, layout intent, and asset slots.
- `docs/assets-plan.md` tracks required assets and their readiness.
- `https://rankreels.ai/` is the brand source of truth.
- `https://getreelremix.com/founders` is layout and pacing inspiration only. Do not copy its branding, copy, proprietary graphics, or distinctive decorative assets.

### Build rules

- Preserve the approved copy verbatim at implementation time. Layout-only line breaks may change responsively; wording may not.
- Keep all placeholders visible in planning files until a real approved asset or destination is supplied.
- Never fabricate testimonials, customer results, founder details, scarcity, countdown behavior, product screenshots, checkout URLs, or legal claims.
- Use semantic, accessible HTML and keyboard-accessible interactions.
- Build mobile-first and verify at narrow mobile, tablet, laptop, and wide desktop widths.
- Reuse section primitives and shared design tokens instead of duplicating styles.
- Keep the page visually recognisable as RankReels: near-black surfaces, warm ivory text, coral accent, Inter Tight headings, Inter body text, restrained borders, and product-led visuals.
- Treat urgency elements as factual product behavior: countdowns and limited-availability statements must be connected to confirmed launch data before release.
- Keep CTA destinations configurable until the user supplies the approved checkout or signup URL.

### Quality bar

- Maintain a clear narrative flow: promise → proof → mechanism → problem → solution → product → demonstration → control/features → audiences → offer/value → guarantee → FAQ → final urgency.
- Use the reference page’s strong section rhythm, repeated proof, modular demos, and recurring CTAs without cloning it.
- Avoid generic SaaS gradients, excessive glassmorphism, decorative stock art, or invented UI.
- Prefer real RankReels UI captures, reel examples, and approved proof assets.
- Before completing implementation, check copy fidelity against `docs/sales-copy.md`, responsive layout, contrast, focus states, image alt text, reduced-motion behavior, CTA links, pricing consistency, and legal/footer completeness.
