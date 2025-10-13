import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  // Access to the website.
  await page.goto('https://olivierlam.fr/index2.html');

  // Expects page to have a heading with Olivier LAM.
  await expect(page.getByRole('heading', { name: 'Olivier LAM' })).toBeVisible();
});
