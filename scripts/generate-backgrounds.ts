/**
 * AI Background Image Generator
 * Uses OpenRouter API with Gemini 2.5 Flash for image generation
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

if (!OPENROUTER_API_KEY) {
  console.error('Error: OPENROUTER_API_KEY environment variable is required');
  process.exit(1);
}

interface ImagePrompt {
  name: string;
  prompt: string;
}

const imagePrompts: ImagePrompt[] = [
  {
    name: 'hero-particles',
    prompt: 'Generate an abstract dark background with floating light particles and soft bokeh circles. Deep navy blue (#0a1628) background with scattered glowing white and soft blue particles. Elegant, premium, cinematic feel. Suitable for hero section overlay. No text.',
  },
  {
    name: 'services-waves',
    prompt: 'Generate abstract flowing wave lines in soft blue gradients (#0c8ce9 to white). Minimalist, clean, organic curves flowing horizontally. Modern medical website aesthetic. White/light background. No text.',
  },
  {
    name: 'testimonials-gradient',
    prompt: 'Generate a soft gradient mesh background. Pale lavender, soft blue, and cream colors blending together. Ethereal, calming, premium spa/medical feel. Very subtle and light. No text.',
  },
  {
    name: 'about-geometric',
    prompt: 'Generate abstract geometric shapes with soft blue and gold accents. Clean lines, subtle transparency, floating hexagons and circles. Modern, professional, tech-forward medical aesthetic. Light background. No text.',
  },
  {
    name: 'cta-glow',
    prompt: 'Generate an abstract dark background with a central soft glowing orb. Deep charcoal/navy background with warm gold (#dca02e) and blue (#0c8ce9) light bloom in center. Dramatic, premium, call-to-action energy. No text.',
  },
  {
    name: 'doctor-texture',
    prompt: 'Generate a subtle paper or linen texture with very faint medical imagery. Cream/white background with barely visible abstract eye or lens shapes. Organic, warm, trustworthy feel. No text.',
  },
  {
    name: 'education-nodes',
    prompt: 'Generate abstract connected nodes and lines like neural network or constellation. Soft blue lines on white background connecting small dots. Scientific, educational, innovation feel. Minimal and elegant. No text.',
  },
  {
    name: 'awards-shimmer',
    prompt: 'Generate abstract golden shimmer and light rays. Soft gold (#dca02e) highlights and lens flares on light cream background. Celebratory, achievement, premium award ceremony feel. Subtle and elegant. No text.',
  },
];

async function generateImage(imagePrompt: ImagePrompt): Promise<string | null> {
  console.log(`\nGenerating: ${imagePrompt.name}...`);

  // Using Gemini 2.5 Flash with image generation
  const requestBody = JSON.stringify({
    model: 'google/gemini-2.5-flash-image',
    messages: [
      {
        role: 'user',
        content: imagePrompt.prompt
      }
    ],
  });

  return new Promise((resolve) => {
    const options = {
      hostname: 'openrouter.ai',
      path: '/api/v1/chat/completions',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBody),
        'HTTP-Referer': 'https://dr-sales-ophthalmology.com',
        'X-Title': 'Dr Sales Ophthalmology',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log(`  Status: ${res.statusCode}`);

        if (res.statusCode !== 200) {
          console.log(`  Error response: ${data.substring(0, 500)}`);
          resolve(null);
          return;
        }

        try {
          const response = JSON.parse(data);
          console.log(`  Response keys: ${Object.keys(response)}`);

          // Check for image in response
          if (response.choices && response.choices[0]) {
            const choice = response.choices[0];
            const message = choice.message;

            // Check for images array (Gemini format)
            if (message && message.images && Array.isArray(message.images) && message.images.length > 0) {
              const imageData = message.images[0];
              if (imageData.image_url && imageData.image_url.url) {
                console.log(`  Found image in images array!`);
                resolve(imageData.image_url.url);
                return;
              }
            }

            // Fallback: check content for base64
            if (message && message.content) {
              const content = message.content;
              if (typeof content === 'string') {
                const base64Match = content.match(/data:image\/[^;]+;base64,[A-Za-z0-9+/=]+/);
                if (base64Match) {
                  console.log(`  Found base64 image in content`);
                  resolve(base64Match[0]);
                  return;
                }
              }
            }

            console.log(`  No image found in response`);
          }

          resolve(null);
        } catch (e) {
          console.log(`  Parse error: ${e}`);
          console.log(`  Raw: ${data.substring(0, 300)}`);
          resolve(null);
        }
      });
    });

    req.on('error', (e) => {
      console.log(`  Request error: ${e.message}`);
      resolve(null);
    });

    req.write(requestBody);
    req.end();
  });
}

async function downloadImage(url: string, filepath: string): Promise<boolean> {
  if (url.startsWith('data:')) {
    const base64Data = url.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));
    console.log(`  Saved: ${filepath}`);
    return true;
  }

  return new Promise((resolve) => {
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          https.get(redirectUrl, (redirectResponse) => {
            redirectResponse.pipe(file);
            file.on('finish', () => {
              file.close();
              console.log(`  Saved: ${filepath}`);
              resolve(true);
            });
          });
        } else {
          resolve(false);
        }
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`  Saved: ${filepath}`);
        resolve(true);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.log(`  Download error: ${err.message}`);
      resolve(false);
    });
  });
}

async function main() {
  console.log('='.repeat(50));
  console.log('AI Background Image Generator');
  console.log('Using OpenRouter with Gemini 2.5 Flash');
  console.log('='.repeat(50));

  const outputDir = path.join(__dirname, '..', 'public', 'images', 'backgrounds');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`\nCreated: ${outputDir}`);
  }

  let successCount = 0;

  for (const prompt of imagePrompts) {
    const imageUrl = await generateImage(prompt);

    if (imageUrl) {
      const filepath = path.join(outputDir, `${prompt.name}.png`);
      const success = await downloadImage(imageUrl, filepath);
      if (success) successCount++;
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  console.log('\n' + '='.repeat(50));
  console.log(`Complete! Generated ${successCount}/${imagePrompts.length} images`);
  console.log('='.repeat(50));
}

main().catch(console.error);
