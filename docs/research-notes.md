# Research Notes

These notes explain how the public guide was synthesized.

## Original post

The seed material was a June 14, 2026 X post by `@TraffAlex` about local LLMs for consumer GPUs and `llama.cpp`. The post listed model options by VRAM, Windows launch commands, MTP usage, multi-GPU flags, vision projector notes, and the local OpenAI-compatible `/v1` endpoint.

The public site does not mirror the post verbatim. It turns the dense reference into a beginner-first path.

## Editorial decisions

- Keep the first run boring: modest context, one GPU, no MTP, no vision projector.
- Treat community fine-tunes and advanced modes as experiments, not defaults.
- Prefer source-backed model pages and official docs where possible.
- Show one command that changes with VRAM and platform.
- Use troubleshooting sections for common first-run failures.

## Verification performed during creation

- X post fetched through the official X API, not browser scraping.
- Cited model and documentation URLs checked for successful responses during review.
- Local HTML checked with browser automation across mobile and desktop viewports.
- Command platform toggle tested for Windows and Mac outputs.
- Copy button fallback included for plain HTTP and local file usage.

## Design research direction

The visual system was influenced by Ray's feedback during review:

- Avoid saturated blue side tabs and glossy AI-style gradients.
- Reduce circles, pills, and border-heavy mini-cards.
- Use strong typography and spacing for hierarchy.
- Keep colors purposeful: neutral base, quiet accent, warning color only for caution.
- Avoid sticky mobile top bars as the primary orientation device.
- Use a desktop chapter rail and mobile Contents sheet instead.
