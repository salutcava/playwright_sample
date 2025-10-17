import { test, expect } from '@playwright/test';

test('Simple login test', async ({ page }) => {
  await page.goto('https://salutcava.github.io/playwright_sample_site/');
  await expect(page.getByRole('heading', { name: 'Entrez vos identifiants pour continuer' })).toBeVisible();

  const loginButton = page.getByRole('button', { name: 'Se connecter' });
  await expect(loginButton).toBeVisible();
  await expect(loginButton).toBeEnabled();
  await loginButton.click();
  
  await expect(page.getByText('Bienvenue Olivier')).toBeVisible();
});
