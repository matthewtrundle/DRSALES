const fs = require('fs');
const path = require('path');

// OpenRouter API configuration
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = 'google/gemini-3.1-flash-image-preview';
const MAX_RETRIES = 5;
const INITIAL_DELAY = 10000; // 10 seconds
const DELAY_BETWEEN_IMAGES = 15000; // 15 seconds between each image

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const imagesToGenerate = [
  {
    outputPath: '../public/images/cloudy-vision.png',
    prompt: 'Warm ophthalmology consultation room, patient and doctor discussing treatment, soft natural window light, cream walls and gold accents, welcoming bakery-like atmosphere, professional but inviting. Photorealistic, high quality.'
  },
  {
    outputPath: '../public/images/glasses-freedom.png',
    prompt: 'Pair of reading glasses set down on light oak wooden table next to ceramic coffee cup, warm morning sunlight streaming through window, whites and soft gold tones, cozy bakery cafe aesthetic. Photorealistic, high quality.'
  },
  {
    outputPath: '../public/images/dry-eye.png',
    prompt: 'Premium eye drops bottle on clean white marble countertop, soft golden ambient light, spa-like peaceful wellness setting, whites and warm cream tones, inviting not clinical. Photorealistic, high quality.'
  }
];

async function generateImage(prompt, outputPath, retryCount = 0) {
  console.log(`\nGenerating: ${path.basename(outputPath)}${retryCount > 0 ? ` (retry ${retryCount}/${MAX_RETRIES})` : ''}`);
  console.log(`Prompt: ${prompt.substring(0, 80)}...`);

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://drsalesmd.com',
        'X-Title': 'Dr Sales Website Image Generation'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: 'user',
            content: `Generate an image: ${prompt}`
          }
        ],
        // Image generation config
        response_format: { type: 'image' },
        image_config: {
          aspect_ratio: '16:9'
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      // Check for rate limiting
      if (response.status === 429 && retryCount < MAX_RETRIES) {
        const delay = INITIAL_DELAY * Math.pow(2, retryCount);
        console.log(`⏳ Rate limited. Waiting ${delay/1000}s before retry...`);
        await sleep(delay);
        return generateImage(prompt, outputPath, retryCount + 1);
      }
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    // Extract base64 image from response
    if (data.choices && data.choices[0]?.message?.content) {
      const content = data.choices[0].message.content;

      // Handle different response formats
      let imageData = null;

      if (typeof content === 'string') {
        // If it's a base64 string directly
        if (content.startsWith('data:image')) {
          imageData = content.split(',')[1];
        } else if (content.match(/^[A-Za-z0-9+/=]+$/)) {
          imageData = content;
        }
      } else if (Array.isArray(content)) {
        // If it's an array with image parts
        for (const part of content) {
          if (part.type === 'image' && part.image) {
            imageData = part.image;
            break;
          }
          if (part.type === 'image_url' && part.image_url?.url) {
            const url = part.image_url.url;
            if (url.startsWith('data:image')) {
              imageData = url.split(',')[1];
            }
            break;
          }
        }
      }

      if (imageData) {
        const resolvedPath = path.resolve(__dirname, outputPath);
        fs.writeFileSync(resolvedPath, Buffer.from(imageData, 'base64'));
        console.log(`✓ Saved to: ${resolvedPath}`);
        return true;
      } else {
        console.log('Response content:', JSON.stringify(content).substring(0, 500));
        throw new Error('Could not extract image data from response');
      }
    } else {
      console.log('Full response:', JSON.stringify(data).substring(0, 500));
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error(`✗ Error generating ${path.basename(outputPath)}:`, error.message);
    return false;
  }
}

async function main() {
  if (!OPENROUTER_API_KEY) {
    console.error('Error: OPENROUTER_API_KEY environment variable is required');
    console.log('Usage: OPENROUTER_API_KEY=sk-or-v1-... node generate-warm-images.js');
    process.exit(1);
  }

  console.log('='.repeat(60));
  console.log('Dr. Sales Website - Warm Image Generation');
  console.log('='.repeat(60));
  console.log(`Model: ${MODEL}`);
  console.log(`Images to generate: ${imagesToGenerate.length}`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < imagesToGenerate.length; i++) {
    const img = imagesToGenerate[i];
    const result = await generateImage(img.prompt, img.outputPath);
    if (result) {
      success++;
    } else {
      failed++;
    }
    // Wait between images to avoid rate limiting
    if (i < imagesToGenerate.length - 1) {
      console.log(`\n⏳ Waiting ${DELAY_BETWEEN_IMAGES/1000}s before next image...`);
      await sleep(DELAY_BETWEEN_IMAGES);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`Complete: ${success} succeeded, ${failed} failed`);
  console.log('='.repeat(60));
}

main();
