import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  // Access to the website.
  await page.goto('https://olivierlam.fr/index2.html');

  // Expect title to containt Salut ! Je suis Olivier Lam
  await expect(page.getByRole('heading', { name: 'Salut ! Je suis Olivier Lam' })).toBeVisible();
});
