import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('link', { name: 'Go to the Eco-Friendly Water' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Go to the Wireless Noise-' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Go to the Smart Fitness' })).toBeVisible();
  await page.getByRole('link', { name: 'Go to the Eco-Friendly Water' }).click();
  await expect(page.getByRole('img', { name: 'Eco-Friendly Water Bottle' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Eco-Friendly Water Bottle' })).toBeVisible();
  await expect(page.getByText('A durable and stylish water')).toBeVisible();
  await expect(page.getByText('€')).toBeVisible();
  await page.getByRole('link', { name: 'Come back to the product list' }).click();
});