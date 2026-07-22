import { Page } from '@playwright/test';

export async function waitForUrlContains(page: Page, substring: string, timeout = 10000): Promise<void> {
  await page.waitForURL((url) => url.toString().includes(substring), { timeout });
}
