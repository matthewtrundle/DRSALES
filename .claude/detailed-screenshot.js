const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const baseUrl = 'http://localhost:3000';
  const screenshotDir = path.join(__dirname, 'screenshots');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);

  console.log('Starting detailed section capture...');

  // Set desktop viewport
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Get page structure
  console.log('\n📋 Page Structure Analysis:');

  const sections = await page.$$('section, main > div');
  console.log(`Found ${sections.length} sections/divs`);

  // Capture each section
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    // Get section info
    const boundingBox = await section.boundingBox();
    const tagName = await section.evaluate(el => el.tagName);
    const className = await section.evaluate(el => el.className);
    const textContent = await section.evaluate(el => el.textContent?.substring(0, 100));

    console.log(`\nSection ${i + 1}:`);
    console.log(`  Tag: ${tagName}`);
    console.log(`  Class: ${className || '(none)'}`);
    console.log(`  Text preview: ${textContent?.trim() || '(empty)'}`);

    if (boundingBox) {
      console.log(`  Position: x=${Math.round(boundingBox.x)}, y=${Math.round(boundingBox.y)}`);
      console.log(`  Size: ${Math.round(boundingBox.width)}x${Math.round(boundingBox.height)}`);

      // Capture screenshot
      const sectionPath = path.join(screenshotDir, `section-${i + 1}-${timestamp}.png`);
      await section.screenshot({ path: sectionPath });
      console.log(`  ✓ Screenshot: ${path.basename(sectionPath)}`);
    } else {
      console.log(`  ⚠ No bounding box (invisible or zero-size)`);
    }
  }

  // Check for all images on page
  console.log('\n🖼️  Images on page:');
  const images = await page.$$('img');
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const src = await img.getAttribute('src');
    const alt = await img.getAttribute('alt');
    const naturalWidth = await img.evaluate(el => el.naturalWidth);
    const naturalHeight = await img.evaluate(el => el.naturalHeight);
    const complete = await img.evaluate(el => el.complete);

    console.log(`\nImage ${i + 1}:`);
    console.log(`  Src: ${src}`);
    console.log(`  Alt: ${alt || '(none)'}`);
    console.log(`  Size: ${naturalWidth}x${naturalHeight}`);
    console.log(`  Loaded: ${complete}`);
  }

  // Get console logs
  const logs = [];
  page.on('console', msg => logs.push({ type: msg.type(), text: msg.text() }));

  // Take one more look at the full HTML structure
  console.log('\n📄 Main content structure:');
  const mainHTML = await page.evaluate(() => {
    const main = document.querySelector('main');
    if (!main) return 'No <main> element found';

    const children = Array.from(main.children);
    return children.map((child, i) => {
      return `${i + 1}. <${child.tagName.toLowerCase()}> class="${child.className}" - ${child.textContent?.substring(0, 50) || '(empty)'}`;
    }).join('\n');
  });
  console.log(mainHTML);

  await browser.close();
  console.log('\n✅ Detailed analysis complete!');
})();
