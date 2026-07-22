import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { CustomWorld } from './world';
import { browserConfig, contextConfig } from '../../config/playwright.config';

let browser: Browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: browserConfig.headless });
});

Before(async function (this: CustomWorld) {
  this.browser = browser;
  this.context = await browser.newContext(contextConfig);
  this.page = await this.context.newPage();
  this.page.setDefaultTimeout(browserConfig.timeout);
});

After(async function (this: CustomWorld, { result }) {
  if (result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser?.close();
});
