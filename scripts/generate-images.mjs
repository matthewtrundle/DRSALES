#!/usr/bin/env node

/**
 * generate-images.mjs
 *
 * Generates AI images via OpenRouter (Gemini 2.5 Flash Image)
 * and saves them to public/images/generated/
 *
 * Usage:
 *   node scripts/generate-images.mjs
 *
 * Requires OPENROUTER_API_KEY env var or pass it as first arg:
 *   OPENROUTER_API_KEY=sk-or-... node scripts/generate-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'generated');

const API_KEY = process.env.OPENROUTER_API_KEY || process.argv[2];
if (!API_KEY) {
  console.error('Error: Set OPENROUTER_API_KEY env var or pass as first argument');
  process.exit(1);
}

// ── Image prompts ───────────────────────────────────────────────
const IMAGES = [
  {
    filename: 'hero-office-warm.png',
    prompt:
      'A warm, light-filled ophthalmology office waiting area. Modern mid-century furniture in cream and soft gray tones. A fiddle-leaf fig plant by the window. Natural sunlight streaming in. Clean, minimal, coffee-shop atmosphere. No people. Soft depth of field. Professional interior photography style.',
  },
  {
    filename: 'cta-office-inviting.png',
    prompt:
      'A cozy, inviting medical reception desk area. Warm wood tones, a small succulent plant, soft overhead lighting. Clean modern design with cream walls. No people. Shallow depth of field. Feels like walking into a bakery or boutique — not a hospital. Professional architectural photography.',
  },
  {
    filename: 'lifestyle-morning-light.png',
    prompt:
      'A person looking out a window on a bright morning with clear vision, sunlight on their face. Warm color palette, cream and gold tones. Peaceful, optimistic mood. Shallow depth of field. Lifestyle photography style. High-end editorial look.',
  },
  {
    filename: 'lifestyle-reading-bw.png',
    prompt:
      'Black and white photograph of an older persons hands holding an open book in natural window light. Intimate, warm feeling despite the monochrome. Sharp focus on the hands, shallow depth of field on background. Fine art photography style. High contrast but soft tones.',
  },
  {
    filename: 'detail-eye-closeup-bw.png',
    prompt:
      'Stunning black and white close-up photograph of a human eye. Extremely sharp detail on the iris texture. Dramatic but elegant lighting from one side. Fine art portrait photography. High contrast silver gelatin print look. No color.',
  },
  {
    filename: 'texture-linen.png',
    prompt:
      'Seamless texture of natural cream-colored linen fabric. Subtle weave pattern visible. Even lighting, no shadows. Minimalist, organic feel. Top-down flat lay photography. For use as website background texture.',
  },
  {
    filename: 'office-hallway-bw.png',
    prompt:
      'Black and white photograph of a modern medical office hallway. Clean lines, natural light from side windows. Minimal furniture. Architectural photography style. Strong perspective lines leading into the distance. Elegant, calm, not sterile.',
  },
  {
    filename: 'connecticut-landscape.png',
    prompt:
      'Beautiful landscape photograph of Connecticut countryside in autumn. Rolling hills, warm golden light. Soft mist in the valley. Trees with fall foliage in warm amber and gold tones. Professional landscape photography. Peaceful, welcoming mood.',
  },
];

// ── Generate ────────────────────────────────────────────────────
async function generateImage(entry) {
  console.log(`  Generating: ${entry.filename} ...`);
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://drsalesophthalmology.com',
      'X-Title': 'Dr Sales Ophthalmology',
    },
    body: JSON.stringify({
      model: 'google/gemini-2.5-flash-image',
      modalities: ['image', 'text'],
      messages: [
        {
          role: 'user',
          content: entry.prompt,
        },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  const data = await res.json();
  const images = data.choices?.[0]?.message?.images;
  if (!images || images.length === 0) {
    console.warn(`  ⚠ No image returned for ${entry.filename}`);
    console.warn(`    Response: ${JSON.stringify(data).slice(0, 300)}`);
    return false;
  }

  const b64url = images[0].image_url.url;
  const b64data = b64url.split(',')[1];
  const buffer = Buffer.from(b64data, 'base64');

  const outPath = path.join(OUTPUT_DIR, entry.filename);
  fs.writeFileSync(outPath, buffer);
  console.log(`  ✓ Saved: ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
  return true;
}

async function main() {
  // Create output dir
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`\nGenerating ${IMAGES.length} images via OpenRouter / Gemini 2.5 Flash Image\n`);

  let success = 0;
  let failed = 0;

  for (const entry of IMAGES) {
    try {
      const ok = await generateImage(entry);
      if (ok) success++;
      else failed++;
    } catch (err) {
      console.error(`  ✗ Failed: ${entry.filename} — ${err.message}`);
      failed++;
    }
    // Small delay to avoid rate limits
    await new Promise((r) => setTimeout(r, 2000));
  }

  console.log(`\nDone. ${success} generated, ${failed} failed.\n`);
}

main();
