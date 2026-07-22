import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { ExpectedMessages } from '../data/testData';

Then('the cart should contain {string}', async function (this: CustomWorld, productName: string) {
  expect(await this.cartPage.getItemNames()).toContain(productName);
});

When('I remove {string} from the cart page', async function (this: CustomWorld, productName: string) {
  await this.cartPage.removeItemByName(productName);
});

Then('the cart should be empty', async function (this: CustomWorld) {
  expect(await this.cartPage.getItemCount()).toBe(0);
});

When('I click continue shopping', async function (this: CustomWorld) {
  await this.cartPage.continueShopping();
});

Then('I should be on the checkout information page', async function (this: CustomWorld) {
  expect(await this.checkoutPage.getTitle()).toBe(ExpectedMessages.checkoutStepOneTitle);
});
