import { test, expect } from '@playwright/test';

test('페이지가 정상적으로 로드된다', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/portfolio/i);
});

test('반응형 레이아웃 확인 (모바일)', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await expect(page.locator('body')).toBeVisible();
});
