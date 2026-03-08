const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const baseUrl = 'http://localhost:3000';
  const screenshotDir = path.join(__dirname, 'screenshots');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);

  console.log('Starting visual test...');
  console.log('Target URL:', baseUrl);
  console.log('Screenshot directory:', screenshotDir);

  // Viewport configurations
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1440, height: 900 }
  ];

  // Navigate to homepage
  console.log('\n📍 Navigating to homepage...');
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500); // Allow animations to complete

  // Capture console logs
  const consoleLogs = [];
  page.on('console', msg => {
    consoleLogs.push({
      type: msg.type(),
      text: msg.text()
    });
  });

  // Capture network requests
  const networkFailures = [];
  const slowRequests = [];

  page.on('response', response => {
    if (response.status() >= 400) {
      networkFailures.push({
        url: response.url(),
        status: response.status()
      });
    }
  });

  // Test each viewport
  for (const viewport of viewports) {
    console.log(`\n📱 Testing ${viewport.name} viewport (${viewport.width}x${viewport.height})`);

    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.waitForTimeout(500); // Allow layout to stabilize

    // Full page screenshot
    const fullPagePath = path.join(screenshotDir, `homepage-${viewport.name}-fullpage-${timestamp}.png`);
    await page.screenshot({
      path: fullPagePath,
      fullPage: true
    });
    console.log(`  ✓ Full page screenshot: ${path.basename(fullPagePath)}`);

    // Section-specific screenshots
    const sections = [
      { name: 'hero', selector: 'section:first-of-type, .hero, main > div:first-child' },
      { name: 'service-cards', selector: '[class*="service"], [class*="bring"]' },
      { name: 'doctor-intro', selector: '[class*="chris-sales"], [class*="doctor"]' },
      { name: 'different-kind', selector: '[class*="different"]' },
      { name: 'testimonials', selector: '[class*="testimonial"]' },
      { name: 'cta', selector: '[class*="cta"], section:last-of-type' }
    ];

    for (const section of sections) {
      try {
        // Try to find the section by various selectors
        const selectors = section.selector.split(',').map(s => s.trim());
        let element = null;

        for (const sel of selectors) {
          try {
            element = await page.$(sel);
            if (element) break;
          } catch (e) {
            // Continue to next selector
          }
        }

        if (element) {
          const sectionPath = path.join(screenshotDir, `homepage-${viewport.name}-${section.name}-${timestamp}.png`);
          await element.screenshot({ path: sectionPath });
          console.log(`  ✓ ${section.name} section: ${path.basename(sectionPath)}`);
        }
      } catch (error) {
        console.log(`  ⚠ Could not capture ${section.name} section: ${error.message}`);
      }
    }
  }

  // Output console logs
  console.log('\n📋 Console Activity:');
  const errors = consoleLogs.filter(l => l.type === 'error');
  const warnings = consoleLogs.filter(l => l.type === 'warning');

  if (errors.length > 0) {
    console.log(`  ❌ ${errors.length} errors found:`);
    errors.forEach(e => console.log(`     - ${e.text}`));
  } else {
    console.log('  ✓ No console errors');
  }

  if (warnings.length > 0) {
    console.log(`  ⚠ ${warnings.length} warnings found:`);
    warnings.forEach(w => console.log(`     - ${w.text}`));
  }

  // Output network failures
  if (networkFailures.length > 0) {
    console.log('\n🌐 Network Failures:');
    networkFailures.forEach(f => console.log(`  ❌ ${f.status}: ${f.url}`));
  } else {
    console.log('\n🌐 Network: All requests successful');
  }

  console.log('\n✅ Visual test complete!');

  await browser.close();
})();
