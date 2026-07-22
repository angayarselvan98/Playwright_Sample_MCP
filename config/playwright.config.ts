import { ENV } from '../src/data/constants';
import { defineConfig } from '@playwright/test';

export const browserConfig = {
  headless: ENV.HEADLESS,
  timeout: ENV.DEFAULT_TIMEOUT,
};

export const contextConfig = {
  viewport: { width: 1280, height: 720 },
  ignoreHTTPSErrors: true,
};

export default defineConfig({
  reporter: [
    ['list'], // shows results in terminal too
    ['allure-playwright', {
      resultsDir: 'allure-results', // raw result files go here
      detail: true,
      suiteTitle: true,
    }],
  ],
  // ... rest of your config
});