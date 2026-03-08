const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const baseUrl = 'http://localhost:3000';
  const screenshotDir = path.join(__dirname, 'screenshots');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);

  console.log('📸 Starting comprehensive screenshot capture...\n');

  // Set desktop viewport
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(baseUrl, { waitUntil: 'networkidle' });

  // Wait for images to load
  await page.waitForTimeout(2000);

  // Scroll through page to trigger lazy loading
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if(totalHeight >= scrollHeight){
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });

  await page.waitForTimeout(1000);

  // FULL PAGE SCREENSHOT
  console.log('📄 Capturing full-page screenshots...\n');
  const fullPagePath = path.join(screenshotDir, `homepage-desktop-complete-${timestamp}.png`);
  await page.screenshot({
    path: fullPagePath,
    fullPage: true
  });
  console.log(`✓ Desktop full-page: ${path.basename(fullPagePath)}\n`);

  // SECTION BY SECTION with scrolling
  console.log('🎯 Capturing individual sections...\n');

  const sectionData = [
    {
      name: '1-hero',
      description: 'Hero Section (2-column: text left, headshot right)',
      selector: 'section:nth-of-type(1)'
    },
    {
      name: '2-service-cards',
      description: '"What brings you in?" service cards with images',
      selector: 'section:nth-of-type(2)'
    },
    {
      name: '3-doctor-intro',
      description: '"Chris Sales, MD" intro (photo left, text right)',
      selector: 'section:nth-of-type(3)'
    },
    {
      name: '4-different-kind',
      description: '"A different kind of eye doctor" (office image left, values right)',
      selector: 'section:nth-of-type(4)'
    },
    {
      name: '5-testimonials',
      description: 'Testimonials section',
      selector: 'section:nth-of-type(5)'
    },
    {
      name: '6-cta',
      description: '"Want to come in?" CTA section',
      selector: 'section:nth-of-type(6)'
    }
  ];

  for (const section of sectionData) {
    try {
      const element = await page.$(section.selector);

      if (element) {
        // Scroll element into view
        await element.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);

        const sectionPath = path.join(screenshotDir, `section-${section.name}-${timestamp}.png`);
        await element.screenshot({ path: sectionPath });

        console.log(`✓ Section ${section.name}`);
        console.log(`  ${section.description}`);
        console.log(`  Screenshot: ${path.basename(sectionPath)}\n`);
      } else {
        console.log(`⚠ Section ${section.name} not found\n`);
      }
    } catch (error) {
      console.log(`❌ Error capturing ${section.name}: ${error.message}\n`);
    }
  }

  // MOBILE VIEW
  console.log('📱 Capturing mobile view (375px)...\n');
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(1000);

  // Scroll through mobile page
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if(totalHeight >= scrollHeight){
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });

  await page.waitForTimeout(1000);

  const mobileFullPath = path.join(screenshotDir, `homepage-mobile-complete-${timestamp}.png`);
  await page.screenshot({
    path: mobileFullPath,
    fullPage: true
  });
  console.log(`✓ Mobile full-page: ${path.basename(mobileFullPath)}\n`);

  // TABLET VIEW
  console.log('📱 Capturing tablet view (768px)...\n');
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(1000);

  const tabletFullPath = path.join(screenshotDir, `homepage-tablet-complete-${timestamp}.png`);
  await page.screenshot({
    path: tabletFullPath,
    fullPage: true
  });
  console.log(`✓ Tablet full-page: ${path.basename(tabletFullPath)}\n`);

  console.log('✅ All screenshots captured successfully!');
  console.log(`📁 Location: ${screenshotDir}\n`);

  await browser.close();
})();
