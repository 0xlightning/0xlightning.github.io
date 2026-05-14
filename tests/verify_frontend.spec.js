const { test, expect } = require('@playwright/test');
const path = require('path');

test('verify portfolio sections', async ({ page }) => {
  await page.goto('file://' + path.join(process.cwd(), 'index.html'));

  // Wait for animations
  await page.waitForTimeout(2000);

  // Check Strategy section
  const strategy = page.locator('#strategy');
  await expect(strategy).toBeVisible();
  await strategy.scrollIntoViewIfNeeded();
  await strategy.screenshot({ path: 'strategy.png' });

  // Check Skills section
  const skills = page.locator('#skills');
  await expect(skills).toBeVisible();
  await skills.scrollIntoViewIfNeeded();
  await skills.screenshot({ path: 'skills.png' });

  // Check Contact section (for badges)
  const contact = page.locator('#contact');
  await expect(contact).toBeVisible();
  await contact.scrollIntoViewIfNeeded();
  await contact.screenshot({ path: 'contact.png' });
});
