# Start Local

A beginner-first guide for running local LLMs with `llama.cpp` on consumer hardware.

The site is intentionally conservative: pick a model by VRAM, run one stable command, verify the local server, then decide whether advanced features like MTP, huge context, vision, or multi-GPU are worth adding.

Live site: https://start-local-llm.vercel.app

## Why this exists

On June 14, 2026, [@TraffAlex posted a detailed X guide](https://x.com/traffalex/status/2066236717015728227) on local models for consumer GPUs. The post was useful and dense: model names, VRAM ranges, launch commands, MTP notes, multi-GPU flags, vision flags, and OpenAI-compatible endpoint notes.

Start Local turns that into a calmer setup path for people who are new to local inference:

- Start with a boring baseline that is likely to work.
- Choose models by GPU memory instead of hype.
- Keep context modest until the first run succeeds.
- Show Mac and Windows commands from one global toggle.
- Label community and experimental options clearly.
- Link every major source so readers can check the underlying docs and model pages.

## What is included

- A single static `index.html`.
- Warm, low-noise editorial design.
- Desktop chapter rail and mobile Contents sheet.
- Mac/Windows command toggle with platform detection and manual override.
- Copy buttons with clipboard fallback for non-secure local pages.
- Source list covering the original post, `llama.cpp`, MTP notes, and model pages.
- Tiny SVG favicon and basic social metadata.

## Source material

Primary source:

- [@TraffAlex: Best Local LLMs for Consumer GPUs - llama.cpp Guide, June 2026](https://x.com/traffalex/status/2066236717015728227)

Core docs and references:

- [`llama.cpp` release b9637](https://github.com/ggml-org/llama.cpp/releases/tag/b9637)
- [`llama.cpp` install docs](https://github.com/ggml-org/llama.cpp/blob/master/docs/install.md)
- [`llama-server` docs](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md)
- [`llama.cpp` speculative decoding docs](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)
- [Unsloth MTP guide](https://unsloth.ai/docs/models/mtp)
- [LiquidAI LFM2.5 GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)
- [Google Gemma 4-12B QAT GGUF](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)
- [Qwen3.6-27B GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)
- [Google Gemma 4-31B QAT GGUF](https://huggingface.co/google/gemma-4-31B-it-qat-q4_0-gguf)
- [Qwopus community model](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2)
- [Nex-N2-mini base model](https://huggingface.co/nex-agi/Nex-N2-mini)

## Design notes

The page uses a calm editorial style inspired by Apple hardware guides and Dieter Rams-style restraint:

- Warm off-white background.
- Graphite text.
- One quiet sage accent.
- Amber only for experimental or cautionary material.
- Two corner radii.
- Editorial step numerals instead of circles.
- Unified spec-sheet grids instead of many noisy cards.
- Static header plus chapter orientation, avoiding fragile sticky mobile Safari behavior.

## Local development

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

## Deploying

This is a static site. Vercel can deploy it directly from the repo root.

Independent community synthesis. Not affiliated with or endorsed by `@TraffAlex`, the model authors, or the `llama.cpp` project. Verify commands against official docs before running.

## QA

The repo includes a small Playwright smoke test:

```bash
npm install
npx playwright install chromium
npm test
```

It checks mobile and desktop layout, horizontal overflow, the Contents control, desktop chapter rail, and the Mac/Windows command toggle.

## License

MIT. Third-party model names, docs, and linked source material remain owned by their respective authors and projects.
