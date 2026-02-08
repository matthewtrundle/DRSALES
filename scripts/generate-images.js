const fs = require('fs');
const path = require('path');
const https = require('https');

const OPENROUTER_API_KEY = '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';

const imagesToGenerate = [
  // Hero images
  { path: 'hero/cataract-hero.jpg', prompt: 'Professional medical photography of a modern ophthalmology clinic consultation room, patient and doctor discussing treatment, soft warm lighting, clean white and blue color scheme, welcoming medical professional setting, high quality photorealistic' },
  { path: 'hero/corneal-transplant-hero.jpg', prompt: 'Close-up artistic photograph of a healthy human eye with beautiful blue iris detail, soft lighting from the side, medical professional quality, clean background, represents corneal health and clarity, photorealistic portrait' },
  { path: 'hero/iris-hero.jpg', prompt: 'Stunning macro photograph of a human iris showing intricate green and brown patterns, professional medical photography, beautiful natural detail, soft diffused lighting, photorealistic' },
  { path: 'hero/ocular-surface-hero.jpg', prompt: 'Professional photograph of advanced corneal imaging equipment in a modern eye clinic with patient, soft blue ambient lighting, clean medical environment, high-tech ophthalmology setting, photorealistic' },
  { path: 'hero/vision-correction-hero.jpg', prompt: 'Modern LASIK surgery suite with advanced laser equipment and monitor displays, professional medical photography, blue accent lighting, clean sterile environment, cutting-edge vision correction technology, photorealistic' },

  // Procedure images
  { path: 'procedures/lasik.jpg', prompt: 'Close-up of LASIK laser eye surgery equipment with blue laser beam, modern medical technology, professional ophthalmology setting, clean and precise environment, photorealistic medical photography' },
  { path: 'procedures/prk.jpg', prompt: 'Professional photograph of PRK eye surgery laser equipment, medical technology with soft blue lighting, clean surgical environment, photorealistic' },
  { path: 'procedures/icl.jpg', prompt: 'Medical illustration showing implantable collamer lens inside an eye, anatomical cross-section view, soft blue and white tones, professional medical visualization, educational and clean' },
  { path: 'procedures/dmek.jpg', prompt: 'Surgical microscope view of corneal transplant procedure, precision microsurgery, delicate tissue handling, professional medical photography, blue surgical lighting, photorealistic' },
  { path: 'procedures/dsaek.jpg', prompt: 'Close-up photograph of corneal graft tissue being prepared for transplant surgery, medical laboratory setting, precise surgical instruments, professional lighting, photorealistic' },
  { path: 'procedures/dalk.jpg', prompt: 'Operating microscope view during anterior lamellar keratoplasty, precision corneal surgery, surgical instruments visible, clean medical environment, photorealistic' },
  { path: 'procedures/pk.jpg', prompt: 'Penetrating keratoplasty surgical setup with donor corneal tissue and trephine, surgical microscope, blue surgical drape, sterile environment, photorealistic medical photography' },
  { path: 'procedures/crosslinking.jpg', prompt: 'Corneal collagen crosslinking procedure showing UV light treatment of cornea with riboflavin, blue UV glow on eye, modern ophthalmology equipment, professional medical setting, photorealistic' },
  { path: 'procedures/cataract-lens.jpg', prompt: 'Close-up photograph of premium intraocular lens implant for cataract surgery, crystal clear foldable lens on fingertip, soft lighting, professional medical product photography, photorealistic' },
  { path: 'procedures/corneal-surgery.jpg', prompt: 'Surgeon performing microsurgery through operating microscope, hands with surgical instruments, professional medical photography, soft blue ambient lighting, photorealistic' },
  { path: 'procedures/lasik-technology.jpg', prompt: 'State-of-the-art wavefront LASIK laser system with computer displays showing eye mapping, modern eye surgery suite, blue accent lighting, professional equipment photography, photorealistic' },
  { path: 'procedures/iris-prosthesis.jpg', prompt: 'Custom prosthetic iris implant showing natural color matching with blue iris pattern, medical device on clean white background, professional product photography, photorealistic' },
  { path: 'procedures/iris-surgery.jpg', prompt: 'Iris reconstruction surgery under operating microscope, delicate surgical repair of iris tissue, microsurgical instruments, clean medical environment, photorealistic' },
  { path: 'procedures/iris-repair.jpg', prompt: 'Detailed microsurgical view of iris suturing technique, fine surgical needles and sutures, operating microscope magnification, professional medical photography, photorealistic' },
  { path: 'procedures/prosthetic-iris.jpg', prompt: 'Collection of custom colored prosthetic iris implants in blue, brown, and green, medical devices on clean white surface, professional product photography, photorealistic' },

  // Technology images
  { path: 'technology/cataract-equipment.jpg', prompt: 'Modern phacoemulsification cataract surgery machine in operating room, advanced medical technology with digital displays, professional equipment photography, soft blue lighting, photorealistic' },
  { path: 'technology/corneal-imaging.jpg', prompt: 'Advanced corneal topography machine scanning patient eye with colorful diagnostic display, high-tech diagnostic equipment, modern ophthalmology clinic, photorealistic' },
  { path: 'technology/laser-equipment.jpg', prompt: 'Excimer laser system for LASIK surgery with patient positioning bed, modern medical technology, professional equipment photography, blue accent lighting, photorealistic' },
  { path: 'technology/slit-lamp-exam.jpg', prompt: 'Doctor examining patient eye with slit lamp biomicroscope, comprehensive eye examination, bright examination light, professional medical photography, photorealistic' },

  // Lifestyle images
  { path: 'lifestyle/active-lifestyle.jpg', prompt: 'Happy middle-aged woman hiking outdoors with clear mountain view, enjoying nature without glasses, bright sunny day, represents freedom from vision correction, lifestyle photography, photorealistic' },
  { path: 'lifestyle/clear-cornea.jpg', prompt: 'Beautiful close-up portrait of woman with healthy clear blue eyes, soft natural window lighting, represents successful eye treatment, professional portrait photography, photorealistic' },
  { path: 'lifestyle/clear-vision-lifestyle.jpg', prompt: 'Professional woman working on laptop in modern office without glasses, comfortable workspace, clear vision lifestyle, soft natural lighting, photorealistic' },
  { path: 'lifestyle/eye-closeup.jpg', prompt: 'Stunning macro photograph of beautiful healthy human eye with blue-green iris, detailed iris patterns, clear cornea, soft professional studio lighting, photorealistic' },
  { path: 'lifestyle/healthy-eyes.jpg', prompt: 'Portrait of smiling man with bright healthy brown eyes, confident expression, soft natural lighting, represents eye health and wellness, professional portrait photography, photorealistic' },

  // Condition images
  { path: 'conditions/fuchs-dystrophy.jpg', prompt: 'Medical illustration of cornea showing Fuchs endothelial dystrophy with cloudy cornea and damaged endothelial cells, educational anatomical diagram, soft blue tones, professional medical visualization' },
  { path: 'conditions/keratoconus.jpg', prompt: 'Medical illustration showing keratoconus with cone-shaped bulging cornea compared to normal eye, cross-section anatomical view, educational diagram, professional medical visualization, blue tones' },
  { path: 'conditions/dry-eye.jpg', prompt: 'Medical illustration showing dry eye syndrome with disrupted tear film and irritated eye surface, educational anatomical diagram, professional medical visualization, soft blue and red tones' },
  { path: 'conditions/pterygium.jpg', prompt: 'Clinical photograph showing pterygium growth on eye surface extending onto cornea, medical documentation style, educational ophthalmology photography, clear detail, photorealistic' },

  // Results images
  { path: 'results/iris-before.jpg', prompt: 'Clinical photograph of eye with traumatic iris defect showing missing iris tissue and visible lens, medical documentation, professional lighting, shows condition requiring treatment, photorealistic' },
  { path: 'results/iris-after.jpg', prompt: 'Clinical photograph of same eye after successful iris reconstruction with prosthetic implant, natural blue iris appearance restored, medical documentation, excellent surgical outcome, photorealistic' },
];

function generateImage(imageConfig) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: 'google/gemini-2.5-flash-image',
      messages: [{
        role: 'user',
        content: `Generate a high-quality professional image for a medical ophthalmology website: ${imageConfig.prompt}. The image should inspire confidence and trust.`
      }]
    });

    const req = https.request({
      hostname: 'openrouter.ai',
      path: '/api/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://dr-sales-ophthalmology.com',
        'X-Title': 'Dr Sales Ophthalmology Website'
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          if (response.error) {
            reject(new Error(response.error.message));
            return;
          }

          // Extract base64 image from response
          const images = response.choices?.[0]?.message?.images;
          if (images && images.length > 0) {
            const imageUrl = images[0].image_url?.url;
            if (imageUrl && imageUrl.startsWith('data:image')) {
              const base64Data = imageUrl.split(',')[1];
              resolve(base64Data);
            } else {
              reject(new Error('No valid image data in response'));
            }
          } else {
            reject(new Error('No images in response'));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${e.message}`));
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(120000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    req.write(data);
    req.end();
  });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const baseDir = path.join(__dirname, '../public/images');

  console.log(`Starting image generation for ${imagesToGenerate.length} images...\\n`);

  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < imagesToGenerate.length; i++) {
    const img = imagesToGenerate[i];
    const outputPath = path.join(baseDir, img.path);
    const outputDir = path.dirname(outputPath);

    // Ensure directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Skip if file already exists
    if (fs.existsSync(outputPath)) {
      console.log(`[${i + 1}/${imagesToGenerate.length}] SKIP: ${img.path} (already exists)`);
      skipped++;
      continue;
    }

    console.log(`[${i + 1}/${imagesToGenerate.length}] Generating: ${img.path}`);

    try {
      const base64Data = await generateImage(img);

      // Convert to buffer and save
      const buffer = Buffer.from(base64Data, 'base64');

      // Save as PNG (the API returns PNG), but we'll use the .jpg extension in the filename
      // The file will actually be PNG format but Next.js Image component handles this fine
      fs.writeFileSync(outputPath, buffer);

      console.log(`    ✓ Saved: ${img.path} (${Math.round(buffer.length / 1024)}KB)`);
      generated++;

      // Rate limiting - wait between requests
      if (i < imagesToGenerate.length - 1) {
        await sleep(3000);
      }
    } catch (error) {
      console.error(`    ✗ Error: ${error.message}`);
      failed++;

      // Wait longer on error (might be rate limited)
      await sleep(5000);
    }
  }

  console.log(`\\n========================================`);
  console.log(`Generation complete!`);
  console.log(`  Generated: ${generated}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Failed: ${failed}`);
  console.log(`========================================`);
}

main().catch(console.error);
