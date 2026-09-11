# RankReels Sales Page Assets Plan

## Principles

- Prefer real RankReels product UI, generated reels, and approved proof.
- Reuse assets from `rankreels.ai` only after confirming ownership and obtaining source-quality files.
- ReelRemix is not an asset source. Do not reuse its images, videos, icons, backgrounds, or graphics.
- Keep missing items as explicit placeholders; never fabricate evidence or product screens.

## Inventory

| Priority | Asset | Used in | Format | Requirement |
|---|---|---|---|---|
| P0 | Primary logo and compact mark | Nav, footer, metadata | SVG | Acquire original exports |
| P0 | Hero VSL and poster | Hero | MP4/WebM + WebP/AVIF | Approved video, captions, and poster |
| P0 | Hero layered reel deck | Hero | 3 MP4 files | **Extracted** to `assets/rankreels/hero-reels/`; reuse authorization still to confirm |
| P0 | Creator Catalogue samples | Output strip | 22 WebP images | **Extracted** to `assets/rankreels/creator-catalogue/`; select representative set and confirm reuse authorization |
| P0 | Product overview graphic | Product reveal | WebP/AVIF | Current UI/workflow |
| P0 | Digital Twin setup screen | Workflow | WebP/AVIF | Private data removed |
| P0 | Topic/ranking screen | Workflow | WebP/AVIF | Genuine creation flow |
| P0 | Review/publish screen | Workflow | WebP/AVIF | Script, assets, preview, download |
| P0 | Product demo and poster | Demo | MP4/WebM + poster | Current behavior |
| P0 | Creator performance proof | Pattern proof | WebP/AVIF | Permission-cleared evidence for cited views |
| P1 | Idea, script, brand, asset-control, and library screens | Features | WebP/AVIF | Current, readable UI captures |
| P1 | Audience-use reel examples | Audience fit | Posters/short muted loops | Product output, not stock portraits |
| P1 | Checkout destination | All CTAs | URL/config | Approved funnel and tracking |
| P1 | Launch deadline | Urgency | Timestamp + timezone | Confirm honest expiry behavior |
| P1 | Legal/support destinations | Footer/offer | URLs/email | Terms, privacy, disclaimer, refund, support |
| P2 | Social share image | Metadata | 1200×630 PNG/WebP | Create after headline is final |
| P2 | Favicon/app icons | Browser | SVG/PNG | Official mark |
| P2 | Subtle background texture | Rhythm | CSS/original raster | Original, not copied |

## Capture standards

- Capture product UI at 2× scale on a neutral test account.
- Remove names, emails, keys, uploads, billing details, and private data.
- Use consistent browser-chrome treatment or crop it out.
- Preserve enough context for each screen to be understandable and keep lossless masters.
- Export delivery images as AVIF or WebP where quality permits and add alt-text notes.

## Existing local references

Files under `sources/` are read-only. They may inform the work but cannot be renamed, moved, edited, or treated as final production assets without review. Current references include `rr1.png`–`rr7.png` and `RankReels _ ChatGPT Brain.pdf`; verify provenance, freshness, resolution, and approval before assigning them.

## Extracted live-site assets

The first approved extraction pass is documented in `assets/rankreels/README.md`:

- Hero reel deck: 3 source MP4 files.
- Creator Catalogue: 22 source WebP images, approximately 600px wide.

These are ready for design use as locally staged sources. During implementation, copy only the selected assets into the public delivery directory and create optimized posters/derivatives as required.

## Approval checklist

- [ ] Brand owner approves logo and color treatment.
- [ ] Product owner confirms each UI capture matches the launch build.
- [ ] Creator/customer grants permission for proof and identifiable content.
- [ ] Every numerical claim has a matching source.
- [ ] Videos have posters, accessible playback, and captions/transcripts where needed.
- [ ] Checkout, tracking, legal, support, and countdown inputs are confirmed.
- [ ] No ReelRemix proprietary asset is included.
