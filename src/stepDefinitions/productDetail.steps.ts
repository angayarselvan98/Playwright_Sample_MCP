import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

When('I open the product {string}', async function (this: CustomWorld, productName: string) {
  await this.inventoryPage.openProductByName(productName);
});

Then('I should see the product detail page for {string}', async function (this: CustomWorld, productName: string) {
  expect(await this.productDetailPage.getProductName()).toBe(productName);
});

When('I click the back to products button', async function (this: CustomWorld) {
  await this.productDetailPage.goBackToProducts();
});

When('I add the product to the cart from the detail page', async function (this: CustomWorld) {
  await this.productDetailPage.addToCart();
});
